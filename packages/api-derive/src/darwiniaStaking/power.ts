// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/api-augment';

import { BigNumber } from 'bignumber.js';
import { map, Observable, of, switchMap } from 'rxjs';

import { DeriveApi } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';
import { AccountId } from '@polkadot/types/interfaces';
import { Option, u128 } from '@polkadot/types-codec';
import { BN } from '@polkadot/util';

import { DarwiniaStakingStructsStakingLedger, PowerOf } from './types';

const ration = 500_000_000;

function stashPower (api: DeriveApi, accountId: AccountId | string | Uint8Array): Observable<PowerOf> {
  return api.query.staking.bonded(accountId).pipe(
    switchMap(
      (account): Observable<PowerOf> =>
        account.isNone
          ? of({ power: new BN('0') })
          : api.queryMulti<[u128, u128, Option<DarwiniaStakingStructsStakingLedger>]>([api.query.staking.ktonPool, api.query.staking.ringPool, [api.query.staking.ledger, account.unwrap()]]).pipe(
            map(([ktonTotal, ringTotal, ledger]): PowerOf => {
              if (ledger.isNone) {
                return { power: new BN('0') };
              }

              const l = ledger.unwrap();
              const active = new BigNumber(l.active.toString());
              const activeKton = new BigNumber(l.activeKton.toString());

              const ringPower = active.div(ringTotal.toString()).multipliedBy(ration);
              const ktonPower = activeKton.div(ktonTotal.toString()).multipliedBy(ration);

              return { power: new BN(ringPower.plus(ktonPower).toFixed(0).toString()) };
            })
          )
    )
  );
}

/**
 * @name inProcessOrders
 * @return PowerOf
 * @description query account power
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.staking.powerOf(accountId, (powerOf) => {
 *   console.log(`account ${accountId}  staking  power is  ${powerOf.power}`);
 * });
 * ```
 */
export function powerOf (instanceId: string, api: DeriveApi): (accountId: AccountId | string | Uint8Array) => Observable<PowerOf> {
  return memo(instanceId, (accountId: AccountId | string | Uint8Array): Observable<PowerOf> => stashPower(api, accountId));
}
