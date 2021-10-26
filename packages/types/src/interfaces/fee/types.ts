// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct } from '@polkadot/types';
import type { Balance } from '@polkadot/types/interfaces/runtime';

/** @name Fee */
export interface Fee extends Struct {
  readonly amount: Balance;
}

export type PHANTOM_FEE = 'fee';
