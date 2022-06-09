// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BitvecOrderMsb0, BpHeaderChainAuthoritySet, BpHeaderChainInitializationData, BpHeaderChainJustificationGrandpaJustification, BpMessageDispatchCallOrigin, BpMessageDispatchMessagePayload, BpMessagesDeliveredMessages, BpMessagesInboundLaneData, BpMessagesMessageData, BpMessagesMessageKey, BpMessagesOperatingMode, BpMessagesOutboundLaneData, BpMessagesUnrewardedRelayer, BpMessagesUnrewardedRelayersState, BpRuntimeMessagesDispatchFeePayment, BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof, BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof, CrabRuntimeBridgesMessageCrabParachainCrabToCrabParachainParameter, CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter, CrabRuntimeOriginCaller, CrabRuntimePalletsElectionProviderMultiPhaseNposCompactSolution24, CrabRuntimePalletsProxyProxyType, CrabRuntimePalletsSessionSessionKeys, CrabRuntimeRuntime, DarwiniaBalancesCall, DarwiniaBalancesError, DarwiniaBalancesEvent, DarwiniaBalancesReleases, DarwiniaBalancesReserveData, DarwiniaCommonRuntimeImplsAccountData, DarwiniaEthereumCall, DarwiniaEthereumError, DarwiniaEthereumEvent, DarwiniaEthereumRawOrigin, DarwiniaEvmCall, DarwiniaEvmError, DarwiniaEvmEvent, DarwiniaStakingCall, DarwiniaStakingError, DarwiniaStakingEvent, DarwiniaStakingSlashingRk, DarwiniaStakingSlashingSlashingSpans, DarwiniaStakingSlashingSpanRecord, DarwiniaStakingStructsActiveEraInfo, DarwiniaStakingStructsEraRewardPoints, DarwiniaStakingStructsExposure, DarwiniaStakingStructsForcing, DarwiniaStakingStructsIndividualExposure, DarwiniaStakingStructsNominations, DarwiniaStakingStructsReleases, DarwiniaStakingStructsRewardDestination, DarwiniaStakingStructsStakingBalance, DarwiniaStakingStructsStakingLedger, DarwiniaStakingStructsTimeDepositItem, DarwiniaStakingStructsUnappliedSlash, DarwiniaStakingStructsValidatorPrefs, DarwiniaSupportStructsStakingLock, DarwiniaSupportStructsUnbonding, DpAssetTokenMetadata, EthbloomBloom, EthereumBlock, EthereumHeader, EthereumLog, EthereumReceiptEip658ReceiptData, EthereumReceiptReceiptV3, EthereumTransactionAccessListItem, EthereumTransactionEip1559Transaction, EthereumTransactionEip2930Transaction, EthereumTransactionLegacyTransaction, EthereumTransactionTransactionAction, EthereumTransactionTransactionSignature, EthereumTransactionTransactionV2, EthereumTypesHashH64, EvmCoreErrorExitError, EvmCoreErrorExitFatal, EvmCoreErrorExitReason, EvmCoreErrorExitRevert, EvmCoreErrorExitSucceed, FinalityGrandpaCommit, FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FinalityGrandpaSignedPrecommit, FpRpcTransactionStatus, FrameSupportPalletId, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchClass, FrameSupportWeightsDispatchInfo, FrameSupportWeightsPays, FrameSupportWeightsPerDispatchClassU32, FrameSupportWeightsPerDispatchClassU64, FrameSupportWeightsPerDispatchClassWeightsPerClass, FrameSupportWeightsRuntimeDbWeight, FrameSupportWeightsWeightToFeeCoefficient, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, FrameSystemRawOrigin, FromSubstrateIssuingCall, FromSubstrateIssuingError, FromSubstrateIssuingEvent, PalletAuthorshipCall, PalletAuthorshipError, PalletAuthorshipUncleEntryItem, PalletBabeCall, PalletBabeError, PalletBalancesBalanceLock, PalletBalancesReasons, PalletBaseFeeCall, PalletBaseFeeEvent, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletBridgeDispatchEvent, PalletBridgeGrandpaCall, PalletBridgeGrandpaError, PalletBridgeMessagesCall, PalletBridgeMessagesError, PalletBridgeMessagesEvent, PalletBridgeParachainsBestParaHead, PalletBridgeParachainsCall, PalletBridgeParachainsError, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyReleases, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletElectionProviderMultiPhaseCall, PalletElectionProviderMultiPhaseElectionCompute, PalletElectionProviderMultiPhaseError, PalletElectionProviderMultiPhaseEvent, PalletElectionProviderMultiPhasePhase, PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseReadySolution, PalletElectionProviderMultiPhaseRoundSnapshot, PalletElectionProviderMultiPhaseSignedSignedSubmission, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletElectionsPhragmenCall, PalletElectionsPhragmenError, PalletElectionsPhragmenEvent, PalletElectionsPhragmenRenouncing, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletFeeMarketCall, PalletFeeMarketError, PalletFeeMarketEvent, PalletFeeMarketOrder, PalletFeeMarketPriorRelayer, PalletFeeMarketRelayer, PalletFeeMarketSlashReport, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletImOnlineBoundedOpaqueNetworkState, PalletImOnlineCall, PalletImOnlineError, PalletImOnlineEvent, PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Public, PalletImOnlineSr25519AppSr25519Signature, PalletIndicesCall, PalletIndicesError, PalletIndicesEvent, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletOffencesEvent, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletRecoveryActiveRecovery, PalletRecoveryCall, PalletRecoveryError, PalletRecoveryEvent, PalletRecoveryRecoveryConfig, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerReleases, PalletSchedulerScheduledV2, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSocietyBid, PalletSocietyBidKind, PalletSocietyCall, PalletSocietyError, PalletSocietyEvent, PalletSocietyJudgement, PalletSocietyVote, PalletSocietyVouchingStatus, PalletTimestampCall, PalletTipsCall, PalletTipsError, PalletTipsEvent, PalletTipsOpenTip, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, SpAuthorityDiscoveryAppPublic, SpConsensusBabeAllowedSlots, SpConsensusBabeAppPublic, SpConsensusBabeBabeEpochConfiguration, SpConsensusBabeDigestsNextConfigDescriptor, SpConsensusSlotsEquivocationProof, SpCoreChangesTrieChangesTrieConfiguration, SpCoreCryptoKeyTypeId, SpCoreEcdsaPublic, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreOffchainOpaqueNetworkState, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpFinalityGrandpaAppPublic, SpFinalityGrandpaAppSignature, SpFinalityGrandpaEquivocation, SpFinalityGrandpaEquivocationProof, SpNposElectionsSupport, SpRuntimeArithmeticError, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestChangesTrieSignal, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeHeader, SpRuntimeMultiSignature, SpRuntimeMultiSigner, SpRuntimeTokenError, SpSessionMembershipProof, SpStakingOffenceOffenceDetails, SpVersionRuntimeVersion } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  export interface InterfaceTypes {
    BitvecOrderMsb0: BitvecOrderMsb0;
    BpHeaderChainAuthoritySet: BpHeaderChainAuthoritySet;
    BpHeaderChainInitializationData: BpHeaderChainInitializationData;
    BpHeaderChainJustificationGrandpaJustification: BpHeaderChainJustificationGrandpaJustification;
    BpMessageDispatchCallOrigin: BpMessageDispatchCallOrigin;
    BpMessageDispatchMessagePayload: BpMessageDispatchMessagePayload;
    BpMessagesDeliveredMessages: BpMessagesDeliveredMessages;
    BpMessagesInboundLaneData: BpMessagesInboundLaneData;
    BpMessagesMessageData: BpMessagesMessageData;
    BpMessagesMessageKey: BpMessagesMessageKey;
    BpMessagesOperatingMode: BpMessagesOperatingMode;
    BpMessagesOutboundLaneData: BpMessagesOutboundLaneData;
    BpMessagesUnrewardedRelayer: BpMessagesUnrewardedRelayer;
    BpMessagesUnrewardedRelayersState: BpMessagesUnrewardedRelayersState;
    BpRuntimeMessagesDispatchFeePayment: BpRuntimeMessagesDispatchFeePayment;
    BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof: BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof;
    BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof: BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof;
    CrabRuntimeBridgesMessageCrabParachainCrabToCrabParachainParameter: CrabRuntimeBridgesMessageCrabParachainCrabToCrabParachainParameter;
    CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter: CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter;
    CrabRuntimeOriginCaller: CrabRuntimeOriginCaller;
    CrabRuntimePalletsElectionProviderMultiPhaseNposCompactSolution24: CrabRuntimePalletsElectionProviderMultiPhaseNposCompactSolution24;
    CrabRuntimePalletsProxyProxyType: CrabRuntimePalletsProxyProxyType;
    CrabRuntimePalletsSessionSessionKeys: CrabRuntimePalletsSessionSessionKeys;
    CrabRuntimeRuntime: CrabRuntimeRuntime;
    DarwiniaBalancesCall: DarwiniaBalancesCall;
    DarwiniaBalancesError: DarwiniaBalancesError;
    DarwiniaBalancesEvent: DarwiniaBalancesEvent;
    DarwiniaBalancesReleases: DarwiniaBalancesReleases;
    DarwiniaBalancesReserveData: DarwiniaBalancesReserveData;
    DarwiniaCommonRuntimeImplsAccountData: DarwiniaCommonRuntimeImplsAccountData;
    DarwiniaEthereumCall: DarwiniaEthereumCall;
    DarwiniaEthereumError: DarwiniaEthereumError;
    DarwiniaEthereumEvent: DarwiniaEthereumEvent;
    DarwiniaEthereumRawOrigin: DarwiniaEthereumRawOrigin;
    DarwiniaEvmCall: DarwiniaEvmCall;
    DarwiniaEvmError: DarwiniaEvmError;
    DarwiniaEvmEvent: DarwiniaEvmEvent;
    DarwiniaStakingCall: DarwiniaStakingCall;
    DarwiniaStakingError: DarwiniaStakingError;
    DarwiniaStakingEvent: DarwiniaStakingEvent;
    DarwiniaStakingSlashingRk: DarwiniaStakingSlashingRk;
    DarwiniaStakingSlashingSlashingSpans: DarwiniaStakingSlashingSlashingSpans;
    DarwiniaStakingSlashingSpanRecord: DarwiniaStakingSlashingSpanRecord;
    DarwiniaStakingStructsActiveEraInfo: DarwiniaStakingStructsActiveEraInfo;
    DarwiniaStakingStructsEraRewardPoints: DarwiniaStakingStructsEraRewardPoints;
    DarwiniaStakingStructsExposure: DarwiniaStakingStructsExposure;
    DarwiniaStakingStructsForcing: DarwiniaStakingStructsForcing;
    DarwiniaStakingStructsIndividualExposure: DarwiniaStakingStructsIndividualExposure;
    DarwiniaStakingStructsNominations: DarwiniaStakingStructsNominations;
    DarwiniaStakingStructsReleases: DarwiniaStakingStructsReleases;
    DarwiniaStakingStructsRewardDestination: DarwiniaStakingStructsRewardDestination;
    DarwiniaStakingStructsStakingBalance: DarwiniaStakingStructsStakingBalance;
    DarwiniaStakingStructsStakingLedger: DarwiniaStakingStructsStakingLedger;
    DarwiniaStakingStructsTimeDepositItem: DarwiniaStakingStructsTimeDepositItem;
    DarwiniaStakingStructsUnappliedSlash: DarwiniaStakingStructsUnappliedSlash;
    DarwiniaStakingStructsValidatorPrefs: DarwiniaStakingStructsValidatorPrefs;
    DarwiniaSupportStructsStakingLock: DarwiniaSupportStructsStakingLock;
    DarwiniaSupportStructsUnbonding: DarwiniaSupportStructsUnbonding;
    DpAssetTokenMetadata: DpAssetTokenMetadata;
    EthbloomBloom: EthbloomBloom;
    EthereumBlock: EthereumBlock;
    EthereumHeader: EthereumHeader;
    EthereumLog: EthereumLog;
    EthereumReceiptEip658ReceiptData: EthereumReceiptEip658ReceiptData;
    EthereumReceiptReceiptV3: EthereumReceiptReceiptV3;
    EthereumTransactionAccessListItem: EthereumTransactionAccessListItem;
    EthereumTransactionEip1559Transaction: EthereumTransactionEip1559Transaction;
    EthereumTransactionEip2930Transaction: EthereumTransactionEip2930Transaction;
    EthereumTransactionLegacyTransaction: EthereumTransactionLegacyTransaction;
    EthereumTransactionTransactionAction: EthereumTransactionTransactionAction;
    EthereumTransactionTransactionSignature: EthereumTransactionTransactionSignature;
    EthereumTransactionTransactionV2: EthereumTransactionTransactionV2;
    EthereumTypesHashH64: EthereumTypesHashH64;
    EvmCoreErrorExitError: EvmCoreErrorExitError;
    EvmCoreErrorExitFatal: EvmCoreErrorExitFatal;
    EvmCoreErrorExitReason: EvmCoreErrorExitReason;
    EvmCoreErrorExitRevert: EvmCoreErrorExitRevert;
    EvmCoreErrorExitSucceed: EvmCoreErrorExitSucceed;
    FinalityGrandpaCommit: FinalityGrandpaCommit;
    FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
    FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
    FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
    FinalityGrandpaPrevote: FinalityGrandpaPrevote;
    FinalityGrandpaSignedPrecommit: FinalityGrandpaSignedPrecommit;
    FpRpcTransactionStatus: FpRpcTransactionStatus;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSupportWeightsDispatchClass: FrameSupportWeightsDispatchClass;
    FrameSupportWeightsDispatchInfo: FrameSupportWeightsDispatchInfo;
    FrameSupportWeightsPays: FrameSupportWeightsPays;
    FrameSupportWeightsPerDispatchClassU32: FrameSupportWeightsPerDispatchClassU32;
    FrameSupportWeightsPerDispatchClassU64: FrameSupportWeightsPerDispatchClassU64;
    FrameSupportWeightsPerDispatchClassWeightsPerClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
    FrameSupportWeightsRuntimeDbWeight: FrameSupportWeightsRuntimeDbWeight;
    FrameSupportWeightsWeightToFeeCoefficient: FrameSupportWeightsWeightToFeeCoefficient;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    FrameSystemRawOrigin: FrameSystemRawOrigin;
    FromSubstrateIssuingCall: FromSubstrateIssuingCall;
    FromSubstrateIssuingError: FromSubstrateIssuingError;
    FromSubstrateIssuingEvent: FromSubstrateIssuingEvent;
    PalletAuthorshipCall: PalletAuthorshipCall;
    PalletAuthorshipError: PalletAuthorshipError;
    PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
    PalletBabeCall: PalletBabeCall;
    PalletBabeError: PalletBabeError;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBaseFeeCall: PalletBaseFeeCall;
    PalletBaseFeeEvent: PalletBaseFeeEvent;
    PalletBountiesBounty: PalletBountiesBounty;
    PalletBountiesBountyStatus: PalletBountiesBountyStatus;
    PalletBountiesCall: PalletBountiesCall;
    PalletBountiesError: PalletBountiesError;
    PalletBountiesEvent: PalletBountiesEvent;
    PalletBridgeDispatchEvent: PalletBridgeDispatchEvent;
    PalletBridgeGrandpaCall: PalletBridgeGrandpaCall;
    PalletBridgeGrandpaError: PalletBridgeGrandpaError;
    PalletBridgeMessagesCall: PalletBridgeMessagesCall;
    PalletBridgeMessagesError: PalletBridgeMessagesError;
    PalletBridgeMessagesEvent: PalletBridgeMessagesEvent;
    PalletBridgeParachainsBestParaHead: PalletBridgeParachainsBestParaHead;
    PalletBridgeParachainsCall: PalletBridgeParachainsCall;
    PalletBridgeParachainsError: PalletBridgeParachainsError;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyPreimageStatus: PalletDemocracyPreimageStatus;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyReleases: PalletDemocracyReleases;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletElectionProviderMultiPhaseCall: PalletElectionProviderMultiPhaseCall;
    PalletElectionProviderMultiPhaseElectionCompute: PalletElectionProviderMultiPhaseElectionCompute;
    PalletElectionProviderMultiPhaseError: PalletElectionProviderMultiPhaseError;
    PalletElectionProviderMultiPhaseEvent: PalletElectionProviderMultiPhaseEvent;
    PalletElectionProviderMultiPhasePhase: PalletElectionProviderMultiPhasePhase;
    PalletElectionProviderMultiPhaseRawSolution: PalletElectionProviderMultiPhaseRawSolution;
    PalletElectionProviderMultiPhaseReadySolution: PalletElectionProviderMultiPhaseReadySolution;
    PalletElectionProviderMultiPhaseRoundSnapshot: PalletElectionProviderMultiPhaseRoundSnapshot;
    PalletElectionProviderMultiPhaseSignedSignedSubmission: PalletElectionProviderMultiPhaseSignedSignedSubmission;
    PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
    PalletElectionsPhragmenError: PalletElectionsPhragmenError;
    PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
    PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
    PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
    PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
    PalletFeeMarketCall: PalletFeeMarketCall;
    PalletFeeMarketError: PalletFeeMarketError;
    PalletFeeMarketEvent: PalletFeeMarketEvent;
    PalletFeeMarketOrder: PalletFeeMarketOrder;
    PalletFeeMarketPriorRelayer: PalletFeeMarketPriorRelayer;
    PalletFeeMarketRelayer: PalletFeeMarketRelayer;
    PalletFeeMarketSlashReport: PalletFeeMarketSlashReport;
    PalletGrandpaCall: PalletGrandpaCall;
    PalletGrandpaError: PalletGrandpaError;
    PalletGrandpaEvent: PalletGrandpaEvent;
    PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
    PalletGrandpaStoredState: PalletGrandpaStoredState;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletImOnlineBoundedOpaqueNetworkState: PalletImOnlineBoundedOpaqueNetworkState;
    PalletImOnlineCall: PalletImOnlineCall;
    PalletImOnlineError: PalletImOnlineError;
    PalletImOnlineEvent: PalletImOnlineEvent;
    PalletImOnlineHeartbeat: PalletImOnlineHeartbeat;
    PalletImOnlineSr25519AppSr25519Public: PalletImOnlineSr25519AppSr25519Public;
    PalletImOnlineSr25519AppSr25519Signature: PalletImOnlineSr25519AppSr25519Signature;
    PalletIndicesCall: PalletIndicesCall;
    PalletIndicesError: PalletIndicesError;
    PalletIndicesEvent: PalletIndicesEvent;
    PalletMembershipCall: PalletMembershipCall;
    PalletMembershipError: PalletMembershipError;
    PalletMembershipEvent: PalletMembershipEvent;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletOffencesEvent: PalletOffencesEvent;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletRecoveryActiveRecovery: PalletRecoveryActiveRecovery;
    PalletRecoveryCall: PalletRecoveryCall;
    PalletRecoveryError: PalletRecoveryError;
    PalletRecoveryEvent: PalletRecoveryEvent;
    PalletRecoveryRecoveryConfig: PalletRecoveryRecoveryConfig;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerReleases: PalletSchedulerReleases;
    PalletSchedulerScheduledV2: PalletSchedulerScheduledV2;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSocietyBid: PalletSocietyBid;
    PalletSocietyBidKind: PalletSocietyBidKind;
    PalletSocietyCall: PalletSocietyCall;
    PalletSocietyError: PalletSocietyError;
    PalletSocietyEvent: PalletSocietyEvent;
    PalletSocietyJudgement: PalletSocietyJudgement;
    PalletSocietyVote: PalletSocietyVote;
    PalletSocietyVouchingStatus: PalletSocietyVouchingStatus;
    PalletTimestampCall: PalletTimestampCall;
    PalletTipsCall: PalletTipsCall;
    PalletTipsError: PalletTipsError;
    PalletTipsEvent: PalletTipsEvent;
    PalletTipsOpenTip: PalletTipsOpenTip;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletVestingCall: PalletVestingCall;
    PalletVestingError: PalletVestingError;
    PalletVestingEvent: PalletVestingEvent;
    PalletVestingReleases: PalletVestingReleases;
    PalletVestingVestingInfo: PalletVestingVestingInfo;
    SpAuthorityDiscoveryAppPublic: SpAuthorityDiscoveryAppPublic;
    SpConsensusBabeAllowedSlots: SpConsensusBabeAllowedSlots;
    SpConsensusBabeAppPublic: SpConsensusBabeAppPublic;
    SpConsensusBabeBabeEpochConfiguration: SpConsensusBabeBabeEpochConfiguration;
    SpConsensusBabeDigestsNextConfigDescriptor: SpConsensusBabeDigestsNextConfigDescriptor;
    SpConsensusSlotsEquivocationProof: SpConsensusSlotsEquivocationProof;
    SpCoreChangesTrieChangesTrieConfiguration: SpCoreChangesTrieChangesTrieConfiguration;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaPublic: SpCoreEcdsaPublic;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Public: SpCoreEd25519Public;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreOffchainOpaqueNetworkState: SpCoreOffchainOpaqueNetworkState;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpFinalityGrandpaAppPublic: SpFinalityGrandpaAppPublic;
    SpFinalityGrandpaAppSignature: SpFinalityGrandpaAppSignature;
    SpFinalityGrandpaEquivocation: SpFinalityGrandpaEquivocation;
    SpFinalityGrandpaEquivocationProof: SpFinalityGrandpaEquivocationProof;
    SpNposElectionsSupport: SpNposElectionsSupport;
    SpRuntimeArithmeticError: SpRuntimeArithmeticError;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestChangesTrieSignal: SpRuntimeDigestChangesTrieSignal;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeHeader: SpRuntimeHeader;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeMultiSigner: SpRuntimeMultiSigner;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpSessionMembershipProof: SpSessionMembershipProof;
    SpStakingOffenceOffenceDetails: SpStakingOffenceOffenceDetails;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
  } // InterfaceTypes
} // declare module
