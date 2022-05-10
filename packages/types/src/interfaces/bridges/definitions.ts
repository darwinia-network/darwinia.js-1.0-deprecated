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

    RelayerId: 'AccountId',

    UnrewardedRelayer: {
      relayer: 'RelayerId',
      messages: 'DeliveredMessages'
    },
    DeliveredMessages: {
      begin: 'MessageNonce',
      end: 'MessageNonce',
      dispatchResults: 'BitVec'
    },
    MessagePayload: 'Vec<u8>',

    TechnicalMember: 'AccountId',

    BridgedHeaderHash: 'Hash',

    BridgedBlockHash: 'Hash',
    RawStorageProof: 'Vec<Bytes>'

  }
} as Definitions;
