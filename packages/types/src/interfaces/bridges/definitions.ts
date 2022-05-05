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
    }
  }
} as Definitions;
