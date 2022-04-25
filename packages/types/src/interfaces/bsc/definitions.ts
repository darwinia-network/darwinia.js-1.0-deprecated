// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  rpc: {

  },
  types: {
    BSCHeader: {
      parentHash: 'H256',
      uncleHash: 'H256',
      coinbase: 'EthereumAddress',
      stateRoot: 'H256',
      transactionsRoot: 'H256',
      receiptsRoot: 'H256',
      logBloom: 'Bloom',
      difficulty: 'U256',
      number: 'u64',
      gasLimit: 'U256',
      gasUsed: 'U256',
      timestamp: 'u64',
      extraData: 'Bytes',
      mixDigest: 'H256',
      nonce: 'Bytes'
    }
  }
};
