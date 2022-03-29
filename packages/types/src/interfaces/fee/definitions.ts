// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  rpc: {
    marketFee: {
      alias: ['fee_marketFee'],
      description: 'fee_marketFee',
      params: [],
      type: 'Fee'
    },
    inProcessOrders: {
      alias: ['fee_inProcessOrders'],
      description: 'fee_inProcessOrders',
      params: [],
      type: 'InProcessOrders'
    }
  },
  types: {
    Fee: {
      amount: 'Balance'
    },
    InProcessOrders: {
      orders: 'Vec<(LaneId, MessageNonce)>'
    }
  }
};
