// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {

  },
  types: {

    EthHeader: {
      parentHash: 'H256',
      ommersHash: 'H256',
      beneficiary: 'EthAddress',
      stateRoot: 'H256',
      transactionsRoot: 'H256',
      receiptsRoot: 'H256',
      logsBloom: 'EthBloom',
      difficulty: 'U256',
      number: 'U256',
      gasLimit: 'U256',
      gasUsed: 'U256',
      timestamp: 'u64',
      extraData: 'Bytes',
      mixMash: 'H256',
      nonce: 'H64'
    },
    EthAddress: 'H160',
    TransactionV2: {
      _enum: {
        Legacy: 'LegacyTransaction',
        EIP2930: 'EIP2930Transaction',
        EIP1559: 'EIP1559Transaction'
      }
    },
    EIP2930Transaction: {
      chainId: 'u64',
      nonce: 'U256',
      gasPrice: 'U256',
      gasLimit: 'U256',
      action: 'EthTransactionAction',
      value: 'U256',
      input: 'Bytes',
      accessList: 'EthAccessList',
      oddYParity: 'bool',
      r: 'H256',
      s: 'H256'
    },

    EIP1559Transaction: {
      chainId: 'u64',
      nonce: 'U256',
      maxPriorityFeePerGas: 'U256',
      maxFeePerGas: 'U256',
      gasLimit: 'U256',
      action: 'EthTransactionAction',
      value: 'U256',
      input: 'Bytes',
      accessList: 'EthAccessList',
      oddYParity: 'bool',
      r: 'H256',
      s: 'H256'
    },
    EthAccessListItem: {
      address: 'EthAddress',
      slots: 'Vec<H256>'
    },
    EthAccessList: 'Vec<EthAccessListItem>',
    LegacyTransaction: {
      nonce: 'U256',
      gasPrice: 'U256',
      gasLimit: 'U256',
      action: 'EthTransactionAction',
      value: 'U256',
      input: 'Bytes',
      signature: 'EthTransactionSignature'
    },
    EthTransactionSignature: {
      v: 'u64',
      r: 'H256',
      s: 'H256'
    },
    EthTransactionAction: {
      _enum: {
        Call: 'H160',
        Create: 'Null'
      }
    },

    EthBloom: 'H2048',
    EthLog: {
      address: 'EthAddress',
      topics: 'Vec<H256>',
      data: 'Bytes',
      blockHash: 'Option<H256>',
      blockNumber: 'Option<U256>',
      transactionHash: 'Option<H256>',
      transactionIndex: 'Option<U256>',
      logIndex: 'Option<U256>',
      transactionLogIndex: 'Option<U256>',
      removed: 'bool'
    }

    // EthereumReceiptProofThing: '(EthereumHeader, EthereumPrimitivesReceiptReceiptProof, DarwiniaBridgeEthereumMmrProof)'

  }
} as Definitions;
