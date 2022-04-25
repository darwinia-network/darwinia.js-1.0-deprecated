// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { StakingLedgerT as StakingLedger } from '../../../types/src';
import { DeriveApi, DeriveUnlocking, DeriveStakingKeys } from '@polkadot/api-derive/types';
import { firstMemo, memo } from '@polkadot/api-derive/util';
import { ApiInterfaceRx } from '@polkadot/api/types';
import type { Balance, BlockNumber } from '@polkadot/types/interfaces';
import { Moment } from '@polkadot/types/interfaces';
import { BN, isUndefined } from '@polkadot/util';
import { Memoized } from '@polkadot/util/types';
import { combineLatest, map, Observable } from 'rxjs';
import { DeriveStakingAccount, DeriveStakingQuery, StakingLock } from './types';

const QUERY_OPTS = {
  withDestination: true,
  withLedger: true,
  withNominations: true,
  // eslint-disable-next-line comma-dangle
  withPrefs: true,
};

// eslint-disable-next-line space-before-function-paren
function redeemableSum(api: ApiInterfaceRx, stakingLedger: StakingLedger | undefined, best: BlockNumber): Balance {
  if (isUndefined(stakingLedger)) {
    return api.registry.createType('Balance');
  }

  return api.registry.createType(
    'Balance',
    stakingLedger.ringStakingLock?.unbondings.reduce((total, { amount, until }): BN => {
      return until.gte(best) ? total.add(amount) : total;
    }, new BN(0)) ?? new BN(0)
  );
}

// eslint-disable-next-line space-before-function-paren
function calculateUnlocking(
  api: ApiInterfaceRx,
  stakingLedger: StakingLedger | undefined,
  best: BlockNumber,
  currencyType: 'ring' | 'kton'
): [DeriveUnlocking[] | undefined, Balance] {
  if (isUndefined(stakingLedger) || !stakingLedger.get(`${currencyType}StakingLock`)) {
    return [undefined, api.registry.createType('Balance', 0)];
  }

  const stakingLock = stakingLedger.get(`${currencyType}StakingLock`) as unknown as StakingLock;
  const unlockingChunks = stakingLock?.unbondings.filter(({ until }) => {
    return until.gt(best);
  });

  if (!unlockingChunks || !unlockingChunks.length) {
    return [undefined, api.registry.createType('Balance', 0)];
  }

  const total = Object.entries(unlockingChunks).reduce((all, [, unbond]) => all.add(unbond.amount), new BN(0));

  return [undefined, api.registry.createType('Balance', total)];
}

function parseResult (api: DeriveApi, best: BlockNumber, now: Moment, query: DeriveStakingQuery): DeriveStakingAccount {
  const stakingLedger = query.stakingLedger as unknown as StakingLedger;
  const calcUnlocking = calculateUnlocking(api, stakingLedger, best, 'ring');
  const calcUnlockingKton = calculateUnlocking(api, stakingLedger, best, 'kton');
  const depositItems = stakingLedger?.depositItems?.filter(({ expireTime }) => expireTime.toBn().gt(now));
  const total = depositItems?.reduce((accumulator: BN, item) => accumulator.add(item.value.toBn()), new BN(0));
  const activeDepositAmount: Balance = api.registry.createType('Balance', total);

  return {
    ...query,
    activeDepositAmount,
    activeDepositItems: depositItems,
    redeemable: redeemableSum(api, stakingLedger, best),
    unlocking: calcUnlocking[0],
    unlockingKton: calcUnlockingKton[0],
    unlockingKtonTotalValue: calcUnlockingKton[1],
    unlockingTotalValue: calcUnlocking[1]
  };
}

/**
 * @description From a list of stashes, fill in all the relevant staking details
 */
export function accounts (instanceId: string, api: DeriveApi) : Memoized<(accountIds:(Uint8Array | string)[]) => Observable<DeriveStakingAccount & DeriveStakingKeys>> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[]) => {
    const keysObs = api.derive.staking.keysMulti(accountIds);
    const queryObs = api.derive.staking.queryMulti(accountIds, QUERY_OPTS);
    const bestObs = api.derive.chain.bestNumber();
    const timestampObs = api.query.timestamp.now();

    return combineLatest([keysObs, queryObs, bestObs, timestampObs]).pipe(
      map(([keys, queries, best, timestamp]) =>
        queries.map((q, index) => ({
          ...parseResult(api, best, timestamp, q as unknown as DeriveStakingQuery),
          ...keys[index]
        }))
      )
    );
  });
}

export const account = firstMemo((api: DeriveApi, accountId: Uint8Array | string) =>
  api.derive.staking.accounts([accountId])
);
