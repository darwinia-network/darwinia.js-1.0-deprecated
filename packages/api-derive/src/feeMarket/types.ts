// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId32, Balance } from '@polkadot/types/interfaces/runtime';

import { Struct, u128 } from '@polkadot/types-codec';

export interface DeriveMarketFee {
  amount: Balance;
}

export interface PalletFeeMarketRelayer extends Struct {
  readonly id: AccountId32;
  readonly collateral: u128;
  readonly fee: u128;
}
