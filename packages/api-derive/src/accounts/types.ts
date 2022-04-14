// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
