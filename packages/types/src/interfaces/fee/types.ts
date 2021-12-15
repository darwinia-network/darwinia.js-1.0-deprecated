// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { LaneId, MessageNonce } from '../darwiniaInject';

/** @name InProcessOrders */
export interface InProcessOrders extends Struct {
  readonly orders: Vec<ITuple<[LaneId, MessageNonce]>>;
}

export type PHANTOM_FEE = 'fee';
