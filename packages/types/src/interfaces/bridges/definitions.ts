// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    MessageId: '(LaneId, MessageNonce)',
    LaneId: '[u8; 4]',
    MessageNonce: 'u64'
  }
} as Definitions;
