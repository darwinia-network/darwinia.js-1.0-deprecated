// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

declare module '@polkadot/types/lookup' {
  import type { Data } from '@polkadot/types';
  import type { BTreeMap, BitVec, Bytes, Compact, Enum, Null, Option, Range, Result, Set, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
  import type { ITuple } from '@polkadot/types-codec/types';
  import type { Vote } from '@polkadot/types/interfaces/elections';
  import type { AccountId32, Call, H160, H256, H512, MultiAddress, PerU16, Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
  import type { Event } from '@polkadot/types/interfaces/system';

  /** @name FrameSystemAccountInfo (3) */
  export interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: DrmlCommonRuntimeImplsAccountData;
  }

  /** @name DrmlCommonRuntimeImplsAccountData (5) */
  export interface DrmlCommonRuntimeImplsAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly freeKton: u128;
    readonly reservedKton: u128;
  }

  /** @name FrameSupportWeightsPerDispatchClassU64 (7) */
  export interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
    readonly normal: u64;
    readonly operational: u64;
    readonly mandatory: u64;
  }

  /** @name SpRuntimeDigest (11) */
  export interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (13) */
  export interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isChangesTrieRoot: boolean;
    readonly asChangesTrieRoot: H256;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isChangesTrieSignal: boolean;
    readonly asChangesTrieSignal: SpRuntimeDigestChangesTrieSignal;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'ChangesTrieRoot' | 'Consensus' | 'Seal' | 'PreRuntime' | 'ChangesTrieSignal' | 'RuntimeEnvironmentUpdated';
  }

  /** @name SpRuntimeDigestChangesTrieSignal (15) */
  export interface SpRuntimeDigestChangesTrieSignal extends Enum {
    readonly isNewConfiguration: boolean;
    readonly asNewConfiguration: Option<SpCoreChangesTrieChangesTrieConfiguration>;
    readonly type: 'NewConfiguration';
  }

  /** @name SpCoreChangesTrieChangesTrieConfiguration (17) */
  export interface SpCoreChangesTrieChangesTrieConfiguration extends Struct {
    readonly digestInterval: u32;
    readonly digestLevels: u32;
  }

  /** @name FrameSystemEventRecord (19) */
  export interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
  export interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: FrameSupportWeightsDispatchInfo;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: ITuple<[SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: AccountId32;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: AccountId32;
    readonly isRemarked: boolean;
    readonly asRemarked: ITuple<[AccountId32, H256]>;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportWeightsDispatchInfo (22) */
  export interface FrameSupportWeightsDispatchInfo extends Struct {
    readonly weight: u64;
    readonly class: FrameSupportWeightsDispatchClass;
    readonly paysFee: FrameSupportWeightsPays;
  }

  /** @name FrameSupportWeightsDispatchClass (23) */
  export interface FrameSupportWeightsDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportWeightsPays (24) */
  export interface FrameSupportWeightsPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
  export interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: {
      readonly index: u8;
      readonly error: u8;
    } & Struct;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'Token' | 'Arithmetic';
  }

  /** @name SpRuntimeTokenError (26) */
  export interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (27) */
  export interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name DarwiniaBalancesEvent (28) */
  export interface DarwiniaBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: ITuple<[AccountId32, u128]>;
    readonly isDustLost: boolean;
    readonly asDustLost: ITuple<[AccountId32, u128]>;
    readonly isTransfer: boolean;
    readonly asTransfer: ITuple<[AccountId32, AccountId32, u128]>;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: ITuple<[AccountId32, u128, u128]>;
    readonly isDeposit: boolean;
    readonly asDeposit: ITuple<[AccountId32, u128]>;
    readonly isReserved: boolean;
    readonly asReserved: ITuple<[AccountId32, u128]>;
    readonly isUnreserved: boolean;
    readonly asUnreserved: ITuple<[AccountId32, u128]>;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: ITuple<[AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Deposit' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (29) */
  export interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletElectionProviderMultiPhaseEvent (31) */
  export interface PalletElectionProviderMultiPhaseEvent extends Enum {
    readonly isSolutionStored: boolean;
    readonly asSolutionStored: ITuple<[PalletElectionProviderMultiPhaseElectionCompute, bool]>;
    readonly isElectionFinalized: boolean;
    readonly asElectionFinalized: Option<PalletElectionProviderMultiPhaseElectionCompute>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[AccountId32, u128]>;
    readonly isSlashed: boolean;
    readonly asSlashed: ITuple<[AccountId32, u128]>;
    readonly isSignedPhaseStarted: boolean;
    readonly asSignedPhaseStarted: u32;
    readonly isUnsignedPhaseStarted: boolean;
    readonly asUnsignedPhaseStarted: u32;
    readonly type: 'SolutionStored' | 'ElectionFinalized' | 'Rewarded' | 'Slashed' | 'SignedPhaseStarted' | 'UnsignedPhaseStarted';
  }

  /** @name PalletElectionProviderMultiPhaseElectionCompute (32) */
  export interface PalletElectionProviderMultiPhaseElectionCompute extends Enum {
    readonly isOnChain: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly isFallback: boolean;
    readonly isEmergency: boolean;
    readonly type: 'OnChain' | 'Signed' | 'Unsigned' | 'Fallback' | 'Emergency';
  }

  /** @name DarwiniaStakingEvent (35) */
  export interface DarwiniaStakingEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: ITuple<[u32, u128, u128]>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[AccountId32, u128]>;
    readonly isSlashed: boolean;
    readonly asSlashed: ITuple<[AccountId32, u128, u128]>;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: u32;
    readonly isStakersElected: boolean;
    readonly isRingBonded: boolean;
    readonly asRingBonded: ITuple<[AccountId32, u128, u64, u64]>;
    readonly isKtonBonded: boolean;
    readonly asKtonBonded: ITuple<[AccountId32, u128]>;
    readonly isRingUnbonded: boolean;
    readonly asRingUnbonded: ITuple<[AccountId32, u128]>;
    readonly isKtonUnbonded: boolean;
    readonly asKtonUnbonded: ITuple<[AccountId32, u128]>;
    readonly isKicked: boolean;
    readonly asKicked: ITuple<[AccountId32, AccountId32]>;
    readonly isStakingElectionFailed: boolean;
    readonly isChilled: boolean;
    readonly asChilled: AccountId32;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: ITuple<[u32, AccountId32]>;
    readonly isDepositsClaimed: boolean;
    readonly asDepositsClaimed: AccountId32;
    readonly isDepositsClaimedWithPunish: boolean;
    readonly asDepositsClaimedWithPunish: ITuple<[AccountId32, u128]>;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'OldSlashingReportDiscarded' | 'StakersElected' | 'RingBonded' | 'KtonBonded' | 'RingUnbonded' | 'KtonUnbonded' | 'Kicked' | 'StakingElectionFailed' | 'Chilled' | 'PayoutStarted' | 'DepositsClaimed' | 'DepositsClaimedWithPunish';
  }

  /** @name PalletOffencesEvent (36) */
  export interface PalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: ITuple<[U8aFixed, Bytes]>;
    readonly type: 'Offence';
  }

  /** @name PalletSessionEvent (38) */
  export interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: u32;
    readonly type: 'NewSession';
  }

  /** @name PalletGrandpaEvent (39) */
  export interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (42) */
  export interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (43) */
  export interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletImOnlineEvent (44) */
  export interface PalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: PalletImOnlineSr25519AppSr25519Public;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: Vec<ITuple<[AccountId32, DarwiniaStakingStructsExposure]>>;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PalletImOnlineSr25519AppSr25519Public (45) */
  export interface PalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (46) */
  export interface SpCoreSr25519Public extends U8aFixed {}

  /** @name DarwiniaStakingStructsExposure (49) */
  export interface DarwiniaStakingStructsExposure extends Struct {
    readonly ownRingBalance: Compact<u128>;
    readonly ownKtonBalance: Compact<u128>;
    readonly ownPower: u32;
    readonly totalPower: u32;
    readonly others: Vec<DarwiniaStakingStructsIndividualExposure>;
  }

  /** @name DarwiniaStakingStructsIndividualExposure (52) */
  export interface DarwiniaStakingStructsIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly ringBalance: Compact<u128>;
    readonly ktonBalance: Compact<u128>;
    readonly power: u32;
  }

  /** @name PalletDemocracyEvent (53) */
  export interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: ITuple<[u32, u128]>;
    readonly isTabled: boolean;
    readonly asTabled: ITuple<[u32, u128, Vec<AccountId32>]>;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: ITuple<[u32, PalletDemocracyVoteThreshold]>;
    readonly isPassed: boolean;
    readonly asPassed: u32;
    readonly isNotPassed: boolean;
    readonly asNotPassed: u32;
    readonly isCancelled: boolean;
    readonly asCancelled: u32;
    readonly isExecuted: boolean;
    readonly asExecuted: ITuple<[u32, Result<Null, SpRuntimeDispatchError>]>;
    readonly isDelegated: boolean;
    readonly asDelegated: ITuple<[AccountId32, AccountId32]>;
    readonly isUndelegated: boolean;
    readonly asUndelegated: AccountId32;
    readonly isVetoed: boolean;
    readonly asVetoed: ITuple<[AccountId32, H256, u32]>;
    readonly isPreimageNoted: boolean;
    readonly asPreimageNoted: ITuple<[H256, AccountId32, u128]>;
    readonly isPreimageUsed: boolean;
    readonly asPreimageUsed: ITuple<[H256, AccountId32, u128]>;
    readonly isPreimageInvalid: boolean;
    readonly asPreimageInvalid: ITuple<[H256, u32]>;
    readonly isPreimageMissing: boolean;
    readonly asPreimageMissing: ITuple<[H256, u32]>;
    readonly isPreimageReaped: boolean;
    readonly asPreimageReaped: ITuple<[H256, AccountId32, u128, AccountId32]>;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: H256;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Executed' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'PreimageNoted' | 'PreimageUsed' | 'PreimageInvalid' | 'PreimageMissing' | 'PreimageReaped' | 'Blacklisted';
  }

  /** @name PalletDemocracyVoteThreshold (55) */
  export interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletCollectiveEvent (58) */
  export interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: ITuple<[AccountId32, u32, H256, u32]>;
    readonly isVoted: boolean;
    readonly asVoted: ITuple<[AccountId32, H256, bool, u32, u32]>;
    readonly isApproved: boolean;
    readonly asApproved: H256;
    readonly isDisapproved: boolean;
    readonly asDisapproved: H256;
    readonly isExecuted: boolean;
    readonly asExecuted: ITuple<[H256, Result<Null, SpRuntimeDispatchError>]>;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: ITuple<[H256, Result<Null, SpRuntimeDispatchError>]>;
    readonly isClosed: boolean;
    readonly asClosed: ITuple<[H256, u32, u32]>;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletElectionsPhragmenEvent (60) */
  export interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: Vec<ITuple<[AccountId32, u128]>>;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: AccountId32;
    readonly isRenounced: boolean;
    readonly asRenounced: AccountId32;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: ITuple<[AccountId32, u128]>;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: ITuple<[AccountId32, u128]>;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletMembershipEvent (63) */
  export interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletTreasuryEvent (64) */
  export interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: u32;
    readonly isSpending: boolean;
    readonly asSpending: u128;
    readonly isAwarded: boolean;
    readonly asAwarded: ITuple<[u32, u128, AccountId32]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, u128]>;
    readonly isBurnt: boolean;
    readonly asBurnt: u128;
    readonly isRollover: boolean;
    readonly asRollover: u128;
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit';
  }

  /** @name PalletTipsEvent (66) */
  export interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: H256;
    readonly isTipClosing: boolean;
    readonly asTipClosing: H256;
    readonly isTipClosed: boolean;
    readonly asTipClosed: ITuple<[H256, AccountId32, u128]>;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: H256;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: ITuple<[H256, AccountId32, u128]>;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PalletBountiesEvent (67) */
  export interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: u32;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: ITuple<[u32, u128]>;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: u32;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: ITuple<[u32, AccountId32]>;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: ITuple<[u32, u128, AccountId32]>;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: u32;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: u32;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletSudoEvent (68) */
  export interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: Result<Null, SpRuntimeDispatchError>;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: AccountId32;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: Result<Null, SpRuntimeDispatchError>;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name DarwiniaClaimsRawEvent (69) */
  export interface DarwiniaClaimsRawEvent extends Enum {
    readonly isClaimed: boolean;
    readonly asClaimed: ITuple<[AccountId32, U8aFixed, u128]>;
    readonly type: 'Claimed';
  }

  /** @name PalletVestingEvent (71) */
  export interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: ITuple<[AccountId32, u128]>;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: AccountId32;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletUtilityEvent (72) */
  export interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: ITuple<[u32, SpRuntimeDispatchError]>;
    readonly isBatchCompleted: boolean;
    readonly isItemCompleted: boolean;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'ItemCompleted';
  }

  /** @name PalletIdentityEvent (73) */
  export interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: AccountId32;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: ITuple<[AccountId32, u128]>;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: ITuple<[AccountId32, u128]>;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: ITuple<[AccountId32, u32]>;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: ITuple<[AccountId32, u32]>;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: ITuple<[AccountId32, u32]>;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: u32;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: ITuple<[AccountId32, AccountId32, u128]>;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: ITuple<[AccountId32, AccountId32, u128]>;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: ITuple<[AccountId32, AccountId32, u128]>;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletSocietyEvent (74) */
  export interface PalletSocietyEvent extends Enum {
    readonly isFounded: boolean;
    readonly asFounded: AccountId32;
    readonly isBid: boolean;
    readonly asBid: ITuple<[AccountId32, u128]>;
    readonly isVouch: boolean;
    readonly asVouch: ITuple<[AccountId32, u128, AccountId32]>;
    readonly isAutoUnbid: boolean;
    readonly asAutoUnbid: AccountId32;
    readonly isUnbid: boolean;
    readonly asUnbid: AccountId32;
    readonly isUnvouch: boolean;
    readonly asUnvouch: AccountId32;
    readonly isInducted: boolean;
    readonly asInducted: ITuple<[AccountId32, Vec<AccountId32>]>;
    readonly isSuspendedMemberJudgement: boolean;
    readonly asSuspendedMemberJudgement: ITuple<[AccountId32, bool]>;
    readonly isCandidateSuspended: boolean;
    readonly asCandidateSuspended: AccountId32;
    readonly isMemberSuspended: boolean;
    readonly asMemberSuspended: AccountId32;
    readonly isChallenged: boolean;
    readonly asChallenged: AccountId32;
    readonly isVote: boolean;
    readonly asVote: ITuple<[AccountId32, AccountId32, bool]>;
    readonly isDefenderVote: boolean;
    readonly asDefenderVote: ITuple<[AccountId32, bool]>;
    readonly isNewMaxMembers: boolean;
    readonly asNewMaxMembers: u32;
    readonly isUnfounded: boolean;
    readonly asUnfounded: AccountId32;
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly type: 'Founded' | 'Bid' | 'Vouch' | 'AutoUnbid' | 'Unbid' | 'Unvouch' | 'Inducted' | 'SuspendedMemberJudgement' | 'CandidateSuspended' | 'MemberSuspended' | 'Challenged' | 'Vote' | 'DefenderVote' | 'NewMaxMembers' | 'Unfounded' | 'Deposit';
  }

  /** @name PalletRecoveryEvent (75) */
  export interface PalletRecoveryEvent extends Enum {
    readonly isRecoveryCreated: boolean;
    readonly asRecoveryCreated: AccountId32;
    readonly isRecoveryInitiated: boolean;
    readonly asRecoveryInitiated: ITuple<[AccountId32, AccountId32]>;
    readonly isRecoveryVouched: boolean;
    readonly asRecoveryVouched: ITuple<[AccountId32, AccountId32, AccountId32]>;
    readonly isRecoveryClosed: boolean;
    readonly asRecoveryClosed: ITuple<[AccountId32, AccountId32]>;
    readonly isAccountRecovered: boolean;
    readonly asAccountRecovered: ITuple<[AccountId32, AccountId32]>;
    readonly isRecoveryRemoved: boolean;
    readonly asRecoveryRemoved: AccountId32;
    readonly type: 'RecoveryCreated' | 'RecoveryInitiated' | 'RecoveryVouched' | 'RecoveryClosed' | 'AccountRecovered' | 'RecoveryRemoved';
  }

  /** @name PalletSchedulerEvent (76) */
  export interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: ITuple<[u32, u32]>;
    readonly isCanceled: boolean;
    readonly asCanceled: ITuple<[u32, u32]>;
    readonly isDispatched: boolean;
    readonly asDispatched: ITuple<[ITuple<[u32, u32]>, Option<Bytes>, Result<Null, SpRuntimeDispatchError>]>;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched';
  }

  /** @name PalletProxyEvent (79) */
  export interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: Result<Null, SpRuntimeDispatchError>;
    readonly isAnonymousCreated: boolean;
    readonly asAnonymousCreated: ITuple<[AccountId32, AccountId32, PangolinRuntimePalletsProxyProxyType, u16]>;
    readonly isAnnounced: boolean;
    readonly asAnnounced: ITuple<[AccountId32, AccountId32, H256]>;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: ITuple<[AccountId32, AccountId32, PangolinRuntimePalletsProxyProxyType, u32]>;
    readonly type: 'ProxyExecuted' | 'AnonymousCreated' | 'Announced' | 'ProxyAdded';
  }

  /** @name PangolinRuntimePalletsProxyProxyType (80) */
  export interface PangolinRuntimePalletsProxyProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isEthereumBridge: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'EthereumBridge';
  }

  /** @name PalletMultisigEvent (82) */
  export interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: ITuple<[AccountId32, AccountId32, U8aFixed]>;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: ITuple<[AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: ITuple<[AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed, Result<Null, SpRuntimeDispatchError>]>;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: ITuple<[AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (83) */
  export interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name DarwiniaBridgeEthereumRawEvent (84) */
  export interface DarwiniaBridgeEthereumRawEvent extends Enum {
    readonly isAffirmed: boolean;
    readonly asAffirmed: ITuple<[AccountId32, DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId]>;
    readonly isDisputedAndAffirmed: boolean;
    readonly asDisputedAndAffirmed: ITuple<[AccountId32, DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId]>;
    readonly isExtended: boolean;
    readonly asExtended: ITuple<[AccountId32, DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId]>;
    readonly isNewRound: boolean;
    readonly asNewRound: ITuple<[u64, Vec<u64>]>;
    readonly isGameOver: boolean;
    readonly asGameOver: u64;
    readonly isRemoveConfirmedParcel: boolean;
    readonly asRemoveConfirmedParcel: u64;
    readonly isVerifyReceipt: boolean;
    readonly asVerifyReceipt: ITuple<[AccountId32, EthereumPrimitivesReceiptTypedReceipt, EthereumPrimitivesHeader]>;
    readonly isPended: boolean;
    readonly asPended: u64;
    readonly isGuardVoted: boolean;
    readonly asGuardVoted: ITuple<[u64, bool]>;
    readonly isPendingRelayHeaderParcelConfirmed: boolean;
    readonly asPendingRelayHeaderParcelConfirmed: ITuple<[u64, Bytes]>;
    readonly isPendingRelayHeaderParcelRejected: boolean;
    readonly asPendingRelayHeaderParcelRejected: u64;
    readonly type: 'Affirmed' | 'DisputedAndAffirmed' | 'Extended' | 'NewRound' | 'GameOver' | 'RemoveConfirmedParcel' | 'VerifyReceipt' | 'Pended' | 'GuardVoted' | 'PendingRelayHeaderParcelConfirmed' | 'PendingRelayHeaderParcelRejected';
  }

  /** @name DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId (85) */
  export interface DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId extends Struct {
    readonly gameId: u64;
    readonly round: u32;
    readonly index: u32;
  }

  /** @name EthereumPrimitivesReceiptTypedReceipt (87) */
  export interface EthereumPrimitivesReceiptTypedReceipt extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumPrimitivesReceiptLegacyReceipt;
    readonly isAccessList: boolean;
    readonly asAccessList: EthereumPrimitivesReceiptLegacyReceipt;
    readonly isEip1559Transaction: boolean;
    readonly asEip1559Transaction: EthereumPrimitivesReceiptLegacyReceipt;
    readonly type: 'Legacy' | 'AccessList' | 'Eip1559Transaction';
  }

  /** @name EthereumPrimitivesReceiptLegacyReceipt (88) */
  export interface EthereumPrimitivesReceiptLegacyReceipt extends Struct {
    readonly gasUsed: U256;
    readonly logBloom: EthbloomBloom;
    readonly logs: Vec<EthereumPrimitivesLogEntry>;
    readonly outcome: EthereumPrimitivesReceiptTransactionOutcome;
  }

  /** @name EthbloomBloom (91) */
  export interface EthbloomBloom extends U8aFixed {}

  /** @name EthereumPrimitivesLogEntry (94) */
  export interface EthereumPrimitivesLogEntry extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
  }

  /** @name EthereumPrimitivesReceiptTransactionOutcome (97) */
  export interface EthereumPrimitivesReceiptTransactionOutcome extends Enum {
    readonly isUnknown: boolean;
    readonly isStateRoot: boolean;
    readonly asStateRoot: H256;
    readonly isStatusCode: boolean;
    readonly asStatusCode: u8;
    readonly type: 'Unknown' | 'StateRoot' | 'StatusCode';
  }

  /** @name EthereumPrimitivesHeader (98) */
  export interface EthereumPrimitivesHeader extends Struct {
    readonly parentHash: H256;
    readonly timestamp: u64;
    readonly number: u64;
    readonly author: H160;
    readonly transactionsRoot: H256;
    readonly unclesHash: H256;
    readonly extraData: Bytes;
    readonly stateRoot: H256;
    readonly receiptsRoot: H256;
    readonly logBloom: EthbloomBloom;
    readonly gasUsed: U256;
    readonly gasLimit: U256;
    readonly difficulty: U256;
    readonly seal: Vec<Bytes>;
    readonly baseFeePerGas: Option<U256>;
    readonly hash_: Option<H256>;
  }

  /** @name ToEthereumBackingEvent (102) */
  export interface ToEthereumBackingEvent extends Enum {
    readonly isRedeemRing: boolean;
    readonly asRedeemRing: ITuple<[AccountId32, u128, ITuple<[H256, u64]>]>;
    readonly isRedeemKton: boolean;
    readonly asRedeemKton: ITuple<[AccountId32, u128, ITuple<[H256, u64]>]>;
    readonly isRedeemDeposit: boolean;
    readonly asRedeemDeposit: ITuple<[AccountId32, U256, u128, ITuple<[H256, u64]>]>;
    readonly isLockRing: boolean;
    readonly asLockRing: ITuple<[AccountId32, H160, H160, u128]>;
    readonly isLockKton: boolean;
    readonly asLockKton: ITuple<[AccountId32, H160, H160, u128]>;
    readonly type: 'RedeemRing' | 'RedeemKton' | 'RedeemDeposit' | 'LockRing' | 'LockKton';
  }

  /** @name FromEthereumIssuingEvent (104) */
  export interface FromEthereumIssuingEvent extends Enum {
    readonly isTokenRegisterSubmitted: boolean;
    readonly asTokenRegisterSubmitted: ITuple<[H160, ITuple<[H256, u64]>]>;
    readonly isRedeemErc20: boolean;
    readonly asRedeemErc20: ITuple<[H160, ITuple<[H256, u64]>]>;
    readonly isBurnToken: boolean;
    readonly asBurnToken: ITuple<[u8, H160, H160, H160, H160, H160, U256]>;
    readonly isTokenRegisterFinished: boolean;
    readonly asTokenRegisterFinished: ITuple<[u8, H160, H160, H160]>;
    readonly isMappingFactoryAddressUpdated: boolean;
    readonly asMappingFactoryAddressUpdated: ITuple<[H160, H160]>;
    readonly isEthereumBackingAddressUpdated: boolean;
    readonly asEthereumBackingAddressUpdated: ITuple<[H160, H160]>;
    readonly type: 'TokenRegisterSubmitted' | 'RedeemErc20' | 'BurnToken' | 'TokenRegisterFinished' | 'MappingFactoryAddressUpdated' | 'EthereumBackingAddressUpdated';
  }

  /** @name DarwiniaRelayAuthoritiesRawEvent (105) */
  export interface DarwiniaRelayAuthoritiesRawEvent extends Enum {
    readonly isScheduleMMRRoot: boolean;
    readonly asScheduleMMRRoot: u32;
    readonly isMmrRootSigned: boolean;
    readonly asMmrRootSigned: ITuple<[u32, H256, Vec<ITuple<[AccountId32, U8aFixed]>>]>;
    readonly isScheduleAuthoritiesChange: boolean;
    readonly asScheduleAuthoritiesChange: U8aFixed;
    readonly isAuthoritiesChangeSigned: boolean;
    readonly asAuthoritiesChangeSigned: ITuple<[u32, Vec<H160>, Vec<ITuple<[AccountId32, U8aFixed]>>]>;
    readonly isSlashOnMisbehavior: boolean;
    readonly asSlashOnMisbehavior: ITuple<[AccountId32, u128]>;
    readonly type: 'ScheduleMMRRoot' | 'MmrRootSigned' | 'ScheduleAuthoritiesChange' | 'AuthoritiesChangeSigned' | 'SlashOnMisbehavior';
  }

  /** @name DarwiniaRelayAuthoritiesInstance1 (107) */
  export type DarwiniaRelayAuthoritiesInstance1 = Null;

  /** @name DarwiniaEvmEvent (111) */
  export interface DarwiniaEvmEvent extends Enum {
    readonly isLog: boolean;
    readonly asLog: EthereumLog;
    readonly isCreated: boolean;
    readonly asCreated: H160;
    readonly isCreatedFailed: boolean;
    readonly asCreatedFailed: H160;
    readonly isExecuted: boolean;
    readonly asExecuted: H160;
    readonly isExecutedFailed: boolean;
    readonly asExecutedFailed: H160;
    readonly isBalanceDeposit: boolean;
    readonly asBalanceDeposit: ITuple<[AccountId32, H160, U256]>;
    readonly isBalanceWithdraw: boolean;
    readonly asBalanceWithdraw: ITuple<[AccountId32, H160, U256]>;
    readonly type: 'Log' | 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed' | 'BalanceDeposit' | 'BalanceWithdraw';
  }

  /** @name EthereumLog (112) */
  export interface EthereumLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
  }

  /** @name DarwiniaEthereumEvent (113) */
  export interface DarwiniaEthereumEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: ITuple<[H160, H160, H256, EvmCoreErrorExitReason]>;
    readonly isDvmTransfer: boolean;
    readonly asDvmTransfer: ITuple<[AccountId32, AccountId32, U256]>;
    readonly isKtonDVMTransfer: boolean;
    readonly asKtonDVMTransfer: ITuple<[AccountId32, AccountId32, U256]>;
    readonly type: 'Executed' | 'DvmTransfer' | 'KtonDVMTransfer';
  }

  /** @name EvmCoreErrorExitReason (114) */
  export interface EvmCoreErrorExitReason extends Enum {
    readonly isSucceed: boolean;
    readonly asSucceed: EvmCoreErrorExitSucceed;
    readonly isError: boolean;
    readonly asError: EvmCoreErrorExitError;
    readonly isRevert: boolean;
    readonly asRevert: EvmCoreErrorExitRevert;
    readonly isFatal: boolean;
    readonly asFatal: EvmCoreErrorExitFatal;
    readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
  }

  /** @name EvmCoreErrorExitSucceed (115) */
  export interface EvmCoreErrorExitSucceed extends Enum {
    readonly isStopped: boolean;
    readonly isReturned: boolean;
    readonly isSuicided: boolean;
    readonly type: 'Stopped' | 'Returned' | 'Suicided';
  }

  /** @name EvmCoreErrorExitError (116) */
  export interface EvmCoreErrorExitError extends Enum {
    readonly isStackUnderflow: boolean;
    readonly isStackOverflow: boolean;
    readonly isInvalidJump: boolean;
    readonly isInvalidRange: boolean;
    readonly isDesignatedInvalid: boolean;
    readonly isCallTooDeep: boolean;
    readonly isCreateCollision: boolean;
    readonly isCreateContractLimit: boolean;
    readonly isInvalidCode: boolean;
    readonly isOutOfOffset: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutOfFund: boolean;
    readonly isPcUnderflow: boolean;
    readonly isCreateEmpty: boolean;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'InvalidCode' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other';
  }

  /** @name EvmCoreErrorExitRevert (119) */
  export interface EvmCoreErrorExitRevert extends Enum {
    readonly isReverted: boolean;
    readonly type: 'Reverted';
  }

  /** @name EvmCoreErrorExitFatal (120) */
  export interface EvmCoreErrorExitFatal extends Enum {
    readonly isNotSupported: boolean;
    readonly isUnhandledInterrupt: boolean;
    readonly isCallErrorAsFatal: boolean;
    readonly asCallErrorAsFatal: EvmCoreErrorExitError;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
  }

  /** @name PalletBaseFeeEvent (121) */
  export interface PalletBaseFeeEvent extends Enum {
    readonly isNewBaseFeePerGas: boolean;
    readonly asNewBaseFeePerGas: U256;
    readonly isBaseFeeOverflow: boolean;
    readonly isIsActive: boolean;
    readonly asIsActive: bool;
    readonly isNewElasticity: boolean;
    readonly asNewElasticity: Permill;
    readonly type: 'NewBaseFeePerGas' | 'BaseFeeOverflow' | 'IsActive' | 'NewElasticity';
  }

  /** @name PalletBridgeDispatchEvent (123) */
  export interface PalletBridgeDispatchEvent extends Enum {
    readonly isMessageRejected: boolean;
    readonly asMessageRejected: ITuple<[U8aFixed, ITuple<[U8aFixed, u64]>]>;
    readonly isMessageVersionSpecMismatch: boolean;
    readonly asMessageVersionSpecMismatch: ITuple<[U8aFixed, ITuple<[U8aFixed, u64]>, u32, u32]>;
    readonly isMessageWeightMismatch: boolean;
    readonly asMessageWeightMismatch: ITuple<[U8aFixed, ITuple<[U8aFixed, u64]>, u64, u64]>;
    readonly isMessageSignatureMismatch: boolean;
    readonly asMessageSignatureMismatch: ITuple<[U8aFixed, ITuple<[U8aFixed, u64]>]>;
    readonly isMessageCallDecodeFailed: boolean;
    readonly asMessageCallDecodeFailed: ITuple<[U8aFixed, ITuple<[U8aFixed, u64]>]>;
    readonly isMessageCallRejected: boolean;
    readonly asMessageCallRejected: ITuple<[U8aFixed, ITuple<[U8aFixed, u64]>]>;
    readonly isMessageDispatchPaymentFailed: boolean;
    readonly asMessageDispatchPaymentFailed: ITuple<[U8aFixed, ITuple<[U8aFixed, u64]>, AccountId32, u64]>;
    readonly isMessageDispatched: boolean;
    readonly asMessageDispatched: ITuple<[U8aFixed, ITuple<[U8aFixed, u64]>, Result<Null, SpRuntimeDispatchError>]>;
    readonly isDummy: boolean;
    readonly type: 'MessageRejected' | 'MessageVersionSpecMismatch' | 'MessageWeightMismatch' | 'MessageSignatureMismatch' | 'MessageCallDecodeFailed' | 'MessageCallRejected' | 'MessageDispatchPaymentFailed' | 'MessageDispatched' | 'Dummy';
  }

  /** @name PalletBridgeMessagesEvent (125) */
  export interface PalletBridgeMessagesEvent extends Enum {
    readonly isParameterUpdated: boolean;
    readonly asParameterUpdated: PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter;
    readonly isMessageAccepted: boolean;
    readonly asMessageAccepted: ITuple<[U8aFixed, u64]>;
    readonly isMessagesDelivered: boolean;
    readonly asMessagesDelivered: ITuple<[U8aFixed, BpMessagesDeliveredMessages]>;
    readonly type: 'ParameterUpdated' | 'MessageAccepted' | 'MessagesDelivered';
  }

  /** @name PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter (126) */
  export interface PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter extends Enum {
    readonly isPangoroToPangolinConversionRate: boolean;
    readonly asPangoroToPangolinConversionRate: u128;
    readonly type: 'PangoroToPangolinConversionRate';
  }

  /** @name BpMessagesDeliveredMessages (128) */
  export interface BpMessagesDeliveredMessages extends Struct {
    readonly begin: u64;
    readonly end: u64;
    readonly dispatchResults: BitVec;
  }

  /** @name BitvecOrderMsb0 (130) */
  export type BitvecOrderMsb0 = Null;

  /** @name PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter (133) */
  export interface PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter extends Enum {
    readonly isPangolinParachainToPangolinConversionRate: boolean;
    readonly asPangolinParachainToPangolinConversionRate: u128;
    readonly type: 'PangolinParachainToPangolinConversionRate';
  }

  /** @name PalletFeeMarketEvent (134) */
  export interface PalletFeeMarketEvent extends Enum {
    readonly isEnroll: boolean;
    readonly asEnroll: ITuple<[AccountId32, u128, u128]>;
    readonly isUpdateLockedCollateral: boolean;
    readonly asUpdateLockedCollateral: ITuple<[AccountId32, u128]>;
    readonly isUpdateRelayFee: boolean;
    readonly asUpdateRelayFee: ITuple<[AccountId32, u128]>;
    readonly isCancelEnrollment: boolean;
    readonly asCancelEnrollment: AccountId32;
    readonly isUpdateCollateralSlashProtect: boolean;
    readonly asUpdateCollateralSlashProtect: u128;
    readonly isUpdateAssignedRelayersNumber: boolean;
    readonly asUpdateAssignedRelayersNumber: u32;
    readonly isFeeMarketSlash: boolean;
    readonly asFeeMarketSlash: PalletFeeMarketSlashReport;
    readonly type: 'Enroll' | 'UpdateLockedCollateral' | 'UpdateRelayFee' | 'CancelEnrollment' | 'UpdateCollateralSlashProtect' | 'UpdateAssignedRelayersNumber' | 'FeeMarketSlash';
  }

  /** @name PalletFeeMarketSlashReport (135) */
  export interface PalletFeeMarketSlashReport extends Struct {
    readonly lane: U8aFixed;
    readonly message: u64;
    readonly sentTime: u32;
    readonly confirmTime: Option<u32>;
    readonly delayTime: Option<u32>;
    readonly accountId: AccountId32;
    readonly amount: u128;
  }

  /** @name ModuleTransactionPauseModuleEvent (138) */
  export interface ModuleTransactionPauseModuleEvent extends Enum {
    readonly isTransactionPaused: boolean;
    readonly asTransactionPaused: ITuple<[Bytes, Bytes]>;
    readonly isTransactionUnpaused: boolean;
    readonly asTransactionUnpaused: ITuple<[Bytes, Bytes]>;
    readonly type: 'TransactionPaused' | 'TransactionUnpaused';
  }

  /** @name FromSubstrateIssuingEvent (139) */
  export interface FromSubstrateIssuingEvent extends Enum {
    readonly isTokenRegistered: boolean;
    readonly asTokenRegistered: ITuple<[AccountId32, H160, H160, H160]>;
    readonly isTokenIssued: boolean;
    readonly asTokenIssued: ITuple<[H160, H160, H160, U256]>;
    readonly isMappingFactoryAddressUpdated: boolean;
    readonly asMappingFactoryAddressUpdated: ITuple<[H160, H160]>;
    readonly isRemoteBackingAccountUpdated: boolean;
    readonly asRemoteBackingAccountUpdated: AccountId32;
    readonly type: 'TokenRegistered' | 'TokenIssued' | 'MappingFactoryAddressUpdated' | 'RemoteBackingAccountUpdated';
  }

  /** @name FrameSystemPhase (140) */
  export interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (142) */
  export interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (144) */
  export interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetChangesTrieConfig: boolean;
    readonly asSetChangesTrieConfig: {
      readonly changesTrieConfig: Option<SpCoreChangesTrieChangesTrieConfiguration>;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetChangesTrieConfig' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (148) */
  export interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64;
    readonly maxBlock: u64;
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (149) */
  export interface FrameSupportWeightsPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (150) */
  export interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: Option<u64>;
    readonly maxTotal: Option<u64>;
    readonly reserved: Option<u64>;
  }

  /** @name FrameSystemLimitsBlockLength (152) */
  export interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32;
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (153) */
  export interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (154) */
  export interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (155) */
  export interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
  }

  /** @name FrameSystemError (160) */
  export interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount';
  }

  /** @name SpConsensusBabeAppPublic (163) */
  export interface SpConsensusBabeAppPublic extends SpCoreSr25519Public {}

  /** @name SpConsensusBabeDigestsNextConfigDescriptor (166) */
  export interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
    readonly isV1: boolean;
    readonly asV1: {
      readonly c: ITuple<[u64, u64]>;
      readonly allowedSlots: SpConsensusBabeAllowedSlots;
    } & Struct;
    readonly type: 'V1';
  }

  /** @name SpConsensusBabeAllowedSlots (168) */
  export interface SpConsensusBabeAllowedSlots extends Enum {
    readonly isPrimarySlots: boolean;
    readonly isPrimaryAndSecondaryPlainSlots: boolean;
    readonly isPrimaryAndSecondaryVRFSlots: boolean;
    readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
  }

  /** @name SpConsensusBabeBabeEpochConfiguration (172) */
  export interface SpConsensusBabeBabeEpochConfiguration extends Struct {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  }

  /** @name PalletBabeCall (173) */
  export interface PalletBabeCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isPlanConfigChange: boolean;
    readonly asPlanConfigChange: {
      readonly config: SpConsensusBabeDigestsNextConfigDescriptor;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
  }

  /** @name SpConsensusSlotsEquivocationProof (174) */
  export interface SpConsensusSlotsEquivocationProof extends Struct {
    readonly offender: SpConsensusBabeAppPublic;
    readonly slot: u64;
    readonly firstHeader: SpRuntimeHeader;
    readonly secondHeader: SpRuntimeHeader;
  }

  /** @name SpRuntimeHeader (175) */
  export interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name SpRuntimeBlakeTwo256 (176) */
  export type SpRuntimeBlakeTwo256 = Null;

  /** @name SpSessionMembershipProof (177) */
  export interface SpSessionMembershipProof extends Struct {
    readonly session: u32;
    readonly trieNodes: Vec<Bytes>;
    readonly validatorCount: u32;
  }

  /** @name PalletBabeError (178) */
  export interface PalletBabeError extends Enum {
    readonly isInvalidEquivocationProof: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletTimestampCall (179) */
  export interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletBalancesBalanceLock (182) */
  export interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (183) */
  export interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name DarwiniaBalancesReserveData (186) */
  export interface DarwiniaBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name DarwiniaBalancesReleases (188) */
  export interface DarwiniaBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name DarwiniaBalancesCall (189) */
  export interface DarwiniaBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name DarwiniaBalancesError (192) */
  export interface DarwiniaBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isLockP: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'LockP';
  }

  /** @name PalletTransactionPaymentReleases (195) */
  export interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name FrameSupportWeightsWeightToFeeCoefficient (197) */
  export interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
    readonly coeffInteger: u128;
    readonly coeffFrac: Perbill;
    readonly negative: bool;
    readonly degree: u8;
  }

  /** @name PalletAuthorshipUncleEntryItem (199) */
  export interface PalletAuthorshipUncleEntryItem extends Enum {
    readonly isInclusionHeight: boolean;
    readonly asInclusionHeight: u32;
    readonly isUncle: boolean;
    readonly asUncle: ITuple<[H256, Option<AccountId32>]>;
    readonly type: 'InclusionHeight' | 'Uncle';
  }

  /** @name PalletAuthorshipCall (201) */
  export interface PalletAuthorshipCall extends Enum {
    readonly isSetUncles: boolean;
    readonly asSetUncles: {
      readonly newUncles: Vec<SpRuntimeHeader>;
    } & Struct;
    readonly type: 'SetUncles';
  }

  /** @name PalletAuthorshipError (203) */
  export interface PalletAuthorshipError extends Enum {
    readonly isInvalidUncleParent: boolean;
    readonly isUnclesAlreadySet: boolean;
    readonly isTooManyUncles: boolean;
    readonly isGenesisUncle: boolean;
    readonly isTooHighUncle: boolean;
    readonly isUncleAlreadyIncluded: boolean;
    readonly isOldUncle: boolean;
    readonly type: 'InvalidUncleParent' | 'UnclesAlreadySet' | 'TooManyUncles' | 'GenesisUncle' | 'TooHighUncle' | 'UncleAlreadyIncluded' | 'OldUncle';
  }

  /** @name PalletElectionProviderMultiPhasePhase (204) */
  export interface PalletElectionProviderMultiPhasePhase extends Enum {
    readonly isOff: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly asUnsigned: ITuple<[bool, u32]>;
    readonly isEmergency: boolean;
    readonly type: 'Off' | 'Signed' | 'Unsigned' | 'Emergency';
  }

  /** @name PalletElectionProviderMultiPhaseReadySolution (206) */
  export interface PalletElectionProviderMultiPhaseReadySolution extends Struct {
    readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    readonly score: Vec<u128>;
    readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
  }

  /** @name SpNposElectionsSupport (209) */
  export interface SpNposElectionsSupport extends Struct {
    readonly total: u128;
    readonly voters: Vec<ITuple<[AccountId32, u128]>>;
  }

  /** @name PalletElectionProviderMultiPhaseRoundSnapshot (211) */
  export interface PalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
    readonly voters: Vec<ITuple<[AccountId32, u64, Vec<AccountId32>]>>;
    readonly targets: Vec<AccountId32>;
  }

  /** @name PalletElectionProviderMultiPhaseSolutionOrSnapshotSize (214) */
  export interface PalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
    readonly voters: Compact<u32>;
    readonly targets: Compact<u32>;
  }

  /** @name PalletElectionProviderMultiPhaseSignedSignedSubmission (219) */
  export interface PalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
    readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    readonly reward: u128;
  }

  /** @name PangolinRuntimePalletsElectionProviderMultiPhaseNposCompactSolution24 (220) */
  export interface PangolinRuntimePalletsElectionProviderMultiPhaseNposCompactSolution24 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes17: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes18: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes19: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes20: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes21: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes22: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes23: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes24: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PalletElectionProviderMultiPhaseRawSolution (295) */
  export interface PalletElectionProviderMultiPhaseRawSolution extends Struct {
    readonly solution: PangolinRuntimePalletsElectionProviderMultiPhaseNposCompactSolution24;
    readonly score: Vec<u128>;
    readonly round: u32;
  }

  /** @name PalletElectionProviderMultiPhaseCall (296) */
  export interface PalletElectionProviderMultiPhaseCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
      readonly witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    } & Struct;
    readonly isSetMinimumUntrustedScore: boolean;
    readonly asSetMinimumUntrustedScore: {
      readonly maybeNextScore: Option<Vec<u128>>;
    } & Struct;
    readonly isSetEmergencyElectionResult: boolean;
    readonly asSetEmergencyElectionResult: {
      readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    } & Struct;
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
      readonly numSignedSubmissions: u32;
    } & Struct;
    readonly type: 'SubmitUnsigned' | 'SetMinimumUntrustedScore' | 'SetEmergencyElectionResult' | 'Submit';
  }

  /** @name PalletElectionProviderMultiPhaseError (298) */
  export interface PalletElectionProviderMultiPhaseError extends Enum {
    readonly isPreDispatchEarlySubmission: boolean;
    readonly isPreDispatchWrongWinnerCount: boolean;
    readonly isPreDispatchWeakSubmission: boolean;
    readonly isSignedQueueFull: boolean;
    readonly isSignedCannotPayDeposit: boolean;
    readonly isSignedInvalidWitness: boolean;
    readonly isSignedTooMuchWeight: boolean;
    readonly isOcwCallWrongEra: boolean;
    readonly isMissingSnapshotMetadata: boolean;
    readonly isInvalidSubmissionIndex: boolean;
    readonly isCallNotAllowed: boolean;
    readonly type: 'PreDispatchEarlySubmission' | 'PreDispatchWrongWinnerCount' | 'PreDispatchWeakSubmission' | 'SignedQueueFull' | 'SignedCannotPayDeposit' | 'SignedInvalidWitness' | 'SignedTooMuchWeight' | 'OcwCallWrongEra' | 'MissingSnapshotMetadata' | 'InvalidSubmissionIndex' | 'CallNotAllowed';
  }

  /** @name DarwiniaStakingStructsStakingLedger (299) */
  export interface DarwiniaStakingStructsStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly active: Compact<u128>;
    readonly activeDepositRing: Compact<u128>;
    readonly activeKton: Compact<u128>;
    readonly depositItems: Vec<DarwiniaStakingStructsTimeDepositItem>;
    readonly ringStakingLock: DarwiniaSupportStructsStakingLock;
    readonly ktonStakingLock: DarwiniaSupportStructsStakingLock;
    readonly claimedRewards: Vec<u32>;
  }

  /** @name DarwiniaStakingStructsTimeDepositItem (301) */
  export interface DarwiniaStakingStructsTimeDepositItem extends Struct {
    readonly value: Compact<u128>;
    readonly startTime: Compact<u64>;
    readonly expireTime: Compact<u64>;
  }

  /** @name DarwiniaSupportStructsStakingLock (302) */
  export interface DarwiniaSupportStructsStakingLock extends Struct {
    readonly stakingAmount: u128;
    readonly unbondings: Vec<DarwiniaSupportStructsUnbonding>;
  }

  /** @name DarwiniaSupportStructsUnbonding (304) */
  export interface DarwiniaSupportStructsUnbonding extends Struct {
    readonly amount: u128;
    readonly until: u32;
  }

  /** @name DarwiniaStakingStructsRewardDestination (307) */
  export interface DarwiniaStakingStructsRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name DarwiniaStakingStructsValidatorPrefs (308) */
  export interface DarwiniaStakingStructsValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name DarwiniaStakingStructsNominations (310) */
  export interface DarwiniaStakingStructsNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name DarwiniaStakingStructsActiveEraInfo (311) */
  export interface DarwiniaStakingStructsActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name DarwiniaStakingStructsEraRewardPoints (313) */
  export interface DarwiniaStakingStructsEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name DarwiniaStakingStructsForcing (317) */
  export interface DarwiniaStakingStructsForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name DarwiniaStakingStructsUnappliedSlash (319) */
  export interface DarwiniaStakingStructsUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: DarwiniaStakingSlashingRk;
    readonly others: Vec<ITuple<[AccountId32, DarwiniaStakingSlashingRk]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: DarwiniaStakingSlashingRk;
  }

  /** @name DarwiniaStakingSlashingRk (320) */
  export interface DarwiniaStakingSlashingRk extends Struct {
    readonly r: u128;
    readonly k: u128;
  }

  /** @name DarwiniaStakingSlashingSlashingSpans (324) */
  export interface DarwiniaStakingSlashingSlashingSpans extends Struct {
    readonly spanIndex: u32;
    readonly lastStart: u32;
    readonly lastNonzeroSlash: u32;
    readonly prior: Vec<u32>;
  }

  /** @name DarwiniaStakingSlashingSpanRecord (325) */
  export interface DarwiniaStakingSlashingSpanRecord extends Struct {
    readonly slashed: DarwiniaStakingSlashingRk;
    readonly paidOut: DarwiniaStakingSlashingRk;
  }

  /** @name DarwiniaStakingStructsReleases (326) */
  export interface DarwiniaStakingStructsReleases extends Enum {
    readonly isV100Ancient: boolean;
    readonly isV200: boolean;
    readonly isV300: boolean;
    readonly isV400: boolean;
    readonly isV500: boolean;
    readonly isV600: boolean;
    readonly isV700: boolean;
    readonly type: 'V100Ancient' | 'V200' | 'V300' | 'V400' | 'V500' | 'V600' | 'V700';
  }

  /** @name DarwiniaStakingCall (328) */
  export interface DarwiniaStakingCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly controller: MultiAddress;
      readonly value: DarwiniaStakingStructsStakingBalance;
      readonly payee: DarwiniaStakingStructsRewardDestination;
      readonly promiseMonth: u8;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: DarwiniaStakingStructsStakingBalance;
      readonly promiseMonth: u8;
    } & Struct;
    readonly isDepositExtra: boolean;
    readonly asDepositExtra: {
      readonly value: u128;
      readonly promiseMonth: u8;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: DarwiniaStakingStructsStakingBalance;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isClaimMatureDeposits: boolean;
    readonly isTryClaimDepositsWithPunish: boolean;
    readonly asTryClaimDepositsWithPunish: {
      readonly expireTime: u64;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: DarwiniaStakingStructsValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<MultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: DarwiniaStakingStructsRewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly asSetController: {
      readonly controller: MultiAddress;
    } & Struct;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly slashIndices: Vec<u32>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly planToRebondRing: Compact<u128>;
      readonly planToRebondKton: Compact<u128>;
    } & Struct;
    readonly isSetHistoryDepth: boolean;
    readonly asSetHistoryDepth: {
      readonly newHistoryDepth: Compact<u32>;
      readonly eraItemsDeleted: Compact<u32>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<MultiAddress>;
    } & Struct;
    readonly isSetStakingLimits: boolean;
    readonly asSetStakingLimits: {
      readonly minNominatorBond: u128;
      readonly minValidatorBond: u128;
      readonly maxNominatorCount: Option<u32>;
      readonly maxValidatorCount: Option<u32>;
      readonly threshold: Option<Percent>;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly controller: AccountId32;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'DepositExtra' | 'Unbond' | 'WithdrawUnbonded' | 'ClaimMatureDeposits' | 'TryClaimDepositsWithPunish' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'SetHistoryDepth' | 'ReapStash' | 'Kick' | 'SetStakingLimits' | 'ChillOther';
  }

  /** @name DarwiniaStakingStructsStakingBalance (329) */
  export interface DarwiniaStakingStructsStakingBalance extends Enum {
    readonly isRingBalance: boolean;
    readonly asRingBalance: u128;
    readonly isKtonBalance: boolean;
    readonly asKtonBalance: u128;
    readonly type: 'RingBalance' | 'KtonBalance';
  }

  /** @name DarwiniaStakingError (332) */
  export interface DarwiniaStakingError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashIndex: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isNotSortedAndUnique: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isIncorrectSlashingSpans: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly isPayoutIns: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashIndex' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'NotSortedAndUnique' | 'AlreadyClaimed' | 'IncorrectHistoryDepth' | 'IncorrectSlashingSpans' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'PayoutIns';
  }

  /** @name SpStakingOffenceOffenceDetails (333) */
  export interface SpStakingOffenceOffenceDetails extends Struct {
    readonly offender: ITuple<[AccountId32, DarwiniaStakingStructsExposure]>;
    readonly reporters: Vec<AccountId32>;
  }

  /** @name PangolinRuntimePalletsSessionSessionKeys (337) */
  export interface PangolinRuntimePalletsSessionSessionKeys extends Struct {
    readonly babe: SpConsensusBabeAppPublic;
    readonly grandpa: SpFinalityGrandpaAppPublic;
    readonly beefy: BeefyPrimitivesCryptoPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
  }

  /** @name BeefyPrimitivesCryptoPublic (338) */
  export interface BeefyPrimitivesCryptoPublic extends SpCoreEcdsaPublic {}

  /** @name SpCoreEcdsaPublic (339) */
  export interface SpCoreEcdsaPublic extends U8aFixed {}

  /** @name SpAuthorityDiscoveryAppPublic (341) */
  export interface SpAuthorityDiscoveryAppPublic extends SpCoreSr25519Public {}

  /** @name SpCoreCryptoKeyTypeId (343) */
  export interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionCall (344) */
  export interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: PangolinRuntimePalletsSessionSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name PalletSessionError (345) */
  export interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletGrandpaStoredState (346) */
  export interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (347) */
  export interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (349) */
  export interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpFinalityGrandpaEquivocationProof (350) */
  export interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (351) */
  export interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (352) */
  export interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (353) */
  export interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpFinalityGrandpaAppSignature (354) */
  export interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (355) */
  export interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (358) */
  export interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (359) */
  export interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name PalletGrandpaError (361) */
  export interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name DarwiniaBeefyGadgetCall (363) */
  export interface DarwiniaBeefyGadgetCall extends Enum {
    readonly isSetCommitmentContract: boolean;
    readonly asSetCommitmentContract: {
      readonly commitmentContract: H160;
    } & Struct;
    readonly type: 'SetCommitmentContract';
  }

  /** @name BeefyPrimitivesMmrBeefyNextAuthoritySet (364) */
  export interface BeefyPrimitivesMmrBeefyNextAuthoritySet extends Struct {
    readonly id: u64;
    readonly len: u32;
    readonly root: H256;
  }

  /** @name PalletImOnlineBoundedOpaqueNetworkState (368) */
  export interface PalletImOnlineBoundedOpaqueNetworkState extends Struct {
    readonly peerId: Bytes;
    readonly externalAddresses: Vec<Bytes>;
  }

  /** @name PalletImOnlineCall (372) */
  export interface PalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: PalletImOnlineHeartbeat;
      readonly signature: PalletImOnlineSr25519AppSr25519Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PalletImOnlineHeartbeat (373) */
  export interface PalletImOnlineHeartbeat extends Struct {
    readonly blockNumber: u32;
    readonly networkState: SpCoreOffchainOpaqueNetworkState;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly validatorsLen: u32;
  }

  /** @name SpCoreOffchainOpaqueNetworkState (374) */
  export interface SpCoreOffchainOpaqueNetworkState extends Struct {
    readonly peerId: Bytes;
    readonly externalAddresses: Vec<Bytes>;
  }

  /** @name PalletImOnlineSr25519AppSr25519Signature (378) */
  export interface PalletImOnlineSr25519AppSr25519Signature extends SpCoreSr25519Signature {}

  /** @name SpCoreSr25519Signature (379) */
  export interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name PalletImOnlineError (380) */
  export interface PalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name PalletDemocracyPreimageStatus (384) */
  export interface PalletDemocracyPreimageStatus extends Enum {
    readonly isMissing: boolean;
    readonly asMissing: u32;
    readonly isAvailable: boolean;
    readonly asAvailable: {
      readonly data: Bytes;
      readonly provider: AccountId32;
      readonly deposit: u128;
      readonly since: u32;
      readonly expiry: Option<u32>;
    } & Struct;
    readonly type: 'Missing' | 'Available';
  }

  /** @name PalletDemocracyReferendumInfo (385) */
  export interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (386) */
  export interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposalHash: H256;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (387) */
  export interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (388) */
  export interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyVoteAccountVote (391) */
  export interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyDelegations (393) */
  export interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (394) */
  export interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyConviction (395) */
  export interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletDemocracyReleases (398) */
  export interface PalletDemocracyReleases extends Enum {
    readonly isV1: boolean;
    readonly type: 'V1';
  }

  /** @name PalletDemocracyCall (399) */
  export interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposalHash: H256;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
      readonly secondsUpperBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isCancelQueued: boolean;
    readonly asCancelQueued: {
      readonly which: u32;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNotePreimageOperational: boolean;
    readonly asNotePreimageOperational: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNoteImminentPreimage: boolean;
    readonly asNoteImminentPreimage: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNoteImminentPreimageOperational: boolean;
    readonly asNoteImminentPreimageOperational: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isReapPreimage: boolean;
    readonly asReapPreimage: {
      readonly proposalHash: H256;
      readonly proposalLenUpperBound: Compact<u32>;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: AccountId32;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isEnactProposal: boolean;
    readonly asEnactProposal: {
      readonly proposalHash: H256;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'CancelQueued' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'NotePreimage' | 'NotePreimageOperational' | 'NoteImminentPreimage' | 'NoteImminentPreimageOperational' | 'ReapPreimage' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'EnactProposal' | 'Blacklist' | 'CancelProposal';
  }

  /** @name PalletDemocracyError (400) */
  export interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isDuplicatePreimage: boolean;
    readonly isNotImminent: boolean;
    readonly isTooEarly: boolean;
    readonly isImminent: boolean;
    readonly isPreimageMissing: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isPreimageInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooManyProposals: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'DuplicatePreimage' | 'NotImminent' | 'TooEarly' | 'Imminent' | 'PreimageMissing' | 'ReferendumInvalid' | 'PreimageInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooManyProposals';
  }

  /** @name PalletCollectiveCall (403) */
  export interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: Compact<u64>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
  }

  /** @name PalletElectionsPhragmenCall (405) */
  export interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
      readonly hasReplacement: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (406) */
  export interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletMembershipCall (407) */
  export interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: AccountId32;
      readonly add: AccountId32;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: AccountId32;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletTreasuryCall (408) */
  export interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal';
  }

  /** @name PalletTipsCall (410) */
  export interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: AccountId32;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: AccountId32;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: H256;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PalletBountiesCall (411) */
  export interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletSudoCall (412) */
  export interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: u64;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name DarwiniaClaimsCall (413) */
  export interface DarwiniaClaimsCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly dest: AccountId32;
      readonly signature: DarwiniaClaimsOtherSignature;
    } & Struct;
    readonly isMintClaim: boolean;
    readonly asMintClaim: {
      readonly who: DarwiniaClaimsOtherAddress;
      readonly value: u128;
    } & Struct;
    readonly isMoveClaim: boolean;
    readonly asMoveClaim: {
      readonly old: DarwiniaClaimsOtherAddress;
      readonly new_: DarwiniaClaimsOtherAddress;
    } & Struct;
    readonly type: 'Claim' | 'MintClaim' | 'MoveClaim';
  }

  /** @name DarwiniaClaimsOtherSignature (414) */
  export interface DarwiniaClaimsOtherSignature extends Enum {
    readonly isEth: boolean;
    readonly asEth: DarwiniaClaimsEcdsaSignature;
    readonly isTron: boolean;
    readonly asTron: DarwiniaClaimsEcdsaSignature;
    readonly type: 'Eth' | 'Tron';
  }

  /** @name DarwiniaClaimsEcdsaSignature (415) */
  export interface DarwiniaClaimsEcdsaSignature extends U8aFixed {}

  /** @name DarwiniaClaimsOtherAddress (416) */
  export interface DarwiniaClaimsOtherAddress extends Enum {
    readonly isEth: boolean;
    readonly asEth: U8aFixed;
    readonly isTron: boolean;
    readonly asTron: U8aFixed;
    readonly type: 'Eth' | 'Tron';
  }

  /** @name PalletVestingCall (417) */
  export interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules';
  }

  /** @name PalletVestingVestingInfo (418) */
  export interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletUtilityCall (419) */
  export interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll';
  }

  /** @name PalletIdentityCall (421) */
  export interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: AccountId32;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (422) */
  export interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (458) */
  export interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (459) */
  export interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (460) */
  export interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletSocietyCall (461) */
  export interface PalletSocietyCall extends Enum {
    readonly isBid: boolean;
    readonly asBid: {
      readonly value: u128;
    } & Struct;
    readonly isUnbid: boolean;
    readonly asUnbid: {
      readonly pos: u32;
    } & Struct;
    readonly isVouch: boolean;
    readonly asVouch: {
      readonly who: AccountId32;
      readonly value: u128;
      readonly tip: u128;
    } & Struct;
    readonly isUnvouch: boolean;
    readonly asUnvouch: {
      readonly pos: u32;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly candidate: MultiAddress;
      readonly approve: bool;
    } & Struct;
    readonly isDefenderVote: boolean;
    readonly asDefenderVote: {
      readonly approve: bool;
    } & Struct;
    readonly isPayout: boolean;
    readonly isFound: boolean;
    readonly asFound: {
      readonly founder: AccountId32;
      readonly maxMembers: u32;
      readonly rules: Bytes;
    } & Struct;
    readonly isUnfound: boolean;
    readonly isJudgeSuspendedMember: boolean;
    readonly asJudgeSuspendedMember: {
      readonly who: AccountId32;
      readonly forgive: bool;
    } & Struct;
    readonly isJudgeSuspendedCandidate: boolean;
    readonly asJudgeSuspendedCandidate: {
      readonly who: AccountId32;
      readonly judgement: PalletSocietyJudgement;
    } & Struct;
    readonly isSetMaxMembers: boolean;
    readonly asSetMaxMembers: {
      readonly max: u32;
    } & Struct;
    readonly type: 'Bid' | 'Unbid' | 'Vouch' | 'Unvouch' | 'Vote' | 'DefenderVote' | 'Payout' | 'Found' | 'Unfound' | 'JudgeSuspendedMember' | 'JudgeSuspendedCandidate' | 'SetMaxMembers';
  }

  /** @name PalletSocietyJudgement (462) */
  export interface PalletSocietyJudgement extends Enum {
    readonly isRebid: boolean;
    readonly isReject: boolean;
    readonly isApprove: boolean;
    readonly type: 'Rebid' | 'Reject' | 'Approve';
  }

  /** @name PalletRecoveryCall (463) */
  export interface PalletRecoveryCall extends Enum {
    readonly isAsRecovered: boolean;
    readonly asAsRecovered: {
      readonly account: AccountId32;
      readonly call: Call;
    } & Struct;
    readonly isSetRecovered: boolean;
    readonly asSetRecovered: {
      readonly lost: AccountId32;
      readonly rescuer: AccountId32;
    } & Struct;
    readonly isCreateRecovery: boolean;
    readonly asCreateRecovery: {
      readonly friends: Vec<AccountId32>;
      readonly threshold: u16;
      readonly delayPeriod: u32;
    } & Struct;
    readonly isInitiateRecovery: boolean;
    readonly asInitiateRecovery: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVouchRecovery: boolean;
    readonly asVouchRecovery: {
      readonly lost: AccountId32;
      readonly rescuer: AccountId32;
    } & Struct;
    readonly isClaimRecovery: boolean;
    readonly asClaimRecovery: {
      readonly account: AccountId32;
    } & Struct;
    readonly isCloseRecovery: boolean;
    readonly asCloseRecovery: {
      readonly rescuer: AccountId32;
    } & Struct;
    readonly isRemoveRecovery: boolean;
    readonly isCancelRecovered: boolean;
    readonly asCancelRecovered: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'AsRecovered' | 'SetRecovered' | 'CreateRecovery' | 'InitiateRecovery' | 'VouchRecovery' | 'ClaimRecovery' | 'CloseRecovery' | 'RemoveRecovery' | 'CancelRecovered';
  }

  /** @name PalletSchedulerCall (464) */
  export interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: Bytes;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: Bytes;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: Bytes;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletProxyCall (466) */
  export interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: AccountId32;
      readonly forceProxyType: Option<PangolinRuntimePalletsProxyProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: PangolinRuntimePalletsProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: PangolinRuntimePalletsProxyProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isAnonymous: boolean;
    readonly asAnonymous: {
      readonly proxyType: PangolinRuntimePalletsProxyProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillAnonymous: boolean;
    readonly asKillAnonymous: {
      readonly spawner: AccountId32;
      readonly proxyType: PangolinRuntimePalletsProxyProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: AccountId32;
      readonly real: AccountId32;
      readonly forceProxyType: Option<PangolinRuntimePalletsProxyProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'Anonymous' | 'KillAnonymous' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletMultisigCall (468) */
  export interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Bytes;
      readonly storeCall: bool;
      readonly maxWeight: u64;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: u64;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name DarwiniaBridgeEthereumCall (470) */
  export interface DarwiniaBridgeEthereumCall extends Enum {
    readonly isAffirm: boolean;
    readonly asAffirm: {
      readonly ethereumRelayHeaderParcel: DarwiniaBridgeEthereumEthereumRelayHeaderParcel;
      readonly optionalEthereumRelayProofs: Option<DarwiniaBridgeEthereumEthereumRelayProofs>;
    } & Struct;
    readonly isDisputeAndAffirm: boolean;
    readonly asDisputeAndAffirm: {
      readonly ethereumRelayHeaderParcel: DarwiniaBridgeEthereumEthereumRelayHeaderParcel;
      readonly optionalEthereumRelayProofs: Option<DarwiniaBridgeEthereumEthereumRelayProofs>;
    } & Struct;
    readonly isCompleteRelayProofs: boolean;
    readonly asCompleteRelayProofs: {
      readonly affirmationId: DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId;
      readonly ethereumRelayProofs: Vec<DarwiniaBridgeEthereumEthereumRelayProofs>;
    } & Struct;
    readonly isExtendAffirmation: boolean;
    readonly asExtendAffirmation: {
      readonly extendedEthereumRelayAffirmationId: DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId;
      readonly gameSamplePoints: Vec<DarwiniaBridgeEthereumEthereumRelayHeaderParcel>;
      readonly optionalEthereumRelayProofs: Option<Vec<DarwiniaBridgeEthereumEthereumRelayProofs>>;
    } & Struct;
    readonly isVotePendingRelayHeaderParcel: boolean;
    readonly asVotePendingRelayHeaderParcel: {
      readonly ethereumBlockNumber: u64;
      readonly aye: bool;
    } & Struct;
    readonly isCheckReceipt: boolean;
    readonly asCheckReceipt: {
      readonly ethereumProofRecord: EthereumPrimitivesReceiptReceiptProof;
      readonly ethereumHeader: EthereumPrimitivesHeader;
      readonly mmrProof: DarwiniaBridgeEthereumMmrProof;
    } & Struct;
    readonly isSetReceiptVerifyFee: boolean;
    readonly asSetReceiptVerifyFee: {
      readonly new_: Compact<u128>;
    } & Struct;
    readonly isRemoveConfirmedParcelOf: boolean;
    readonly asRemoveConfirmedParcelOf: {
      readonly confirmedBlockNumber: u64;
    } & Struct;
    readonly isCleanConfirmedParcels: boolean;
    readonly isSetConfirmedParcel: boolean;
    readonly asSetConfirmedParcel: {
      readonly ethereumRelayHeaderParcel: DarwiniaBridgeEthereumEthereumRelayHeaderParcel;
    } & Struct;
    readonly type: 'Affirm' | 'DisputeAndAffirm' | 'CompleteRelayProofs' | 'ExtendAffirmation' | 'VotePendingRelayHeaderParcel' | 'CheckReceipt' | 'SetReceiptVerifyFee' | 'RemoveConfirmedParcelOf' | 'CleanConfirmedParcels' | 'SetConfirmedParcel';
  }

  /** @name DarwiniaBridgeEthereumEthereumRelayHeaderParcel (471) */
  export interface DarwiniaBridgeEthereumEthereumRelayHeaderParcel extends Struct {
    readonly header: EthereumPrimitivesHeader;
    readonly parentMmrRoot: H256;
  }

  /** @name DarwiniaBridgeEthereumEthereumRelayProofs (473) */
  export interface DarwiniaBridgeEthereumEthereumRelayProofs extends Struct {
    readonly ethashProof: Vec<EthereumPrimitivesEthashProof>;
    readonly mmrProof: Vec<H256>;
  }

  /** @name EthereumPrimitivesEthashProof (475) */
  export interface EthereumPrimitivesEthashProof extends Struct {
    readonly dagNodes: Vec<H512>;
    readonly proof: Vec<EthereumTypesHashH128>;
  }

  /** @name EthereumTypesHashH128 (479) */
  export interface EthereumTypesHashH128 extends U8aFixed {}

  /** @name EthereumPrimitivesReceiptReceiptProof (483) */
  export interface EthereumPrimitivesReceiptReceiptProof extends Struct {
    readonly index: u64;
    readonly proof: Bytes;
    readonly headerHash: H256;
  }

  /** @name DarwiniaBridgeEthereumMmrProof (484) */
  export interface DarwiniaBridgeEthereumMmrProof extends Struct {
    readonly memberLeafIndex: u64;
    readonly lastLeafIndex: u64;
    readonly proof: Vec<H256>;
  }

  /** @name ToEthereumBackingCall (485) */
  export interface ToEthereumBackingCall extends Enum {
    readonly isRedeem: boolean;
    readonly asRedeem: {
      readonly act: ToEthereumBackingRedeemFor;
      readonly proof: ITuple<[EthereumPrimitivesHeader, EthereumPrimitivesReceiptReceiptProof, DarwiniaBridgeEthereumMmrProof]>;
    } & Struct;
    readonly isLock: boolean;
    readonly asLock: {
      readonly ringToLock: Compact<u128>;
      readonly ktonToLock: Compact<u128>;
      readonly ethereumAccount: H160;
    } & Struct;
    readonly isSyncAuthoritiesChange: boolean;
    readonly asSyncAuthoritiesChange: {
      readonly proof: ITuple<[EthereumPrimitivesHeader, EthereumPrimitivesReceiptReceiptProof, DarwiniaBridgeEthereumMmrProof]>;
    } & Struct;
    readonly isSetTokenRedeemAddress: boolean;
    readonly asSetTokenRedeemAddress: {
      readonly new_: H160;
    } & Struct;
    readonly isSetDepositRedeemAddress: boolean;
    readonly asSetDepositRedeemAddress: {
      readonly new_: H160;
    } & Struct;
    readonly isSetSetAuthoritiesAddress: boolean;
    readonly asSetSetAuthoritiesAddress: {
      readonly new_: H160;
    } & Struct;
    readonly isSetRingTokenAddress: boolean;
    readonly asSetRingTokenAddress: {
      readonly new_: H160;
    } & Struct;
    readonly isSetKtonTokenAddress: boolean;
    readonly asSetKtonTokenAddress: {
      readonly new_: H160;
    } & Struct;
    readonly isSetRedeemStatus: boolean;
    readonly asSetRedeemStatus: {
      readonly status: bool;
    } & Struct;
    readonly type: 'Redeem' | 'Lock' | 'SyncAuthoritiesChange' | 'SetTokenRedeemAddress' | 'SetDepositRedeemAddress' | 'SetSetAuthoritiesAddress' | 'SetRingTokenAddress' | 'SetKtonTokenAddress' | 'SetRedeemStatus';
  }

  /** @name ToEthereumBackingRedeemFor (486) */
  export interface ToEthereumBackingRedeemFor extends Enum {
    readonly isToken: boolean;
    readonly isDeposit: boolean;
    readonly type: 'Token' | 'Deposit';
  }

  /** @name FromEthereumIssuingCall (488) */
  export interface FromEthereumIssuingCall extends Enum {
    readonly isRegisterErc20: boolean;
    readonly asRegisterErc20: {
      readonly proof: ITuple<[EthereumPrimitivesHeader, EthereumPrimitivesReceiptReceiptProof, DarwiniaBridgeEthereumMmrProof]>;
    } & Struct;
    readonly isRedeemErc20: boolean;
    readonly asRedeemErc20: {
      readonly proof: ITuple<[EthereumPrimitivesHeader, EthereumPrimitivesReceiptReceiptProof, DarwiniaBridgeEthereumMmrProof]>;
    } & Struct;
    readonly isRegisterResponseFromContract: boolean;
    readonly asRegisterResponseFromContract: {
      readonly input: Bytes;
    } & Struct;
    readonly isDepositBurnTokenEventFromPrecompile: boolean;
    readonly asDepositBurnTokenEventFromPrecompile: {
      readonly input: Bytes;
    } & Struct;
    readonly isSetMappingFactoryAddress: boolean;
    readonly asSetMappingFactoryAddress: {
      readonly address: H160;
    } & Struct;
    readonly isSetEthereumBackingAddress: boolean;
    readonly asSetEthereumBackingAddress: {
      readonly address: H160;
    } & Struct;
    readonly type: 'RegisterErc20' | 'RedeemErc20' | 'RegisterResponseFromContract' | 'DepositBurnTokenEventFromPrecompile' | 'SetMappingFactoryAddress' | 'SetEthereumBackingAddress';
  }

  /** @name DarwiniaRelayAuthoritiesCall (489) */
  export interface DarwiniaRelayAuthoritiesCall extends Enum {
    readonly isRequestAuthority: boolean;
    readonly asRequestAuthority: {
      readonly stake: u128;
      readonly signer: H160;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly isKillCandidates: boolean;
    readonly isAddAuthorities: boolean;
    readonly asAddAuthorities: {
      readonly accountIds: Vec<AccountId32>;
    } & Struct;
    readonly isRenounceAuthority: boolean;
    readonly isRemoveAuthorities: boolean;
    readonly asRemoveAuthorities: {
      readonly accountIds: Vec<AccountId32>;
    } & Struct;
    readonly isSubmitSignedMmrRoot: boolean;
    readonly asSubmitSignedMmrRoot: {
      readonly blockNumber: u32;
      readonly signature: U8aFixed;
    } & Struct;
    readonly isSubmitSignedAuthorities: boolean;
    readonly asSubmitSignedAuthorities: {
      readonly signature: U8aFixed;
    } & Struct;
    readonly isKillAuthorities: boolean;
    readonly isForceNewTerm: boolean;
    readonly type: 'RequestAuthority' | 'CancelRequest' | 'KillCandidates' | 'AddAuthorities' | 'RenounceAuthority' | 'RemoveAuthorities' | 'SubmitSignedMmrRoot' | 'SubmitSignedAuthorities' | 'KillAuthorities' | 'ForceNewTerm';
  }

  /** @name DarwiniaEvmCall (490) */
  export interface DarwiniaEvmCall extends Enum {
    readonly isCall: boolean;
    readonly asCall: {
      readonly source: H160;
      readonly target: H160;
      readonly input: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly source: H160;
      readonly init: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate2: boolean;
    readonly asCreate2: {
      readonly source: H160;
      readonly init: Bytes;
      readonly salt: H256;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly type: 'Call' | 'Create' | 'Create2';
  }

  /** @name DarwiniaEthereumCall (493) */
  export interface DarwiniaEthereumCall extends Enum {
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly transaction: EthereumTransactionTransactionV2;
    } & Struct;
    readonly isRootTransact: boolean;
    readonly asRootTransact: {
      readonly target: H160;
      readonly input: Bytes;
    } & Struct;
    readonly type: 'Transact' | 'RootTransact';
  }

  /** @name EthereumTransactionTransactionV2 (494) */
  export interface EthereumTransactionTransactionV2 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumTransactionLegacyTransaction;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumTransactionEip2930Transaction;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumTransactionEip1559Transaction;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumTransactionLegacyTransaction (495) */
  export interface EthereumTransactionLegacyTransaction extends Struct {
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly signature: EthereumTransactionTransactionSignature;
  }

  /** @name EthereumTransactionTransactionAction (496) */
  export interface EthereumTransactionTransactionAction extends Enum {
    readonly isCall: boolean;
    readonly asCall: H160;
    readonly isCreate: boolean;
    readonly type: 'Call' | 'Create';
  }

  /** @name EthereumTransactionTransactionSignature (497) */
  export interface EthereumTransactionTransactionSignature extends Struct {
    readonly v: u64;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionEip2930Transaction (499) */
  export interface EthereumTransactionEip2930Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionAccessListItem (501) */
  export interface EthereumTransactionAccessListItem extends Struct {
    readonly address: H160;
    readonly slots: Vec<H256>;
  }

  /** @name EthereumTransactionEip1559Transaction (502) */
  export interface EthereumTransactionEip1559Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly maxFeePerGas: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name PalletBaseFeeCall (503) */
  export interface PalletBaseFeeCall extends Enum {
    readonly isSetBaseFeePerGas: boolean;
    readonly asSetBaseFeePerGas: {
      readonly fee: U256;
    } & Struct;
    readonly isSetIsActive: boolean;
    readonly asSetIsActive: {
      readonly isActive: bool;
    } & Struct;
    readonly isSetElasticity: boolean;
    readonly asSetElasticity: {
      readonly elasticity: Permill;
    } & Struct;
    readonly type: 'SetBaseFeePerGas' | 'SetIsActive' | 'SetElasticity';
  }

  /** @name PalletBridgeGrandpaCall (504) */
  export interface PalletBridgeGrandpaCall extends Enum {
    readonly isSubmitFinalityProof: boolean;
    readonly asSubmitFinalityProof: {
      readonly finalityTarget: SpRuntimeHeader;
      readonly justification: BpHeaderChainJustificationGrandpaJustification;
    } & Struct;
    readonly isInitialize: boolean;
    readonly asInitialize: {
      readonly initData: BpHeaderChainInitializationData;
    } & Struct;
    readonly isSetOwner: boolean;
    readonly asSetOwner: {
      readonly newOwner: Option<AccountId32>;
    } & Struct;
    readonly isSetOperational: boolean;
    readonly asSetOperational: {
      readonly operational: bool;
    } & Struct;
    readonly type: 'SubmitFinalityProof' | 'Initialize' | 'SetOwner' | 'SetOperational';
  }

  /** @name BpHeaderChainJustificationGrandpaJustification (505) */
  export interface BpHeaderChainJustificationGrandpaJustification extends Struct {
    readonly round: u64;
    readonly commit: FinalityGrandpaCommit;
    readonly votesAncestries: Vec<SpRuntimeHeader>;
  }

  /** @name FinalityGrandpaCommit (506) */
  export interface FinalityGrandpaCommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
    readonly precommits: Vec<FinalityGrandpaSignedPrecommit>;
  }

  /** @name FinalityGrandpaSignedPrecommit (508) */
  export interface FinalityGrandpaSignedPrecommit extends Struct {
    readonly precommit: FinalityGrandpaPrecommit;
    readonly signature: SpFinalityGrandpaAppSignature;
    readonly id: SpFinalityGrandpaAppPublic;
  }

  /** @name BpHeaderChainInitializationData (509) */
  export interface BpHeaderChainInitializationData extends Struct {
    readonly header: SpRuntimeHeader;
    readonly authorityList: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly setId: u64;
    readonly isHalted: bool;
  }

  /** @name PalletBridgeMessagesCall (510) */
  export interface PalletBridgeMessagesCall extends Enum {
    readonly isSetOwner: boolean;
    readonly asSetOwner: {
      readonly newOwner: Option<AccountId32>;
    } & Struct;
    readonly isSetOperatingMode: boolean;
    readonly asSetOperatingMode: {
      readonly operatingMode: BpMessagesOperatingMode;
    } & Struct;
    readonly isUpdatePalletParameter: boolean;
    readonly asUpdatePalletParameter: {
      readonly parameter: PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter;
    } & Struct;
    readonly isSendMessage: boolean;
    readonly asSendMessage: {
      readonly laneId: U8aFixed;
      readonly payload: BpMessageDispatchMessagePayload;
      readonly deliveryAndDispatchFee: u128;
    } & Struct;
    readonly isIncreaseMessageFee: boolean;
    readonly asIncreaseMessageFee: {
      readonly laneId: U8aFixed;
      readonly nonce: u64;
      readonly additionalFee: u128;
    } & Struct;
    readonly isReceiveMessagesProof: boolean;
    readonly asReceiveMessagesProof: {
      readonly relayerIdAtBridgedChain: AccountId32;
      readonly proof: BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof;
      readonly messagesCount: u32;
      readonly dispatchWeight: u64;
    } & Struct;
    readonly isReceiveMessagesDeliveryProof: boolean;
    readonly asReceiveMessagesDeliveryProof: {
      readonly proof: BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof;
      readonly relayersState: BpMessagesUnrewardedRelayersState;
    } & Struct;
    readonly type: 'SetOwner' | 'SetOperatingMode' | 'UpdatePalletParameter' | 'SendMessage' | 'IncreaseMessageFee' | 'ReceiveMessagesProof' | 'ReceiveMessagesDeliveryProof';
  }

  /** @name BpMessagesOperatingMode (511) */
  export interface BpMessagesOperatingMode extends Enum {
    readonly isNormal: boolean;
    readonly isRejectingOutboundMessages: boolean;
    readonly isHalted: boolean;
    readonly type: 'Normal' | 'RejectingOutboundMessages' | 'Halted';
  }

  /** @name BpMessageDispatchMessagePayload (512) */
  export interface BpMessageDispatchMessagePayload extends Struct {
    readonly specVersion: u32;
    readonly weight: u64;
    readonly origin: BpMessageDispatchCallOrigin;
    readonly dispatchFeePayment: BpRuntimeMessagesDispatchFeePayment;
    readonly call: Bytes;
  }

  /** @name SpRuntimeMultiSigner (513) */
  export interface SpRuntimeMultiSigner extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Public;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Public;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaPublic;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpRuntimeMultiSignature (514) */
  export interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEcdsaSignature (515) */
  export interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name BpMessageDispatchCallOrigin (516) */
  export interface BpMessageDispatchCallOrigin extends Enum {
    readonly isSourceRoot: boolean;
    readonly isTargetAccount: boolean;
    readonly asTargetAccount: ITuple<[AccountId32, SpRuntimeMultiSigner, SpRuntimeMultiSignature]>;
    readonly isSourceAccount: boolean;
    readonly asSourceAccount: AccountId32;
    readonly type: 'SourceRoot' | 'TargetAccount' | 'SourceAccount';
  }

  /** @name BpRuntimeMessagesDispatchFeePayment (517) */
  export interface BpRuntimeMessagesDispatchFeePayment extends Enum {
    readonly isAtSourceChain: boolean;
    readonly isAtTargetChain: boolean;
    readonly type: 'AtSourceChain' | 'AtTargetChain';
  }

  /** @name BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof (518) */
  export interface BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof extends Struct {
    readonly bridgedHeaderHash: H256;
    readonly storageProof: Vec<Bytes>;
    readonly lane: U8aFixed;
    readonly noncesStart: u64;
    readonly noncesEnd: u64;
  }

  /** @name BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof (519) */
  export interface BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof extends Struct {
    readonly bridgedHeaderHash: H256;
    readonly storageProof: Vec<Bytes>;
    readonly lane: U8aFixed;
  }

  /** @name BpMessagesUnrewardedRelayersState (520) */
  export interface BpMessagesUnrewardedRelayersState extends Struct {
    readonly unrewardedRelayerEntries: u64;
    readonly messagesInOldestEntry: u64;
    readonly totalMessages: u64;
  }

  /** @name PalletBridgeParachainsCall (522) */
  export interface PalletBridgeParachainsCall extends Enum {
    readonly isSubmitParachainHeads: boolean;
    readonly asSubmitParachainHeads: {
      readonly relayBlockHash: H256;
      readonly parachains: Vec<u32>;
      readonly parachainHeadsProof: Vec<Bytes>;
    } & Struct;
    readonly type: 'SubmitParachainHeads';
  }

  /** @name PalletFeeMarketCall (526) */
  export interface PalletFeeMarketCall extends Enum {
    readonly isEnrollAndLockCollateral: boolean;
    readonly asEnrollAndLockCollateral: {
      readonly lockCollateral: u128;
      readonly relayFee: Option<u128>;
    } & Struct;
    readonly isUpdateLockedCollateral: boolean;
    readonly asUpdateLockedCollateral: {
      readonly newCollateral: u128;
    } & Struct;
    readonly isUpdateRelayFee: boolean;
    readonly asUpdateRelayFee: {
      readonly newFee: u128;
    } & Struct;
    readonly isCancelEnrollment: boolean;
    readonly isSetSlashProtect: boolean;
    readonly asSetSlashProtect: {
      readonly slashProtect: u128;
    } & Struct;
    readonly isSetAssignedRelayersNumber: boolean;
    readonly asSetAssignedRelayersNumber: {
      readonly number: u32;
    } & Struct;
    readonly type: 'EnrollAndLockCollateral' | 'UpdateLockedCollateral' | 'UpdateRelayFee' | 'CancelEnrollment' | 'SetSlashProtect' | 'SetAssignedRelayersNumber';
  }

  /** @name ModuleTransactionPauseModuleCall (529) */
  export interface ModuleTransactionPauseModuleCall extends Enum {
    readonly isPauseTransaction: boolean;
    readonly asPauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly isUnpauseTransaction: boolean;
    readonly asUnpauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly type: 'PauseTransaction' | 'UnpauseTransaction';
  }

  /** @name FromSubstrateIssuingCall (530) */
  export interface FromSubstrateIssuingCall extends Enum {
    readonly isRegisterFromRemote: boolean;
    readonly asRegisterFromRemote: {
      readonly tokenMetadata: DpAssetTokenMetadata;
    } & Struct;
    readonly isIssueFromRemote: boolean;
    readonly asIssueFromRemote: {
      readonly tokenAddress: H160;
      readonly amount: U256;
      readonly recipient: H160;
    } & Struct;
    readonly isSetMappingFactoryAddress: boolean;
    readonly asSetMappingFactoryAddress: {
      readonly address: H160;
    } & Struct;
    readonly isSetRemoteBackingAccount: boolean;
    readonly asSetRemoteBackingAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'RegisterFromRemote' | 'IssueFromRemote' | 'SetMappingFactoryAddress' | 'SetRemoteBackingAccount';
  }

  /** @name DpAssetTokenMetadata (531) */
  export interface DpAssetTokenMetadata extends Struct {
    readonly tokenType: u32;
    readonly address: H160;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimal: u8;
  }

  /** @name PalletCollectiveVotes (532) */
  export interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (533) */
  export interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletElectionsPhragmenSeatHolder (537) */
  export interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (538) */
  export interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (539) */
  export interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isReportSelf: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'ReportSelf' | 'DuplicatedCandidate' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletMembershipError (540) */
  export interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly type: 'AlreadyMember' | 'NotMember';
  }

  /** @name PalletTreasuryProposal (541) */
  export interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (543) */
  export interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (544) */
  export interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals';
  }

  /** @name PalletTipsOpenTip (546) */
  export interface PalletTipsOpenTip extends Struct {
    readonly reason: H256;
    readonly who: AccountId32;
    readonly finder: AccountId32;
    readonly deposit: u128;
    readonly closes: Option<u32>;
    readonly tips: Vec<ITuple<[AccountId32, u128]>>;
    readonly findersFee: bool;
  }

  /** @name PalletTipsError (547) */
  export interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PalletBountiesBounty (548) */
  export interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (549) */
  export interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (550) */
  export interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature';
  }

  /** @name PalletSudoError (551) */
  export interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name DarwiniaClaimsError (552) */
  export interface DarwiniaClaimsError extends Enum {
    readonly isInvalidSignature: boolean;
    readonly isSignerHasNoClaim: boolean;
    readonly isPotUnderflow: boolean;
    readonly isMoveToExistedAddress: boolean;
    readonly isNewAddressTypeMis: boolean;
    readonly type: 'InvalidSignature' | 'SignerHasNoClaim' | 'PotUnderflow' | 'MoveToExistedAddress' | 'NewAddressTypeMis';
  }

  /** @name PalletVestingReleases (555) */
  export interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (556) */
  export interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletUtilityError (557) */
  export interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletIdentityRegistration (558) */
  export interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (566) */
  export interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (568) */
  export interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned';
  }

  /** @name PalletSocietyBid (570) */
  export interface PalletSocietyBid extends Struct {
    readonly who: AccountId32;
    readonly kind: PalletSocietyBidKind;
    readonly value: u128;
  }

  /** @name PalletSocietyBidKind (571) */
  export interface PalletSocietyBidKind extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly isVouch: boolean;
    readonly asVouch: ITuple<[AccountId32, u128]>;
    readonly type: 'Deposit' | 'Vouch';
  }

  /** @name PalletSocietyVouchingStatus (573) */
  export interface PalletSocietyVouchingStatus extends Enum {
    readonly isVouching: boolean;
    readonly isBanned: boolean;
    readonly type: 'Vouching' | 'Banned';
  }

  /** @name PalletSocietyVote (577) */
  export interface PalletSocietyVote extends Enum {
    readonly isSkeptic: boolean;
    readonly isReject: boolean;
    readonly isApprove: boolean;
    readonly type: 'Skeptic' | 'Reject' | 'Approve';
  }

  /** @name PalletSocietyError (578) */
  export interface PalletSocietyError extends Enum {
    readonly isBadPosition: boolean;
    readonly isNotMember: boolean;
    readonly isAlreadyMember: boolean;
    readonly isSuspended: boolean;
    readonly isNotSuspended: boolean;
    readonly isNoPayout: boolean;
    readonly isAlreadyFounded: boolean;
    readonly isInsufficientPot: boolean;
    readonly isAlreadyVouching: boolean;
    readonly isNotVouching: boolean;
    readonly isHead: boolean;
    readonly isFounder: boolean;
    readonly isAlreadyBid: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isMaxMembers: boolean;
    readonly isNotFounder: boolean;
    readonly isNotHead: boolean;
    readonly type: 'BadPosition' | 'NotMember' | 'AlreadyMember' | 'Suspended' | 'NotSuspended' | 'NoPayout' | 'AlreadyFounded' | 'InsufficientPot' | 'AlreadyVouching' | 'NotVouching' | 'Head' | 'Founder' | 'AlreadyBid' | 'AlreadyCandidate' | 'NotCandidate' | 'MaxMembers' | 'NotFounder' | 'NotHead';
  }

  /** @name PalletRecoveryRecoveryConfig (579) */
  export interface PalletRecoveryRecoveryConfig extends Struct {
    readonly delayPeriod: u32;
    readonly deposit: u128;
    readonly friends: Vec<AccountId32>;
    readonly threshold: u16;
  }

  /** @name PalletRecoveryActiveRecovery (580) */
  export interface PalletRecoveryActiveRecovery extends Struct {
    readonly created: u32;
    readonly deposit: u128;
    readonly friends: Vec<AccountId32>;
  }

  /** @name PalletRecoveryError (581) */
  export interface PalletRecoveryError extends Enum {
    readonly isNotAllowed: boolean;
    readonly isZeroThreshold: boolean;
    readonly isNotEnoughFriends: boolean;
    readonly isMaxFriends: boolean;
    readonly isNotSorted: boolean;
    readonly isNotRecoverable: boolean;
    readonly isAlreadyRecoverable: boolean;
    readonly isAlreadyStarted: boolean;
    readonly isNotStarted: boolean;
    readonly isNotFriend: boolean;
    readonly isDelayPeriod: boolean;
    readonly isAlreadyVouched: boolean;
    readonly isThreshold: boolean;
    readonly isStillActive: boolean;
    readonly isAlreadyProxy: boolean;
    readonly isBadState: boolean;
    readonly type: 'NotAllowed' | 'ZeroThreshold' | 'NotEnoughFriends' | 'MaxFriends' | 'NotSorted' | 'NotRecoverable' | 'AlreadyRecoverable' | 'AlreadyStarted' | 'NotStarted' | 'NotFriend' | 'DelayPeriod' | 'AlreadyVouched' | 'Threshold' | 'StillActive' | 'AlreadyProxy' | 'BadState';
  }

  /** @name PalletSchedulerScheduledV2 (584) */
  export interface PalletSchedulerScheduledV2 extends Struct {
    readonly maybeId: Option<Bytes>;
    readonly priority: u8;
    readonly call: Call;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: PangolinRuntimeOriginCaller;
  }

  /** @name PangolinRuntimeOriginCaller (585) */
  export interface PangolinRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isEthereum: boolean;
    readonly asEthereum: DarwiniaEthereumRawOrigin;
    readonly type: 'System' | 'Void' | 'Council' | 'TechnicalCommittee' | 'Ethereum';
  }

  /** @name FrameSystemRawOrigin (586) */
  export interface FrameSystemRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (587) */
  export interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name DarwiniaEthereumRawOrigin (589) */
  export interface DarwiniaEthereumRawOrigin extends Enum {
    readonly isEthereumTransaction: boolean;
    readonly asEthereumTransaction: H160;
    readonly type: 'EthereumTransaction';
  }

  /** @name SpCoreVoid (590) */
  export type SpCoreVoid = Null;

  /** @name PalletSchedulerReleases (591) */
  export interface PalletSchedulerReleases extends Enum {
    readonly isV1: boolean;
    readonly isV2: boolean;
    readonly type: 'V1' | 'V2';
  }

  /** @name PalletSchedulerError (592) */
  export interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange';
  }

  /** @name PalletProxyProxyDefinition (595) */
  export interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: PangolinRuntimePalletsProxyProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (599) */
  export interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (601) */
  export interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMultisigMultisig (603) */
  export interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (605) */
  export interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name DarwiniaRelayPrimitivesRelayerGameRelayVotingState (608) */
  export interface DarwiniaRelayPrimitivesRelayerGameRelayVotingState extends Struct {
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
  }

  /** @name DarwiniaBridgeEthereumError (609) */
  export interface DarwiniaBridgeEthereumError extends Enum {
    readonly isHeaderInv: boolean;
    readonly isConfirmedBlocksC: boolean;
    readonly isContinuousInv: boolean;
    readonly isAffirmationExisted: boolean;
    readonly isHeaderHashInv: boolean;
    readonly isMmrInv: boolean;
    readonly isHeaderHashMis: boolean;
    readonly isConfirmedHeaderNE: boolean;
    readonly isReceiptProofInv: boolean;
    readonly isPendingRelayHeaderParcelNE: boolean;
    readonly isPendingRelayHeaderParcelAE: boolean;
    readonly isAlreadyVoteForAyeDup: boolean;
    readonly isAlreadyVoteForNayDup: boolean;
    readonly type: 'HeaderInv' | 'ConfirmedBlocksC' | 'ContinuousInv' | 'AffirmationExisted' | 'HeaderHashInv' | 'MmrInv' | 'HeaderHashMis' | 'ConfirmedHeaderNE' | 'ReceiptProofInv' | 'PendingRelayHeaderParcelNE' | 'PendingRelayHeaderParcelAE' | 'AlreadyVoteForAyeDup' | 'AlreadyVoteForNayDup';
  }

  /** @name ToEthereumBackingError (611) */
  export interface ToEthereumBackingError extends Enum {
    readonly isAddrLenMis: boolean;
    readonly isPubkeyPrefixMis: boolean;
    readonly isBytesCF: boolean;
    readonly isIntCF: boolean;
    readonly isArrayCF: boolean;
    readonly isAddressCF: boolean;
    readonly isAssetAR: boolean;
    readonly isAuthoritiesChangeAR: boolean;
    readonly isEthLogPF: boolean;
    readonly isKtonLockedNSBA: boolean;
    readonly isRingLockedNSBA: boolean;
    readonly isLogEntryNE: boolean;
    readonly isRedeemDis: boolean;
    readonly isRingLockLim: boolean;
    readonly isKtonLockLim: boolean;
    readonly type: 'AddrLenMis' | 'PubkeyPrefixMis' | 'BytesCF' | 'IntCF' | 'ArrayCF' | 'AddressCF' | 'AssetAR' | 'AuthoritiesChangeAR' | 'EthLogPF' | 'KtonLockedNSBA' | 'RingLockedNSBA' | 'LogEntryNE' | 'RedeemDis' | 'RingLockLim' | 'KtonLockLim';
  }

  /** @name FromEthereumIssuingError (612) */
  export interface FromEthereumIssuingError extends Enum {
    readonly isInvalidIssuingAccount: boolean;
    readonly isAssetAlreadyRegistered: boolean;
    readonly isAssetAlreadyRedeemed: boolean;
    readonly isStringCF: boolean;
    readonly isInvalidEncodeERC20: boolean;
    readonly isInvalidAddressLen: boolean;
    readonly isInvalidInputData: boolean;
    readonly isDecodeEventFailed: boolean;
    readonly isNoAuthority: boolean;
    readonly isUnsupportedAction: boolean;
    readonly type: 'InvalidIssuingAccount' | 'AssetAlreadyRegistered' | 'AssetAlreadyRedeemed' | 'StringCF' | 'InvalidEncodeERC20' | 'InvalidAddressLen' | 'InvalidInputData' | 'DecodeEventFailed' | 'NoAuthority' | 'UnsupportedAction';
  }

  /** @name DarwiniaRelayPrimitivesRelayerGameRelayAffirmation (615) */
  export interface DarwiniaRelayPrimitivesRelayerGameRelayAffirmation extends Struct {
    readonly relayer: AccountId32;
    readonly relayHeaderParcels: Vec<DarwiniaBridgeEthereumEthereumRelayHeaderParcel>;
    readonly stake: u128;
    readonly maybeExtendedRelayAffirmationId: Option<DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId>;
    readonly verifiedOnChain: bool;
  }

  /** @name DarwiniaRelayerGameError (618) */
  export interface DarwiniaRelayerGameError extends Enum {
    readonly isRelayParcelAR: boolean;
    readonly isRoundMis: boolean;
    readonly isActiveGamesTM: boolean;
    readonly isExistedAffirmationsFoundC: boolean;
    readonly isGameAtThisRoundC: boolean;
    readonly isRelayAffirmationDup: boolean;
    readonly isStakeIns: boolean;
    readonly isRelayProofsQuantityInv: boolean;
    readonly isRelayAffirmationNE: boolean;
    readonly isExtendedRelayAffirmationNE: boolean;
    readonly isPreviousRelayProofsInc: boolean;
    readonly isPendingRelayParcelNE: boolean;
    readonly type: 'RelayParcelAR' | 'RoundMis' | 'ActiveGamesTM' | 'ExistedAffirmationsFoundC' | 'GameAtThisRoundC' | 'RelayAffirmationDup' | 'StakeIns' | 'RelayProofsQuantityInv' | 'RelayAffirmationNE' | 'ExtendedRelayAffirmationNE' | 'PreviousRelayProofsInc' | 'PendingRelayParcelNE';
  }

  /** @name DarwiniaRelayPrimitivesRelayAuthoritiesRelayAuthority (620) */
  export interface DarwiniaRelayPrimitivesRelayAuthoritiesRelayAuthority extends Struct {
    readonly accountId: AccountId32;
    readonly signer: H160;
    readonly stake: u128;
    readonly term: u32;
  }

  /** @name DarwiniaRelayPrimitivesRelayAuthoritiesScheduledAuthoritiesChange (621) */
  export interface DarwiniaRelayPrimitivesRelayAuthoritiesScheduledAuthoritiesChange extends Struct {
    readonly nextAuthorities: Vec<DarwiniaRelayPrimitivesRelayAuthoritiesRelayAuthority>;
    readonly deadline: u32;
  }

  /** @name DarwiniaRelayPrimitivesRelayAuthoritiesMmrRootToSign (623) */
  export interface DarwiniaRelayPrimitivesRelayAuthoritiesMmrRootToSign extends Struct {
    readonly mmrRoot: H256;
    readonly signatures: Vec<ITuple<[AccountId32, U8aFixed]>>;
  }

  /** @name DarwiniaRelayAuthoritiesError (624) */
  export interface DarwiniaRelayAuthoritiesError extends Enum {
    readonly isCandidateAE: boolean;
    readonly isCandidateNE: boolean;
    readonly isAuthorityAE: boolean;
    readonly isAuthorityNE: boolean;
    readonly isAuthorityIT: boolean;
    readonly isAuthoritiesCountTL: boolean;
    readonly isStakeIns: boolean;
    readonly isOnAuthoritiesChangeDis: boolean;
    readonly isScheduledTM: boolean;
    readonly isScheduledSignNE: boolean;
    readonly isSignatureInv: boolean;
    readonly isTermMis: boolean;
    readonly isAuthoritiesMis: boolean;
    readonly isNextAuthoritiesNE: boolean;
    readonly type: 'CandidateAE' | 'CandidateNE' | 'AuthorityAE' | 'AuthorityNE' | 'AuthorityIT' | 'AuthoritiesCountTL' | 'StakeIns' | 'OnAuthoritiesChangeDis' | 'ScheduledTM' | 'ScheduledSignNE' | 'SignatureInv' | 'TermMis' | 'AuthoritiesMis' | 'NextAuthoritiesNE';
  }

  /** @name DarwiniaEvmError (626) */
  export interface DarwiniaEvmError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isFeeOverflow: boolean;
    readonly isPaymentOverflow: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isGasPriceTooLow: boolean;
    readonly isInvalidNonce: boolean;
    readonly type: 'BalanceLow' | 'FeeOverflow' | 'PaymentOverflow' | 'WithdrawFailed' | 'GasPriceTooLow' | 'InvalidNonce';
  }

  /** @name FpRpcTransactionStatus (629) */
  export interface FpRpcTransactionStatus extends Struct {
    readonly transactionHash: H256;
    readonly transactionIndex: u32;
    readonly from: H160;
    readonly to: Option<H160>;
    readonly contractAddress: Option<H160>;
    readonly logs: Vec<EthereumLog>;
    readonly logsBloom: EthbloomBloom;
  }

  /** @name EthereumReceiptReceiptV3 (632) */
  export interface EthereumReceiptReceiptV3 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumReceiptEip658ReceiptData;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumReceiptEip658ReceiptData;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumReceiptEip658ReceiptData;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumReceiptEip658ReceiptData (633) */
  export interface EthereumReceiptEip658ReceiptData extends Struct {
    readonly statusCode: u8;
    readonly usedGas: U256;
    readonly logsBloom: EthbloomBloom;
    readonly logs: Vec<EthereumLog>;
  }

  /** @name EthereumBlock (634) */
  export interface EthereumBlock extends Struct {
    readonly header: EthereumHeader;
    readonly transactions: Vec<EthereumTransactionTransactionV2>;
    readonly ommers: Vec<EthereumHeader>;
  }

  /** @name EthereumHeader (635) */
  export interface EthereumHeader extends Struct {
    readonly parentHash: H256;
    readonly ommersHash: H256;
    readonly beneficiary: H160;
    readonly stateRoot: H256;
    readonly transactionsRoot: H256;
    readonly receiptsRoot: H256;
    readonly logsBloom: EthbloomBloom;
    readonly difficulty: U256;
    readonly number: U256;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly timestamp: u64;
    readonly extraData: Bytes;
    readonly mixHash: H256;
    readonly nonce: EthereumTypesHashH64;
  }

  /** @name EthereumTypesHashH64 (636) */
  export interface EthereumTypesHashH64 extends U8aFixed {}

  /** @name DarwiniaEthereumError (641) */
  export interface DarwiniaEthereumError extends Enum {
    readonly isInvalidSignature: boolean;
    readonly isPreLogExists: boolean;
    readonly isInternalTransactionExitError: boolean;
    readonly isInternalTransactionRevertError: boolean;
    readonly isInternalTransactionFatalError: boolean;
    readonly isReadyOnlyCall: boolean;
    readonly type: 'InvalidSignature' | 'PreLogExists' | 'InternalTransactionExitError' | 'InternalTransactionRevertError' | 'InternalTransactionFatalError' | 'ReadyOnlyCall';
  }

  /** @name BpHeaderChainAuthoritySet (642) */
  export interface BpHeaderChainAuthoritySet extends Struct {
    readonly authorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly setId: u64;
  }

  /** @name PalletBridgeGrandpaError (643) */
  export interface PalletBridgeGrandpaError extends Enum {
    readonly isInvalidJustification: boolean;
    readonly isInvalidAuthoritySet: boolean;
    readonly isTooManyRequests: boolean;
    readonly isOldHeader: boolean;
    readonly isUnknownHeader: boolean;
    readonly isUnsupportedScheduledChange: boolean;
    readonly isNotInitialized: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isHalted: boolean;
    readonly isStorageRootMismatch: boolean;
    readonly type: 'InvalidJustification' | 'InvalidAuthoritySet' | 'TooManyRequests' | 'OldHeader' | 'UnknownHeader' | 'UnsupportedScheduledChange' | 'NotInitialized' | 'AlreadyInitialized' | 'Halted' | 'StorageRootMismatch';
  }

  /** @name BpMessagesInboundLaneData (644) */
  export interface BpMessagesInboundLaneData extends Struct {
    readonly relayers: Vec<BpMessagesUnrewardedRelayer>;
    readonly lastConfirmedNonce: u64;
  }

  /** @name BpMessagesUnrewardedRelayer (646) */
  export interface BpMessagesUnrewardedRelayer extends Struct {
    readonly relayer: AccountId32;
    readonly messages: BpMessagesDeliveredMessages;
  }

  /** @name BpMessagesOutboundLaneData (647) */
  export interface BpMessagesOutboundLaneData extends Struct {
    readonly oldestUnprunedNonce: u64;
    readonly latestReceivedNonce: u64;
    readonly latestGeneratedNonce: u64;
  }

  /** @name BpMessagesMessageKey (648) */
  export interface BpMessagesMessageKey extends Struct {
    readonly laneId: U8aFixed;
    readonly nonce: u64;
  }

  /** @name BpMessagesMessageData (649) */
  export interface BpMessagesMessageData extends Struct {
    readonly payload: Bytes;
    readonly fee: u128;
  }

  /** @name PalletBridgeMessagesError (650) */
  export interface PalletBridgeMessagesError extends Enum {
    readonly isHalted: boolean;
    readonly isMessageRejectedByChainVerifier: boolean;
    readonly isMessageRejectedByLaneVerifier: boolean;
    readonly isFailedToWithdrawMessageFee: boolean;
    readonly isTooManyMessagesInTheProof: boolean;
    readonly isInvalidMessagesProof: boolean;
    readonly isInvalidMessagesDeliveryProof: boolean;
    readonly isInvalidUnrewardedRelayers: boolean;
    readonly isInvalidUnrewardedRelayersState: boolean;
    readonly isMessageIsAlreadyDelivered: boolean;
    readonly isMessageIsNotYetSent: boolean;
    readonly isTryingToConfirmMoreMessagesThanExpected: boolean;
    readonly type: 'Halted' | 'MessageRejectedByChainVerifier' | 'MessageRejectedByLaneVerifier' | 'FailedToWithdrawMessageFee' | 'TooManyMessagesInTheProof' | 'InvalidMessagesProof' | 'InvalidMessagesDeliveryProof' | 'InvalidUnrewardedRelayers' | 'InvalidUnrewardedRelayersState' | 'MessageIsAlreadyDelivered' | 'MessageIsNotYetSent' | 'TryingToConfirmMoreMessagesThanExpected';
  }

  /** @name PalletBridgeParachainsBestParaHead (652) */
  export interface PalletBridgeParachainsBestParaHead extends Struct {
    readonly atRelayBlockNumber: u32;
    readonly headHash: H256;
    readonly nextImportedHashPosition: u32;
  }

  /** @name PalletBridgeParachainsError (656) */
  export interface PalletBridgeParachainsError extends Enum {
    readonly isUnknownRelayChainBlock: boolean;
    readonly isInvalidStorageProof: boolean;
    readonly isUnknownParaHead: boolean;
    readonly isStorageRootMismatch: boolean;
    readonly isFailedToExtractStateRoot: boolean;
    readonly type: 'UnknownRelayChainBlock' | 'InvalidStorageProof' | 'UnknownParaHead' | 'StorageRootMismatch' | 'FailedToExtractStateRoot';
  }

  /** @name PalletFeeMarketRelayer (658) */
  export interface PalletFeeMarketRelayer extends Struct {
    readonly id: AccountId32;
    readonly collateral: u128;
    readonly fee: u128;
  }

  /** @name PalletFeeMarketOrder (660) */
  export interface PalletFeeMarketOrder extends Struct {
    readonly lane: U8aFixed;
    readonly message: u64;
    readonly sentTime: u32;
    readonly confirmTime: Option<u32>;
    readonly lockedCollateral: u128;
    readonly relayers: Vec<PalletFeeMarketPriorRelayer>;
  }

  /** @name PalletFeeMarketPriorRelayer (662) */
  export interface PalletFeeMarketPriorRelayer extends Struct {
    readonly id: AccountId32;
    readonly fee: u128;
    readonly validRange: Range<u32>;
  }

  // /** @name Range (663) */
  // export interface Range extends Range<u32> {}

  /** @name PalletFeeMarketError (664) */
  export interface PalletFeeMarketError extends Enum {
    readonly isInsufficientBalance: boolean;
    readonly isAlreadyEnrolled: boolean;
    readonly isNotEnrolled: boolean;
    readonly isStillHasOrdersNotConfirmed: boolean;
    readonly isRelayFeeTooLow: boolean;
    readonly isOccupiedRelayer: boolean;
    readonly type: 'InsufficientBalance' | 'AlreadyEnrolled' | 'NotEnrolled' | 'StillHasOrdersNotConfirmed' | 'RelayFeeTooLow' | 'OccupiedRelayer';
  }

  /** @name ModuleTransactionPauseModuleError (666) */
  export interface ModuleTransactionPauseModuleError extends Enum {
    readonly isCannotPause: boolean;
    readonly isInvalidCharacter: boolean;
    readonly type: 'CannotPause' | 'InvalidCharacter';
  }

  /** @name FromSubstrateIssuingError (667) */
  export interface FromSubstrateIssuingError extends Enum {
    readonly isTokenUnregistered: boolean;
    readonly isInvalidIssuingAccount: boolean;
    readonly isStringCF: boolean;
    readonly isInvalidEncodeERC20: boolean;
    readonly isInvalidIssueEncoding: boolean;
    readonly isInvalidAddressLen: boolean;
    readonly type: 'TokenUnregistered' | 'InvalidIssuingAccount' | 'StringCF' | 'InvalidEncodeERC20' | 'InvalidIssueEncoding' | 'InvalidAddressLen';
  }

  /** @name FrameSystemExtensionsCheckSpecVersion (670) */
  export type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (671) */
  export type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (672) */
  export type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (675) */
  export interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (676) */
  export type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (677) */
  export interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name DarwiniaBridgeEthereumCheckEthereumRelayHeaderParcel (678) */
  export type DarwiniaBridgeEthereumCheckEthereumRelayHeaderParcel = Null;

  /** @name PangolinRuntimeRuntime (679) */
  export type PangolinRuntimeRuntime = Null;

} // declare module
