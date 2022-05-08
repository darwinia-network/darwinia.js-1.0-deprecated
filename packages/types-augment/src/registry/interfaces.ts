// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { DarwiniaBalancesReleases, DarwiniaBalancesReserveData, DarwiniaSupportStructsBalanceLock, LockIdentifier, ReserveIdentifier, Status, UsableBalance } from '@darwinia/types/interfaces/balances';
import type { BeefyPrimitivesCryptoPublic, BeefyPrimitivesMmrBeefyNextAuthoritySet } from '@darwinia/types/interfaces/beefy';
import type { BpMessageDispatchMessagePayload, BpMessagesDeliveredMessages, BpMessagesInboundLaneData, BpMessagesMessageData, BpMessagesMessageKey, BpMessagesOperatingMode, BpMessagesOutboundLaneData, BpMessagesUnrewardedRelayersState, BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof, BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof, BridgedBlockHash, BridgedHeaderHash, CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter, CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter, DarwiniaBridgeEthereumEthereumRelayHeaderParcel, DarwiniaRelayPrimitivesRelayerGameRelayVotingState, DarwiniaRuntimeMessagesCrabMessageDarwiniaToCrabMessagesParameter, DeliveredMessages, EthereumHeader, FixedU128, LaneId, MessageId, MessageNonce, MessagePayload, PalletBridgeParachainsBestParaHead, PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter, PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter, PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter, RawStorageProof, RelayerId, TechnicalMember, UnrewardedRelayer } from '@darwinia/types/interfaces/bridges';
import type { BSCHeader } from '@darwinia/types/interfaces/bsc';
import type { DarwiniaClaimsOtherAddress, DarwiniaClaimsOtherSignature } from '@darwinia/types/interfaces/claims';
import type { AccountInfo, Address, AddressT, BalanceInfo, BalanceLock, Bloom, ChainProperties, Common, DarwiniaRelayPrimitivesRelayAuthoritiesMmrRootToSign, DarwiniaRelayPrimitivesRelayAuthoritiesRelayAuthority, DarwiniaRelayPrimitivesRelayAuthoritiesScheduledAuthoritiesChange, DarwiniaStakingSlashingRk, DarwiniaStakingStructsStakingLedger, DepositId, DpAssetTokenMetadata, DrmlCommonRuntimeImplsAccountData, EcdsaAddress, EcdsaMessage, EcdsaSignature, ElectionCompute, ElectionResultT, EraIndex, EthashProof, EthereumAddress, EthereumBlockNumber, EthereumLog, EthereumNetwork, EthereumPrimitivesHeader, EthereumPrimitivesReceiptTypedReceipt, EthereumReceiptProof, EthereumReceiptProofThing, EthereumRelayHeaderParcel, EthereumTransactionIndex, Exposure, ExposureT, IndividualExposure, KtonBalance, LegacyReceipt, LockFor, LogEntry, MMRProof, MMRRoot, MappedRing, MerkleMountainRangeRootLog, OpCode, PalletFeeMarketOrder, PalletFeeMarketRelayer, Power, PriorRelayer, RKT, Reasons, RefCount, RelayAuthorityMessage, RelayAuthoritySignature, RelayAuthoritySigner, RingBalance, Signature, Signer, SpCoreChangesTrieChangesTrieConfiguration, SpanRecord, StakingLock, Term, TimeDepositItem, TokenMessageId, TransactionOutcome, TronAddress, TsInMs, UnappliedSlash, Unbonding, ValidatorPrefs, ValidatorPrefsWithBlocked } from '@darwinia/types/interfaces/darwiniaInject';
import type { DarwiniaDemocracyVoteThreshold } from '@darwinia/types/interfaces/democracy';
import type { DarwiniaBridgeEthereumEthereumRelayProofs, DarwiniaBridgeEthereumMmrProof, EIP1559Transaction, EIP2930Transaction, EthAccessList, EthAccessListItem, EthAddress, EthBloom, EthHeader, EthLog, EthTransactionAction, EthTransactionSignature, EthereumBlock, EthereumPrimitivesReceiptReceiptProof, EthereumReceiptReceiptV3, EthereumTransactionTransactionV2, FpRpcTransactionStatus, LegacyTransaction, ToEthereumBackingRedeemFor, TransactionV2 } from '@darwinia/types/interfaces/eth';
import type { EvmCoreErrorExitReason, ExitError, ExitFatal, ExitRevert, ExitSucceed } from '@darwinia/types/interfaces/evm';
import type { DarwiniaFeeMarketSlashReport, DpFeeSlashReport, Fee, InProcessOrders, PalletFeeMarketSlashReport } from '@darwinia/types/interfaces/fee';
import type { AuthorityId, AuthorityList, AuthorityWeight, BpHeaderChainAuthoritySet, BpHeaderChainInitializationData, BpHeaderChainJustificationGrandpaJustification, NextAuthority, setId } from '@darwinia/types/interfaces/grandpa';
import type { MMRProofResult, MmrNodesPruningConfiguration, NodeIndex } from '@darwinia/types/interfaces/headerMMR';
import type { Announcement, CrabRuntimePalletsProxyProxyType, DarwiniaRuntimePalletsProxyProxyType, PangolinRuntimePalletsProxyProxyType, ProxyAnnouncement, ProxyType } from '@darwinia/types/interfaces/proxy';
import type { DarwiniaRelayPrimitivesRelayerGameRelayAffirmation, DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId, RelayHeaderId, RelayHeaderParcel, RelayProofs, RelayVotingState } from '@darwinia/types/interfaces/relayerGame';
import type { PalletSchedulerReleases, PalletSchedulerScheduledV2 } from '@darwinia/types/interfaces/scheduler';
import type { AuthoritySignature, GrandpaEquivocation, GrandpaEquivocationProof, GrandpaEquivocationValue, GrandpaPrevote, PangolinRuntimePalletsSessionSessionKeys, grandpa } from '@darwinia/types/interfaces/session';
import type { DarwiniaStakingSlashingSlashingSpans, DarwiniaStakingSlashingSpanRecord, DarwiniaStakingStructsActiveEraInfo, DarwiniaStakingStructsEraRewardPoints, DarwiniaStakingStructsExposure, DarwiniaStakingStructsForcing, DarwiniaStakingStructsNominations, DarwiniaStakingStructsReleases, DarwiniaStakingStructsRewardDestination, DarwiniaStakingStructsStakingBalance, DarwiniaStakingStructsUnappliedSlash, DarwiniaStakingStructsValidatorPrefs, PalletStakingIndividualExposure, PowerOf, RewardPoint, SpanIndex, UnappliedSlashOther } from '@darwinia/types/interfaces/staking';
import type { Data, StorageKey } from '@polkadot/types';
import type { BitVec, Bool, Bytes, I128, I16, I256, I32, I64, I8, Json, Null, Raw, Text, Type, U128, U16, U256, U32, U64, U8, USize, bool, i128, i16, i256, i32, i64, i8, u128, u16, u256, u32, u64, u8, usize } from '@polkadot/types-codec';

