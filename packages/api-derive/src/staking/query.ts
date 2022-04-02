// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExposureT, StakingLedgerT } from '../../../types/src';
import { memo } from '@polkadot/api-derive/util';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, Vec } from '@polkadot/types';
import { AccountId, Keys, Nominations, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { DeriveStakingQuery } from './types';

type MultiResult = [
  Option<AccountId>,
  Option<Nominations>,
  RewardDestination,
  ITuple<[ValidatorPrefs]> | ValidatorPrefs,
  Option<Keys>,
  ExposureT
];

function unwrapSessionIds (
  stashId: AccountId,
  queuedKeys: [AccountId, Keys][],
  nextKeys: Option<Keys>
): { nextSessionIds: AccountId[]; sessionIds: AccountId[] } {
  const sessionIds = (queuedKeys.find(([currentId]): boolean => currentId.eq(stashId)) || [
    undefined,
    [] as AccountId[]
  ])[1];
  const nextSessionIds = nextKeys.unwrapOr([] as AccountId[]);

  return {
    nextSessionIds,
    sessionIds
  };
}

function retrieveCurr (api: ApiInterfaceRx, stashId: AccountId): Observable<MultiResult> {
  return api.derive.session
    .indexes()
    .pipe(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      switchMap(({ activeEra }) =>
        api.queryMulti<MultiResult>([
          [api.query.staking.bonded, stashId],
          [api.query.staking.nominators, stashId],
          [api.query.staking.payee, stashId],
          [api.query.staking.validators, stashId],
          api.consts.session?.dedupKeyPrefix
            ? [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]]
            : [api.query.session.nextKeys, stashId],
          [api.query.staking.erasStakers, [activeEra, stashId]]
        ])
      )
    );
}

function retrievePrev (api: ApiInterfaceRx, stashId: AccountId): Observable<MultiResult> {
  return api.queryMulti<MultiResult>([
    [api.query.staking.bonded, stashId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.validators, stashId],
    [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]],
    [api.query.staking.stakers, stashId]
  ]);
}

function retrieveController (
  api: ApiInterfaceRx,
  stashId: AccountId,
  queuedKeys: Vec<ITuple<[AccountId, Keys]>>,
  [controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, nextKeys, exposure]: MultiResult
): Observable<DeriveStakingQuery> {
  const controllerId = controllerIdOpt.unwrapOr(null);
  // const nominators = nominatorsOpt.unwrapOr(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return controllerId
    ? api.query.staking.ledger(controllerId).pipe(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      map(
        (stakingLedgerOpt: Option<StakingLedgerT>): DeriveStakingQuery => ({
          accountId: stashId,
          controllerId,
          exposure,
          nominators: nominatorsOpt.isSome ? nominatorsOpt.unwrap().targets : [],
          rewardDestination,
          stakingLedger: stakingLedgerOpt.unwrapOrDefault(),
          stashId,
          validatorPrefs: Array.isArray(validatorPrefs) ? validatorPrefs[0] : validatorPrefs,
          ...unwrapSessionIds(stashId, queuedKeys, nextKeys)
        })
      )
    )
    // eslint-disable-next-line sort-keys
    : of({ accountId: stashId, nextSessionIds: [], sessionIds: [], nominators: [] });
}

export function queryWithQueued (
  instanceId: string,
  api: ApiInterfaceRx
): (accountId: Uint8Array | string, queuedKeys: Vec<ITuple<[AccountId, Keys]>>) => Observable<DeriveStakingQuery> {
  return memo(
    instanceId,
    (accountId: Uint8Array | string, queuedKeys: Vec<ITuple<[AccountId, Keys]>>): Observable<DeriveStakingQuery> => {
      const stashId: AccountId = api.registry.createType('AccountId', accountId);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return (api.query.staking.erasStakers ? retrieveCurr(api, stashId) : retrievePrev(api, stashId)).pipe(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        switchMap((result): Observable<DeriveStakingQuery> => retrieveController(api, stashId, queuedKeys, result))
      );
    }
  );
}

export function queryMulti (
  instanceId: string,
  api: ApiInterfaceRx
): (accountIds: (Uint8Array | string)[]) => Observable<DeriveStakingQuery[]> {
  return memo(
    instanceId,
    (accountIds: (Uint8Array | string)[]): Observable<DeriveStakingQuery[]> =>
      accountIds.length
        ? api.query.session.queuedKeys().pipe(
          switchMap((queuedKeys) =>
            combineLatest(
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              accountIds.map((acc) => (api.derive.staking as unknown as any).queryWithQueued(acc, queuedKeys))
            )
          )
        )
        : of([])
  );
}
