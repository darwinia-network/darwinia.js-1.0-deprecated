// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {
  },
  types: {
    PowerOf: {
      power: 'Power'
    },

    PalletStakingIndividualExposure: {
      who: 'AccountId32',
      value: 'Compact<u128>'
    },
    RewardPoint: 'u32',

    SpanIndex: 'u32',

    UnappliedSlashOther: '(AccountId, RKT)'

  }
} as Definitions;
