// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, U8aFixed, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import { LaneId, MessageNonce } from '../darwiniaInject';

/** @name BridgeMessageId */
export interface BridgeMessageId extends U8aFixed {}

/** @name MessageId */
export interface MessageId extends ITuple<[LaneId, MessageNonce]> {}

/** @name OutboundLaneData */
export interface OutboundLaneData extends Struct {
  readonly oldestUnprunedNonce: MessageNonce;
  readonly latestGeneratedNonce: MessageNonce;
  readonly latestReceivedNonce: MessageNonce;
}

/** @name SpecVersion */
export interface SpecVersion extends u32 {}

export type PHANTOM_BRIDGES = 'bridges';
