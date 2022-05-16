// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ExposureT } from '@darwinia/types/interfaces';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { memo } from '@polkadot/api-derive/util';
import { Option, Vec } from '@polkadot/types';
import { AccountId, Keys, Nominations, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces';
import { DarwiniaStakingStructsStakingLedger } from '@polkadot/types/lookup';
import { ITuple } from '@polkadot/types/types';

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

function retrieveController (
  api: ApiInterfaceRx,
  stashId: AccountId,
  queuedKeys: Vec<ITuple<[AccountId, Keys]>>,
  [controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, nextKeys, exposure]: MultiResult
): Observable<DeriveStakingQuery> {
  const controllerId = controllerIdOpt.unwrapOr(null);

  return controllerId
    ? api.query.staking.ledger<Option<DarwiniaStakingStructsStakingLedger>>(controllerId).pipe(
      map((stakingLedgerOpt: Option<DarwiniaStakingStructsStakingLedger>): DeriveStakingQuery =>
        ({
          accountId: stashId,
          controllerId,
          exposure,
          nominators: nominatorsOpt.isSome ? nominatorsOpt.unwrap().targets : [],
          stakingLedger: stakingLedgerOpt.unwrapOrDefault(),
          stashId,
          validatorPrefs: Array.isArray(validatorPrefs) ? validatorPrefs[0] : validatorPrefs,
          ...unwrapSessionIds(stashId, queuedKeys, nextKeys),
          rewardDestination
        }))
    )
    : of(
      { accountId: stashId,
        controllerId: null,
        nextSessionIds: [],
        nominators: [],
        rewardDestination,
        sessionIds: [],

        stakingLedger: api.registry.createType<DarwiniaStakingStructsStakingLedger>('DarwiniaStakingStructsStakingLedger'),
        stashId,
        validatorPrefs: Array.isArray(validatorPrefs) ? validatorPrefs[0] : validatorPrefs }
    );
}

export function queryWithQueued (
  instanceId: string,
  api: ApiInterfaceRx
): (accountId: Uint8Array | string, queuedKeys: Vec<ITuple<[AccountId, Keys]>>) => Observable<DeriveStakingQuery> {
  return memo(
    instanceId,
    (accountId: Uint8Array | string, queuedKeys: Vec<ITuple<[AccountId, Keys]>>): Observable<DeriveStakingQuery> => {
      const stashId: AccountId = api.registry.createType('AccountId', accountId);

      return retrieveCurr(api, stashId).pipe(
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
              /* eslint-disable @typescript-eslint/no-unsafe-return,
              @typescript-eslint/no-unsafe-call,
              @typescript-eslint/no-unsafe-member-access,
              @typescript-eslint/no-explicit-any */
              accountIds.map((acc) => (api.derive.staking as unknown as any).queryWithQueued(acc, queuedKeys))
            )
          )
        )
        : of([])
  );
}
