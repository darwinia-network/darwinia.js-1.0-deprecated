// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Exposure, StakingLedgerT as StakingLedger } from '../../../types/src';
import { TimeDepositItem } from '../../../types/src/interfaces/darwiniaInject';
import { DeriveStakingKeys } from '@polkadot/api-derive/staking/types';
import { AccountId,
  Balance,
  BlockNumber,
  EraIndex,
  Keys,
  RewardDestination,
  ValidatorPrefs } from '@polkadot/types/interfaces';
import type BN from 'bn.js';

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

interface DeriveEraExposureNominating {
  validatorId: string;
  validatorIndex: number;
}

interface DeriveStakerRewardValidator {
  total: Balance;
  value: Balance;
}

export interface DeriveStakerExposure {
  era: EraIndex;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: DeriveEraExposureNominating[];
  validators: DeriveEraValidatorExposure;
}

type DeriveEraValidatorExposure = Record<string, Exposure>;

export type StakingLock = {
  stakingAmount: Balance;
  unbondings: StakingLockUnbonding[];
};

type StakingLockUnbonding = {
  amount: Balance;
  until: BlockNumber;
};

export interface DeriveStakingQuery extends DeriveStakingStash {
  accountId: AccountId;
  nextSessionIds: AccountId[];
  sessionIds: AccountId[];
  stakingLedger: StakingLedger;
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

export interface DeriveStakingAccount extends DeriveStakingQuery, DeriveStakingKeys {
  redeemable?: Balance;
  unlocking?: DeriveUnlocking[];
  activeDepositItems?: TimeDepositItem[];
  unlockingTotalValue: Balance;
  unlockingKton?: DeriveUnlocking[];
  unlockingKtonTotalValue: Balance;
  activeDepositAmount?: Balance;
}

type DeriveUnlocking = {
  remainingEras: BN;
  value: Balance;
};