declare module '@polkadot/types/types/registry' {
  export interface InterfaceTypes {
    AccountInfo: AccountInfo;
    Address: Address;
    AddressT: AddressT;
    Announcement: Announcement;
    AuthorityId: AuthorityId;
    AuthorityList: AuthorityList;
    AuthoritySignature: AuthoritySignature;
    AuthorityWeight: AuthorityWeight;
    BalanceInfo: BalanceInfo;
    BalanceLock: BalanceLock;
    BeefyPrimitivesCryptoPublic: BeefyPrimitivesCryptoPublic;
    BeefyPrimitivesMmrBeefyNextAuthoritySet: BeefyPrimitivesMmrBeefyNextAuthoritySet;
    BitVec: BitVec;
    Bloom: Bloom;
    bool: bool;
    Bool: Bool;
    BpHeaderChainAuthoritySet: BpHeaderChainAuthoritySet;
    BpHeaderChainInitializationData: BpHeaderChainInitializationData;
    BpHeaderChainJustificationGrandpaJustification: BpHeaderChainJustificationGrandpaJustification;
    BpMessageDispatchMessagePayload: BpMessageDispatchMessagePayload;
    BpMessagesDeliveredMessages: BpMessagesDeliveredMessages;
    BpMessagesInboundLaneData: BpMessagesInboundLaneData;
    BpMessagesMessageData: BpMessagesMessageData;
    BpMessagesMessageKey: BpMessagesMessageKey;
    BpMessagesOperatingMode: BpMessagesOperatingMode;
    BpMessagesOutboundLaneData: BpMessagesOutboundLaneData;
    BpMessagesUnrewardedRelayersState: BpMessagesUnrewardedRelayersState;
    BridgedBlockHash: BridgedBlockHash;
    BridgedHeaderHash: BridgedHeaderHash;
    BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof: BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof;
    BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof: BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof;
    BSCHeader: BSCHeader;
    Bytes: Bytes;
    ChainProperties: ChainProperties;
    Common: Common;
    CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter: CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter;
    CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter: CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter;
    CrabRuntimePalletsProxyProxyType: CrabRuntimePalletsProxyProxyType;
    DarwiniaBalancesReleases: DarwiniaBalancesReleases;
    DarwiniaBalancesReserveData: DarwiniaBalancesReserveData;
    DarwiniaBridgeEthereumEthereumRelayHeaderParcel: DarwiniaBridgeEthereumEthereumRelayHeaderParcel;
    DarwiniaBridgeEthereumEthereumRelayProofs: DarwiniaBridgeEthereumEthereumRelayProofs;
    DarwiniaBridgeEthereumMmrProof: DarwiniaBridgeEthereumMmrProof;
    DarwiniaClaimsOtherAddress: DarwiniaClaimsOtherAddress;
    DarwiniaClaimsOtherSignature: DarwiniaClaimsOtherSignature;
    DarwiniaDemocracyVoteThreshold: DarwiniaDemocracyVoteThreshold;
    DarwiniaFeeMarketSlashReport: DarwiniaFeeMarketSlashReport;
    DarwiniaRelayPrimitivesRelayAuthoritiesMmrRootToSign: DarwiniaRelayPrimitivesRelayAuthoritiesMmrRootToSign;
    DarwiniaRelayPrimitivesRelayAuthoritiesRelayAuthority: DarwiniaRelayPrimitivesRelayAuthoritiesRelayAuthority;
    DarwiniaRelayPrimitivesRelayAuthoritiesScheduledAuthoritiesChange: DarwiniaRelayPrimitivesRelayAuthoritiesScheduledAuthoritiesChange;
    DarwiniaRelayPrimitivesRelayerGameRelayAffirmation: DarwiniaRelayPrimitivesRelayerGameRelayAffirmation;
    DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId: DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId;
    DarwiniaRelayPrimitivesRelayerGameRelayVotingState: DarwiniaRelayPrimitivesRelayerGameRelayVotingState;
    DarwiniaRuntimeMessagesCrabMessageDarwiniaToCrabMessagesParameter: DarwiniaRuntimeMessagesCrabMessageDarwiniaToCrabMessagesParameter;
    DarwiniaRuntimePalletsProxyProxyType: DarwiniaRuntimePalletsProxyProxyType;
    DarwiniaStakingSlashingRk: DarwiniaStakingSlashingRk;
    DarwiniaStakingSlashingSlashingSpans: DarwiniaStakingSlashingSlashingSpans;
    DarwiniaStakingSlashingSpanRecord: DarwiniaStakingSlashingSpanRecord;
    DarwiniaStakingStructsActiveEraInfo: DarwiniaStakingStructsActiveEraInfo;
    DarwiniaStakingStructsEraRewardPoints: DarwiniaStakingStructsEraRewardPoints;
    DarwiniaStakingStructsExposure: DarwiniaStakingStructsExposure;
    DarwiniaStakingStructsForcing: DarwiniaStakingStructsForcing;
    DarwiniaStakingStructsNominations: DarwiniaStakingStructsNominations;
    DarwiniaStakingStructsReleases: DarwiniaStakingStructsReleases;
    DarwiniaStakingStructsRewardDestination: DarwiniaStakingStructsRewardDestination;
    DarwiniaStakingStructsStakingBalance: DarwiniaStakingStructsStakingBalance;
    DarwiniaStakingStructsStakingLedger: DarwiniaStakingStructsStakingLedger;
    DarwiniaStakingStructsUnappliedSlash: DarwiniaStakingStructsUnappliedSlash;
    DarwiniaStakingStructsValidatorPrefs: DarwiniaStakingStructsValidatorPrefs;
    DarwiniaSupportStructsBalanceLock: DarwiniaSupportStructsBalanceLock;
    Data: Data;
    DeliveredMessages: DeliveredMessages;
    DepositId: DepositId;
    DpAssetTokenMetadata: DpAssetTokenMetadata;
    DpFeeSlashReport: DpFeeSlashReport;
    DrmlCommonRuntimeImplsAccountData: DrmlCommonRuntimeImplsAccountData;
    EcdsaAddress: EcdsaAddress;
    EcdsaMessage: EcdsaMessage;
    EcdsaSignature: EcdsaSignature;
    EIP1559Transaction: EIP1559Transaction;
    EIP2930Transaction: EIP2930Transaction;
    ElectionCompute: ElectionCompute;
    ElectionResultT: ElectionResultT;
    EraIndex: EraIndex;
    EthAccessList: EthAccessList;
    EthAccessListItem: EthAccessListItem;
    EthAddress: EthAddress;
    EthashProof: EthashProof;
    EthBloom: EthBloom;
    EthereumAddress: EthereumAddress;
    EthereumBlock: EthereumBlock;
    EthereumBlockNumber: EthereumBlockNumber;
    EthereumHeader: EthereumHeader;
    EthereumLog: EthereumLog;
    EthereumNetwork: EthereumNetwork;
    EthereumPrimitivesHeader: EthereumPrimitivesHeader;
    EthereumPrimitivesReceiptReceiptProof: EthereumPrimitivesReceiptReceiptProof;
    EthereumPrimitivesReceiptTypedReceipt: EthereumPrimitivesReceiptTypedReceipt;
    EthereumReceiptProof: EthereumReceiptProof;
    EthereumReceiptProofThing: EthereumReceiptProofThing;
    EthereumReceiptReceiptV3: EthereumReceiptReceiptV3;
    EthereumRelayHeaderParcel: EthereumRelayHeaderParcel;
    EthereumTransactionIndex: EthereumTransactionIndex;
    EthereumTransactionTransactionV2: EthereumTransactionTransactionV2;
    EthHeader: EthHeader;
    EthLog: EthLog;
    EthTransactionAction: EthTransactionAction;
    EthTransactionSignature: EthTransactionSignature;
    EvmCoreErrorExitReason: EvmCoreErrorExitReason;
    ExitError: ExitError;
    ExitFatal: ExitFatal;
    ExitRevert: ExitRevert;
    ExitSucceed: ExitSucceed;
    Exposure: Exposure;
    ExposureT: ExposureT;
    Fee: Fee;
    FixedU128: FixedU128;
    FpRpcTransactionStatus: FpRpcTransactionStatus;
    grandpa: grandpa;
    GrandpaEquivocation: GrandpaEquivocation;
    GrandpaEquivocationProof: GrandpaEquivocationProof;
    GrandpaEquivocationValue: GrandpaEquivocationValue;
    GrandpaPrevote: GrandpaPrevote;
    i128: i128;
    I128: I128;
    i16: i16;
    I16: I16;
    i256: i256;
    I256: I256;
    i32: i32;
    I32: I32;
    i64: i64;
    I64: I64;
    i8: i8;
    I8: I8;
    IndividualExposure: IndividualExposure;
    InProcessOrders: InProcessOrders;
    Json: Json;
    KtonBalance: KtonBalance;
    LaneId: LaneId;
    LegacyReceipt: LegacyReceipt;
    LegacyTransaction: LegacyTransaction;
    LockFor: LockFor;
    LockIdentifier: LockIdentifier;
    LogEntry: LogEntry;
    MappedRing: MappedRing;
    MerkleMountainRangeRootLog: MerkleMountainRangeRootLog;
    MessageId: MessageId;
    MessageNonce: MessageNonce;
    MessagePayload: MessagePayload;
    MmrNodesPruningConfiguration: MmrNodesPruningConfiguration;
    MMRProof: MMRProof;
    MMRProofResult: MMRProofResult;
    MMRRoot: MMRRoot;
    NextAuthority: NextAuthority;
    NodeIndex: NodeIndex;
    Null: Null;
    OpCode: OpCode;
    PalletBridgeParachainsBestParaHead: PalletBridgeParachainsBestParaHead;
    PalletFeeMarketOrder: PalletFeeMarketOrder;
    PalletFeeMarketRelayer: PalletFeeMarketRelayer;
    PalletFeeMarketSlashReport: PalletFeeMarketSlashReport;
    PalletSchedulerReleases: PalletSchedulerReleases;
    PalletSchedulerScheduledV2: PalletSchedulerScheduledV2;
    PalletStakingIndividualExposure: PalletStakingIndividualExposure;
    PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter: PangolinRuntimeBridgesMessagePangolinParachainPangolinToPangolinParachainParameter;
    PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter: PangolinRuntimeBridgesMessagePangoroPangolinToPangoroMessagesParameter;
    PangolinRuntimePalletsProxyProxyType: PangolinRuntimePalletsProxyProxyType;
    PangolinRuntimePalletsSessionSessionKeys: PangolinRuntimePalletsSessionSessionKeys;
    PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter: PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter;
    Power: Power;
    PowerOf: PowerOf;
    PriorRelayer: PriorRelayer;
    ProxyAnnouncement: ProxyAnnouncement;
    ProxyType: ProxyType;
    Raw: Raw;
    RawStorageProof: RawStorageProof;
    Reasons: Reasons;
    RefCount: RefCount;
    RelayAuthorityMessage: RelayAuthorityMessage;
    RelayAuthoritySignature: RelayAuthoritySignature;
    RelayAuthoritySigner: RelayAuthoritySigner;
    RelayerId: RelayerId;
    RelayHeaderId: RelayHeaderId;
    RelayHeaderParcel: RelayHeaderParcel;
    RelayProofs: RelayProofs;
    RelayVotingState: RelayVotingState;
    ReserveIdentifier: ReserveIdentifier;
    RewardPoint: RewardPoint;
    RingBalance: RingBalance;
    RKT: RKT;
    setId: setId;
    Signature: Signature;
    Signer: Signer;
    SpanIndex: SpanIndex;
    SpanRecord: SpanRecord;
    SpCoreChangesTrieChangesTrieConfiguration: SpCoreChangesTrieChangesTrieConfiguration;
    StakingLock: StakingLock;
    Status: Status;
    StorageKey: StorageKey;
    TechnicalMember: TechnicalMember;
    Term: Term;
    Text: Text;
    TimeDepositItem: TimeDepositItem;
    ToEthereumBackingRedeemFor: ToEthereumBackingRedeemFor;
    TokenMessageId: TokenMessageId;
    TransactionOutcome: TransactionOutcome;
    TransactionV2: TransactionV2;
    TronAddress: TronAddress;
    TsInMs: TsInMs;
    Type: Type;
    u128: u128;
    U128: U128;
    u16: u16;
    U16: U16;
    u256: u256;
    U256: U256;
    u32: u32;
    U32: U32;
    u64: u64;
    U64: U64;
    u8: u8;
    U8: U8;
    UnappliedSlash: UnappliedSlash;
    UnappliedSlashOther: UnappliedSlashOther;
    Unbonding: Unbonding;
    UnrewardedRelayer: UnrewardedRelayer;
    UsableBalance: UsableBalance;
    usize: usize;
    USize: USize;
    ValidatorPrefs: ValidatorPrefs;
    ValidatorPrefsWithBlocked: ValidatorPrefsWithBlocked;
  } // InterfaceTypes
} // declare module
