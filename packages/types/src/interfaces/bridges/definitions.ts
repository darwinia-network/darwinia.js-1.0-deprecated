// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    MessageId: '(LaneId, MessageNonce)',
    LaneId: '[u8; 4]',
    MessageNonce: 'u64',
    BpMessagesDeliveredMessages: {
      begin: 'MessageNonce',
      end: 'MessageNonce',
      // pub type DispatchResultsBitVec = BitVec<Msb0, u8>;
      dispatchResults: 'BitVec'
    },
    CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter: {
      _enum: {
        DarwiniaToCrabConversionRate: 'FixedU128'
      }
    },

    CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter: {
      _enum: {
        DarwiniaToCrabConversionRate: 'FixedU128'
      }
    },
    FixedU128: 'UInt<128, FixedU128>',
    DarwiniaRuntimeMessagesCrabMessageDarwiniaToCrabMessagesParameter: {
      _enum: {
        CrabToDarwiniaConversionRate: 'FixedU128'
      }
    },
    PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter: {
      _enum: {
        PangolinParachainToPangolinConversionRate: 'FixedU128'
      }
    },
    PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter: {
      _enum: {
        PangoroToPangolinConversionRate: 'FixedU128'
      }
    },
    PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter: {
      _enum: {
        PangolinToPangoroConversionRate: 'FixedU128'
      }
    },
    RelayerId: 'AccountId',
    BpMessagesInboundLaneData: {
      relayers: 'Vec<UnrewardedRelayer>',
      lastConfirmedNonce: 'MessageNonce'
    },
    UnrewardedRelayer: {
      relayer: 'RelayerId',
      messages: 'DeliveredMessages'
    },
    DeliveredMessages: {
      begin: 'MessageNonce',
      end: 'MessageNonce',
      dispatchResults: 'BitVec'
    },

    BpMessagesOutboundLaneData: {
      oldestUnprunedNonce: 'MessageNonce',
      latestReceivedNonce: 'MessageNonce',
      latestGeneratedNonce: 'MessageNonce'
    },
    BpMessagesMessageKey: {
      laneId: 'LaneId',
      nonce: 'MessageNonce'
    },
    BpMessagesMessageData: {
      payload: 'MessagePayload',
      fee: 'Fee'
    },
    MessagePayload: 'Vec<u8>',
    BpMessagesOperatingMode: {
      _enum: ['Normal', 'RejectingOutboundMessages', 'Halted']
    },
    PalletBridgeParachainsBestParaHead: 'H256',
    DarwiniaBridgeEthereumEthereumRelayHeaderParcel: {
      header: 'EthereumHeader',
      parent_mmr_root: 'H256'
    },
    DarwiniaRelayPrimitivesRelayerGameRelayVotingState: {
      ayes: 'Vec<TechnicalMember>',
      nays: 'Vec<TechnicalMember>'
    },
    TechnicalMember: 'AccountId',
    BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof: {
      bridgedHeaderHash: 'BridgedHeaderHash',
      storageProof: 'RawStorageProof',
      lane: 'LaneId'
    },
    BridgedHeaderHash: 'Hash',
    BpMessagesUnrewardedRelayersState: {
      unrewardedRelayerEntries: 'MessageNonce',
      messagesInOldestEntry: 'MessageNonce',
      totalMessages: 'MessageNonce'
    },
    BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof: {
      bridgedHeaderHash: 'BridgedBlockHash',
      storageProof: 'RawStorageProof',
      lane: 'LaneId',
      noncesStart: 'MessageNonce',
      noncesEnd: 'MessageNonce'
    },
    BridgedBlockHash: 'Hash',
    RawStorageProof: 'Vec<Bytes>',
    BpMessageDispatchMessagePayload: 'Bytes'
  }
} as Definitions;
