// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { BitvecOrderMsb0, BpHeaderChainAuthoritySet, BpHeaderChainInitializationData, BpHeaderChainJustificationGrandpaJustification, BpMessageDispatchCallOrigin, BpMessageDispatchMessagePayload, BpMessagesDeliveredMessages, BpMessagesInboundLaneData, BpMessagesMessageData, BpMessagesMessageKey, BpMessagesOperatingMode, BpMessagesOutboundLaneData, BpMessagesUnrewardedRelayer, BpMessagesUnrewardedRelayersState, BpRuntimeMessagesDispatchFeePayment, BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof, BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof, DarwiniaBalancesBalanceLock, DarwiniaBalancesCall, DarwiniaBalancesError, DarwiniaBalancesEvent, DarwiniaBalancesReasons, DarwiniaBalancesReleases, DarwiniaBalancesReserveData, DarwiniaBridgeEthereumCall, DarwiniaBridgeEthereumCheckEthereumRelayHeaderParcel, DarwiniaBridgeEthereumError, DarwiniaBridgeEthereumEthereumRelayHeaderParcel, DarwiniaBridgeEthereumEthereumRelayProofs, DarwiniaBridgeEthereumMmrProof, DarwiniaBridgeEthereumRawEvent, DarwiniaCommonRuntimeImplsAccountData, DarwiniaEcdsaAuthorityCall, DarwiniaEcdsaAuthorityError, DarwiniaEcdsaAuthorityEvent, DarwiniaEcdsaAuthorityPrimitivesCommitment, DarwiniaEcdsaAuthorityPrimitivesOperation, DarwiniaEthereumCall, DarwiniaEthereumError, DarwiniaEthereumEvent, DarwiniaEthereumRawOrigin, DarwiniaEvmCall, DarwiniaEvmError, DarwiniaEvmEvent, DarwiniaMessageGadgetCall, DarwiniaRelayAuthorityCall, DarwiniaRelayAuthorityError, DarwiniaRelayAuthorityEvent, DarwiniaRelayAuthorityPrimitivesAuthority, DarwiniaRelayAuthorityPrimitivesMmrRootToSign, DarwiniaRelayAuthorityPrimitivesScheduledAuthoritiesChange, DarwiniaRelayerGameError, DarwiniaRuntimeBridgesMessageCrabDarwiniaToCrabMessagesParameter, DarwiniaRuntimeOriginCaller, DarwiniaRuntimePalletsElectionProviderMultiPhaseNposCompactSolution16, DarwiniaRuntimePalletsProxyProxyType, DarwiniaRuntimePalletsSessionSessionKeys, DarwiniaRuntimeRuntime, DarwiniaStakingCall, DarwiniaStakingError, DarwiniaStakingEvent, DarwiniaStakingSlashingRk, DarwiniaStakingSlashingSlashingSpans, DarwiniaStakingSlashingSpanRecord, DarwiniaStakingStructsActiveEraInfo, DarwiniaStakingStructsEraRewardPoints, DarwiniaStakingStructsExposure, DarwiniaStakingStructsForcing, DarwiniaStakingStructsIndividualExposure, DarwiniaStakingStructsNominations, DarwiniaStakingStructsReleases, DarwiniaStakingStructsRewardDestination, DarwiniaStakingStructsStakingBalance, DarwiniaStakingStructsStakingLedger, DarwiniaStakingStructsTimeDepositItem, DarwiniaStakingStructsUnappliedSlash, DarwiniaStakingStructsValidatorPrefs, DarwiniaSupportStructsStakingLock, DarwiniaSupportStructsUnbonding, DpAssetTokenMetadata, DpRelayerGameRelayAffirmation, DpRelayerGameRelayAffirmationId, DpRelayerGameRelayVotingState, EthbloomBloom, EthereumBlock, EthereumHeader, EthereumLog, EthereumPrimitivesEthashProof, EthereumPrimitivesHeader, EthereumPrimitivesLogEntry, EthereumPrimitivesReceiptLegacyReceipt, EthereumPrimitivesReceiptReceiptProof, EthereumPrimitivesReceiptTransactionOutcome, EthereumPrimitivesReceiptTypedReceipt, EthereumReceiptEip658ReceiptData, EthereumReceiptReceiptV3, EthereumTransactionAccessListItem, EthereumTransactionEip1559Transaction, EthereumTransactionEip2930Transaction, EthereumTransactionLegacyTransaction, EthereumTransactionTransactionAction, EthereumTransactionTransactionSignature, EthereumTransactionTransactionV2, EthereumTypesHashH128, EthereumTypesHashH64, EvmCoreErrorExitError, EvmCoreErrorExitFatal, EvmCoreErrorExitReason, EvmCoreErrorExitRevert, EvmCoreErrorExitSucceed, FinalityGrandpaCommit, FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FinalityGrandpaSignedPrecommit, FpRpcTransactionStatus, FrameSupportPalletId, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchClass, FrameSupportWeightsDispatchInfo, FrameSupportWeightsPays, FrameSupportWeightsPerDispatchClassU32, FrameSupportWeightsPerDispatchClassU64, FrameSupportWeightsPerDispatchClassWeightsPerClass, FrameSupportWeightsRuntimeDbWeight, FrameSupportWeightsWeightToFeeCoefficient, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, FrameSystemRawOrigin, PalletAuthorshipCall, PalletAuthorshipError, PalletAuthorshipUncleEntryItem, PalletBabeCall, PalletBabeError, PalletBaseFeeCall, PalletBaseFeeEvent, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletBridgeDispatchEvent, PalletBridgeGrandpaCall, PalletBridgeGrandpaError, PalletBridgeMessagesCall, PalletBridgeMessagesError, PalletBridgeMessagesEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyReleases, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletElectionProviderMultiPhaseCall, PalletElectionProviderMultiPhaseElectionCompute, PalletElectionProviderMultiPhaseError, PalletElectionProviderMultiPhaseEvent, PalletElectionProviderMultiPhasePhase, PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseReadySolution, PalletElectionProviderMultiPhaseRoundSnapshot, PalletElectionProviderMultiPhaseSignedSignedSubmission, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletElectionsPhragmenCall, PalletElectionsPhragmenError, PalletElectionsPhragmenEvent, PalletElectionsPhragmenRenouncing, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletFeeMarketAssignedRelayer, PalletFeeMarketCall, PalletFeeMarketError, PalletFeeMarketEvent, PalletFeeMarketOrder, PalletFeeMarketRelayer, PalletFeeMarketS2sPaymentRewardItem, PalletFeeMarketSlashReport, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletImOnlineBoundedOpaqueNetworkState, PalletImOnlineCall, PalletImOnlineError, PalletImOnlineEvent, PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Public, PalletImOnlineSr25519AppSr25519Signature, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletOffencesEvent, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletRecoveryActiveRecovery, PalletRecoveryCall, PalletRecoveryError, PalletRecoveryEvent, PalletRecoveryRecoveryConfig, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerReleases, PalletSchedulerScheduledV2, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSocietyBid, PalletSocietyBidKind, PalletSocietyCall, PalletSocietyError, PalletSocietyEvent, PalletSocietyJudgement, PalletSocietyVote, PalletSocietyVouchingStatus, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTipsCall, PalletTipsError, PalletTipsEvent, PalletTipsOpenTip, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, SpAuthorityDiscoveryAppPublic, SpConsensusBabeAllowedSlots, SpConsensusBabeAppPublic, SpConsensusBabeBabeEpochConfiguration, SpConsensusBabeDigestsNextConfigDescriptor, SpConsensusSlotsEquivocationProof, SpCoreCryptoKeyTypeId, SpCoreEcdsaPublic, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreOffchainOpaqueNetworkState, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpFinalityGrandpaAppPublic, SpFinalityGrandpaAppSignature, SpFinalityGrandpaEquivocation, SpFinalityGrandpaEquivocationProof, SpNposElectionsSupport, SpRuntimeArithmeticError, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeHeader, SpRuntimeMultiSignature, SpRuntimeMultiSigner, SpRuntimeTokenError, SpRuntimeTransactionValidityInvalidTransaction, SpRuntimeTransactionValidityTransactionValidityError, SpRuntimeTransactionValidityUnknownTransaction, SpSessionMembershipProof, SpStakingOffenceOffenceDetails, SpVersionRuntimeVersion, ToEthereumBackingCall, ToEthereumBackingError, ToEthereumBackingEvent, ToEthereumBackingRedeemFor, ToSubstrateBackingCall, ToSubstrateBackingError, ToSubstrateBackingEvent } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
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
    DarwiniaBalancesBalanceLock: DarwiniaBalancesBalanceLock;
    DarwiniaBalancesCall: DarwiniaBalancesCall;
    DarwiniaBalancesError: DarwiniaBalancesError;
    DarwiniaBalancesEvent: DarwiniaBalancesEvent;
    DarwiniaBalancesReasons: DarwiniaBalancesReasons;
    DarwiniaBalancesReleases: DarwiniaBalancesReleases;
    DarwiniaBalancesReserveData: DarwiniaBalancesReserveData;
    DarwiniaBridgeEthereumCall: DarwiniaBridgeEthereumCall;
    DarwiniaBridgeEthereumCheckEthereumRelayHeaderParcel: DarwiniaBridgeEthereumCheckEthereumRelayHeaderParcel;
    DarwiniaBridgeEthereumError: DarwiniaBridgeEthereumError;
    DarwiniaBridgeEthereumEthereumRelayHeaderParcel: DarwiniaBridgeEthereumEthereumRelayHeaderParcel;
    DarwiniaBridgeEthereumEthereumRelayProofs: DarwiniaBridgeEthereumEthereumRelayProofs;
    DarwiniaBridgeEthereumMmrProof: DarwiniaBridgeEthereumMmrProof;
    DarwiniaBridgeEthereumRawEvent: DarwiniaBridgeEthereumRawEvent;
    DarwiniaCommonRuntimeImplsAccountData: DarwiniaCommonRuntimeImplsAccountData;
    DarwiniaEcdsaAuthorityCall: DarwiniaEcdsaAuthorityCall;
    DarwiniaEcdsaAuthorityError: DarwiniaEcdsaAuthorityError;
    DarwiniaEcdsaAuthorityEvent: DarwiniaEcdsaAuthorityEvent;
    DarwiniaEcdsaAuthorityPrimitivesCommitment: DarwiniaEcdsaAuthorityPrimitivesCommitment;
    DarwiniaEcdsaAuthorityPrimitivesOperation: DarwiniaEcdsaAuthorityPrimitivesOperation;
    DarwiniaEthereumCall: DarwiniaEthereumCall;
    DarwiniaEthereumError: DarwiniaEthereumError;
    DarwiniaEthereumEvent: DarwiniaEthereumEvent;
    DarwiniaEthereumRawOrigin: DarwiniaEthereumRawOrigin;
    DarwiniaEvmCall: DarwiniaEvmCall;
    DarwiniaEvmError: DarwiniaEvmError;
    DarwiniaEvmEvent: DarwiniaEvmEvent;
    DarwiniaMessageGadgetCall: DarwiniaMessageGadgetCall;
    DarwiniaRelayAuthorityCall: DarwiniaRelayAuthorityCall;
    DarwiniaRelayAuthorityError: DarwiniaRelayAuthorityError;
    DarwiniaRelayAuthorityEvent: DarwiniaRelayAuthorityEvent;
    DarwiniaRelayAuthorityPrimitivesAuthority: DarwiniaRelayAuthorityPrimitivesAuthority;
    DarwiniaRelayAuthorityPrimitivesMmrRootToSign: DarwiniaRelayAuthorityPrimitivesMmrRootToSign;
    DarwiniaRelayAuthorityPrimitivesScheduledAuthoritiesChange: DarwiniaRelayAuthorityPrimitivesScheduledAuthoritiesChange;
    DarwiniaRelayerGameError: DarwiniaRelayerGameError;
    DarwiniaRuntimeBridgesMessageCrabDarwiniaToCrabMessagesParameter: DarwiniaRuntimeBridgesMessageCrabDarwiniaToCrabMessagesParameter;
    DarwiniaRuntimeOriginCaller: DarwiniaRuntimeOriginCaller;
    DarwiniaRuntimePalletsElectionProviderMultiPhaseNposCompactSolution16: DarwiniaRuntimePalletsElectionProviderMultiPhaseNposCompactSolution16;
    DarwiniaRuntimePalletsProxyProxyType: DarwiniaRuntimePalletsProxyProxyType;
    DarwiniaRuntimePalletsSessionSessionKeys: DarwiniaRuntimePalletsSessionSessionKeys;
    DarwiniaRuntimeRuntime: DarwiniaRuntimeRuntime;
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
    DpRelayerGameRelayAffirmation: DpRelayerGameRelayAffirmation;
    DpRelayerGameRelayAffirmationId: DpRelayerGameRelayAffirmationId;
    DpRelayerGameRelayVotingState: DpRelayerGameRelayVotingState;
    EthbloomBloom: EthbloomBloom;
    EthereumBlock: EthereumBlock;
    EthereumHeader: EthereumHeader;
    EthereumLog: EthereumLog;
    EthereumPrimitivesEthashProof: EthereumPrimitivesEthashProof;
    EthereumPrimitivesHeader: EthereumPrimitivesHeader;
    EthereumPrimitivesLogEntry: EthereumPrimitivesLogEntry;
    EthereumPrimitivesReceiptLegacyReceipt: EthereumPrimitivesReceiptLegacyReceipt;
    EthereumPrimitivesReceiptReceiptProof: EthereumPrimitivesReceiptReceiptProof;
    EthereumPrimitivesReceiptTransactionOutcome: EthereumPrimitivesReceiptTransactionOutcome;
    EthereumPrimitivesReceiptTypedReceipt: EthereumPrimitivesReceiptTypedReceipt;
    EthereumReceiptEip658ReceiptData: EthereumReceiptEip658ReceiptData;
    EthereumReceiptReceiptV3: EthereumReceiptReceiptV3;
    EthereumTransactionAccessListItem: EthereumTransactionAccessListItem;
    EthereumTransactionEip1559Transaction: EthereumTransactionEip1559Transaction;
    EthereumTransactionEip2930Transaction: EthereumTransactionEip2930Transaction;
    EthereumTransactionLegacyTransaction: EthereumTransactionLegacyTransaction;
    EthereumTransactionTransactionAction: EthereumTransactionTransactionAction;
    EthereumTransactionTransactionSignature: EthereumTransactionTransactionSignature;
    EthereumTransactionTransactionV2: EthereumTransactionTransactionV2;
    EthereumTypesHashH128: EthereumTypesHashH128;
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
    PalletAuthorshipCall: PalletAuthorshipCall;
    PalletAuthorshipError: PalletAuthorshipError;
    PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
    PalletBabeCall: PalletBabeCall;
    PalletBabeError: PalletBabeError;
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
    PalletFeeMarketAssignedRelayer: PalletFeeMarketAssignedRelayer;
    PalletFeeMarketCall: PalletFeeMarketCall;
    PalletFeeMarketError: PalletFeeMarketError;
    PalletFeeMarketEvent: PalletFeeMarketEvent;
    PalletFeeMarketOrder: PalletFeeMarketOrder;
    PalletFeeMarketRelayer: PalletFeeMarketRelayer;
    PalletFeeMarketS2sPaymentRewardItem: PalletFeeMarketS2sPaymentRewardItem;
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
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
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
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeHeader: SpRuntimeHeader;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeMultiSigner: SpRuntimeMultiSigner;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionValidityInvalidTransaction: SpRuntimeTransactionValidityInvalidTransaction;
    SpRuntimeTransactionValidityTransactionValidityError: SpRuntimeTransactionValidityTransactionValidityError;
    SpRuntimeTransactionValidityUnknownTransaction: SpRuntimeTransactionValidityUnknownTransaction;
    SpSessionMembershipProof: SpSessionMembershipProof;
    SpStakingOffenceOffenceDetails: SpStakingOffenceOffenceDetails;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    ToEthereumBackingCall: ToEthereumBackingCall;
    ToEthereumBackingError: ToEthereumBackingError;
    ToEthereumBackingEvent: ToEthereumBackingEvent;
    ToEthereumBackingRedeemFor: ToEthereumBackingRedeemFor;
    ToSubstrateBackingCall: ToSubstrateBackingCall;
    ToSubstrateBackingError: ToSubstrateBackingError;
    ToSubstrateBackingEvent: ToSubstrateBackingEvent;
  } // InterfaceTypes
} // declare module
