// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {

  },
  types: {
    RelayHeaderId: 'EthereumBlockNumber',
    // RelayHeaderParcel: 'EthereumRelayHeaderParcel',
    RelayProofs: 'EthereumRelayProofs',

    RelayVotingState: {
      ayes: 'Vec<AccountId>',
      nays: 'Vec<AccountId>'
    },
    RelayAffirmationId: {
      relayHeaderId: 'RelayHeaderId',
      round: 'u32',
      index: 'u32'
    },
    EthereumRelayProofs: {
      ethashProof: 'Vec<EthashProof>',
      mmrProof: 'Vec<H256>'
    }
  }
} as Definitions;
