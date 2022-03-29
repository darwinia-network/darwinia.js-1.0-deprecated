// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, Text, U256, U8aFixed, Vec, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId, Balance, BlockNumber, H128, H160, H256, H512, Hash, Index, LockIdentifier } from '@polkadot/types/interfaces/runtime';
import type { RefCount } from '@polkadot/types/interfaces/system';
import type { ValidatorPrefsWithBlocked } from '@polkadot/types/interfaces/staking';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { Reasons } from '@polkadot/types/interfaces/balances';


/** @name AccountData */
export interface AccountData extends Struct {
  readonly free: Balance;
  readonly reserved: Balance;
  readonly freeKton: Balance;
  readonly reservedKton: Balance;
}

/** @name AccountInfo */
export interface AccountInfo extends Struct {
  readonly nonce: Index;
  readonly refcount: RefCount;
  readonly data: AccountData;
}

/** @name AddressT */
export interface AddressT extends U8aFixed {}

/** @name BalanceInfo */
export interface BalanceInfo extends Struct {}

/** @name BalanceLock */
export interface BalanceLock extends Struct {
  readonly id: LockIdentifier;
  readonly lockFor: LockFor;
  readonly reasons: Reasons;
}

/** @name Bloom */
export interface Bloom extends U8aFixed {}

/** @name ChainProperties */
export interface ChainProperties extends Struct {
  readonly ss58Format: Option<u8>;
  readonly tokenDecimals: Option<Vec<u32>>;
  readonly tokenSymbol: Option<Vec<Text>>;
}

/** @name Common */
export interface Common extends Struct {
  readonly amount: Balance;
}

/** @name DepositId */
export interface DepositId extends U256 {}

/** @name EcdsaAddress */
export interface EcdsaAddress extends EthereumAddress {}

/** @name EcdsaMessage */
export interface EcdsaMessage extends H256 {}

/** @name EcdsaSignature */
export interface EcdsaSignature extends U8aFixed {}

/** @name ElectionCompute */
export interface ElectionCompute extends Enum {
  readonly isOnChain: boolean;
  readonly isSigned: boolean;
  readonly isAuthority: boolean;
  readonly type: 'OnChain' | 'Signed' | 'Authority';
}

/** @name ElectionResultT */
export interface ElectionResultT extends Struct {
  readonly electedStashes: Vec<AccountId>;
  readonly exposures: Vec<ITuple<[AccountId, ExposureT]>>;
  readonly compute: ElectionCompute;
}

/** @name EthashProof */
export interface EthashProof extends Struct {
  readonly dagNodes: ITuple<[H512, H512]>;
  readonly proof: Vec<H128>;
}

/** @name EthereumBlockNumber */
export interface EthereumBlockNumber extends u64 {}

/** @name EthereumHeader */
export interface EthereumHeader extends Struct {
  readonly parentHash: H256;
  readonly timestamp: u64;
  readonly number: EthereumBlockNumber;
  readonly author: EthereumAddress;
  readonly transactionsRoot: H256;
  readonly unclesHash: H256;
  readonly extraData: Bytes;
  readonly stateRoot: H256;
  readonly receiptsRoot: H256;
  readonly logBloom: Bloom;
  readonly gasUsed: U256;
  readonly gasLimit: U256;
  readonly difficulty: U256;
  readonly seal: Vec<Bytes>;
  readonly baseFeePerGas: Option<U256>;
  readonly blockHash: Option<H256>;
}

/** @name EthereumNetwork */
export interface EthereumNetwork extends Enum {
  readonly isMainnet: boolean;
  readonly isRopsten: boolean;
  readonly type: 'Mainnet' | 'Ropsten';
}

/** @name EthereumReceipt */
export interface EthereumReceipt extends Struct {
  readonly Legacy: LegacyReceipt;
  readonly AccessList: LegacyReceipt;
  readonly EIP1559Transaction: LegacyReceipt;
}

