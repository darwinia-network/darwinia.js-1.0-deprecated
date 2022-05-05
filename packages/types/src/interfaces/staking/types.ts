// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Power } from '@darwinia/types/interfaces/darwiniaInject';
import type { Compact, Struct, Vec, u128 } from '@polkadot/types-codec';

/** @name DarwiniaStakingStructsExposure */
export interface DarwiniaStakingStructsExposure extends Struct {
  readonly total: Compact<u128>;
  readonly own: Compact<u128>;
  readonly others: Vec<PalletStakingIndividualExposure>;
}

/** @name PalletStakingIndividualExposure */
export interface PalletStakingIndividualExposure extends Struct {
  readonly who: AccountId32;
  readonly value: Compact<u128>;
}

/** @name PowerOf */
export interface PowerOf extends Struct {
  readonly power: Power;
}

export type PHANTOM_STAKING = 'staking';
