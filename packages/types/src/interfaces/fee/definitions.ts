// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

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
    },
    DpFeeSlashReport: {
      lane: 'LaneId',
      message: 'MessageNonce',
      sent_time: 'BlockNumber',
      confirm_time: 'Option<BlockNumber>',
      delay_time: 'Option<BlockNumber>',
      account_id: 'AccountId',
      amount: 'Balance'

    },
    DarwiniaFeeMarketSlashReport: {
      lane: 'LaneId',
      message: 'MessageNonce',
      sent_time: 'BlockNumber',
      confirm_time: 'Option<BlockNumber>',
      delay_time: 'Option<BlockNumber>',
      account_id: 'AccountId',
      amount: 'Balance'
    },
    PalletFeeMarketSlashReport: {
      lane: 'LaneId',
      message: 'MessageNonce',
      sent_time: 'BlockNumber',
      confirm_time: 'Option<BlockNumber>',
      delay_time: 'Option<BlockNumber>',
      account_id: 'AccountId',
      amount: 'Balance'
    }

  }
} as Definitions;