/** @name EthereumReceiptProof */
export interface EthereumReceiptProof extends Struct {
  readonly index: u64;
  readonly proof: Bytes;
  readonly headerHash: H256;
}

/** @name EthereumReceiptProofThing */
export interface EthereumReceiptProofThing extends ITuple<[EthereumHeader, EthereumReceiptProof, MMRProof]> {}

/** @name EthereumRelayHeaderParcel */
export interface EthereumRelayHeaderParcel extends Struct {
  readonly header: EthereumHeader;
  readonly parentMmrRoot: H256;
}

/** @name EthereumRelayProofs */
export interface EthereumRelayProofs extends Struct {
  readonly ethashProof: Vec<EthashProof>;
  readonly mmrProof: Vec<H256>;
}

/** @name EthereumTransactionIndex */
export interface EthereumTransactionIndex extends ITuple<[H256, u64]> {}

/** @name Exposure */
export interface Exposure extends ExposureT {}

/** @name ExposureT */
export interface ExposureT extends Struct {
  readonly ownRingBalance: Balance;
  readonly ownKtonBalance: Balance;
  readonly ownPower: Power;
  readonly totalPower: Power;
  readonly others: Vec<IndividualExposure>;
}

/** @name IndividualExposure */
export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly ringBalance: Balance;
  readonly ktonBalance: Balance;
  readonly power: Power;
}

/** @name KtonBalance */
export interface KtonBalance extends Balance {}

/** @name LegacyReceipt */
export interface LegacyReceipt extends Struct {
  readonly gasUsed: U256;
  readonly logBloom: Bloom;
  readonly logs: Vec<LogEntry>;
  readonly outcome: TransactionOutcome;
}

/** @name LockFor */
export interface LockFor extends Enum {
  readonly isCommon: boolean;
  readonly asCommon: Common;
  readonly isStaking: boolean;
  readonly asStaking: StakingLock;
  readonly type: 'Common' | 'Staking';
}

/** @name LogEntry */
export interface LogEntry extends Struct {}

/** @name MappedRing */
export interface MappedRing extends u128 {}

/** @name MerkleMountainRangeRootLog */
export interface MerkleMountainRangeRootLog extends Struct {
  readonly prefix: U8aFixed;
  readonly ParentMmrRoot: Hash;
}

/** @name MMRProof */
export interface MMRProof extends Struct {
  readonly memberLeafIndex: u64;
  readonly lastLeafIndex: u64;
  readonly proof: Vec<H256>;
}

/** @name MMRRoot */
export interface MMRRoot extends Hash {}

/** @name MmrRootToSign */
export interface MmrRootToSign extends Struct {
  readonly mmrRoot: Hash;
  readonly signatures: Vec<ITuple<[AccountId, EcdsaSignature]>>;
}

/** @name OpCode */
export interface OpCode extends U8aFixed {}

/** @name Order */
export interface Order extends Struct {
  readonly lane: LaneId;
  readonly message: MessageNonce;
  readonly sentTime: BlockNumber;
  readonly confirmTime: BlockNumber;
  readonly lockedCollateral: Balance;
  readonly assignedRelayers: Vec<PriorRelayer>;
}

/** @name OtherAddress */
export interface OtherAddress extends Enum {
  readonly isEth: boolean;
  readonly asEth: EthereumAddress;
  readonly isTron: boolean;
  readonly asTron: TronAddress;
  readonly type: 'Eth' | 'Tron';
}

/** @name OtherSignature */
export interface OtherSignature extends Enum {
  readonly isEth: boolean;
  readonly asEth: EcdsaSignature;
  readonly isTron: boolean;
  readonly asTron: EcdsaSignature;
  readonly type: 'Eth' | 'Tron';
}

/** @name Power */
export interface Power extends u32 {}

/** @name PriorRelayer */
export interface PriorRelayer extends Struct {
  readonly id: AccountId;
  readonly fee: Balance;
  readonly validRange: BlockNumber;
}

