// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types-codec';

import { map, Observable, of } from 'rxjs';

import { DeriveApi } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';
import { AccountId, Balance } from '@polkadot/types/interfaces';
import { FrameSystemAccountInfo, PalletBalancesBalanceLock } from '@polkadot/types/lookup';
import { BN, bnMax } from '@polkadot/util';

import { DeriveUsableAccount, TokenType } from './types';

function systemAccount (api: DeriveApi, tokenType: TokenType, accountId: AccountId | string | Uint8Array): Observable<DeriveUsableAccount> {
  if (tokenType !== TokenType.Ring && tokenType !== TokenType.Kton) {
    return of({ usableBalance: api.registry.createType<Balance>('Balance', 0) });
  }

  return api
    .queryMulti<[FrameSystemAccountInfo, Vec<PalletBalancesBalanceLock>, Vec<PalletBalancesBalanceLock>]>([
    [api.query.system.account, accountId],
    [api.query.balances.locks, accountId],
    [api.query.kton.locks, accountId]
  ])
    .pipe(
      map(([balanceInfo, locks, ktonLocks]): DeriveUsableAccount => {
        const { free, freeKton } = balanceInfo.data;

        let maxlock = new BN(0);
        let balanceFree: Balance = api.registry.createType('Balance');

        if (tokenType === TokenType.Ring) {
          balanceFree = free;
          locks.forEach((item) => {
            if (item.reasons.isFee) {
              return;
            }

            maxlock = bnMax(item.amount, maxlock);
          });
        } else {
          balanceFree = freeKton as Balance;
          ktonLocks.forEach((item) => {
            if (item.reasons.isFee) {
              return;
            }

            maxlock = bnMax(item.amount, maxlock);
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
export function usableAccount (instanceId: string, api: DeriveApi): (tokenType: TokenType, accountId: AccountId | string | Uint8Array) => Observable<DeriveUsableAccount> {
  return memo(instanceId, (tokenType: TokenType, accountId: AccountId | string | Uint8Array): Observable<DeriveUsableAccount> => systemAccount(api, tokenType, accountId));
}
