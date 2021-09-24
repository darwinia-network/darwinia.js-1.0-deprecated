// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable sort-keys */

export default {
  rpc: {},
  types: {
    BridgeMessageId: '[u8; 16; BridgeMessageId]',
    MessageId: '(LaneId, MessageNonce)',
    OutboundLaneData: {
      oldestUnprunedNonce: 'MessageNonce',
      latestGeneratedNonce: 'MessageNonce',
      latestReceivedNonce: 'MessageNonce'
    },
    SpecVersion: 'u32'
  }
};
