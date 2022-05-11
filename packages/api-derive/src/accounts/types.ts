// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type { Balance } from '@polkadot/types/interfaces/runtime';
import type { u32 } from '@polkadot/types-codec';

export interface DeriveUsableAccount {
  usableBalance: Balance;
}

export interface DeriveDarwiniaBalancesAccountData {
  free: Balance;
  reserved: Balance;
  freeKton: Balance;
  reservedKton: Balance;
}

export interface DeriveDarwiniaSystemAccountInfo {
  nonce: u32;
  consumers: u32;
  providers: u32;
  sufficients: u32;
  data: DeriveDarwiniaBalancesAccountData;
}

export enum TokenType {
  ring = 0,
  kton = 1
}
