// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable sort-keys */

export default {
  types: {
    BalanceInfo: {},
    BalanceLock: {
      id: 'LockIdentifier',
      lockFor: 'LockFor',
      reasons: 'Reasons'
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
      until: 'BlockNumber'
    },
    AccountData: {
      free: 'Balance',
      reserved: 'Balance',
      freeKton: 'Balance',
      reservedKton: 'Balance'
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
      active: 'Compact<Balance>',
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

    MappedRing: 'u128',

    EthereumTransactionIndex: '(H256, u64)',
    EthereumBlockNumber: 'u64',
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
      baseFeePerGas: 'Option<U256>',
      blockHash: 'Option<H256>'
    },
    Bloom: '[u8; 256; Bloom]',
    EthashProof: {
      dagNodes: '(H512, H512)',
      proof: 'Vec<H128>'
    },
    EthereumReceipt: {
      Legacy: 'LegacyReceipt',
      AccessList: 'LegacyReceipt',
      EIP1559Transaction: 'LegacyReceipt'
    },
    LegacyReceipt: {
      gasUsed: 'U256',
      logBloom: 'Bloom',
      logs: 'Vec<LogEntry>',
      outcome: 'TransactionOutcome'
    },
    LogEntry: {},
    TransactionOutcome: {},
    EthereumNetwork: {
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
    EthereumRelayHeaderParcel: {
      header: 'EthereumHeader',
      parentMmrRoot: 'H256'
    },
    EthereumRelayProofs: {
      ethashProof: 'Vec<EthashProof>',
      mmrProof: 'Vec<H256>'
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
      ParentMmrRoot: 'Hash'
    },

    ChainProperties: {
      ss58Format: 'Option<u8>',
      tokenDecimals: 'Option<Vec<u32>>',
      tokenSymbol: 'Option<Vec<Text>>'
    },

    AccountInfo: {
      nonce: 'Index',
      refcount: 'RefCount',
      data: 'AccountData'
    },
    Signer: 'EthereumAddress',
    RelayAuthorityT: {
      accountId: 'AccountId',
      signer: 'EthereumAddress',
      stake: 'Balance',
      term: 'BlockNumber'
    },
    MMRRoot: 'Hash',
    EcdsaAddress: 'EthereumAddress',
    EcdsaMessage: 'H256',
    RelayAuthoritySigner: 'EcdsaAddress',
    RelayAuthorityMessage: 'EcdsaMessage',
    RelayAuthoritySignature: 'EcdsaSignature',
    Term: 'BlockNumber',
    OpCode: '[u8; 4; OpCode]',
    ScheduledAuthoritiesChangeT: {
      nextAuthorities: 'Vec<RelayAuthorityT>',
      deadline: 'BlockNumber'
    },
    MmrRootToSign: {
      mmrRoot: 'Hash',
      signatures: 'Vec<(EthereumAddress, EcdsaSignature)>'
    },
    ElectionCompute: {
      _enum: ['OnChain', 'Signed', 'Authority']
    },
    ValidatorPrefs: 'ValidatorPrefsWithBlocked',
    TokenOption: {
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimal: 'u8'
    },
    TokenInfo: {
      address: 'H160',
      value: 'Option<U256>',
      option: 'Option<TokenOption>'
    },
    Token: {
      _enum: {
        InvalidToken: null,
        Native: 'TokenInfo',
        Erc20: 'TokenInfo'
      }
    },
    Relayer: {
      id: 'AccountId',
      collateral: 'Balance',
      fee: 'Balance'
    },
    Fee: {
      amount: 'Balance'
    },
    Order: {
      lane: 'LaneId',
      message: 'MessageNonce',
      sent_time: 'BlockNumber',
      confirm_time: 'BlockNumber',
      assigned_relayers: 'Vec<PriorRelayer>'
    },
    PriorRelayer: {
      id: 'AccountId',
      fee: 'Balance',
      valid_range: 'BlockNumber'
    }
  },
  rpc: {

  }
};
