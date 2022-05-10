// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BitVec, Bytes, Enum, Struct, U8aFixed, UInt, Vec, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Hash, AccountId } from '@polkadot/types/interfaces/runtime';

/** @name BridgedBlockHash */
export interface BridgedBlockHash extends Hash {}

/** @name BridgedHeaderHash */
export interface BridgedHeaderHash extends Hash {}

/** @name CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter */
export interface CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter extends Enum {
  readonly isDarwiniaToCrabConversionRate: boolean;
  readonly asDarwiniaToCrabConversionRate: FixedU128;
  readonly type: 'DarwiniaToCrabConversionRate';
}

/** @name CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter */
export interface CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter extends Enum {
  readonly isDarwiniaToCrabConversionRate: boolean;
  readonly asDarwiniaToCrabConversionRate: FixedU128;
  readonly type: 'DarwiniaToCrabConversionRate';
}

/** @name DarwiniaRuntimeMessagesCrabMessageDarwiniaToCrabMessagesParameter */
export interface DarwiniaRuntimeMessagesCrabMessageDarwiniaToCrabMessagesParameter extends Enum {
  readonly isCrabToDarwiniaConversionRate: boolean;
  readonly asCrabToDarwiniaConversionRate: FixedU128;
  readonly type: 'CrabToDarwiniaConversionRate';
}

/** @name DeliveredMessages */
export interface DeliveredMessages extends Struct {
  readonly begin: MessageNonce;
  readonly end: MessageNonce;
  readonly dispatchResults: BitVec;
}

/** @name FixedU128 */
export interface FixedU128 extends UInt {}

/** @name LaneId */
export interface LaneId extends U8aFixed {}

/** @name MessageId */
export interface MessageId extends ITuple<[LaneId, MessageNonce]> {}

/** @name MessageNonce */
export interface MessageNonce extends u64 {}

/** @name MessagePayload */
export interface MessagePayload extends Bytes {}

/** @name RawStorageProof */
export interface RawStorageProof extends Vec<Bytes> {}

/** @name RelayerId */
export interface RelayerId extends AccountId {}

/** @name TechnicalMember */
export interface TechnicalMember extends AccountId {}

/** @name UnrewardedRelayer */
export interface UnrewardedRelayer extends Struct {
  readonly relayer: RelayerId;
  readonly messages: DeliveredMessages;
}

export type PHANTOM_BRIDGES = 'bridges';
