// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Address } from '@darwinia/types/interfaces/darwiniaInject';
import type { EthBloom } from '@darwinia/types/interfaces/eth';
import type { Fee } from '@darwinia/types/interfaces/fee';
import type { BitVec, Bytes, Enum, Option, Struct, U256, U8aFixed, UInt, Vec, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Hash, H256, AccountId , H64, BlockNumber} from '@polkadot/types/interfaces/runtime';

/** @name BpMessageDispatchMessagePayload */
export interface BpMessageDispatchMessagePayload extends Bytes {}

/** @name BpMessagesDeliveredMessages */
export interface BpMessagesDeliveredMessages extends Struct {
  readonly begin: MessageNonce;
  readonly end: MessageNonce;
  readonly dispatchResults: BitVec;
}

/** @name BpMessagesInboundLaneData */
export interface BpMessagesInboundLaneData extends Struct {
  readonly relayers: Vec<UnrewardedRelayer>;
  readonly lastConfirmedNonce: MessageNonce;
}

/** @name BpMessagesMessageData */
export interface BpMessagesMessageData extends Struct {
  readonly payload: MessagePayload;
  readonly fee: Fee;
}

/** @name BpMessagesMessageKey */
export interface BpMessagesMessageKey extends Struct {
  readonly laneId: LaneId;
  readonly nonce: MessageNonce;
}

/** @name BpMessagesOperatingMode */
export interface BpMessagesOperatingMode extends Enum {
  readonly isNormal: boolean;
  readonly isRejectingOutboundMessages: boolean;
  readonly isHalted: boolean;
  readonly type: 'Normal' | 'RejectingOutboundMessages' | 'Halted';
}

/** @name BpMessagesOutboundLaneData */
export interface BpMessagesOutboundLaneData extends Struct {
  readonly oldestUnprunedNonce: MessageNonce;
  readonly latestReceivedNonce: MessageNonce;
  readonly latestGeneratedNonce: MessageNonce;
}

/** @name BpMessagesUnrewardedRelayersState */
export interface BpMessagesUnrewardedRelayersState extends Struct {
  readonly unrewardedRelayerEntries: MessageNonce;
  readonly messagesInOldestEntry: MessageNonce;
  readonly totalMessages: MessageNonce;
}

/** @name BridgedBlockHash */
export interface BridgedBlockHash extends Hash {}

/** @name BridgedHeaderHash */
export interface BridgedHeaderHash extends Hash {}

/** @name BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof */
export interface BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof extends Struct {
  readonly bridgedHeaderHash: BridgedHeaderHash;
  readonly storageProof: RawStorageProof;
  readonly lane: LaneId;
}

/** @name BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof */
export interface BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof extends Struct {
  readonly bridgedHeaderHash: BridgedBlockHash;
  readonly storageProof: RawStorageProof;
  readonly lane: LaneId;
  readonly noncesStart: MessageNonce;
  readonly noncesEnd: MessageNonce;
}

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

/** @name DarwiniaBridgeEthereumEthereumRelayHeaderParcel */
export interface DarwiniaBridgeEthereumEthereumRelayHeaderParcel extends Struct {
  readonly header: EthereumHeader;
  readonly parent_mmr_root: H256;
}

/** @name DarwiniaRelayPrimitivesRelayerGameRelayVotingState */
export interface DarwiniaRelayPrimitivesRelayerGameRelayVotingState extends Struct {
  readonly ayes: Vec<TechnicalMember>;
  readonly nays: Vec<TechnicalMember>;
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

/** @name PalletBridgeParachainsBestParaHead */
export interface PalletBridgeParachainsBestParaHead extends H256 {}

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
