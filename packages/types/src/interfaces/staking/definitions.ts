// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {
    powerOf: {
      alias: ['staking_powerOf'],
      description: 'staking_powerOf',
      params: [
        {
          name: 'accountId',
          type: 'AccountId'
        }
      ],
      type: 'PowerOf'
    }
  },
  types: {
    PowerOf: {
      power: 'Power'
    },
    DarwiniaStakingStructsExposure: {
      total: 'Compact<u128>',
      own: 'Compact<u128>',
      others: 'Vec<PalletStakingIndividualExposure>'
    },
    PalletStakingIndividualExposure: {
      who: 'AccountId32',
      value: 'Compact<u128>'
    }
  }
} as Definitions;
