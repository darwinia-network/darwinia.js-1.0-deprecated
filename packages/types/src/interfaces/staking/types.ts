// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Power, RKT } from '@darwinia/types/interfaces/darwiniaInject';
import type { Compact, Struct, u128, u32 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type {AccountId32,AccountId } from '@polkadot/types/interfaces/runtime';

/** @name PalletStakingIndividualExposure */
export interface PalletStakingIndividualExposure extends Struct {
  readonly who: AccountId32;
  readonly value: Compact<u128>;
}

/** @name PowerOf */
export interface PowerOf extends Struct {
  readonly power: Power;
}

/** @name RewardPoint */
export interface RewardPoint extends u32 {}

/** @name SpanIndex */
export interface SpanIndex extends u32 {}

/** @name UnappliedSlashOther */
export interface UnappliedSlashOther extends ITuple<[AccountId, RKT]> {}

export type PHANTOM_STAKING = 'staking';
