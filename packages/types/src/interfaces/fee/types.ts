// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types-codec';
import type { Balance } from '@polkadot/types/interfaces/runtime';

import { LaneId, MessageNonce } from '../darwiniaInject';
import type { ITuple } from '@polkadot/types/types';

/** @name Fee */
export interface Fee extends Struct {
  readonly amount: Balance;
}

/** @name InProcessOrders */
export interface InProcessOrders extends Struct {
  readonly orders: Vec<ITuple<[LaneId,MessageNonce]>>;
}

export type PHANTOM_FEE = 'fee';
