// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, U8aFixed } from '@polkadot/types-codec';
import type { Balance } from '@polkadot/types/interfaces';

/** @name LockIdentifier */
export interface LockIdentifier extends U8aFixed {}

/** @name Status */
export interface Status extends Enum {
  readonly isFree: boolean;
  readonly isReserved: boolean;
  readonly type: 'Free' | 'Reserved';
}

/** @name UsableBalance */
export interface UsableBalance extends Struct {
  readonly usableBalance: Balance;
}

export type PHANTOM_BALANCES = 'balances';
