// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {

  },
  types: {
    PalletSchedulerScheduledV2: {
      maybeId: 'Option<Bytes>',
      priority: 'u8',
      call: 'FrameSupportScheduleMaybeHashed',
      maybePeriodic: 'Option<(u32,u32)>',
      origin: 'NodeRuntimeOriginCaller'
    },
    PalletSchedulerReleases: {
      _enum: ['V1', 'V2']
    }

  }
} as Definitions;
