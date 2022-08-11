// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';
import type { AccountId32 } from '@polkadot/types/interfaces';
import type { Compact, Struct, u32, u64, u128, Vec } from '@polkadot/types-codec';

export interface PowerOf {
  power: BN;
}

export interface DarwiniaStakingStructsStakingLedger extends Struct {
  readonly stash: AccountId32;
  readonly active: Compact<u128>;
  readonly activeDepositRing: Compact<u128>;
  readonly activeKton: Compact<u128>;
  readonly depositItems: Vec<DarwiniaStakingStructsTimeDepositItem>;
  readonly ringStakingLock: DarwiniaSupportStructsStakingLock;
  readonly ktonStakingLock: DarwiniaSupportStructsStakingLock;
  readonly claimedRewards: Vec<u32>;
}

export interface DarwiniaStakingStructsTimeDepositItem extends Struct {
  readonly value: Compact<u128>;
  readonly startTime: Compact<u64>;
  readonly expireTime: Compact<u64>;
}

export interface DarwiniaSupportStructsStakingLock extends Struct {
  readonly stakingAmount: u128;
  readonly unbondings: Vec<DarwiniaSupportStructsUnbonding>;
}

export interface DarwiniaSupportStructsUnbonding extends Struct {
  readonly amount: u128;
  readonly until: u32;
}
