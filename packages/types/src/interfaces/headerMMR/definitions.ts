// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    MMRProofResult: {
      mmrSize: 'u64',
      proof: 'Text'
    },
    NodeIndex: 'u64',
    MmrNodesPruningConfiguration: {
      step: 'NodeIndex',
      progress: 'NodeIndex',
      lastPosition: 'NodeIndex'
    }
  }
} as Definitions;
