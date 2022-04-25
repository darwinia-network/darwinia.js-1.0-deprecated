// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  rpc: {
    usableBalance: {
      alias: ['balances_usableBalance'],
      description: 'balances_usableBalance',
      params: [
        {
          name: 'tokenType',
          type: 'u8'
        },
        {
          name: 'accountId',
          type: 'AccountId'
        }
      ],
      type: 'UsableBalance'
    }
  },
  types: {
    UsableBalance: {
      usableBalance: 'Balance'
    },
    Status: {
      _enum: {
        Free: null,
        Reserved: null
      }
    }
  }
};
