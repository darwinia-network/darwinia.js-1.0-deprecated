// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { U8aFixed, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name LaneId */
export interface LaneId extends U8aFixed {}

/** @name MessageId */
export interface MessageId extends ITuple<[LaneId, MessageNonce]> {}

/** @name MessageNonce */
export interface MessageNonce extends u64 {}

export type PHANTOM_BRIDGES = 'bridges';
