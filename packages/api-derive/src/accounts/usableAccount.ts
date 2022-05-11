// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, map, of } from 'rxjs';
import { AccountId } from '@polkadot/types/interfaces';
import { memo } from '@polkadot/api-derive/util';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { BN, bnMax } from '@polkadot/util';

import { AccountInfo } from '@darwinia/types';

import { PalletBalancesBalanceLock } from '@polkadot/types/lookup';

import type { Vec } from '@polkadot/types-codec';

import { DeriveUsableAccount, TokenType } from './types';

function systemAccount (api: ApiInterfaceRx, tokenType: TokenType, accountId: AccountId | string | Uint8Array) : Observable<DeriveUsableAccount> {
  if (tokenType !== TokenType.ring && tokenType !== TokenType.kton) {
    return of({ usableBalance: api.registry.createType('Balance', 0) });
  }

  return api.queryMulti<[AccountInfo, Vec<PalletBalancesBalanceLock>, Vec<PalletBalancesBalanceLock>]>([
    [api.query.system.account, accountId],
    [api.query.balances.locks, accountId],
    [api.query.kton.locks, accountId]
  ]).pipe(
    map(([balanceInfo, locks, ktonLocks]): DeriveUsableAccount => {
      const { free, freeKton } = balanceInfo.data;

      let maxlock = new BN(0);
      let balanceFree = api.registry.createType('Balance');

      if (tokenType === TokenType.ring) {
        balanceFree = free;
        locks.forEach((item) => {
          if (!item.reasons.isFee) {
            maxlock = bnMax(item.amount, maxlock);
          }
        }
        );
      } else {
        balanceFree = freeKton;
        ktonLocks.forEach((item) => {
          if (!item.reasons.isFee) {
            maxlock = bnMax(item.amount, maxlock);
          }
        });
      }

      return { usableBalance: api.registry.createType('Balance', balanceFree.sub(maxlock)) };
    })

  );
}

/**
 * @name usableAccount
 * @description reserve balance for ring or kton coin
 * @example
 * <BR>
 *
 * ```javascript
 * const tokenType = 0;  0 present ring and 1 present kton
 * const ALICE = 'F7Hs';
 *
 * api.derive.balances.usableAccount(tokenType, ALICE ({ usableBalance }) => {
 *   console.log(`The usableBalance  ${usableBalance}.`);
 * });
 */
export function usableAccount (instanceId: string, api: ApiInterfaceRx): (tokenType: TokenType, accountId: AccountId | string | Uint8Array) => Observable<DeriveUsableAccount> {
  return memo(instanceId, (tokenType: TokenType, accountId: AccountId | string | Uint8Array) : Observable<DeriveUsableAccount> =>
    systemAccount(api, tokenType, accountId));
}
