// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type { Observable } from 'rxjs';
import type { DeriveMarketFee } from './feeMarket/types';
import type { DeriveUsableAccount } from './accounts/types';
import type { u8 } from '@polkadot/types-codec';
import { LaneId, MessageNonce, AccountId } from '@polkadot/types/interfaces';
import { ITuple, AnyNumber } from '@polkadot/types-codec/types';

import * as accounts from './accounts';
import * as feeMarket from './feeMarket';

export const derive = { accounts, feeMarket };

declare module '@polkadot/api-derive/derive'{

  export interface ExactDerive {

    fee: { markert: ReturnType<() => () => Observable<DeriveMarketFee | undefined>>,
      inProcessOrder: ReturnType<() => () => Observable<ITuple<[LaneId, MessageNonce]>[]>>},
    usableBalance: {
      balance: ReturnType<() => (tokenType: u8 | AnyNumber | Uint8Array, accountId: AccountId | string | Uint8Array) => Observable<DeriveUsableAccount>>
    }

  }
}
