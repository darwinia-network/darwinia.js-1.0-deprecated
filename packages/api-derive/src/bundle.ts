// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { u8 } from '@polkadot/types-codec';
import type { DeriveUsableAccount } from './accounts/types';
import type { PowerOf } from './darwiniaStaking/types';
import type { DeriveMarketFee } from './feeMarket/types';

import { DeriveCustom } from '@polkadot/api/types';
import { AccountId, LaneId, MessageNonce } from '@polkadot/types/interfaces';
import { AnyNumber, ITuple } from '@polkadot/types-codec/types';

import * as accounts from './accounts';
import * as darwiniaStaking from './darwiniaStaking';
import * as feeMarket from './feeMarket';

declare module '@polkadot/api-derive/derive' {
  export interface ExactDerive {
    // declare darwinia api derive definition
    fee: { markert: ReturnType<() => () => Observable<DeriveMarketFee | undefined>>; inProcessOrder: ReturnType<() => () => Observable<ITuple<[LaneId, MessageNonce]>[]>> };
    usableBalance: {
      balance: ReturnType<() => (tokenType: u8 | AnyNumber | Uint8Array, accountId: AccountId | string | Uint8Array) => Observable<DeriveUsableAccount>>;
    };
    darwiniaStaking: {
      powerOf: ReturnType<() => (accountId: AccountId | string | Uint8Array) => Observable<PowerOf>>;
    };
  }
}

// registry related api derive function
export const darwiniaDerive = {
  darwiniaStaking: {
    powerOf: darwiniaStaking.powerOf
  },
  fee: {
    inProcessOrder: feeMarket.inProcessOrders,
    markert: feeMarket.marketFee
  },
  usableBalance: {
    balance: accounts.usableAccount
  }
} as DeriveCustom;
