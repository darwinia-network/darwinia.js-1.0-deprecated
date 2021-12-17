// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types';
import type { Balance } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';
import type { LaneId, MessageNonce } from '../darwiniaInject';

/** @name Fee */
export interface Fee extends Struct {
  readonly amount: Balance;
}

/** @name InProcessOrders */
export interface InProcessOrders extends Struct {
  readonly orders: Vec<ITuple<[LaneId, MessageNonce]>>;
}

export type PHANTOM_FEE = 'fee';
