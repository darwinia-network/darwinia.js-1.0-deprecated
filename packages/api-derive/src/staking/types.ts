// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';

import { Exposure } from '@darwinia/types/interfaces';

import { DeriveStakingKeys } from '@polkadot/api-derive/staking/types';
import { AccountId, Balance, BlockNumber, EraIndex, Keys, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces';

import { DarwiniaStakingStructsStakingLedger, DarwiniaStakingStructsTimeDepositItem } from '../darwiniaStaking/types';

type DeriveUnlocking = {
  remainingEras: BN;
  value: Balance;
};

interface DeriveEraExposureNominating {
  validatorId: string;
  validatorIndex: number;
}

type StakingLockUnbonding = {
  amount: Balance;
  until: BlockNumber;
};

interface DeriveStakerRewardValidator {
  total: Balance;
  value: Balance;
}

export interface DeriveStakerReward {
  era: EraIndex;
  eraReward: Balance;
  isStakerPayout?: boolean;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: DeriveEraExposureNominating[];
  validators: Record<string, DeriveStakerRewardValidator>;
  total: Balance;
}

interface DeriveStakingStash {
  controllerId: AccountId | null;
  exposure?: Exposure;
  nominators: AccountId[];
  nominateAt?: EraIndex;
  rewardDestination: RewardDestination;
  nextKeys?: Keys;
  stashId: AccountId;
  validatorPrefs: ValidatorPrefs;
}

type DeriveEraValidatorExposure = Record<string, Exposure>;

export interface DeriveStakerExposure {
  era: EraIndex;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: DeriveEraExposureNominating[];
  validators: DeriveEraValidatorExposure;
}

export type StakingLock = {
  stakingAmount: Balance;
  unbondings: StakingLockUnbonding[];
};

export interface DeriveStakingQuery extends DeriveStakingStash {
  accountId: AccountId;
  nextSessionIds: AccountId[];
  sessionIds: AccountId[];
  stakingLedger: DarwiniaStakingStructsStakingLedger;
}

export interface DeriveStakingAccount extends DeriveStakingQuery, DeriveStakingKeys {
  redeemable?: Balance[];
  unlocking?: DeriveUnlocking[];
  activeDepositItems?: DarwiniaStakingStructsTimeDepositItem[];
  unlockingTotalValue: Balance;
  unlockingKton?: DeriveUnlocking[];
  unlockingKtonTotalValue: Balance;
  activeDepositAmount?: Balance;
}
