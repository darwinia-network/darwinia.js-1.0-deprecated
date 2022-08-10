// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Balance } from '@polkadot/types/interfaces/runtime';
import type { Enum, Struct, U8aFixed, u32, u128 } from '@polkadot/types-codec';

export interface FrameSystemAccountInfo extends Struct {
  readonly nonce: u32;
  readonly consumers: u32;
  readonly providers: u32;
  readonly sufficients: u32;
  readonly data: DarwiniaCommonRuntimeImplsAccountData;
}

export interface DarwiniaCommonRuntimeImplsAccountData extends Struct {
  readonly free: u128;
  readonly reserved: u128;
  readonly freeKton: u128;
  readonly reservedKton: u128;
}

export interface PalletBalancesBalanceLock extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
  readonly reasons: PalletBalancesReasons;
}

export interface PalletBalancesReasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
  readonly type: 'Fee' | 'Misc' | 'All';
}

export interface DeriveUsableAccount {
  usableBalance: Balance;
}

export enum TokenType {
  Ring = 0,
  Kton = 1
}
