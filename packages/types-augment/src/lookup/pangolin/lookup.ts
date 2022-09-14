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
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup16: frame_system::EventRecord<pangolin_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup18: frame_system::pallet::Event<T>
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
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays'
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup22: sp_runtime::DispatchError
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
   * Lookup23: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup24: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup25: darwinia_balances::pallet::Event<T, I>
   **/
  DarwiniaBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup26: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup28: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        electionCompute: 'PalletElectionProviderMultiPhaseElectionCompute',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        electionCompute: 'Option<PalletElectionProviderMultiPhaseElectionCompute>',
      },
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      SignedPhaseStarted: {
        round: 'u32',
      },
      UnsignedPhaseStarted: {
        round: 'u32'
      }
    }
  },
  /**
   * Lookup29: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup32: darwinia_staking::pallet::Event<T>
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
   * Lookup33: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup35: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup36: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup39: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup40: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup41: darwinia_relay_authority::pallet::Event<T>
   **/
  DarwiniaRelayAuthorityEvent: {
    _enum: {
      ScheduleMmrRoot: 'u32',
      MmrRootSigned: '(u32,H256,Vec<(AccountId32,[u8;65])>)',
      ScheduleAuthoritiesChange: '[u8;32]',
      AuthoritiesChangeSigned: '(u32,Vec<[u8;20]>,Vec<(AccountId32,[u8;65])>)',
      SlashOnMisbehavior: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup47: darwinia_ecdsa_authority::pallet::Event<T>
   **/
  DarwiniaEcdsaAuthorityEvent: {
    _enum: {
      CollectingAuthoritiesChangeSignatures: {
        message: '[u8;32]',
      },
      CollectedEnoughAuthoritiesChangeSignatures: {
        operation: 'DarwiniaEcdsaAuthorityPrimitivesOperation',
        newThreshold: 'Option<u32>',
        message: '[u8;32]',
        signatures: 'Vec<(H160,SpCoreEcdsaSignature)>',
      },
      CollectingNewMessageRootSignatures: {
        message: '[u8;32]',
      },
      CollectedEnoughNewMessageRootSignatures: {
        commitment: 'DarwiniaEcdsaAuthorityPrimitivesCommitment',
        message: '[u8;32]',
        signatures: 'Vec<(H160,SpCoreEcdsaSignature)>'
      }
    }
  },
  /**
   * Lookup48: darwinia_ecdsa_authority::primitives::Operation
   **/
  DarwiniaEcdsaAuthorityPrimitivesOperation: {
    _enum: {
      AddMember: {
        _alias: {
          new_: 'new',
        },
        new_: 'H160',
      },
      RemoveMember: {
        pre: 'H160',
        old: 'H160',
      },
      SwapMembers: {
        _alias: {
          new_: 'new',
        },
        pre: 'H160',
        old: 'H160',
        new_: 'H160'
      }
    }
  },
  /**
   * Lookup53: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup54: darwinia_ecdsa_authority::primitives::Commitment
   **/
  DarwiniaEcdsaAuthorityPrimitivesCommitment: {
    blockNumber: 'u32',
    messageRoot: 'H256',
    nonce: 'u32'
  },
  /**
   * Lookup55: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,DarwiniaStakingStructsExposure)>'
      }
    }
  },
  /**
   * Lookup56: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup57: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup60: darwinia_staking::structs::Exposure<sp_core::crypto::AccountId32, RingBalance, KtonBalance>
   **/
  DarwiniaStakingStructsExposure: {
    ownRingBalance: 'Compact<u128>',
    ownKtonBalance: 'Compact<u128>',
    ownPower: 'u32',
    totalPower: 'u32',
    others: 'Vec<DarwiniaStakingStructsIndividualExposure>'
  },
  /**
   * Lookup63: darwinia_staking::structs::IndividualExposure<sp_core::crypto::AccountId32, RingBalance, KtonBalance>
   **/
  DarwiniaStakingStructsIndividualExposure: {
    who: 'AccountId32',
    ringBalance: 'Compact<u128>',
    ktonBalance: 'Compact<u128>',
    power: 'u32'
  },
  /**
   * Lookup64: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
        depositors: 'Vec<AccountId32>',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Executed: {
        refIndex: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      PreimageNoted: {
        proposalHash: 'H256',
        who: 'AccountId32',
        deposit: 'u128',
      },
      PreimageUsed: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
      },
      PreimageInvalid: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageMissing: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageReaped: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
        reaper: 'AccountId32',
      },
      Blacklisted: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup66: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup69: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup71: pallet_elections_phragmen::pallet::Event<T>
   **/
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(AccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'AccountId32',
      },
      Renounced: {
        candidate: 'AccountId32',
      },
      CandidateSlashed: {
        candidate: 'AccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup74: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup75: pallet_treasury::pallet::Event<T, I>
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
   * Lookup77: pallet_tips::pallet::Event<T>
   **/
  PalletTipsEvent: {
    _enum: {
      NewTip: {
        tipHash: 'H256',
      },
      TipClosing: {
        tipHash: 'H256',
      },
      TipClosed: {
        tipHash: 'H256',
        who: 'AccountId32',
        payout: 'u128',
      },
      TipRetracted: {
        tipHash: 'H256',
      },
      TipSlashed: {
        tipHash: 'H256',
        finder: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup78: pallet_bounties::pallet::Event<T>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup79: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        newSudoer: 'AccountId32',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup80: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup81: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      ItemCompleted: 'Null',
      DispatchedAs: 'Result<Null, SpRuntimeDispatchError>'
    }
  },
  /**
   * Lookup82: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup83: pallet_society::pallet::Event<T, I>
   **/
  PalletSocietyEvent: {
    _enum: {
      Founded: 'AccountId32',
      Bid: '(AccountId32,u128)',
      Vouch: '(AccountId32,u128,AccountId32)',
      AutoUnbid: 'AccountId32',
      Unbid: 'AccountId32',
      Unvouch: 'AccountId32',
      Inducted: '(AccountId32,Vec<AccountId32>)',
      SuspendedMemberJudgement: '(AccountId32,bool)',
      CandidateSuspended: 'AccountId32',
      MemberSuspended: 'AccountId32',
      Challenged: 'AccountId32',
      Vote: '(AccountId32,AccountId32,bool)',
      DefenderVote: '(AccountId32,bool)',
      NewMaxMembers: 'u32',
      Unfounded: 'AccountId32',
      Deposit: 'u128'
    }
  },
  /**
   * Lookup84: pallet_recovery::pallet::Event<T>
   **/
  PalletRecoveryEvent: {
    _enum: {
      RecoveryCreated: {
        account: 'AccountId32',
      },
      RecoveryInitiated: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryVouched: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
        sender: 'AccountId32',
      },
      RecoveryClosed: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      AccountRecovered: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryRemoved: {
        lostAccount: 'AccountId32'
      }
    }
  },
  /**
   * Lookup85: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: '(u32,u32)',
      Canceled: '(u32,u32)',
      Dispatched: '((u32,u32),Option<Bytes>,Result<Null, SpRuntimeDispatchError>)'
    }
  },
  /**
   * Lookup88: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      AnonymousCreated: {
        anonymous: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'PangolinRuntimePalletsProxyProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'PangolinRuntimePalletsProxyProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup89: pangolin_runtime::pallets::proxy::ProxyType
   **/
  PangolinRuntimePalletsProxyProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'EthereumBridge']
  },
  /**
   * Lookup91: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup92: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup93: darwinia_bridge_ethereum::RawEvent<sp_core::crypto::AccountId32, dp_relayer_game::RelayAffirmationId<RelayHeaderId>>
   **/
  DarwiniaBridgeEthereumRawEvent: {
    _enum: {
      Affirmed: '(AccountId32,DpRelayerGameRelayAffirmationId)',
      DisputedAndAffirmed: '(AccountId32,DpRelayerGameRelayAffirmationId)',
      Extended: '(AccountId32,DpRelayerGameRelayAffirmationId)',
      NewRound: '(u64,Vec<u64>)',
      GameOver: 'u64',
      RemoveConfirmedParcel: 'u64',
      VerifyReceipt: '(AccountId32,EthereumPrimitivesReceiptTypedReceipt,EthereumPrimitivesHeader)',
      Pended: 'u64',
      GuardVoted: '(u64,bool)',
      PendingRelayHeaderParcelConfirmed: '(u64,Bytes)',
      PendingRelayHeaderParcelRejected: 'u64'
    }
  },
  /**
   * Lookup94: dp_relayer_game::RelayAffirmationId<RelayHeaderId>
   **/
  DpRelayerGameRelayAffirmationId: {
    gameId: 'u64',
    round: 'u32',
    index: 'u32'
  },
  /**
   * Lookup96: ethereum_primitives::receipt::TypedReceipt
   **/
  EthereumPrimitivesReceiptTypedReceipt: {
    _enum: {
      Legacy: 'EthereumPrimitivesReceiptLegacyReceipt',
      AccessList: 'EthereumPrimitivesReceiptLegacyReceipt',
      EIP1559Transaction: 'EthereumPrimitivesReceiptLegacyReceipt'
    }
  },
  /**
   * Lookup97: ethereum_primitives::receipt::LegacyReceipt
   **/
  EthereumPrimitivesReceiptLegacyReceipt: {
    gasUsed: 'U256',
    logBloom: 'EthbloomBloom',
    logs: 'Vec<EthereumPrimitivesLogEntry>',
    outcome: 'EthereumPrimitivesReceiptTransactionOutcome'
  },
  /**
   * Lookup100: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup103: ethereum_primitives::log_entry::LogEntry
   **/
  EthereumPrimitivesLogEntry: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup105: ethereum_primitives::receipt::TransactionOutcome
   **/
  EthereumPrimitivesReceiptTransactionOutcome: {
    _enum: {
      Unknown: 'Null',
      StateRoot: 'H256',
      StatusCode: 'u8'
    }
  },
  /**
   * Lookup106: ethereum_primitives::header::Header
   **/
  EthereumPrimitivesHeader: {
    _alias: {
      hash_: 'hash'
    },
    parentHash: 'H256',
    timestamp: 'u64',
    number: 'u64',
    author: 'H160',
    transactionsRoot: 'H256',
    unclesHash: 'H256',
    extraData: 'Bytes',
    stateRoot: 'H256',
    receiptsRoot: 'H256',
    logBloom: 'EthbloomBloom',
    gasUsed: 'U256',
    gasLimit: 'U256',
    difficulty: 'U256',
    seal: 'Vec<Bytes>',
    baseFeePerGas: 'Option<U256>',
    hash_: 'Option<H256>'
  },
  /**
   * Lookup110: to_ethereum_backing::pallet::Event<T>
   **/
  ToEthereumBackingEvent: {
    _enum: {
      RedeemRing: '(AccountId32,u128,(H256,u64))',
      RedeemKton: '(AccountId32,u128,(H256,u64))',
      RedeemDeposit: '(AccountId32,U256,u128,(H256,u64))',
      LockRing: '(AccountId32,H160,H160,u128)',
      LockKton: '(AccountId32,H160,H160,u128)'
    }
  },
  /**
   * Lookup112: darwinia_evm::pallet::Event<T>
   **/
  DarwiniaEvmEvent: {
    _enum: {
      Log: {
        log: 'EthereumLog',
      },
      Created: {
        address: 'H160',
      },
      CreatedFailed: {
        address: 'H160',
      },
      Executed: {
        address: 'H160',
      },
      ExecutedFailed: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup113: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup114: darwinia_ethereum::pallet::Event<T>
   **/
  DarwiniaEthereumEvent: {
    _enum: {
      Executed: {
        from: 'H160',
        to: 'H160',
        transactionHash: 'H256',
        exitReason: 'EvmCoreErrorExitReason',
      },
      DVMTransfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'U256',
      },
      KtonDVMTransfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'U256'
      }
    }
  },
  /**
   * Lookup115: evm_core::error::ExitReason
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
   * Lookup116: evm_core::error::ExitSucceed
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
   * Lookup117: evm_core::error::ExitError
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
   * Lookup120: evm_core::error::ExitRevert
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
   * Lookup121: evm_core::error::ExitFatal
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
   * Lookup122: pallet_base_fee::pallet::Event
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
   * Lookup124: pallet_bridge_dispatch::pallet::Event<T, I>
   **/
  PalletBridgeDispatchEvent: {
    _enum: {
      MessageRejected: '([u8;4],([u8;4],u64))',
      MessageVersionSpecMismatch: '([u8;4],([u8;4],u64),u32,u32)',
      MessageWeightMismatch: '([u8;4],([u8;4],u64),u64,u64)',
      MessageSignatureMismatch: '([u8;4],([u8;4],u64))',
      MessageCallDecodeFailed: '([u8;4],([u8;4],u64))',
      MessageCallValidateFailed: '([u8;4],([u8;4],u64),SpRuntimeTransactionValidityTransactionValidityError)',
      MessageDispatchPaymentFailed: '([u8;4],([u8;4],u64),AccountId32,u64)',
      MessageDispatched: '([u8;4],([u8;4],u64),Result<Null, SpRuntimeDispatchError>)',
      _Dummy: 'Null'
    }
  },
  /**
   * Lookup126: sp_runtime::transaction_validity::TransactionValidityError
   **/
  SpRuntimeTransactionValidityTransactionValidityError: {
    _enum: {
      Invalid: 'SpRuntimeTransactionValidityInvalidTransaction',
      Unknown: 'SpRuntimeTransactionValidityUnknownTransaction'
    }
  },
  /**
   * Lookup127: sp_runtime::transaction_validity::InvalidTransaction
   **/
  SpRuntimeTransactionValidityInvalidTransaction: {
    _enum: {
      Call: 'Null',
      Payment: 'Null',
      Future: 'Null',
      Stale: 'Null',
      BadProof: 'Null',
      AncientBirthBlock: 'Null',
      ExhaustsResources: 'Null',
      Custom: 'u8',
      BadMandatory: 'Null',
      MandatoryDispatch: 'Null'
    }
  },
  /**
   * Lookup128: sp_runtime::transaction_validity::UnknownTransaction
   **/
  SpRuntimeTransactionValidityUnknownTransaction: {
    _enum: {
      CannotLookup: 'Null',
      NoUnsignedValidator: 'Null',
      Custom: 'u8'
    }
  },
  /**
   * Lookup129: pallet_bridge_messages::pallet::Event<T, I>
   **/
  PalletBridgeMessagesEvent: {
    _enum: {
      ParameterUpdated: 'PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter',
      MessageAccepted: '([u8;4],u64)',
      MessagesDelivered: '([u8;4],BpMessagesDeliveredMessages)'
    }
  },
  /**
   * Lookup130: pangolin_runtime::bridges_message::pangoro::PangolinToPangoroMessagesParameter
   **/
  PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter: {
    _enum: {
      PangoroToPangolinConversionRate: 'u128'
    }
  },
  /**
   * Lookup132: bp_messages::DeliveredMessages
   **/
  BpMessagesDeliveredMessages: {
    begin: 'u64',
    end: 'u64',
    dispatchResults: 'BitVec'
  },
  /**
   * Lookup134: bitvec::order::Msb0
   **/
  BitvecOrderMsb0: 'Null',
  /**
   * Lookup137: pangolin_runtime::bridges_message::pangolin_parachain::PangolinToPangolinParachainParameter
   **/
  PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter: {
    _enum: {
      PangolinParachainToPangolinConversionRate: 'u128'
    }
  },
  /**
   * Lookup138: pallet_fee_market::pallet::Event<T, I>
   **/
  PalletFeeMarketEvent: {
    _enum: {
      Enroll: '(AccountId32,u128,u128)',
      UpdateLockedCollateral: '(AccountId32,u128)',
      UpdateRelayFee: '(AccountId32,u128)',
      CancelEnrollment: 'AccountId32',
      UpdateCollateralSlashProtect: 'u128',
      UpdateAssignedRelayersNumber: 'u32',
      FeeMarketSlash: 'PalletFeeMarketSlashReport',
      OrderCreated: '([u8;4],u64,u128,Vec<AccountId32>,Option<u32>)',
      OrderReward: '([u8;4],u64,PalletFeeMarketS2sPaymentRewardItem)'
    }
  },
  /**
   * Lookup139: pallet_fee_market::types::SlashReport<sp_core::crypto::AccountId32, BlockNumber, Balance>
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
   * Lookup140: pallet_fee_market::s2s::payment::RewardItem<sp_core::crypto::AccountId32, Balance>
   **/
  PalletFeeMarketS2sPaymentRewardItem: {
    toAssignedRelayers: 'BTreeMap<AccountId32, u128>',
    toTreasury: 'Option<u128>',
    toMessageRelayer: 'Option<(AccountId32,u128)>',
    toConfirmRelayer: 'Option<(AccountId32,u128)>'
  },
  /**
   * Lookup145: module_transaction_pause::module::Event<T>
   **/
  ModuleTransactionPauseModuleEvent: {
    _enum: {
      TransactionPaused: '(Bytes,Bytes)',
      TransactionUnpaused: '(Bytes,Bytes)'
    }
  },
  /**
   * Lookup146: from_substrate_issuing::pallet::Event<T>
   **/
  FromSubstrateIssuingEvent: {
    _enum: {
      TokenRegistered: '(AccountId32,H160,H160,H160)',
      TokenIssued: '(H160,H160,H160,U256)',
      MappingFactoryAddressUpdated: '(H160,H160)',
      RemoteBackingAccountUpdated: 'AccountId32'
    }
  },
  /**
   * Lookup147: to_parachain_backing::pallet::Event<T>
   **/
  ToParachainBackingEvent: {
    _enum: {
      TokenLocked: '([u8;4],u64,AccountId32,AccountId32,u128)',
      TokenUnlocked: '([u8;4],u64,AccountId32,u128)',
      TokenLockedConfirmed: '([u8;4],u64,AccountId32,u128,bool)',
      RemoteMappingFactoryAddressUpdated: 'AccountId32'
    }
  },
  /**
   * Lookup148: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup150: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup152: frame_system::pallet::Call<T>
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
   * Lookup156: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup157: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup158: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup160: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32'
  },
  /**
   * Lookup161: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup162: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup163: sp_version::RuntimeVersion
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
   * Lookup168: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup171: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup174: sp_consensus_babe::digests::NextConfigDescriptor
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
   * Lookup176: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup180: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup181: pallet_babe::pallet::Call<T>
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
   * Lookup182: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup183: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup184: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup185: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup186: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup187: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup190: darwinia_balances::pallet::BalanceLock<Balance>
   **/
  DarwiniaBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'DarwiniaBalancesReasons'
  },
  /**
   * Lookup191: darwinia_balances::pallet::Reasons
   **/
  DarwiniaBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup194: darwinia_balances::pallet::ReserveData<ReserveIdentifier, Balance>
   **/
  DarwiniaBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup196: darwinia_balances::pallet::Releases
   **/
  DarwiniaBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup197: darwinia_balances::pallet::Call<T, I>
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
   * Lookup200: darwinia_balances::pallet::Error<T, I>
   **/
  DarwiniaBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'LockP']
  },
  /**
   * Lookup203: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup205: frame_support::weights::WeightToFeeCoefficient<Balance>
   **/
  FrameSupportWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8'
  },
  /**
   * Lookup207: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)'
    }
  },
  /**
   * Lookup209: pallet_authorship::pallet::Call<T>
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<SpRuntimeHeader>'
      }
    }
  },
  /**
   * Lookup211: pallet_authorship::pallet::Error<T>
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup212: pallet_election_provider_multi_phase::Phase<Bn>
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
   * Lookup214: pallet_election_provider_multi_phase::ReadySolution<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: '[u128;3]',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup217: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup219: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup222: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup227: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, pangolin_runtime::pallets::election_provider_multi_phase::NposCompactSolution24>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    reward: 'u128'
  },
  /**
   * Lookup228: pangolin_runtime::pallets::election_provider_multi_phase::NposCompactSolution24
   **/
  PangolinRuntimePalletsElectionProviderMultiPhaseNposCompactSolution24: {
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
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>',
    votes17: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);16],Compact<u16>)>',
    votes18: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);17],Compact<u16>)>',
    votes19: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);18],Compact<u16>)>',
    votes20: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);19],Compact<u16>)>',
    votes21: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);20],Compact<u16>)>',
    votes22: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);21],Compact<u16>)>',
    votes23: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);22],Compact<u16>)>',
    votes24: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);23],Compact<u16>)>'
  },
  /**
   * Lookup303: pallet_election_provider_multi_phase::RawSolution<pangolin_runtime::pallets::election_provider_multi_phase::NposCompactSolution24>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'PangolinRuntimePalletsElectionProviderMultiPhaseNposCompactSolution24',
    score: '[u128;3]',
    round: 'u32'
  },
  /**
   * Lookup304: pallet_election_provider_multi_phase::pallet::Call<T>
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
   * Lookup306: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed']
  },
  /**
   * Lookup307: darwinia_staking::structs::StakingLedger<sp_core::crypto::AccountId32, RingBalance, KtonBalance, BlockNumber>
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
   * Lookup309: darwinia_staking::structs::TimeDepositItem<RingBalance>
   **/
  DarwiniaStakingStructsTimeDepositItem: {
    value: 'Compact<u128>',
    startTime: 'Compact<u64>',
    expireTime: 'Compact<u64>'
  },
  /**
   * Lookup310: darwinia_support::structs::StakingLock<Balance, Moment>
   **/
  DarwiniaSupportStructsStakingLock: {
    stakingAmount: 'u128',
    unbondings: 'Vec<DarwiniaSupportStructsUnbonding>'
  },
  /**
   * Lookup312: darwinia_support::structs::Unbonding<Balance, Moment>
   **/
  DarwiniaSupportStructsUnbonding: {
    amount: 'u128',
    until: 'u32'
  },
  /**
   * Lookup315: darwinia_staking::structs::RewardDestination<sp_core::crypto::AccountId32>
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
   * Lookup316: darwinia_staking::structs::ValidatorPrefs
   **/
  DarwiniaStakingStructsValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup318: darwinia_staking::structs::Nominations<sp_core::crypto::AccountId32>
   **/
  DarwiniaStakingStructsNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup319: darwinia_staking::structs::ActiveEraInfo
   **/
  DarwiniaStakingStructsActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup321: darwinia_staking::structs::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  DarwiniaStakingStructsEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup325: darwinia_staking::structs::Forcing
   **/
  DarwiniaStakingStructsForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup327: darwinia_staking::structs::UnappliedSlash<sp_core::crypto::AccountId32, RingBalance, KtonBalance>
   **/
  DarwiniaStakingStructsUnappliedSlash: {
    validator: 'AccountId32',
    own: 'DarwiniaStakingSlashingRk',
    others: 'Vec<(AccountId32,DarwiniaStakingSlashingRk)>',
    reporters: 'Vec<AccountId32>',
    payout: 'DarwiniaStakingSlashingRk'
  },
  /**
   * Lookup328: darwinia_staking::slashing::RK<R, K>
   **/
  DarwiniaStakingSlashingRk: {
    r: 'u128',
    k: 'u128'
  },
  /**
   * Lookup332: darwinia_staking::slashing::SlashingSpans
   **/
  DarwiniaStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup333: darwinia_staking::slashing::SpanRecord<RingBalance, KtonBalance>
   **/
  DarwiniaStakingSlashingSpanRecord: {
    slashed: 'DarwiniaStakingSlashingRk',
    paidOut: 'DarwiniaStakingSlashingRk'
  },
  /**
   * Lookup336: darwinia_staking::structs::Releases
   **/
  DarwiniaStakingStructsReleases: {
    _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0']
  },
  /**
   * Lookup338: darwinia_staking::pallet::Call<T>
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
   * Lookup339: darwinia_staking::structs::StakingBalance<RingBalance, KtonBalance>
   **/
  DarwiniaStakingStructsStakingBalance: {
    _enum: {
      RingBalance: 'u128',
      KtonBalance: 'u128'
    }
  },
  /**
   * Lookup342: darwinia_staking::pallet::Error<T>
   **/
  DarwiniaStakingError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'PayoutIns']
  },
  /**
   * Lookup343: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,DarwiniaStakingStructsExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup347: pangolin_runtime::pallets::session::SessionKeys
   **/
  PangolinRuntimePalletsSessionSessionKeys: {
    babe: 'SpConsensusBabeAppPublic',
    grandpa: 'SpFinalityGrandpaAppPublic',
    beefy: 'BeefyPrimitivesCryptoPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup348: beefy_primitives::crypto::Public
   **/
  BeefyPrimitivesCryptoPublic: 'SpCoreEcdsaPublic',
  /**
   * Lookup349: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup351: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup353: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup354: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'PangolinRuntimePalletsSessionSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup355: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup356: pallet_grandpa::StoredState<N>
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
   * Lookup357: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup359: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup360: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup361: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup362: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup363: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup364: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup365: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup368: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup369: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup371: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup373: darwinia_message_gadget::pallet::Call<T>
   **/
  DarwiniaMessageGadgetCall: {
    _enum: {
      set_commitment_contract: {
        commitmentContract: 'H160'
      }
    }
  },
  /**
   * Lookup375: darwinia_relay_authority::primitives::Authority<sp_core::crypto::AccountId32, Signer, RingBalance, BlockNumber>
   **/
  DarwiniaRelayAuthorityPrimitivesAuthority: {
    accountId: 'AccountId32',
    signer: '[u8;20]',
    stake: 'u128',
    term: 'u32'
  },
  /**
   * Lookup377: darwinia_relay_authority::primitives::ScheduledAuthoritiesChange<sp_core::crypto::AccountId32, Signer, RingBalance, BlockNumber, MaxMembers>
   **/
  DarwiniaRelayAuthorityPrimitivesScheduledAuthoritiesChange: {
    nextAuthorities: 'Vec<DarwiniaRelayAuthorityPrimitivesAuthority>',
    deadline: 'u32'
  },
  /**
   * Lookup381: darwinia_relay_authority::primitives::MmrRootToSign<primitive_types::H256, sp_core::crypto::AccountId32, Signature, MaxMembers>
   **/
  DarwiniaRelayAuthorityPrimitivesMmrRootToSign: {
    mmrRoot: 'H256',
    signatures: 'Vec<(AccountId32,[u8;65])>'
  },
  /**
   * Lookup382: darwinia_relay_authority::pallet::Call<T>
   **/
  DarwiniaRelayAuthorityCall: {
    _enum: {
      request_authority: {
        stake: 'u128',
        signer: '[u8;20]',
      },
      cancel_request: 'Null',
      kill_candidates: 'Null',
      add_authorities: {
        accountIds: 'Vec<AccountId32>',
      },
      renounce_authority: 'Null',
      remove_authorities: {
        accountIds: 'Vec<AccountId32>',
      },
      kill_authorities: 'Null',
      force_new_term: 'Null',
      submit_signed_mmr_root: {
        blockNumber: 'u32',
        signature: '[u8;65]',
      },
      submit_signed_authorities: {
        signature: '[u8;65]'
      }
    }
  },
  /**
   * Lookup384: darwinia_relay_authority::pallet::Error<T>
   **/
  DarwiniaRelayAuthorityError: {
    _enum: ['TooManyMembers', 'CandidateAE', 'CandidateNE', 'AuthorityAE', 'AuthorityNE', 'AuthorityIT', 'AuthoritiesCountTL', 'StakeIns', 'OnAuthoritiesChangeDis', 'ScheduledSignNE', 'SignatureInv', 'TermMis', 'AuthoritiesMis', 'NextAuthoritiesNE', 'TooManySchedules']
  },
  /**
   * Lookup391: darwinia_ecdsa_authority::pallet::Call<T>
   **/
  DarwiniaEcdsaAuthorityCall: {
    _enum: {
      add_authority: {
        _alias: {
          new_: 'new',
        },
        new_: 'H160',
      },
      remove_authority: {
        old: 'H160',
      },
      swap_authority: {
        _alias: {
          new_: 'new',
        },
        old: 'H160',
        new_: 'H160',
      },
      submit_authorities_change_signature: {
        address: 'H160',
        signature: 'SpCoreEcdsaSignature',
      },
      submit_new_message_root_signature: {
        address: 'H160',
        signature: 'SpCoreEcdsaSignature'
      }
    }
  },
  /**
   * Lookup392: darwinia_ecdsa_authority::pallet::Error<T>
   **/
  DarwiniaEcdsaAuthorityError: {
    _enum: ['AuthorityExisted', 'TooManyAuthorities', 'NotAuthority', 'AtLeastOneAuthority', 'OnAuthoritiesChange', 'NoAuthoritiesChange', 'NoNewMessageRoot', 'BadSignature', 'AlreadySubmitted']
  },
  /**
   * Lookup396: pallet_im_online::BoundedOpaqueNetworkState<PeerIdEncodingLimit, MultiAddrEncodingLimit, AddressesLimit>
   **/
  PalletImOnlineBoundedOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup400: pallet_im_online::pallet::Call<T>
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
   * Lookup401: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    networkState: 'SpCoreOffchainOpaqueNetworkState',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup402: sp_core::offchain::OpaqueNetworkState
   **/
  SpCoreOffchainOpaqueNetworkState: {
    peerId: 'OpaquePeerId',
    externalAddresses: 'Vec<OpaqueMultiaddr>'
  },
  /**
   * Lookup406: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup407: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup408: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup412: pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletDemocracyPreimageStatus: {
    _enum: {
      Missing: 'u32',
      Available: {
        data: 'Bytes',
        provider: 'AccountId32',
        deposit: 'u128',
        since: 'u32',
        expiry: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup413: pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup414: pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposalHash: 'H256',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup415: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup416: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup419: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup421: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup422: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup423: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup426: pallet_democracy::Releases
   **/
  PalletDemocracyReleases: {
    _enum: ['V1']
  },
  /**
   * Lookup427: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposalHash: 'H256',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
        secondsUpperBound: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposalHash: 'H256',
      },
      external_propose_majority: {
        proposalHash: 'H256',
      },
      external_propose_default: {
        proposalHash: 'H256',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      cancel_queued: {
        which: 'u32',
      },
      delegate: {
        to: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      note_preimage: {
        encodedProposal: 'Bytes',
      },
      note_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      reap_preimage: {
        proposalHash: 'H256',
        proposalLenUpperBound: 'Compact<u32>',
      },
      unlock: {
        target: 'AccountId32',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'AccountId32',
        index: 'u32',
      },
      enact_proposal: {
        proposalHash: 'H256',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup428: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'DuplicatePreimage', 'NotImminent', 'TooEarly', 'Imminent', 'PreimageMissing', 'ReferendumInvalid', 'PreimageInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooManyProposals']
  },
  /**
   * Lookup431: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'Compact<u64>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup433: pallet_elections_phragmen::pallet::Call<T>
   **/
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<AccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'MultiAddress',
        hasReplacement: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup434: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup435: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'AccountId32',
      },
      remove_member: {
        who: 'AccountId32',
      },
      swap_member: {
        remove: 'AccountId32',
        add: 'AccountId32',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId32',
      },
      set_prime: {
        who: 'AccountId32',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup436: pallet_treasury::pallet::Call<T, I>
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
   * Lookup438: pallet_tips::pallet::Call<T>
   **/
  PalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: 'Bytes',
        who: 'AccountId32',
      },
      retract_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      tip_new: {
        reason: 'Bytes',
        who: 'AccountId32',
        tipValue: 'Compact<u128>',
      },
      tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        tipValue: 'Compact<u128>',
      },
      close_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      slash_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup439: pallet_bounties::pallet::Call<T>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup440: pallet_sudo::pallet::Call<T>
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
   * Lookup441: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32'
      }
    }
  },
  /**
   * Lookup442: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup443: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'PangolinRuntimeOriginCaller',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup445: pangolin_runtime::OriginCaller
   **/
  PangolinRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSystemRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
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
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      Ethereum: 'DarwiniaEthereumRawOrigin'
    }
  },
  /**
   * Lookup446: frame_system::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSystemRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup447: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup449: darwinia_ethereum::RawOrigin
   **/
  DarwiniaEthereumRawOrigin: {
    _enum: {
      EthereumTransaction: 'H160'
    }
  },
  /**
   * Lookup450: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup451: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'AccountId32',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'AccountId32',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup452: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup488: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup489: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup490: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup491: pallet_society::pallet::Call<T, I>
   **/
  PalletSocietyCall: {
    _enum: {
      bid: {
        value: 'u128',
      },
      unbid: {
        pos: 'u32',
      },
      vouch: {
        who: 'AccountId32',
        value: 'u128',
        tip: 'u128',
      },
      unvouch: {
        pos: 'u32',
      },
      vote: {
        candidate: 'MultiAddress',
        approve: 'bool',
      },
      defender_vote: {
        approve: 'bool',
      },
      payout: 'Null',
      found: {
        founder: 'AccountId32',
        maxMembers: 'u32',
        rules: 'Bytes',
      },
      unfound: 'Null',
      judge_suspended_member: {
        who: 'AccountId32',
        forgive: 'bool',
      },
      judge_suspended_candidate: {
        who: 'AccountId32',
        judgement: 'PalletSocietyJudgement',
      },
      set_max_members: {
        max: 'u32'
      }
    }
  },
  /**
   * Lookup492: pallet_society::Judgement
   **/
  PalletSocietyJudgement: {
    _enum: ['Rebid', 'Reject', 'Approve']
  },
  /**
   * Lookup493: pallet_recovery::pallet::Call<T>
   **/
  PalletRecoveryCall: {
    _enum: {
      as_recovered: {
        account: 'AccountId32',
        call: 'Call',
      },
      set_recovered: {
        lost: 'AccountId32',
        rescuer: 'AccountId32',
      },
      create_recovery: {
        friends: 'Vec<AccountId32>',
        threshold: 'u16',
        delayPeriod: 'u32',
      },
      initiate_recovery: {
        account: 'AccountId32',
      },
      vouch_recovery: {
        lost: 'AccountId32',
        rescuer: 'AccountId32',
      },
      claim_recovery: {
        account: 'AccountId32',
      },
      close_recovery: {
        rescuer: 'AccountId32',
      },
      remove_recovery: 'Null',
      cancel_recovered: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup494: pallet_scheduler::pallet::Call<T>
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
   * Lookup496: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'AccountId32',
        forceProxyType: 'Option<PangolinRuntimePalletsProxyProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'AccountId32',
        proxyType: 'PangolinRuntimePalletsProxyProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'AccountId32',
        proxyType: 'PangolinRuntimePalletsProxyProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      anonymous: {
        proxyType: 'PangolinRuntimePalletsProxyProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_anonymous: {
        spawner: 'AccountId32',
        proxyType: 'PangolinRuntimePalletsProxyProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'AccountId32',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'AccountId32',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'AccountId32',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'AccountId32',
        real: 'AccountId32',
        forceProxyType: 'Option<PangolinRuntimePalletsProxyProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup498: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'WrapperKeepOpaque<Call>',
        storeCall: 'bool',
        maxWeight: 'u64',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'u64',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup501: darwinia_bridge_ethereum::Call<T>
   **/
  DarwiniaBridgeEthereumCall: {
    _enum: {
      affirm: {
        ethereumRelayHeaderParcel: 'DarwiniaBridgeEthereumEthereumRelayHeaderParcel',
        optionalEthereumRelayProofs: 'Option<DarwiniaBridgeEthereumEthereumRelayProofs>',
      },
      dispute_and_affirm: {
        ethereumRelayHeaderParcel: 'DarwiniaBridgeEthereumEthereumRelayHeaderParcel',
        optionalEthereumRelayProofs: 'Option<DarwiniaBridgeEthereumEthereumRelayProofs>',
      },
      complete_relay_proofs: {
        affirmationId: 'DpRelayerGameRelayAffirmationId',
        ethereumRelayProofs: 'Vec<DarwiniaBridgeEthereumEthereumRelayProofs>',
      },
      extend_affirmation: {
        extendedEthereumRelayAffirmationId: 'DpRelayerGameRelayAffirmationId',
        gameSamplePoints: 'Vec<DarwiniaBridgeEthereumEthereumRelayHeaderParcel>',
        optionalEthereumRelayProofs: 'Option<Vec<DarwiniaBridgeEthereumEthereumRelayProofs>>',
      },
      vote_pending_relay_header_parcel: {
        ethereumBlockNumber: 'u64',
        aye: 'bool',
      },
      check_receipt: {
        ethereumProofRecord: 'EthereumPrimitivesReceiptReceiptProof',
        ethereumHeader: 'EthereumPrimitivesHeader',
        mmrProof: 'DarwiniaBridgeEthereumMmrProof',
      },
      set_receipt_verify_fee: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u128>',
      },
      remove_confirmed_parcel_of: {
        confirmedBlockNumber: 'u64',
      },
      clean_confirmed_parcels: 'Null',
      set_confirmed_parcel: {
        ethereumRelayHeaderParcel: 'DarwiniaBridgeEthereumEthereumRelayHeaderParcel'
      }
    }
  },
  /**
   * Lookup502: darwinia_bridge_ethereum::EthereumRelayHeaderParcel
   **/
  DarwiniaBridgeEthereumEthereumRelayHeaderParcel: {
    header: 'EthereumPrimitivesHeader',
    parentMmrRoot: 'H256'
  },
  /**
   * Lookup504: darwinia_bridge_ethereum::EthereumRelayProofs
   **/
  DarwiniaBridgeEthereumEthereumRelayProofs: {
    ethashProof: 'Vec<EthereumPrimitivesEthashProof>',
    mmrProof: 'Vec<H256>'
  },
  /**
   * Lookup506: ethereum_primitives::ethashproof::EthashProof
   **/
  EthereumPrimitivesEthashProof: {
    dagNodes: '[H512;2]',
    proof: 'Vec<EthereumTypesHashH128>'
  },
  /**
   * Lookup510: ethereum_types::hash::H128
   **/
  EthereumTypesHashH128: '[u8;16]',
  /**
   * Lookup514: ethereum_primitives::receipt::ReceiptProof
   **/
  EthereumPrimitivesReceiptReceiptProof: {
    index: 'u64',
    proof: 'Bytes',
    headerHash: 'H256'
  },
  /**
   * Lookup515: darwinia_bridge_ethereum::MMRProof
   **/
  DarwiniaBridgeEthereumMmrProof: {
    memberLeafIndex: 'u64',
    lastLeafIndex: 'u64',
    proof: 'Vec<H256>'
  },
  /**
   * Lookup516: to_ethereum_backing::pallet::Call<T>
   **/
  ToEthereumBackingCall: {
    _enum: {
      redeem: {
        act: 'ToEthereumBackingRedeemFor',
        proof: '(EthereumPrimitivesHeader,EthereumPrimitivesReceiptReceiptProof,DarwiniaBridgeEthereumMmrProof)',
      },
      lock: {
        ringToLock: 'Compact<u128>',
        ktonToLock: 'Compact<u128>',
        ethereumAccount: 'H160',
      },
      sync_authorities_change: {
        proof: '(EthereumPrimitivesHeader,EthereumPrimitivesReceiptReceiptProof,DarwiniaBridgeEthereumMmrProof)',
      },
      set_token_redeem_address: {
        _alias: {
          new_: 'new',
        },
        new_: 'H160',
      },
      set_deposit_redeem_address: {
        _alias: {
          new_: 'new',
        },
        new_: 'H160',
      },
      set_set_authorities_address: {
        _alias: {
          new_: 'new',
        },
        new_: 'H160',
      },
      set_ring_token_address: {
        _alias: {
          new_: 'new',
        },
        new_: 'H160',
      },
      set_kton_token_address: {
        _alias: {
          new_: 'new',
        },
        new_: 'H160',
      },
      set_redeem_status: {
        status: 'bool'
      }
    }
  },
  /**
   * Lookup517: to_ethereum_backing::pallet::RedeemFor
   **/
  ToEthereumBackingRedeemFor: {
    _enum: ['Token', 'Deposit']
  },
  /**
   * Lookup519: darwinia_evm::pallet::Call<T>
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
   * Lookup522: darwinia_ethereum::pallet::Call<T>
   **/
  DarwiniaEthereumCall: {
    _enum: {
      transact: {
        transaction: 'EthereumTransactionTransactionV2',
      },
      message_transact: {
        transaction: 'EthereumTransactionTransactionV2',
      },
      root_transact: {
        target: 'H160',
        input: 'Bytes'
      }
    }
  },
  /**
   * Lookup523: ethereum::transaction::TransactionV2
   **/
  EthereumTransactionTransactionV2: {
    _enum: {
      Legacy: 'EthereumTransactionLegacyTransaction',
      EIP2930: 'EthereumTransactionEip2930Transaction',
      EIP1559: 'EthereumTransactionEip1559Transaction'
    }
  },
  /**
   * Lookup524: ethereum::transaction::LegacyTransaction
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
   * Lookup525: ethereum::transaction::TransactionAction
   **/
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
   * Lookup526: ethereum::transaction::TransactionSignature
   **/
  EthereumTransactionTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup528: ethereum::transaction::EIP2930Transaction
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
   * Lookup530: ethereum::transaction::AccessListItem
   **/
  EthereumTransactionAccessListItem: {
    address: 'H160',
    slots: 'Vec<H256>'
  },
  /**
   * Lookup531: ethereum::transaction::EIP1559Transaction
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
   * Lookup532: pallet_base_fee::pallet::Call<T>
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
   * Lookup533: pallet_bridge_grandpa::pallet::Call<T, I>
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
   * Lookup534: bp_header_chain::justification::GrandpaJustification<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  BpHeaderChainJustificationGrandpaJustification: {
    round: 'u64',
    commit: 'FinalityGrandpaCommit',
    votesAncestries: 'Vec<SpRuntimeHeader>'
  },
  /**
   * Lookup535: finality_grandpa::Commit<primitive_types::H256, N, sp_finality_grandpa::app::Signature, sp_finality_grandpa::app::Public>
   **/
  FinalityGrandpaCommit: {
    targetHash: 'H256',
    targetNumber: 'u32',
    precommits: 'Vec<FinalityGrandpaSignedPrecommit>'
  },
  /**
   * Lookup537: finality_grandpa::SignedPrecommit<primitive_types::H256, N, sp_finality_grandpa::app::Signature, sp_finality_grandpa::app::Public>
   **/
  FinalityGrandpaSignedPrecommit: {
    precommit: 'FinalityGrandpaPrecommit',
    signature: 'SpFinalityGrandpaAppSignature',
    id: 'SpFinalityGrandpaAppPublic'
  },
  /**
   * Lookup538: bp_header_chain::InitializationData<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  BpHeaderChainInitializationData: {
    header: 'SpRuntimeHeader',
    authorityList: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    setId: 'u64',
    isHalted: 'bool'
  },
  /**
   * Lookup539: pallet_bridge_messages::pallet::Call<T, I>
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
        parameter: 'PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter',
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
   * Lookup540: bp_messages::OperatingMode
   **/
  BpMessagesOperatingMode: {
    _enum: ['Normal', 'RejectingOutboundMessages', 'Halted']
  },
  /**
   * Lookup541: bp_message_dispatch::MessagePayload<sp_core::crypto::AccountId32, sp_runtime::MultiSigner, sp_runtime::MultiSignature, Call>
   **/
  BpMessageDispatchMessagePayload: {
    specVersion: 'u32',
    weight: 'u64',
    origin: 'BpMessageDispatchCallOrigin',
    dispatchFeePayment: 'BpRuntimeMessagesDispatchFeePayment',
    call: 'Bytes'
  },
  /**
   * Lookup542: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic'
    }
  },
  /**
   * Lookup543: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup544: bp_message_dispatch::CallOrigin<sp_core::crypto::AccountId32, sp_runtime::MultiSigner, sp_runtime::MultiSignature>
   **/
  BpMessageDispatchCallOrigin: {
    _enum: {
      SourceRoot: 'Null',
      TargetAccount: '(AccountId32,SpRuntimeMultiSigner,SpRuntimeMultiSignature)',
      SourceAccount: 'AccountId32'
    }
  },
  /**
   * Lookup545: bp_runtime::messages::DispatchFeePayment
   **/
  BpRuntimeMessagesDispatchFeePayment: {
    _enum: ['AtSourceChain', 'AtTargetChain']
  },
  /**
   * Lookup546: bridge_runtime_common::messages::target::FromBridgedChainMessagesProof<primitive_types::H256>
   **/
  BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof: {
    bridgedHeaderHash: 'H256',
    storageProof: 'Vec<Bytes>',
    lane: '[u8;4]',
    noncesStart: 'u64',
    noncesEnd: 'u64'
  },
  /**
   * Lookup547: bridge_runtime_common::messages::source::FromBridgedChainMessagesDeliveryProof<primitive_types::H256>
   **/
  BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof: {
    bridgedHeaderHash: 'H256',
    storageProof: 'Vec<Bytes>',
    lane: '[u8;4]'
  },
  /**
   * Lookup548: bp_messages::UnrewardedRelayersState
   **/
  BpMessagesUnrewardedRelayersState: {
    unrewardedRelayerEntries: 'u64',
    messagesInOldestEntry: 'u64',
    totalMessages: 'u64'
  },
  /**
   * Lookup550: pallet_bridge_parachains::pallet::Call<T, I>
   **/
  PalletBridgeParachainsCall: {
    _enum: {
      submit_parachain_heads: {
        relayBlockHash: 'H256',
        parachains: 'Vec<u32>',
        parachainHeadsProof: 'Vec<Bytes>'
      }
    }
  },
  /**
   * Lookup554: pallet_fee_market::pallet::Call<T, I>
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
   * Lookup556: module_transaction_pause::module::Call<T>
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
   * Lookup557: from_substrate_issuing::pallet::Call<T>
   **/
  FromSubstrateIssuingCall: {
    _enum: {
      register_from_remote: {
        tokenMetadata: 'DpAssetTokenMetadata',
      },
      issue_from_remote: {
        tokenAddress: 'H160',
        amount: 'U256',
        recipient: 'H160',
      },
      set_mapping_factory_address: {
        address: 'H160',
      },
      set_remote_backing_account: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup558: dp_asset::TokenMetadata
   **/
  DpAssetTokenMetadata: {
    tokenType: 'u32',
    address: 'H160',
    name: 'Bytes',
    symbol: 'Bytes',
    decimal: 'u8'
  },
  /**
   * Lookup559: to_parachain_backing::pallet::Call<T>
   **/
  ToParachainBackingCall: {
    _enum: {
      lock_and_remote_issue: {
        specVersion: 'u32',
        weight: 'u64',
        value: 'Compact<u128>',
        fee: 'Compact<u128>',
        recipient: 'AccountId32',
      },
      unlock_from_remote: {
        amount: 'u128',
        recipient: 'AccountId32',
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
   * Lookup560: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup561: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup565: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup566: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup567: pallet_elections_phragmen::pallet::Error<T>
   **/
  PalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'ReportSelf', 'DuplicatedCandidate', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup568: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember']
  },
  /**
   * Lookup569: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup571: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup572: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals']
  },
  /**
   * Lookup574: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
   **/
  PalletTipsOpenTip: {
    reason: 'H256',
    who: 'AccountId32',
    finder: 'AccountId32',
    deposit: 'u128',
    closes: 'Option<u32>',
    tips: 'Vec<(AccountId32,u128)>',
    findersFee: 'bool'
  },
  /**
   * Lookup575: pallet_tips::pallet::Error<T>
   **/
  PalletTipsError: {
    _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'NotFinder', 'StillOpen', 'Premature']
  },
  /**
   * Lookup576: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup577: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup578: pallet_bounties::pallet::Error<T>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature']
  },
  /**
   * Lookup579: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup582: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup583: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup584: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup585: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup593: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup595: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned']
  },
  /**
   * Lookup597: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBid: {
    who: 'AccountId32',
    kind: 'PalletSocietyBidKind',
    value: 'u128'
  },
  /**
   * Lookup598: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup600: pallet_society::VouchingStatus
   **/
  PalletSocietyVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup604: pallet_society::Vote
   **/
  PalletSocietyVote: {
    _enum: ['Skeptic', 'Reject', 'Approve']
  },
  /**
   * Lookup605: pallet_society::pallet::Error<T, I>
   **/
  PalletSocietyError: {
    _enum: ['BadPosition', 'NotMember', 'AlreadyMember', 'Suspended', 'NotSuspended', 'NoPayout', 'AlreadyFounded', 'InsufficientPot', 'AlreadyVouching', 'NotVouching', 'Head', 'Founder', 'AlreadyBid', 'AlreadyCandidate', 'NotCandidate', 'MaxMembers', 'NotFounder', 'NotHead']
  },
  /**
   * Lookup606: pallet_recovery::RecoveryConfig<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletRecoveryRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>',
    threshold: 'u16'
  },
  /**
   * Lookup607: pallet_recovery::ActiveRecovery<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletRecoveryActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>'
  },
  /**
   * Lookup608: pallet_recovery::pallet::Error<T>
   **/
  PalletRecoveryError: {
    _enum: ['NotAllowed', 'ZeroThreshold', 'NotEnoughFriends', 'MaxFriends', 'NotSorted', 'NotRecoverable', 'AlreadyRecoverable', 'AlreadyStarted', 'NotStarted', 'NotFriend', 'DelayPeriod', 'AlreadyVouched', 'Threshold', 'StillActive', 'AlreadyProxy', 'BadState']
  },
  /**
   * Lookup611: pallet_scheduler::ScheduledV2<pangolin_runtime::Call, BlockNumber, pangolin_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduledV2: {
    maybeId: 'Option<Bytes>',
    priority: 'u8',
    call: 'Call',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'PangolinRuntimeOriginCaller'
  },
  /**
   * Lookup612: pallet_scheduler::Releases
   **/
  PalletSchedulerReleases: {
    _enum: ['V1', 'V2']
  },
  /**
   * Lookup613: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange']
  },
  /**
   * Lookup616: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, pangolin_runtime::pallets::proxy::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'PangolinRuntimePalletsProxyProxyType',
    delay: 'u32'
  },
  /**
   * Lookup620: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup622: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup624: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup626: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup629: dp_relayer_game::RelayVotingState<sp_core::crypto::AccountId32>
   **/
  DpRelayerGameRelayVotingState: {
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>'
  },
  /**
   * Lookup630: darwinia_bridge_ethereum::Error<T>
   **/
  DarwiniaBridgeEthereumError: {
    _enum: ['HeaderInv', 'ConfirmedBlocksC', 'ContinuousInv', 'AffirmationExisted', 'HeaderHashInv', 'MMRInv', 'HeaderHashMis', 'ConfirmedHeaderNE', 'ReceiptProofInv', 'PendingRelayHeaderParcelNE', 'PendingRelayHeaderParcelAE', 'AlreadyVoteForAyeDup', 'AlreadyVoteForNayDup']
  },
  /**
   * Lookup632: to_ethereum_backing::pallet::Error<T>
   **/
  ToEthereumBackingError: {
    _enum: ['AddrLenMis', 'PubkeyPrefixMis', 'BytesCF', 'IntCF', 'ArrayCF', 'AddressCF', 'AssetAR', 'AuthoritiesChangeAR', 'EthLogPF', 'KtonLockedNSBA', 'RingLockedNSBA', 'LogEntryNE', 'RedeemDis', 'RingLockLim', 'KtonLockLim']
  },
  /**
   * Lookup635: dp_relayer_game::RelayAffirmation<darwinia_bridge_ethereum::EthereumRelayHeaderParcel, sp_core::crypto::AccountId32, Balance, RelayHeaderId>
   **/
  DpRelayerGameRelayAffirmation: {
    relayer: 'AccountId32',
    relayHeaderParcels: 'Vec<DarwiniaBridgeEthereumEthereumRelayHeaderParcel>',
    stake: 'u128',
    maybeExtendedRelayAffirmationId: 'Option<DpRelayerGameRelayAffirmationId>',
    verifiedOnChain: 'bool'
  },
  /**
   * Lookup638: darwinia_relayer_game::Error<T, I>
   **/
  DarwiniaRelayerGameError: {
    _enum: ['RelayParcelAR', 'RoundMis', 'ActiveGamesTM', 'ExistedAffirmationsFoundC', 'GameAtThisRoundC', 'RelayAffirmationDup', 'StakeIns', 'RelayProofsQuantityInv', 'RelayAffirmationNE', 'ExtendedRelayAffirmationNE', 'PreviousRelayProofsInc', 'PendingRelayParcelNE']
  },
  /**
   * Lookup640: darwinia_evm::pallet::Error<T>
   **/
  DarwiniaEvmError: {
    _enum: ['BalanceLow', 'FeeOverflow', 'PaymentOverflow', 'WithdrawFailed', 'GasPriceTooLow', 'InvalidNonce']
  },
  /**
   * Lookup643: fp_rpc::TransactionStatus
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
   * Lookup646: ethereum::receipt::ReceiptV3
   **/
  EthereumReceiptReceiptV3: {
    _enum: {
      Legacy: 'EthereumReceiptEip658ReceiptData',
      EIP2930: 'EthereumReceiptEip658ReceiptData',
      EIP1559: 'EthereumReceiptEip658ReceiptData'
    }
  },
  /**
   * Lookup647: ethereum::receipt::EIP658ReceiptData
   **/
  EthereumReceiptEip658ReceiptData: {
    statusCode: 'u8',
    usedGas: 'U256',
    logsBloom: 'EthbloomBloom',
    logs: 'Vec<EthereumLog>'
  },
  /**
   * Lookup648: ethereum::block::Block<ethereum::transaction::TransactionV2>
   **/
  EthereumBlock: {
    header: 'EthereumHeader',
    transactions: 'Vec<EthereumTransactionTransactionV2>',
    ommers: 'Vec<EthereumHeader>'
  },
  /**
   * Lookup649: ethereum::header::Header
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
   * Lookup650: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup655: darwinia_ethereum::pallet::Error<T>
   **/
  DarwiniaEthereumError: {
    _enum: ['InvalidSignature', 'PreLogExists', 'InternalTransactionExitError', 'InternalTransactionRevertError', 'InternalTransactionFatalError', 'ReadyOnlyCall', 'MessageTransactionError', 'MessageValidateError']
  },
  /**
   * Lookup656: bp_header_chain::AuthoritySet
   **/
  BpHeaderChainAuthoritySet: {
    authorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    setId: 'u64'
  },
  /**
   * Lookup657: pallet_bridge_grandpa::pallet::Error<T, I>
   **/
  PalletBridgeGrandpaError: {
    _enum: ['InvalidJustification', 'InvalidAuthoritySet', 'TooManyRequests', 'OldHeader', 'UnknownHeader', 'UnsupportedScheduledChange', 'NotInitialized', 'AlreadyInitialized', 'Halted', 'StorageRootMismatch']
  },
  /**
   * Lookup658: bp_messages::InboundLaneData<sp_core::crypto::AccountId32>
   **/
  BpMessagesInboundLaneData: {
    relayers: 'Vec<BpMessagesUnrewardedRelayer>',
    lastConfirmedNonce: 'u64'
  },
  /**
   * Lookup660: bp_messages::UnrewardedRelayer<sp_core::crypto::AccountId32>
   **/
  BpMessagesUnrewardedRelayer: {
    relayer: 'AccountId32',
    messages: 'BpMessagesDeliveredMessages'
  },
  /**
   * Lookup661: bp_messages::OutboundLaneData
   **/
  BpMessagesOutboundLaneData: {
    oldestUnprunedNonce: 'u64',
    latestReceivedNonce: 'u64',
    latestGeneratedNonce: 'u64'
  },
  /**
   * Lookup662: bp_messages::MessageKey
   **/
  BpMessagesMessageKey: {
    laneId: '[u8;4]',
    nonce: 'u64'
  },
  /**
   * Lookup663: bp_messages::MessageData<Fee>
   **/
  BpMessagesMessageData: {
    payload: 'Bytes',
    fee: 'u128'
  },
  /**
   * Lookup664: pallet_bridge_messages::pallet::Error<T, I>
   **/
  PalletBridgeMessagesError: {
    _enum: ['Halted', 'MessageRejectedByChainVerifier', 'MessageRejectedByLaneVerifier', 'FailedToWithdrawMessageFee', 'TooManyMessagesInTheProof', 'InvalidMessagesProof', 'InvalidMessagesDeliveryProof', 'InvalidUnrewardedRelayers', 'InvalidUnrewardedRelayersState', 'MessageIsAlreadyDelivered', 'MessageIsNotYetSent', 'TryingToConfirmMoreMessagesThanExpected']
  },
  /**
   * Lookup666: pallet_bridge_parachains::BestParaHead
   **/
  PalletBridgeParachainsBestParaHead: {
    atRelayBlockNumber: 'u32',
    headHash: 'H256',
    nextImportedHashPosition: 'u32'
  },
  /**
   * Lookup670: pallet_bridge_parachains::pallet::Error<T, I>
   **/
  PalletBridgeParachainsError: {
    _enum: ['UnknownRelayChainBlock', 'InvalidStorageProof', 'UnknownParaHead', 'StorageRootMismatch', 'FailedToExtractStateRoot']
  },
  /**
   * Lookup672: pallet_fee_market::types::Relayer<sp_core::crypto::AccountId32, Balance>
   **/
  PalletFeeMarketRelayer: {
    id: 'AccountId32',
    collateral: 'u128',
    fee: 'u128'
  },
  /**
   * Lookup674: pallet_fee_market::types::Order<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PalletFeeMarketOrder: {
    lane: '[u8;4]',
    message: 'u64',
    sentTime: 'u32',
    confirmTime: 'Option<u32>',
    lockedCollateral: 'u128',
    assignedRelayers: 'Vec<PalletFeeMarketAssignedRelayer>'
  },
  /**
   * Lookup676: pallet_fee_market::types::AssignedRelayer<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PalletFeeMarketAssignedRelayer: {
    id: 'AccountId32',
    fee: 'u128',
    validRange: 'Range<u32>'
  },
  /**
   * Lookup678: pallet_fee_market::pallet::Error<T, I>
   **/
  PalletFeeMarketError: {
    _enum: ['InsufficientBalance', 'AlreadyEnrolled', 'NotEnrolled', 'CollateralTooLow', 'StillHasOrdersNotConfirmed', 'RelayFeeTooLow', 'OccupiedRelayer']
  },
  /**
   * Lookup680: module_transaction_pause::module::Error<T>
   **/
  ModuleTransactionPauseModuleError: {
    _enum: ['CannotPause', 'InvalidCharacter']
  },
  /**
   * Lookup681: from_substrate_issuing::pallet::Error<T>
   **/
  FromSubstrateIssuingError: {
    _enum: ['TokenUnregistered', 'InvalidIssuingAccount', 'StringCF', 'InvalidEncodeERC20', 'InvalidIssueEncoding', 'InvalidAddressLen', 'InvalidMessageSender']
  },
  /**
   * Lookup683: to_parachain_backing::pallet::Error<T>
   **/
  ToParachainBackingError: {
    _enum: ['InsufficientBalance', 'RingLockLimited', 'RingDailyLimited', 'NonceDuplicated']
  },
  /**
   * Lookup686: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup687: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup688: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup691: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup692: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup693: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup694: darwinia_bridge_ethereum::CheckEthereumRelayHeaderParcel<pangolin_runtime::Runtime>
   **/
  DarwiniaBridgeEthereumCheckEthereumRelayHeaderParcel: 'Null',
  /**
   * Lookup695: pangolin_runtime::Runtime
   **/
  PangolinRuntimeRuntime: 'Null'
};
