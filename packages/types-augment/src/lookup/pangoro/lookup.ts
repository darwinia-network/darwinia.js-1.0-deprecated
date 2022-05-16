// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, drml_common_runtime::impls::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'DrmlCommonRuntimeImplsAccountData'
  },
  /**
   * Lookup5: drml_common_runtime::impls::AccountData<Balance>
   **/
  DrmlCommonRuntimeImplsAccountData: {
    free: 'u128',
    reserved: 'u128',
    freeKton: 'u128',
    reservedKton: 'u128'
  },
  /**
   * Lookup7: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64'
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest<primitive_types::H256>
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem<primitive_types::H256>
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      ChangesTrieRoot: 'H256',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      ChangesTrieSignal: 'SpRuntimeDigestChangesTrieSignal',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup15: sp_runtime::generic::digest::ChangesTrieSignal
   **/
  SpRuntimeDigestChangesTrieSignal: {
    _enum: {
      NewConfiguration: 'Option<SpCoreChangesTrieChangesTrieConfiguration>'
    }
  },
  /**
   * Lookup17: sp_core::changes_trie::ChangesTrieConfiguration
   **/
  SpCoreChangesTrieChangesTrieConfiguration: {
    digestInterval: 'u32',
    digestLevels: 'u32'
  },
  /**
   * Lookup19: frame_system::EventRecord<pangoro_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: 'FrameSupportWeightsDispatchInfo',
      ExtrinsicFailed: '(SpRuntimeDispatchError,FrameSupportWeightsDispatchInfo)',
      CodeUpdated: 'Null',
      NewAccount: 'AccountId32',
      KilledAccount: 'AccountId32',
      Remarked: '(AccountId32,H256)'
    }
  },
  /**
   * Lookup22: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays'
  },
  /**
   * Lookup23: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: {
        index: 'u8',
        error: 'u8',
      },
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError'
    }
  },
  /**
   * Lookup26: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup27: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup28: darwinia_balances::pallet::Event<T, I>
   **/
  DarwiniaBalancesEvent: {
    _enum: {
      Endowed: '(AccountId32,u128)',
      DustLost: '(AccountId32,u128)',
      Transfer: '(AccountId32,AccountId32,u128)',
      BalanceSet: '(AccountId32,u128,u128)',
      Deposit: '(AccountId32,u128)',
      Reserved: '(AccountId32,u128)',
      Unreserved: '(AccountId32,u128)',
      ReserveRepatriated: '(AccountId32,AccountId32,u128,FrameSupportTokensMiscBalanceStatus)'
    }
  },
  /**
   * Lookup29: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup31: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: '(PalletElectionProviderMultiPhaseElectionCompute,bool)',
      ElectionFinalized: 'Option<PalletElectionProviderMultiPhaseElectionCompute>',
      Rewarded: '(AccountId32,u128)',
      Slashed: '(AccountId32,u128)',
      SignedPhaseStarted: 'u32',
      UnsignedPhaseStarted: 'u32'
    }
  },
  /**
   * Lookup32: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup35: darwinia_staking::pallet::Event<T>
   **/
  DarwiniaStakingEvent: {
    _enum: {
      EraPaid: '(u32,u128,u128)',
      Rewarded: '(AccountId32,u128)',
      Slashed: '(AccountId32,u128,u128)',
      OldSlashingReportDiscarded: 'u32',
      StakersElected: 'Null',
      RingBonded: '(AccountId32,u128,u64,u64)',
      KtonBonded: '(AccountId32,u128)',
      RingUnbonded: '(AccountId32,u128)',
      KtonUnbonded: '(AccountId32,u128)',
      Kicked: '(AccountId32,AccountId32)',
      StakingElectionFailed: 'Null',
      Chilled: 'AccountId32',
      PayoutStarted: '(u32,AccountId32)',
      DepositsClaimed: 'AccountId32',
      DepositsClaimedWithPunish: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup36: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: '([u8;16],Bytes)'
    }
  },
  /**
   * Lookup38: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: 'u32'
    }
  },
  /**
   * Lookup39: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup42: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup43: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup44: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: 'PalletImOnlineSr25519AppSr25519Public',
      AllGood: 'Null',
      SomeOffline: 'Vec<(AccountId32,DarwiniaStakingStructsExposure)>'
    }
  },
  /**
   * Lookup45: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup46: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup49: darwinia_staking::structs::Exposure<sp_core::crypto::AccountId32, RingBalance, KtonBalance>
   **/
  DarwiniaStakingStructsExposure: {
    ownRingBalance: 'Compact<u128>',
    ownKtonBalance: 'Compact<u128>',
    ownPower: 'u32',
    totalPower: 'u32',
    others: 'Vec<DarwiniaStakingStructsIndividualExposure>'
  },
  /**
   * Lookup52: darwinia_staking::structs::IndividualExposure<sp_core::crypto::AccountId32, RingBalance, KtonBalance>
   **/
  DarwiniaStakingStructsIndividualExposure: {
    who: 'AccountId32',
    ringBalance: 'Compact<u128>',
    ktonBalance: 'Compact<u128>',
    power: 'u32'
  },
  /**
   * Lookup53: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: 'u32',
      Spending: 'u128',
      Awarded: '(u32,u128,AccountId32)',
      Rejected: '(u32,u128)',
      Burnt: 'u128',
      Rollover: 'u128',
      Deposit: 'u128'
    }
  },
  /**
   * Lookup54: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: 'Result<Null, SpRuntimeDispatchError>',
      KeyChanged: 'AccountId32',
      SudoAsDone: 'Result<Null, SpRuntimeDispatchError>'
    }
  },
  /**
   * Lookup57: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: '(u32,u32)',
      Canceled: '(u32,u32)',
      Dispatched: '((u32,u32),Option<Bytes>,Result<Null, SpRuntimeDispatchError>)'
    }
  },
  /**
   * Lookup60: pallet_bridge_dispatch::pallet::Event<T, I>
   **/
  PalletBridgeDispatchEvent: {
    _enum: {
      MessageRejected: '([u8;4],([u8;4],u64))',
      MessageVersionSpecMismatch: '([u8;4],([u8;4],u64),u32,u32)',
      MessageWeightMismatch: '([u8;4],([u8;4],u64),u64,u64)',
      MessageSignatureMismatch: '([u8;4],([u8;4],u64))',
      MessageCallDecodeFailed: '([u8;4],([u8;4],u64))',
      MessageCallRejected: '([u8;4],([u8;4],u64))',
      MessageDispatchPaymentFailed: '([u8;4],([u8;4],u64),AccountId32,u64)',
      MessageDispatched: '([u8;4],([u8;4],u64),Result<Null, SpRuntimeDispatchError>)',
      _Dummy: 'Null'
    }
  },
  /**
   * Lookup62: pallet_bridge_messages::pallet::Event<T, I>
   **/
  PalletBridgeMessagesEvent: {
    _enum: {
      ParameterUpdated: 'PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter',
      MessageAccepted: '([u8;4],u64)',
      MessagesDelivered: '([u8;4],BpMessagesDeliveredMessages)'
    }
  },
  /**
   * Lookup63: pangoro_runtime::bridges_message::pangolin::PangoroToPangolinMessagesParameter
   **/
  PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter: {
    _enum: {
      PangolinToPangoroConversionRate: 'u128'
    }
  },
  /**
   * Lookup65: bp_messages::DeliveredMessages
   **/
  BpMessagesDeliveredMessages: {
    begin: 'u64',
    end: 'u64',
    dispatchResults: 'BitVec'
  },
  /**
   * Lookup67: bitvec::order::Msb0
   **/
  BitvecOrderMsb0: 'Null',
  /**
   * Lookup68: pallet_fee_market::pallet::Event<T, I>
   **/
  PalletFeeMarketEvent: {
    _enum: {
      Enroll: '(AccountId32,u128,u128)',
      UpdateLockedCollateral: '(AccountId32,u128)',
      UpdateRelayFee: '(AccountId32,u128)',
      CancelEnrollment: 'AccountId32',
      UpdateCollateralSlashProtect: 'u128',
      UpdateAssignedRelayersNumber: 'u32',
      FeeMarketSlash: 'PalletFeeMarketSlashReport'
    }
  },
  /**
   * Lookup69: pallet_fee_market::types::SlashReport<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PalletFeeMarketSlashReport: {
    lane: '[u8;4]',
    message: 'u64',
    sentTime: 'u32',
    confirmTime: 'Option<u32>',
    delayTime: 'Option<u32>',
    accountId: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup71: module_transaction_pause::module::Event<T>
   **/
  ModuleTransactionPauseModuleEvent: {
    _enum: {
      TransactionPaused: '(Bytes,Bytes)',
      TransactionUnpaused: '(Bytes,Bytes)'
    }
  },
  /**
   * Lookup72: to_substrate_backing::pallet::Event<T>
   **/
  ToSubstrateBackingEvent: {
    _enum: {
      TokenRegistered: '(DpAssetTokenMetadata,AccountId32)',
      TokenLocked: '([u8;4],u64,H160,AccountId32,H160,u128)',
      TokenUnlocked: '([u8;4],u64,H160,AccountId32,u128)',
      TokenLockedConfirmed: '([u8;4],u64,AccountId32,u128,bool)',
      RemoteMappingFactoryAddressUpdated: 'AccountId32'
    }
  },
  /**
   * Lookup73: dp_asset::TokenMetadata
   **/
  DpAssetTokenMetadata: {
    tokenType: 'u32',
    address: 'H160',
    name: 'Bytes',
    symbol: 'Bytes',
    decimal: 'u8'
  },
  /**
   * Lookup76: darwinia_evm::pallet::Event<T>
   **/
  DarwiniaEvmEvent: {
    _enum: {
      Log: 'EthereumLog',
      Created: 'H160',
      CreatedFailed: 'H160',
      Executed: 'H160',
      ExecutedFailed: 'H160',
      BalanceDeposit: '(AccountId32,H160,U256)',
      BalanceWithdraw: '(AccountId32,H160,U256)'
    }
  },
  /**
   * Lookup77: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup81: darwinia_ethereum::pallet::Event<T>
   **/
  DarwiniaEthereumEvent: {
    _enum: {
      Executed: '(H160,H160,H256,EvmCoreErrorExitReason)',
      DVMTransfer: '(AccountId32,AccountId32,U256)',
      KtonDVMTransfer: '(AccountId32,AccountId32,U256)'
    }
  },
  /**
   * Lookup82: evm_core::error::ExitReason
   **/
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: 'EvmCoreErrorExitSucceed',
      Error: 'EvmCoreErrorExitError',
      Revert: 'EvmCoreErrorExitRevert',
      Fatal: 'EvmCoreErrorExitFatal'
    }
  },
  /**
   * Lookup83: evm_core::error::ExitSucceed
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
   * Lookup84: evm_core::error::ExitError
   **/
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: 'Null',
      StackOverflow: 'Null',
      InvalidJump: 'Null',
      InvalidRange: 'Null',
      DesignatedInvalid: 'Null',
      CallTooDeep: 'Null',
      CreateCollision: 'Null',
      CreateContractLimit: 'Null',
      InvalidCode: 'Null',
      OutOfOffset: 'Null',
      OutOfGas: 'Null',
      OutOfFund: 'Null',
      PCUnderflow: 'Null',
      CreateEmpty: 'Null',
      Other: 'Text'
    }
  },
  /**
   * Lookup87: evm_core::error::ExitRevert
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
   * Lookup88: evm_core::error::ExitFatal
   **/
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: 'Null',
      UnhandledInterrupt: 'Null',
      CallErrorAsFatal: 'EvmCoreErrorExitError',
      Other: 'Text'
    }
  },
  /**
   * Lookup89: pallet_base_fee::pallet::Event
   **/
  PalletBaseFeeEvent: {
    _enum: {
      NewBaseFeePerGas: 'U256',
      BaseFeeOverflow: 'Null',
      IsActive: 'bool',
      NewElasticity: 'Permill'
    }
  },
  /**
   * Lookup91: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup93: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup95: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_changes_trie_config: {
        changesTrieConfig: 'Option<SpCoreChangesTrieChangesTrieConfiguration>',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup100: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup101: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup102: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup104: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32'
  },
  /**
   * Lookup105: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup106: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup107: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32'
  },
  /**
   * Lookup113: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount']
  },
  /**
   * Lookup116: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup119: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  SpConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup121: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup125: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup126: pallet_babe::pallet::Call<T>
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      plan_config_change: {
        config: 'SpConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup127: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup128: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup129: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup130: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup131: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup132: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup135: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup136: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup139: darwinia_balances::pallet::ReserveData<ReserveIdentifier, Balance>
   **/
  DarwiniaBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup141: darwinia_balances::pallet::Releases
   **/
  DarwiniaBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup142: darwinia_balances::pallet::Call<T, I>
   **/
  DarwiniaBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup145: darwinia_balances::pallet::Error<T, I>
   **/
  DarwiniaBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'LockP']
  },
  /**
   * Lookup148: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup150: frame_support::weights::WeightToFeeCoefficient<Balance>
   **/
  FrameSupportWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8'
  },
  /**
   * Lookup152: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)'
    }
  },
  /**
   * Lookup154: pallet_authorship::pallet::Call<T>
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<SpRuntimeHeader>'
      }
    }
  },
  /**
   * Lookup156: pallet_authorship::pallet::Error<T>
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup157: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup159: pallet_election_provider_multi_phase::ReadySolution<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: '[u128;3]',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup162: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup166: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup170: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup175: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, pangoro_runtime::pallets::election_provider_multi_phase::NposCompactSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    reward: 'u128'
  },
  /**
   * Lookup176: pangoro_runtime::pallets::election_provider_multi_phase::NposCompactSolution16
   **/
  PangoroRuntimePalletsElectionProviderMultiPhaseNposCompactSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup227: pallet_election_provider_multi_phase::RawSolution<pangoro_runtime::pallets::election_provider_multi_phase::NposCompactSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'PangoroRuntimePalletsElectionProviderMultiPhaseNposCompactSolution16',
    score: '[u128;3]',
    round: 'u32'
  },
  /**
   * Lookup228: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<[u128;3]>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        numSignedSubmissions: 'u32'
      }
    }
  },
  /**
   * Lookup230: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed']
  },
  /**
   * Lookup231: darwinia_staking::structs::StakingLedger<sp_core::crypto::AccountId32, RingBalance, KtonBalance, BlockNumber>
   **/
  DarwiniaStakingStructsStakingLedger: {
    stash: 'AccountId32',
    active: 'Compact<u128>',
    activeDepositRing: 'Compact<u128>',
    activeKton: 'Compact<u128>',
    depositItems: 'Vec<DarwiniaStakingStructsTimeDepositItem>',
    ringStakingLock: 'DarwiniaSupportStructsStakingLock',
    ktonStakingLock: 'DarwiniaSupportStructsStakingLock',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup233: darwinia_staking::structs::TimeDepositItem<RingBalance>
   **/
  DarwiniaStakingStructsTimeDepositItem: {
    value: 'Compact<u128>',
    startTime: 'Compact<u64>',
    expireTime: 'Compact<u64>'
  },
  /**
   * Lookup234: darwinia_support::structs::StakingLock<Balance, Moment>
   **/
  DarwiniaSupportStructsStakingLock: {
    stakingAmount: 'u128',
    unbondings: 'Vec<DarwiniaSupportStructsUnbonding>'
  },
  /**
   * Lookup236: darwinia_support::structs::Unbonding<Balance, Moment>
   **/
  DarwiniaSupportStructsUnbonding: {
    amount: 'u128',
    until: 'u32'
  },
  /**
   * Lookup239: darwinia_staking::structs::RewardDestination<sp_core::crypto::AccountId32>
   **/
  DarwiniaStakingStructsRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup240: darwinia_staking::structs::ValidatorPrefs
   **/
  DarwiniaStakingStructsValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup242: darwinia_staking::structs::Nominations<sp_core::crypto::AccountId32>
   **/
  DarwiniaStakingStructsNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup243: darwinia_staking::structs::ActiveEraInfo
   **/
  DarwiniaStakingStructsActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup245: darwinia_staking::structs::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  DarwiniaStakingStructsEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup249: darwinia_staking::structs::Forcing
   **/
  DarwiniaStakingStructsForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup251: darwinia_staking::structs::UnappliedSlash<sp_core::crypto::AccountId32, RingBalance, KtonBalance>
   **/
  DarwiniaStakingStructsUnappliedSlash: {
    validator: 'AccountId32',
    own: 'DarwiniaStakingSlashingRk',
    others: 'Vec<(AccountId32,DarwiniaStakingSlashingRk)>',
    reporters: 'Vec<AccountId32>',
    payout: 'DarwiniaStakingSlashingRk'
  },
  /**
   * Lookup252: darwinia_staking::slashing::RK<R, K>
   **/
  DarwiniaStakingSlashingRk: {
    r: 'u128',
    k: 'u128'
  },
  /**
   * Lookup256: darwinia_staking::slashing::SlashingSpans
   **/
  DarwiniaStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup257: darwinia_staking::slashing::SpanRecord<RingBalance, KtonBalance>
   **/
  DarwiniaStakingSlashingSpanRecord: {
    slashed: 'DarwiniaStakingSlashingRk',
    paidOut: 'DarwiniaStakingSlashingRk'
  },
  /**
   * Lookup258: darwinia_staking::structs::Releases
   **/
  DarwiniaStakingStructsReleases: {
    _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0']
  },
  /**
   * Lookup260: darwinia_staking::pallet::Call<T>
   **/
  DarwiniaStakingCall: {
    _enum: {
      bond: {
        controller: 'MultiAddress',
        value: 'DarwiniaStakingStructsStakingBalance',
        payee: 'DarwiniaStakingStructsRewardDestination',
        promiseMonth: 'u8',
      },
      bond_extra: {
        maxAdditional: 'DarwiniaStakingStructsStakingBalance',
        promiseMonth: 'u8',
      },
      deposit_extra: {
        value: 'u128',
        promiseMonth: 'u8',
      },
      unbond: {
        value: 'DarwiniaStakingStructsStakingBalance',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      claim_mature_deposits: 'Null',
      try_claim_deposits_with_punish: {
        expireTime: 'u64',
      },
      validate: {
        prefs: 'DarwiniaStakingStructsValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'DarwiniaStakingStructsRewardDestination',
      },
      set_controller: {
        controller: 'MultiAddress',
      },
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        planToRebondRing: 'Compact<u128>',
        planToRebondKton: 'Compact<u128>',
      },
      set_history_depth: {
        newHistoryDepth: 'Compact<u32>',
        eraItemsDeleted: 'Compact<u32>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_limits: {
        minNominatorBond: 'u128',
        minValidatorBond: 'u128',
        maxNominatorCount: 'Option<u32>',
        maxValidatorCount: 'Option<u32>',
        threshold: 'Option<Percent>',
      },
      chill_other: {
        controller: 'AccountId32'
      }
    }
  },
  /**
   * Lookup261: darwinia_staking::structs::StakingBalance<RingBalance, KtonBalance>
   **/
  DarwiniaStakingStructsStakingBalance: {
    _enum: {
      RingBalance: 'u128',
      KtonBalance: 'u128'
    }
  },
  /**
   * Lookup264: darwinia_staking::pallet::Error<T>
   **/
  DarwiniaStakingError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'PayoutIns']
  },
  /**
   * Lookup265: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,DarwiniaStakingStructsExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup269: pangoro_runtime::pallets::session::SessionKeys
   **/
  PangoroRuntimePalletsSessionSessionKeys: {
    babe: 'SpConsensusBabeAppPublic',
    grandpa: 'SpFinalityGrandpaAppPublic',
    beefy: 'BeefyPrimitivesCryptoPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup270: beefy_primitives::crypto::Public
   **/
  BeefyPrimitivesCryptoPublic: 'SpCoreEcdsaPublic',
  /**
   * Lookup271: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup273: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup275: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup276: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'PangoroRuntimePalletsSessionSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup277: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup278: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup279: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup281: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup282: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup283: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup284: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup285: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup286: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup287: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup290: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup291: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup293: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup294: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup296: darwinia_beefy_gadget::pallet::Call<T>
   **/
  DarwiniaBeefyGadgetCall: {
    _enum: {
      set_commitment_contract: {
        commitmentContract: 'H160'
      }
    }
  },
  /**
   * Lookup297: beefy_primitives::mmr::BeefyNextAuthoritySet<primitive_types::H256>
   **/
  BeefyPrimitivesMmrBeefyNextAuthoritySet: {
    id: 'u64',
    len: 'u32',
    root: 'H256'
  },
  /**
   * Lookup301: pallet_im_online::BoundedOpaqueNetworkState<PeerIdEncodingLimit, MultiAddrEncodingLimit, AddressesLimit>
   **/
  PalletImOnlineBoundedOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup305: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup306: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    networkState: 'SpCoreOffchainOpaqueNetworkState',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup307: sp_core::offchain::OpaqueNetworkState
   **/
  SpCoreOffchainOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup311: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup312: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup313: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup314: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup316: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup317: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup318: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals']
  },
  /**
   * Lookup319: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'u64',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup321: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: 'Bytes',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: 'Bytes',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: 'Bytes',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup323: pallet_bridge_grandpa::pallet::Call<T, I>
   **/
  PalletBridgeGrandpaCall: {
    _enum: {
      submit_finality_proof: {
        finalityTarget: 'SpRuntimeHeader',
        justification: 'BpHeaderChainJustificationGrandpaJustification',
      },
      initialize: {
        initData: 'BpHeaderChainInitializationData',
      },
      set_owner: {
        newOwner: 'Option<AccountId32>',
      },
      set_operational: {
        operational: 'bool'
      }
    }
  },
  /**
   * Lookup324: bp_header_chain::justification::GrandpaJustification<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  BpHeaderChainJustificationGrandpaJustification: {
    round: 'u64',
    commit: 'FinalityGrandpaCommit',
    votesAncestries: 'Vec<SpRuntimeHeader>'
  },
  /**
   * Lookup325: finality_grandpa::Commit<primitive_types::H256, N, sp_finality_grandpa::app::Signature, sp_finality_grandpa::app::Public>
   **/
  FinalityGrandpaCommit: {
    targetHash: 'H256',
    targetNumber: 'u32',
    precommits: 'Vec<FinalityGrandpaSignedPrecommit>'
  },
  /**
   * Lookup327: finality_grandpa::SignedPrecommit<primitive_types::H256, N, sp_finality_grandpa::app::Signature, sp_finality_grandpa::app::Public>
   **/
  FinalityGrandpaSignedPrecommit: {
    precommit: 'FinalityGrandpaPrecommit',
    signature: 'SpFinalityGrandpaAppSignature',
    id: 'SpFinalityGrandpaAppPublic'
  },
  /**
   * Lookup328: bp_header_chain::InitializationData<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  BpHeaderChainInitializationData: {
    header: 'SpRuntimeHeader',
    authorityList: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    setId: 'u64',
    isHalted: 'bool'
  },
  /**
   * Lookup329: pallet_bridge_messages::pallet::Call<T, I>
   **/
  PalletBridgeMessagesCall: {
    _enum: {
      set_owner: {
        newOwner: 'Option<AccountId32>',
      },
      set_operating_mode: {
        operatingMode: 'BpMessagesOperatingMode',
      },
      update_pallet_parameter: {
        parameter: 'PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter',
      },
      send_message: {
        laneId: '[u8;4]',
        payload: 'BpMessageDispatchMessagePayload',
        deliveryAndDispatchFee: 'u128',
      },
      increase_message_fee: {
        laneId: '[u8;4]',
        nonce: 'u64',
        additionalFee: 'u128',
      },
      receive_messages_proof: {
        relayerIdAtBridgedChain: 'AccountId32',
        proof: 'BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof',
        messagesCount: 'u32',
        dispatchWeight: 'u64',
      },
      receive_messages_delivery_proof: {
        proof: 'BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof',
        relayersState: 'BpMessagesUnrewardedRelayersState'
      }
    }
  },
  /**
   * Lookup330: bp_messages::OperatingMode
   **/
  BpMessagesOperatingMode: {
    _enum: ['Normal', 'RejectingOutboundMessages', 'Halted']
  },
  /**
   * Lookup331: bp_message_dispatch::MessagePayload<sp_core::crypto::AccountId32, sp_runtime::MultiSigner, sp_runtime::MultiSignature, Call>
   **/
  BpMessageDispatchMessagePayload: {
    specVersion: 'u32',
    weight: 'u64',
    origin: 'BpMessageDispatchCallOrigin',
    dispatchFeePayment: 'BpRuntimeMessagesDispatchFeePayment',
    call: 'Bytes'
  },
  /**
   * Lookup332: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic'
    }
  },
  /**
   * Lookup333: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup334: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup336: bp_message_dispatch::CallOrigin<sp_core::crypto::AccountId32, sp_runtime::MultiSigner, sp_runtime::MultiSignature>
   **/
  BpMessageDispatchCallOrigin: {
    _enum: {
      SourceRoot: 'Null',
      TargetAccount: '(AccountId32,SpRuntimeMultiSigner,SpRuntimeMultiSignature)',
      SourceAccount: 'AccountId32'
    }
  },
  /**
   * Lookup337: bp_runtime::messages::DispatchFeePayment
   **/
  BpRuntimeMessagesDispatchFeePayment: {
    _enum: ['AtSourceChain', 'AtTargetChain']
  },
  /**
   * Lookup338: bridge_runtime_common::messages::target::FromBridgedChainMessagesProof<primitive_types::H256>
   **/
  BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof: {
    bridgedHeaderHash: 'H256',
    storageProof: 'Vec<Bytes>',
    lane: '[u8;4]',
    noncesStart: 'u64',
    noncesEnd: 'u64'
  },
  /**
   * Lookup339: bridge_runtime_common::messages::source::FromBridgedChainMessagesDeliveryProof<primitive_types::H256>
   **/
  BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof: {
    bridgedHeaderHash: 'H256',
    storageProof: 'Vec<Bytes>',
    lane: '[u8;4]'
  },
  /**
   * Lookup340: bp_messages::UnrewardedRelayersState
   **/
  BpMessagesUnrewardedRelayersState: {
    unrewardedRelayerEntries: 'u64',
    messagesInOldestEntry: 'u64',
    totalMessages: 'u64'
  },
  /**
   * Lookup341: pallet_fee_market::pallet::Call<T, I>
   **/
  PalletFeeMarketCall: {
    _enum: {
      enroll_and_lock_collateral: {
        lockCollateral: 'u128',
        relayFee: 'Option<u128>',
      },
      update_locked_collateral: {
        newCollateral: 'u128',
      },
      update_relay_fee: {
        newFee: 'u128',
      },
      cancel_enrollment: 'Null',
      set_slash_protect: {
        slashProtect: 'u128',
      },
      set_assigned_relayers_number: {
        number: 'u32'
      }
    }
  },
  /**
   * Lookup343: module_transaction_pause::module::Call<T>
   **/
  ModuleTransactionPauseModuleCall: {
    _enum: {
      pause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes',
      },
      unpause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes'
      }
    }
  },
  /**
   * Lookup344: to_substrate_backing::pallet::Call<T>
   **/
  ToSubstrateBackingCall: {
    _enum: {
      register_and_remote_create: {
        specVersion: 'u32',
        weight: 'u64',
        fee: 'u128',
      },
      lock_and_remote_issue: {
        specVersion: 'u32',
        weight: 'u64',
        value: 'Compact<u128>',
        fee: 'Compact<u128>',
        recipient: 'H160',
      },
      unlock_from_remote: {
        tokenAddress: 'H160',
        amount: 'U256',
        recipient: 'Bytes',
      },
      set_secure_limited_period: {
        period: 'u32',
      },
      set_security_limitation_ring_amount: {
        limitation: 'u128',
      },
      set_remote_mapping_token_factory_account: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup345: darwinia_evm::pallet::Call<T>
   **/
  DarwiniaEvmCall: {
    _enum: {
      call: {
        source: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create: {
        source: 'H160',
        init: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create2: {
        source: 'H160',
        init: 'Bytes',
        salt: 'H256',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>'
      }
    }
  },
  /**
   * Lookup349: darwinia_ethereum::pallet::Call<T>
   **/
  DarwiniaEthereumCall: {
    _enum: {
      transact: {
        transaction: 'EthereumTransactionTransactionV2',
      },
      root_transact: {
        target: 'H160',
        input: 'Bytes'
      }
    }
  },
  /**
   * Lookup350: ethereum::transaction::TransactionV2
   **/
  EthereumTransactionTransactionV2: {
    _enum: {
      Legacy: 'EthereumTransactionLegacyTransaction',
      EIP2930: 'EthereumTransactionEip2930Transaction',
      EIP1559: 'EthereumTransactionEip1559Transaction'
    }
  },
  /**
   * Lookup351: ethereum::transaction::LegacyTransaction
   **/
  EthereumTransactionLegacyTransaction: {
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    signature: 'EthereumTransactionTransactionSignature'
  },
  /**
   * Lookup352: ethereum::transaction::TransactionAction
   **/
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
   * Lookup353: ethereum::transaction::TransactionSignature
   **/
  EthereumTransactionTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup355: ethereum::transaction::EIP2930Transaction
   **/
  EthereumTransactionEip2930Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup357: ethereum::transaction::AccessListItem
   **/
  EthereumTransactionAccessListItem: {
    address: 'H160',
    slots: 'Vec<H256>'
  },
  /**
   * Lookup358: ethereum::transaction::EIP1559Transaction
   **/
  EthereumTransactionEip1559Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    maxPriorityFeePerGas: 'U256',
    maxFeePerGas: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup359: pallet_base_fee::pallet::Call<T>
   **/
  PalletBaseFeeCall: {
    _enum: {
      set_base_fee_per_gas: {
        fee: 'U256',
      },
      set_is_active: {
        isActive: 'bool',
      },
      set_elasticity: {
        elasticity: 'Permill'
      }
    }
  },
  /**
   * Lookup360: darwinia_bridge_bsc::pallet::Call<T>
   **/
  DarwiniaBridgeBscCall: {
    _enum: {
      relay_finalized_epoch_header: {
        proof: 'Vec<BscPrimitivesBscHeader>'
      }
    }
  },
  /**
   * Lookup362: bsc_primitives::BscHeader
   **/
  BscPrimitivesBscHeader: {
    parentHash: 'H256',
    uncleHash: 'H256',
    coinbase: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logBloom: 'EthbloomBloom',
    difficulty: 'U256',
    number: 'u64',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixDigest: 'H256',
    nonce: 'Bytes'
  },
  /**
   * Lookup363: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup365: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup368: pallet_scheduler::ScheduledV2<pangoro_runtime::Call, BlockNumber, pangoro_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduledV2: {
    maybeId: 'Option<Bytes>',
    priority: 'u8',
    call: 'Call',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'PangoroRuntimeOriginCaller'
  },
  /**
   * Lookup369: pangoro_runtime::OriginCaller
   **/
  PangoroRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSystemRawOrigin',
      __Unused1: 'Null',
      Void: 'SpCoreVoid',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      Ethereum: 'DarwiniaEthereumRawOrigin'
    }
  },
  /**
   * Lookup370: frame_system::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSystemRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup371: darwinia_ethereum::RawOrigin
   **/
  DarwiniaEthereumRawOrigin: {
    _enum: {
      EthereumTransaction: 'H160'
    }
  },
  /**
   * Lookup372: pallet_scheduler::Releases
   **/
  PalletSchedulerReleases: {
    _enum: ['V1', 'V2']
  },
  /**
   * Lookup373: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange']
  },
  /**
   * Lookup374: bp_header_chain::AuthoritySet
   **/
  BpHeaderChainAuthoritySet: {
    authorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    setId: 'u64'
  },
  /**
   * Lookup375: pallet_bridge_grandpa::pallet::Error<T, I>
   **/
  PalletBridgeGrandpaError: {
    _enum: ['InvalidJustification', 'InvalidAuthoritySet', 'TooManyRequests', 'OldHeader', 'UnknownHeader', 'UnsupportedScheduledChange', 'NotInitialized', 'AlreadyInitialized', 'Halted', 'StorageRootMismatch']
  },
  /**
   * Lookup376: bp_messages::InboundLaneData<sp_core::crypto::AccountId32>
   **/
  BpMessagesInboundLaneData: {
    relayers: 'Vec<BpMessagesUnrewardedRelayer>',
    lastConfirmedNonce: 'u64'
  },
  /**
   * Lookup378: bp_messages::UnrewardedRelayer<sp_core::crypto::AccountId32>
   **/
  BpMessagesUnrewardedRelayer: {
    relayer: 'AccountId32',
    messages: 'BpMessagesDeliveredMessages'
  },
  /**
   * Lookup379: bp_messages::OutboundLaneData
   **/
  BpMessagesOutboundLaneData: {
    oldestUnprunedNonce: 'u64',
    latestReceivedNonce: 'u64',
    latestGeneratedNonce: 'u64'
  },
  /**
   * Lookup380: bp_messages::MessageKey
   **/
  BpMessagesMessageKey: {
    laneId: '[u8;4]',
    nonce: 'u64'
  },
  /**
   * Lookup381: bp_messages::MessageData<Fee>
   **/
  BpMessagesMessageData: {
    payload: 'Bytes',
    fee: 'u128'
  },
  /**
   * Lookup382: pallet_bridge_messages::pallet::Error<T, I>
   **/
  PalletBridgeMessagesError: {
    _enum: ['Halted', 'MessageRejectedByChainVerifier', 'MessageRejectedByLaneVerifier', 'FailedToWithdrawMessageFee', 'TooManyMessagesInTheProof', 'InvalidMessagesProof', 'InvalidMessagesDeliveryProof', 'InvalidUnrewardedRelayers', 'InvalidUnrewardedRelayersState', 'MessageIsAlreadyDelivered', 'MessageIsNotYetSent', 'TryingToConfirmMoreMessagesThanExpected']
  },
  /**
   * Lookup383: pallet_fee_market::types::Relayer<sp_core::crypto::AccountId32, Balance>
   **/
  PalletFeeMarketRelayer: {
    id: 'AccountId32',
    collateral: 'u128',
    fee: 'u128'
  },
  /**
   * Lookup385: pallet_fee_market::types::Order<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PalletFeeMarketOrder: {
    lane: '[u8;4]',
    message: 'u64',
    sentTime: 'u32',
    confirmTime: 'Option<u32>',
    lockedCollateral: 'u128',
    relayers: 'Vec<PalletFeeMarketPriorRelayer>'
  },
  /**
   * Lookup387: pallet_fee_market::types::PriorRelayer<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PalletFeeMarketPriorRelayer: {
    id: 'AccountId32',
    fee: 'u128',
    validRange: 'Range<u32>'
  },
  /**
   * Lookup389: pallet_fee_market::pallet::Error<T, I>
   **/
  PalletFeeMarketError: {
    _enum: ['InsufficientBalance', 'AlreadyEnrolled', 'NotEnrolled', 'StillHasOrdersNotConfirmed', 'RelayFeeTooLow', 'OccupiedRelayer']
  },
  /**
   * Lookup390: module_transaction_pause::module::Error<T>
   **/
  ModuleTransactionPauseModuleError: {
    _enum: ['CannotPause', 'InvalidCharacter']
  },
  /**
   * Lookup392: to_substrate_backing::pallet::Error<T>
   **/
  ToSubstrateBackingError: {
    _enum: ['InsufficientBalance', 'RingLockLimited', 'RingDailyLimited', 'NonceDuplicated', 'UnsupportedToken', 'InvalidRecipient']
  },
  /**
   * Lookup394: darwinia_evm::pallet::Error<T>
   **/
  DarwiniaEvmError: {
    _enum: ['BalanceLow', 'FeeOverflow', 'PaymentOverflow', 'WithdrawFailed', 'GasPriceTooLow', 'InvalidNonce']
  },
  /**
   * Lookup397: fp_rpc::TransactionStatus
   **/
  FpRpcTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'H160',
    to: 'Option<H160>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthereumLog>',
    logsBloom: 'EthbloomBloom'
  },
  /**
   * Lookup400: ethereum::receipt::ReceiptV3
   **/
  EthereumReceiptReceiptV3: {
    _enum: {
      Legacy: 'EthereumReceiptEip658ReceiptData',
      EIP2930: 'EthereumReceiptEip658ReceiptData',
      EIP1559: 'EthereumReceiptEip658ReceiptData'
    }
  },
  /**
   * Lookup401: ethereum::receipt::EIP658ReceiptData
   **/
  EthereumReceiptEip658ReceiptData: {
    statusCode: 'u8',
    usedGas: 'U256',
    logsBloom: 'EthbloomBloom',
    logs: 'Vec<EthereumLog>'
  },
  /**
   * Lookup402: ethereum::block::Block<ethereum::transaction::TransactionV2>
   **/
  EthereumBlock: {
    header: 'EthereumHeader',
    transactions: 'Vec<EthereumTransactionTransactionV2>',
    ommers: 'Vec<EthereumHeader>'
  },
  /**
   * Lookup403: ethereum::header::Header
   **/
  EthereumHeader: {
    parentHash: 'H256',
    ommersHash: 'H256',
    beneficiary: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logsBloom: 'EthbloomBloom',
    difficulty: 'U256',
    number: 'U256',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixHash: 'H256',
    nonce: 'EthereumTypesHashH64'
  },
  /**
   * Lookup404: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup409: darwinia_ethereum::pallet::Error<T>
   **/
  DarwiniaEthereumError: {
    _enum: ['InvalidSignature', 'PreLogExists', 'InternalTransactionExitError', 'InternalTransactionRevertError', 'InternalTransactionFatalError', 'ReadyOnlyCall']
  },
  /**
   * Lookup411: darwinia_bridge_bsc::pallet::Error<T>
   **/
  DarwiniaBridgeBscError: {
    _enum: ['InvalidHeadersSize', 'RidiculousNumber', 'NotCheckpoint', 'InvalidSigner', 'SignedRecently', 'HeadersNotEnough', 'InvalidNonce', 'InvalidGasLimit', 'TooMuchGasUsed', 'InvalidUncleHash', 'InvalidDifficulty', 'InvalidMixDigest', 'HeaderTimestampIsAhead', 'MissingVanity', 'MissingSignature', 'InvalidCheckpointValidators', 'ExtraValidators', 'UnknownAncestor', 'HeaderTimestampTooClose', 'CheckpointNoSigner', 'CheckpointInvalidSigners', 'RecoverPubkeyFail', 'VerifyStorageFail']
  },
  /**
   * Lookup414: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup415: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup416: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup419: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup420: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup421: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup423: pangoro_runtime::Runtime
   **/
  PangoroRuntimeRuntime: 'Null'
};
