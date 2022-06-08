// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';
import { objectSpread } from '@polkadot/util';

const sharedTypes = {
  CompactAssignments: 'CompactAssignmentsWith16',
  RawSolution: 'RawSolutionWith16',
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: {
      Any: 0,
      NonTransfer: 1,
      Governance: 2,
      Staking: 3,
      UnusedSudoBalances: 4,
      IdentityJudgement: 5,
      CancelProxy: 6,
      Auction: 7
    }
  }
};

const addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 0],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      StakingBalanceT: {
        _enum: {
          RingBalance: 'Balance',
          KtonBalance: 'Balance'
        }
      },
      Signature: 'H512',
      Keys: 'SessionKeys4',
      NominatorIndexCompact: 'u32',
      ValidatorIndexCompact: 'u16',
      OffchainAccuracyCompact: 'PerU16',
      PerU16: 'UInt<16, PerU16>',
      EthHeader: {
        parent_hash: 'H256',
        timestamp: 'u64',
        number: 'EthBlockNumber',
        author: 'EthAddress',
        transaction_root: 'H256',
        uncles_hash: 'H256',
        extra_data: 'Bytes',
        state_root: 'H256',
        receipts_root: 'H256',
        log_bloom: 'Bloom',
        gas_used: 'U256',
        gas_limit: 'U256',
        difficulty: 'U256',
        seal: 'Vec<Bytes>',
        hash: 'Option<H256>'
      },
      EthBlockNumber: 'u64',
      DoubleNodeWithMerkleProof: {
        dag_nodes: '[H512;2]',
        proof: 'Vec<H128>'
      },
      OtherSignature: {
        _enum: {
          Eth: 'EcdsaSignature',
          Tron: 'EcdsaSignature'
        }
      }
    })
  },
  {
    minmax: [1, 41],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      StakingBalanceT: {
        _enum: {
          RingBalance: 'Balance',
          KtonBalance: 'Balance'
        }
      },
      Signature: 'H512',
      Keys: 'SessionKeys4',
      EthereumRelayHeaderParcel: {
        header: 'EthereumHeader',
        mmrRoot: 'H256'
      },
      OtherSignature: {
        _enum: {
          Eth: 'EcdsaSignature',
          Tron: 'EcdsaSignature'
        }
      },

      // MMRProof: 'Vec<H256>',
      EthereumReceiptProofThing: '(EthereumHeader, EthereumReceiptProof, MMRProof)',
      EthereumHeader: {
        parentHash: 'H256',
        timestamp: 'u64',
        number: 'EthereumBlockNumber',
        author: 'EthereumAddress',
        transactionsRoot: 'H256',
        unclesHash: 'H256',
        extraData: 'Bytes',
        stateRoot: 'H256',
        receiptsRoot: 'H256',
        logBloom: 'Bloom',
        gasUsed: 'U256',
        gasLimit: 'U256',
        difficulty: 'U256',
        seal: 'Vec<Bytes>',
        // baseFeePerGas: 'Option<U256>',
        hash: 'Option<H256>'
      },
      EthereumReceiptProof: {
        index: 'u64',
        proof: 'Bytes',
        headerHash: 'H256'
      },
      MMRProof: {
        memberLeafIndex: 'u64',
        lastLeafIndex: 'u64',
        proof: 'Vec<H256>'
      },
      NominatorIndexCompact: 'u32',
      ValidatorIndexCompact: 'u16',
      OffchainAccuracyCompact: 'PerU16',
      PerU16: 'UInt<16, PerU16>',

      DoubleNodeWithMerkleProof: {
        dag_nodes: '[H512;2]',
        proof: 'Vec<H128>'
      },
      EthHeader: {
        parent_hash: 'H256',
        timestamp: 'u64',
        number: 'EthBlockNumber',
        author: 'EthAddress',
        transaction_root: 'H256',
        uncles_hash: 'H256',
        extra_data: 'Bytes',
        state_root: 'H256',
        receipts_root: 'H256',
        log_bloom: 'Bloom',
        gas_used: 'U256',
        gas_limit: 'U256',
        difficulty: 'U256',
        seal: 'Vec<Bytes>',
        hash: 'Option<H256>'
      },
      EthBlockNumber: 'u64',
      TcBlockNumber: 'u64',
      GameId: 'TcBlockNumber',
      EthereumHeaderThingWithProof: {
        header: 'EthereumHeader',
        ethashProof: 'Vec<EthashProof>',
        mmrRoot: 'H256',
        mmrProof: 'Vec<H256>'
      },
      EthereumHeaderThing: {
        header: 'EthereumHeader',
        mmrRoot: 'H256'
      },
      RawHeaderThing: 'Vec<u8>',
      OtherAddress: {
        _enum: {
          Eth: 'EthereumAddress',
          Tron: 'EthereumAddress'
        }
      }
    })
  },
  {
    minmax: [42, 43],
    types: objectSpread({}, sharedTypes, {
      AccountInfo: 'AccountInfoWithTripleRefCount',
      AccountInfoWithTripleRefCount: {
        nonce: 'Index',
        consumers: 'RefCount',
        providers: 'RefCount',
        data: 'AccountData'
      },
      Address: 'MultiAddress',
      LookupSource: 'MultiAddress'
    })
  },
  {
    minmax: [44, 1210],
    types: objectSpread({}, sharedTypes)
  },
  {
    minmax: [1210, undefined],
    types: {}
  }
];

export default versioned;
