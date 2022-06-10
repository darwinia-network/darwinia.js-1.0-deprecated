// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { LockIdentifier } from '@darwinia/types/interfaces/balances';
import type { GenericEthereumAccountId } from '@polkadot/types';
import type { Bytes, Compact, Enum, Option, Struct, Text, U256, U8aFixed, Vec, bool, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId, Balance, BlockNumber, Hash, H128, H256, H512, Perbill } from '@polkadot/types/interfaces/runtime';

/** @name Address */
export interface Address extends U8aFixed {}

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

/** @name EraIndex */
export interface EraIndex extends u32 {}

/** @name EthashProof */
export interface EthashProof extends Struct {
  readonly dagNodes: Vec<H512>;
  readonly proof: Vec<H128>;
}

/** @name EthereumAddress */
export interface EthereumAddress extends GenericEthereumAccountId {}

/** @name EthereumBlockNumber */
export interface EthereumBlockNumber extends u64 {}

/** @name EthereumNetwork */
export interface EthereumNetwork extends Enum {
  readonly isMainnet: boolean;
  readonly isRopsten: boolean;
  readonly type: 'Mainnet' | 'Ropsten';
}

/** @name EthereumReceiptProof */
export interface EthereumReceiptProof extends Struct {
  readonly index: u64;
  readonly proof: Bytes;
  readonly headerHash: H256;
}

/** @name EthereumTransactionIndex */
export interface EthereumTransactionIndex extends ITuple<[H256, u64]> {}

/** @name Exposure */
export interface Exposure extends ExposureT {}

/** @name ExposureT */
export interface ExposureT extends Struct {
  readonly ownRingBalance: Compact<Balance>;
  readonly ownKtonBalance: Compact<Balance>;
  readonly ownPower: Power;
  readonly totalPower: Power;
  readonly others: Vec<IndividualExposure>;
}

/** @name IndividualExposure */
export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly ringBalance: Compact<Balance>;
  readonly ktonBalance: Compact<Balance>;
  readonly power: Power;
}

/** @name KtonBalance */
export interface KtonBalance extends Balance {}

/** @name LegacyReceipt */
export interface LegacyReceipt extends Struct {
  readonly gas_used: U256;
  readonly log_bloom: Bloom;
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
export interface LogEntry extends Struct {
  readonly address: Address;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
}

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

/** @name OpCode */
export interface OpCode extends U8aFixed {}

/** @name Power */
export interface Power extends u32 {}

/** @name PriorRelayer */
export interface PriorRelayer extends Struct {
  readonly id: AccountId;
  readonly fee: Balance;
  readonly validRange: BlockNumber;
}

/** @name Reasons */
export interface Reasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
  readonly type: 'Fee' | 'Misc' | 'All';
}

/** @name RedeemFor */
export interface RedeemFor extends Enum {
  readonly isToken: boolean;
  readonly isDeposit: boolean;
  readonly type: 'Token' | 'Deposit';
}

/** @name RefCount */
export interface RefCount extends u32 {}

/** @name RelayAuthorityMessage */
export interface RelayAuthorityMessage extends EcdsaMessage {}

/** @name RelayAuthoritySignature */
export interface RelayAuthoritySignature extends EcdsaSignature {}

/** @name RelayAuthoritySigner */
export interface RelayAuthoritySigner extends EcdsaAddress {}

/** @name RingBalance */
export interface RingBalance extends Balance {}

/** @name RKT */
export interface RKT extends Struct {
  readonly r: Balance;
  readonly k: Balance;
}

/** @name Signature */
export interface Signature extends U8aFixed {}

/** @name Signer */
export interface Signer extends EthereumAddress {}

/** @name SpanRecord */
export interface SpanRecord extends Struct {
  readonly slashed: RKT;
  readonly paidOut: RKT;
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

/** @name TransactionOutcome */
export interface TransactionOutcome extends Enum {
  readonly isUnknown: boolean;
  readonly isStateRoot: boolean;
  readonly asStateRoot: H256;
  readonly isStatusCode: boolean;
  readonly asStatusCode: u8;
  readonly type: 'Unknown' | 'StateRoot' | 'StatusCode';
}

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

/** @name ValidatorPrefsWithBlocked */
export interface ValidatorPrefsWithBlocked extends Struct {
  readonly commission: Compact<Perbill>;
  readonly blocked: bool;
}

export type PHANTOM_DARWINIAINJECT = 'darwiniaInject';
