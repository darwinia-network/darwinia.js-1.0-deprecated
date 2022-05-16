// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    UsableBalance: {
      usableBalance: 'Balance'
    },
    Status: {
      _enum: {
        Free: null,
        Reserved: null
      }
    },

    LockIdentifier: '[u8; 8]'
  }
} as Definitions;