/** @name RedeemFor */
export interface RedeemFor extends Enum {
  readonly isToken: boolean;
  readonly isDeposit: boolean;
  readonly type: 'Token' | 'Deposit';
}

/** @name RelayAuthorityMessage */
export interface RelayAuthorityMessage extends EcdsaMessage {}

/** @name RelayAuthoritySignature */
export interface RelayAuthoritySignature extends EcdsaSignature {}

/** @name RelayAuthoritySigner */
export interface RelayAuthoritySigner extends EcdsaAddress {}

/** @name RelayAuthorityT */
export interface RelayAuthorityT extends Struct {
  readonly accountId: AccountId;
  readonly signer: EthereumAddress;
  readonly stake: Balance;
  readonly term: BlockNumber;
}

/** @name Relayer */
export interface Relayer extends Struct {
  readonly id: AccountId;
  readonly collateral: Balance;
  readonly fee: Balance;
}

/** @name RingBalance */
export interface RingBalance extends Balance {}

/** @name RKT */
export interface RKT extends Struct {
  readonly r: Balance;
  readonly k: Balance;
}

/** @name ScheduledAuthoritiesChangeT */
export interface ScheduledAuthoritiesChangeT extends Struct {
  readonly nextAuthorities: Vec<RelayAuthorityT>;
  readonly deadline: BlockNumber;
}

/** @name Signer */
export interface Signer extends EthereumAddress {}

/** @name SpanRecord */
export interface SpanRecord extends Struct {
  readonly slashed: RKT;
  readonly paidOut: RKT;
}

/** @name StakingBalanceT */
export interface StakingBalanceT extends Enum {
  readonly isRingBalance: boolean;
  readonly asRingBalance: Balance;
  readonly isKtonBalance: boolean;
  readonly asKtonBalance: Balance;
  readonly type: 'RingBalance' | 'KtonBalance';
}

/** @name StakingLedgerT */
export interface StakingLedgerT extends Struct {
  readonly stash: AccountId;
  readonly active: Balance;
  readonly activeDepositRing: Balance;
  readonly activeKton: Balance;
  readonly depositItems: Vec<TimeDepositItem>;
  readonly ringStakingLock: StakingLock;
  readonly ktonStakingLock: StakingLock;
  readonly claimedRewards: Vec<EraIndex>;
}

/** @name StakingLock */
export interface StakingLock extends Struct {
  readonly stakingAmount: Balance;
  readonly unbondings: Vec<Unbonding>;
}

/** @name Term */
export interface Term extends BlockNumber {}

/** @name TimeDepositItem */
export interface TimeDepositItem extends Struct {
  readonly value: Balance;
  readonly startTime: TsInMs;
  readonly expireTime: TsInMs;
}

/** @name TokenMessageId */
export interface TokenMessageId extends U8aFixed {}

/** @name TokenMetadata */
export interface TokenMetadata extends Struct {
  readonly tokenType: u32;
  readonly address: H160;
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimal: u8;
}

/** @name TransactionOutcome */
export interface TransactionOutcome extends Struct {}

/** @name TronAddress */
export interface TronAddress extends EthereumAddress {}

/** @name TsInMs */
export interface TsInMs extends u64 {}

/** @name UnappliedSlash */
export interface UnappliedSlash extends Struct {
  readonly validator: AccountId;
  readonly own: RKT;
  readonly others: Vec<ITuple<[AccountId, RKT]>>;
  readonly reporters: Vec<AccountId>;
  readonly payout: RKT;
}

/** @name Unbonding */
export interface Unbonding extends Struct {
  readonly amount: Balance;
  readonly until: BlockNumber;
}

/** @name ValidatorPrefs */
export interface ValidatorPrefs extends ValidatorPrefsWithBlocked {}

export type PHANTOM_DARWINIAINJECT = 'darwiniaInject';

export interface LaneId extends U8aFixed {};

export interface MessageNonce extends u64 {};