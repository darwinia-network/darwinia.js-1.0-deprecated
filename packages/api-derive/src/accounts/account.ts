// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, map } from 'rxjs';
import { AccountId } from '@polkadot/types/interfaces';
import { memo } from '@polkadot/api-derive/util';
import { ApiInterfaceRx } from '@polkadot/api/types';

import type { u8 } from '@polkadot/types-codec';
import type { AnyNumber } from '@polkadot/types-codec/types';

import { DeriveUsableAccount, DeriveDarwiniaBalancesAccountData } from './types';

function systemAccount (api: ApiInterfaceRx, tokenType: u8 | AnyNumber | Uint8Array, accountId: AccountId | string | Uint8Array) : Observable<DeriveUsableAccount> {
  // substrate store the balance of an account in the `System` pallet
  return api.query.system.account(accountId).pipe(
    map(({ data }): DeriveUsableAccount => {
      // warning: data type definited in polkadot is diffent from darwinia runtime type.
      const { free, freeKton } = data as unknown as DeriveDarwiniaBalancesAccountData;

      // ring Token
      if (tokenType === 0) {
        return { usableBalance: free };
      }

      // kton Token
      if (tokenType === 1) {
        return { usableBalance: freeKton };
      }

      return { usableBalance: api.registry.createType('Balance', 0) };
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
export function usableAccount (instanceId: string, api: ApiInterfaceRx): (tokenType: u8 | AnyNumber | Uint8Array, accountId: AccountId | string | Uint8Array) => Observable<DeriveUsableAccount> {
  return memo(instanceId, (tokenType: u8 | AnyNumber | Uint8Array, accountId: AccountId | string | Uint8Array) : Observable<DeriveUsableAccount> =>
    systemAccount(api, tokenType, accountId));
}
