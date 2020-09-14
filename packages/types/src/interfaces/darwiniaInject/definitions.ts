// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable sort-keys */

export default {
  types: {
    Address: 'AccountId',
    LookupSource: 'AccountId',
    BalanceInfo: {},
    BalanceLock: {
      id: 'LockIdentifier',
      lockFor: 'LockFor',
      reasons: 'Reasons'
    },
    Reasons: {
      _enum: ['Fee', 'Misc', 'All']
    },
    LockFor: {
      _enum: {
        Common: 'Common',
        Staking: 'StakingLock'
      }
    },
    Common: {
      amount: 'Balance'
    },
    StakingLock: {
      stakingAmount: 'Balance',
      unbondings: 'Vec<Unbonding>'
    },
    Unbonding: {
      amount: 'Balance',
      moment: 'BlockNumber'
    },
    AccountData: {
      free: 'Balance',
      reserved: 'Balance',
      freeKton: 'Balance',
      reservedKton: 'Balance',
      miscFrozen: 'Balance',
      feeFrozen: 'Balance'
    },
    RingBalance: 'Balance',
    KtonBalance: 'Balance',
    TsInMs: 'u64',
    Power: 'u32',
    DepositId: 'U256',
    StakingBalanceT: {
      _enum: {
        RingBalance: 'Balance',
        KtonBalance: 'Balance'
      }
    },
    StakingLedgerT: {
      stash: 'AccountId',
      activeRing: 'Compact<Balance>',
      activeDepositRing: 'Compact<Balance>',
      activeKton: 'Compact<Balance>',
      depositItems: 'Vec<TimeDepositItem>',
      ringStakingLock: 'StakingLock',
      ktonStakingLock: 'StakingLock',
      claimedRewards: 'Vec<EraIndex>'
    },
    TimeDepositItem: {
      value: 'Compact<Balance>',
      startTime: 'Compact<TsInMs>',
      expireTime: 'Compact<TsInMs>'
    },
    RewardDestination: {
      _enum: {
        Staked: 'Staked',
        Stash: null,
        Controller: null
      }
    },
    Staked: {
      promiseMonth: 'u8'
    },
    ExposureT: {
      ownRingBalance: 'Compact<Balance>',
      ownKtonBalance: 'Compact<Balance>',
      ownPower: 'Power',
      totalPower: 'Power',
      others: 'Vec<IndividualExposure>'
    },
    Exposure: 'ExposureT',
    IndividualExposure: {
      who: 'AccountId',
      ringBalance: 'Compact<Balance>',
      ktonBalance: 'Compact<Balance>',
      power: 'Power'
    },
    ElectionResultT: {
      electedStashes: 'Vec<AccountId>',
      exposures: 'Vec<(AccountId, ExposureT)>',
      compute: 'ElectionCompute'
    },
    RKT: {
      r: 'Balance',
      k: 'Balance'
    },
    EthereumTransactionIndex: '(H256, u64)',
    EthereumHeaderBrief: {
      totalDifficulty: 'U256',
      parentHash: 'H256',
      number: 'EthereumBlockNumber',
      relayer: 'EthereumAddress'
    },
    EthereumBlockNumber: 'u64',
    EthereumHeaderThingWithProof: {
      header: 'EthereumHeader',
      ethashProof: 'Vec<EthashProof>',
      mmrRoot: 'H256',
      mmrProof: 'Vec<H256>'
    },
    ConfirmedEthereumHeaderInfo: {
      header: 'EthereumHeader',
      mmrRoot: 'H256'
    },
    EthereumHeaderThing: {
      header: 'EthereumHeader',
      mmrRoot: 'H256'
    },
    EthereumHeader: {
      parent_hash: 'H256',
      timestamp: 'u64',
      number: 'EthereumBlockNumber',
      author: 'EthereumAddress',
      transactions_root: 'H256',
      uncles_hash: 'H256',
      extra_data: 'Bytes',
      state_root: 'H256',
      receipts_root: 'H256',
      log_bloom: 'Bloom',
      gas_used: 'U256',
      gas_limit: 'U256',
      difficulty: 'U256',
      seal: 'Vec<Bytes>',
      hash: 'H256'
    },
    EthereumAddress: 'H160',
    Bloom: '[u8; 256; Bloom]',
    H128: '[u8; 16; H128]',
    EthashProof: {
      dagNodes: '(H512, H512)',
      proof: 'Vec<H128>'
    },
    LogEntry: {},
    TransactionOutcome: {},
    EthereumReceipt: {
      gasUsed: 'U256',
      logBloom: 'Bloom',
      logs: 'Vec<LogEntry>',
      outcome: 'TransactionOutcome'
    },
    EthereumNetworkType: {
      _enum: {
        Mainnet: null,
        Ropsten: null
      }
    },
    RedeemFor: {
      _enum: {
        Token: null,
        Deposit: null
      }
    },
    EthReceiptProof: {
      index: 'u64',
      proof: 'Bytes',
      headerHash: 'H256'
    },
    EthereumReceiptProof: {
      index: 'u64',
      proof: 'Bytes',
      headerHash: 'H256'
    },
    EthereumReceiptProofThing: '(EthereumHeader, EthereumReceiptProof, MMRProof)',
    MMRProof: {
      memberLeafIndex: 'u64',
      lastLeafIndex: 'u64',
      proof: 'Vec<H256>'
    },
    OtherSignature: {
      _enum: {
        Eth: 'EcdsaSignature',
        Tron: 'EcdsaSignature'
      }
    },
    EcdsaSignature: '[u8; 65; EcdsaSignature]',
    TronAddress: 'EthereumAddress',
    OtherAddress: {
      _enum: {
        Eth: 'EthereumAddress',
        Tron: 'TronAddress'
      }
    },
    AddressT: '[u8; 20; AddressT]',
    MerkleMountainRangeRootLog: {
      prefix: '[u8; 4; Prefix]',
      mmrRoot: 'Hash'
    },
    ChainProperties: {
      ss58Format: 'Option<u8>',
      tokenDecimals: 'Option<u32>',
      tokenSymbol: 'Option<Text>',
      ktonTokenDecimals: 'Option<u32>',
      ktonTokenSymbol: 'Option<Text>'
    },
    SpanRecord: {
      slashed: 'RKT',
      paidOut: 'RKT'
    },
    UnappliedSlash: {
      validator: 'AccountId',
      own: 'RKT',
      others: 'Vec<(AccountId, RKT)>',
      reporters: 'Vec<AccountId>',
      payout: 'RKT'
    },
    AccountInfo: {
      nonce: 'Index',
      refcount: 'RefCount',
      data: 'AccountData'
    },
    TreasuryProposal: {
      proposer: 'AccountId',
      beneficiary: 'AccountId',
      ringValue: 'Balance',
      ktonValue: 'Balance',
      ringBond: 'Balance',
      ktonBond: 'Balance'
    },
    Round: 'u64',
    TcHeaderThingWithProof: 'EthereumHeaderThingWithProof',
    TcHeaderThing: 'EthereumHeaderThing',
    TcBlockNumber: 'u64',
    TcHeaderHash: 'H256',
    GameId: 'TcBlockNumber',
    MappedRing: 'u128',
    RelayProposalT: {
      relayer: 'AccountId',
      bondedProposal: 'Vec<(Balance, TcHeaderThing)>',
      extendFromHeaderHash: 'Option<TcHeaderHash>'
    }
  },
  rpc: {

  }
};
