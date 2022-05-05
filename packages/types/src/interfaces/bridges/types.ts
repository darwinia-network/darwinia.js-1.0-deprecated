// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BitVec, Enum, Struct, U8aFixed, UInt, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name BpMessagesDeliveredMessages */
export interface BpMessagesDeliveredMessages extends Struct {
  readonly begin: MessageNonce;
  readonly end: MessageNonce;
  readonly dispatchResults: BitVec;
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

/** @name FixedU128 */
export interface FixedU128 extends UInt {}

/** @name LaneId */
export interface LaneId extends U8aFixed {}

/** @name MessageId */
export interface MessageId extends ITuple<[LaneId, MessageNonce]> {}

/** @name MessageNonce */
export interface MessageNonce extends u64 {}

/** @name PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter */
export interface PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter extends Enum {
  readonly isPangolinParachainToPangolinConversionRate: boolean;
  readonly asPangolinParachainToPangolinConversionRate: FixedU128;
  readonly type: 'PangolinParachainToPangolinConversionRate';
}

/** @name PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter */
export interface PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter extends Enum {
  readonly isPangoroToPangolinConversionRate: boolean;
  readonly asPangoroToPangolinConversionRate: FixedU128;
  readonly type: 'PangoroToPangolinConversionRate';
}

/** @name PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter */
export interface PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter extends Enum {
  readonly isPangolinToPangoroConversionRate: boolean;
  readonly asPangolinToPangoroConversionRate: FixedU128;
  readonly type: 'PangolinToPangoroConversionRate';
}

export type PHANTOM_BRIDGES = 'bridges';
