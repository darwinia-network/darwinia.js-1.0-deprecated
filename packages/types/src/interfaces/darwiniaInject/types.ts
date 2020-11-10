// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Compact, Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, Text, U256, u128, u32, u64, u8 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, H160, H256, H512, Hash, Index, LockIdentifier } from '@polkadot/types/interfaces/runtime';
import { RefCount } from '@polkadot/types/interfaces/system';
import { ElectionCompute, EraIndex }  from '@polkadot/types/interfaces/staking';

/** @name AccountData */
export interface AccountData extends Struct {
  readonly free: Balance;
  readonly reserved: Balance;
  readonly freeKton: Balance;
  readonly reservedKton: Balance;
  readonly miscFrozen: Balance;
  readonly feeFrozen: Balance;
}

/** @name AccountInfo */
export interface AccountInfo extends Struct {
  readonly nonce: Index;
  readonly refcount: RefCount;
  readonly data: AccountData;
}

/** @name Address */
export interface Address extends AccountId {}

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
  readonly tokenDecimals: Option<u32>;
  readonly tokenSymbol: Option<Text>;
  readonly ktonTokenDecimals: Option<u32>;
  readonly ktonTokenSymbol: Option<Text>;
}

/** @name Common */
export interface Common extends Struct {
  readonly amount: Balance;
}

/** @name DepositId */
export interface DepositId extends U256 {}

/** @name EcdsaSignature */
export interface EcdsaSignature extends U8aFixed {}

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

/** @name EthereumAddress */
export interface EthereumAddress extends H160 {}

/** @name EthereumBlockNumber */
export interface EthereumBlockNumber extends u64 {}

/** @name EthereumHeader */
export interface EthereumHeader extends Struct {
  readonly parent_hash: H256;
  readonly timestamp: u64;
  readonly number: EthereumBlockNumber;
  readonly author: EthereumAddress;
  readonly transactions_root: H256;
  readonly uncles_hash: H256;
  readonly extra_data: Bytes;
  readonly state_root: H256;
  readonly receipts_root: H256;
  readonly log_bloom: Bloom;
  readonly gas_used: U256;
  readonly gas_limit: U256;
  readonly difficulty: U256;
  readonly seal: Vec<Bytes>;
  readonly hash: H256;
}

/** @name EthereumNetworkType */
export interface EthereumNetworkType extends Enum {
  readonly isMainnet: boolean;
  readonly isRopsten: boolean;
}

/** @name EthereumReceipt */
export interface EthereumReceipt extends Struct {
  readonly gasUsed: U256;
  readonly logBloom: Bloom;
  readonly logs: Vec<LogEntry>;
  readonly outcome: TransactionOutcome;
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
  readonly mmrRoot: H256;
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
  readonly ownRingBalance: Compact<Balance>;
  readonly ownKtonBalance: Compact<Balance>;
  readonly ownPower: Power;
  readonly totalPower: Power;
  readonly others: Vec<IndividualExposure>;
}

/** @name H128 */
export interface H128 extends U8aFixed {}

/** @name IndividualExposure */
export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly ringBalance: Compact<Balance>;
  readonly ktonBalance: Compact<Balance>;
  readonly power: Power;
}

/** @name KtonBalance */
export interface KtonBalance extends Balance {}

/** @name LockFor */
export interface LockFor extends Enum {
  readonly isCommon: boolean;
  readonly asCommon: Common;
  readonly isStaking: boolean;
  readonly asStaking: StakingLock;
}

/** @name LogEntry */
export interface LogEntry extends Struct {}

/** @name LookupSource */
export interface LookupSource extends AccountId {}

/** @name MappedRing */
export interface MappedRing extends u128 {}

/** @name MerkleMountainRangeRootLog */
export interface MerkleMountainRangeRootLog extends Struct {
  readonly prefix: U8aFixed;
  readonly mmrRoot: Hash;
}

/** @name MMRProof */
export interface MMRProof extends Struct {
  readonly memberLeafIndex: u64;
  readonly lastLeafIndex: u64;
  readonly proof: Vec<H256>;
}

/** @name OtherAddress */
export interface OtherAddress extends Enum {
  readonly isEth: boolean;
  readonly asEth: EthereumAddress;
  readonly isTron: boolean;
  readonly asTron: TronAddress;
}

/** @name OtherSignature */
export interface OtherSignature extends Enum {
  readonly isEth: boolean;
  readonly asEth: EcdsaSignature;
  readonly isTron: boolean;
  readonly asTron: EcdsaSignature;
}

/** @name Power */
export interface Power extends u32 {}

/** @name Reasons */
export interface Reasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
}

/** @name RedeemFor */
export interface RedeemFor extends Enum {
  readonly isToken: boolean;
  readonly isDeposit: boolean;
}

/** @name RingBalance */
export interface RingBalance extends Balance {}

/** @name RKT */
export interface RKT extends Struct {
  readonly r: Balance;
  readonly k: Balance;
}

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
}

/** @name StakingLedgerT */
export interface StakingLedgerT extends Struct {
  readonly stash: AccountId;
  readonly activeRing: Compact<Balance>;
  readonly activeDepositRing: Compact<Balance>;
  readonly activeKton: Compact<Balance>;
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

/** @name TimeDepositItem */
export interface TimeDepositItem extends Struct {
  readonly value: Compact<Balance>;
  readonly startTime: Compact<TsInMs>;
  readonly expireTime: Compact<TsInMs>;
}

/** @name TransactionOutcome */
export interface TransactionOutcome extends Struct {}

/** @name TreasuryProposal */
export interface TreasuryProposal extends Struct {
  readonly proposer: AccountId;
  readonly beneficiary: AccountId;
  readonly ringValue: Balance;
  readonly ktonValue: Balance;
  readonly ringBond: Balance;
  readonly ktonBond: Balance;
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
  readonly moment: BlockNumber;
}

export type PHANTOM_DARWINIAINJECT = 'darwiniaInject';
