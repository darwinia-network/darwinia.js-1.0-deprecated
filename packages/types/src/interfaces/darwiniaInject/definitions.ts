// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

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
    DrmlCommonRuntimeImplsAccountData: {
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
    DarwiniaStakingStructsStakingLedger: {
      stash: 'AccountId',
      active: 'RingBalance',
      activeDepositRing: 'RingBalance',
      activeKton: 'KtonBalance',
      depositItems: 'Vec<TimeDepositItem>',
      ringStakingLock: 'StakingLock',
      ktonStakingLock: 'StakingLock',
      claimedRewards: 'Vec<EraIndex>'
    },
    TimeDepositItem: {
      value: 'Balance',
      startTime: 'TsInMs',
      expireTime: 'TsInMs'
    },
    ExposureT: {
      ownRingBalance: 'Balance',
      ownKtonBalance: 'Balance',
      ownPower: 'Power',
      totalPower: 'Power',
      others: 'Vec<IndividualExposure>'
    },
    Exposure: 'ExposureT',
    IndividualExposure: {
      who: 'AccountId',
      ringBalance: 'Balance',
      ktonBalance: 'Balance',
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
    DarwiniaStakingSlashingRk: {
      r: 'RingBalance',
      k: 'KtonBalance'
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
    EthereumPrimitivesHeader: {
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
      dagNodes: '[H512; 2]',
      proof: 'Vec<H128>'
    },
    EthereumPrimitivesReceiptTypedReceipt: {
      Legacy: 'LegacyReceipt',
      AccessList: 'LegacyReceipt',
      EIP1559Transaction: 'LegacyReceipt'
    },
    LegacyReceipt: {
      gas_used: 'U256',
      log_bloom: 'Bloom',
      logs: 'Vec<LogEntry>',
      outcome: 'TransactionOutcome'
    },
    LogEntry: {
      address: 'Address',
      topics: 'Vec<H256>',
      data: 'Bytes'
    },
    TransactionOutcome: {
      _enum: {
        Unknown: 'Null',
        StateRoot: 'H256',
        StatusCode: 'u8'
      }
    },
    EthereumNetwork: {
      _enum: {
        Mainnet: null,
        Ropsten: null
      }
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
    EthereumRelayHeaderParcel: {
      header: 'EthereumHeader',
      parentMmrRoot: 'H256'
    },
    EcdsaSignature: '[u8; 65; EcdsaSignature]',
    Signature: '[u8;65]',
    TronAddress: 'EthereumAddress',
    AddressT: '[u8; 20; AddressT]',
    Address: '[u8; 20; Address]',
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
      data: 'DrmlCommonRuntimeImplsAccountData'
    },
    Signer: 'EthereumAddress',
    DarwiniaRelayPrimitivesRelayAuthoritiesRelayAuthority: {
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
    DarwiniaRelayPrimitivesRelayAuthoritiesScheduledAuthoritiesChange: {
      nextAuthorities: 'Vec<DarwiniaRelayPrimitivesRelayAuthoritiesRelayAuthority>',
      deadline: 'BlockNumber'
    },
    DarwiniaRelayPrimitivesRelayAuthoritiesMmrRootToSign: {
      mmrRoot: 'Hash',
      signatures: 'Vec<(AccountId, Signature)>'
    },
    ElectionCompute: {
      _enum: ['OnChain', 'Signed', 'Authority']
    },
    ValidatorPrefs: 'ValidatorPrefsWithBlocked',
    PalletFeeMarketRelayer: {
      id: 'AccountId',
      collateral: 'Balance',
      fee: 'Balance'
    },
    PriorRelayer: {
      id: 'AccountId',
      fee: 'Balance',
      validRange: 'BlockNumber'
    },
    TokenMessageId: '[u8; 16; TokenMessageId]',
    DpAssetTokenMetadata: {
      token_type: 'u32',
      address: 'H160',
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimal: 'u8'
    },
    PalletFeeMarketOrder: {
      lane: 'LaneId',
      message: 'MessageNonce',
      sentTime: 'BlockNumber',
      confirmTime: 'BlockNumber',
      lockedCollateral: 'Balance',
      assignedRelayers: 'Vec<PriorRelayer>'
    },
    EraIndex: 'u32',
    RefCount: 'u32',
    Reasons: {
      _enum: ['Fee', 'Misc', 'All']
    },
    ValidatorPrefsWithBlocked: {
      commission: 'Compact<Perbill>',
      blocked: 'bool'
    },
    EthereumAddress: 'GenericEthereumAccountId',
    EthereumLog: {
      address: 'H160',
      topics: 'Vec<H256>',
      data: 'Vec<u8>'

    },
    SpCoreChangesTrieChangesTrieConfiguration: {
      digestInterval: 'u32',
      digestLevels: 'u32'
    }
  },
  rpc: {

  }
} as Definitions;
