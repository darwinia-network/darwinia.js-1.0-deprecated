// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

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
    }
  }
};
