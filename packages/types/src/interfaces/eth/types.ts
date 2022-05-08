// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { EthashProof } from '@darwinia/types/interfaces/darwiniaInject';
import type { Bytes, Enum, Option, Struct, U256, U64, Vec, bool, u32, u64 } from '@polkadot/types-codec';
import type { H256, H160, H2048, H64 } from '@polkadot/types/interfaces/runtime';


/** @name DarwiniaBridgeEthereumEthereumRelayProofs */
export interface DarwiniaBridgeEthereumEthereumRelayProofs extends Struct {
  readonly ethashProof: Vec<EthashProof>;
  readonly mmrProof: Vec<H256>;
}

/** @name DarwiniaBridgeEthereumMmrProof */
export interface DarwiniaBridgeEthereumMmrProof extends Struct {
  readonly memberLeafIndex: u64;
  readonly lastLeafIndex: u64;
  readonly proof: Vec<H256>;
}

/** @name EIP1559Transaction */
export interface EIP1559Transaction extends Struct {
  readonly chainId: u64;
  readonly nonce: U256;
  readonly maxPriorityFeePerGas: U256;
  readonly maxFeePerGas: U256;
  readonly gasLimit: U256;
  readonly action: EthTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly accessList: EthAccessList;
  readonly oddYParity: bool;
  readonly r: H256;
  readonly s: H256;
}

/** @name EIP2930Transaction */
export interface EIP2930Transaction extends Struct {
  readonly chainId: u64;
  readonly nonce: U256;
  readonly gasPrice: U256;
  readonly gasLimit: U256;
  readonly action: EthTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly accessList: EthAccessList;
  readonly oddYParity: bool;
  readonly r: H256;
  readonly s: H256;
}

/** @name EthAccessList */
export interface EthAccessList extends Vec<EthAccessListItem> {}

/** @name EthAccessListItem */
export interface EthAccessListItem extends Struct {
  readonly address: EthAddress;
  readonly slots: Vec<H256>;
}

/** @name EthAddress */
export interface EthAddress extends H160 {}

/** @name EthBloom */
export interface EthBloom extends H2048 {}

/** @name EthereumBlock */
export interface EthereumBlock extends Struct {
  readonly header: EthHeader;
  readonly transactions: Vec<TransactionV2>;
  readonly ommers: Vec<EthHeader>;
}

/** @name EthereumPrimitivesReceiptReceiptProof */
export interface EthereumPrimitivesReceiptReceiptProof extends Struct {
  readonly index: u64;
  readonly proof: Bytes;
  readonly headerHash: H256;
}

/** @name EthereumReceiptReceiptV3 */
export interface EthereumReceiptReceiptV3 extends Struct {
  readonly transactionHash: Option<H256>;
  readonly transactionIndex: Option<U256>;
  readonly blockHash: Option<H256>;
  readonly from: Option<EthAddress>;
  readonly to: Option<EthAddress>;
  readonly blockNumber: Option<U256>;
  readonly cumulativeGasUsed: U256;
  readonly gasUsed: Option<U256>;
  readonly contractAddress: Option<EthAddress>;
  readonly logs: Vec<EthLog>;
  readonly root: Option<H256>;
  readonly logsBloom: EthBloom;
  readonly statusCode: Option<U64>;
}

/** @name EthereumTransactionTransactionV2 */
export interface EthereumTransactionTransactionV2 extends Enum {
  readonly isLegacy: boolean;
  readonly asLegacy: LegacyTransaction;
  readonly isEip2930: boolean;
  readonly asEip2930: EIP2930Transaction;
  readonly isEip1559: boolean;
  readonly asEip1559: EIP1559Transaction;
  readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
}

/** @name EthHeader */
export interface EthHeader extends Struct {
  readonly parentHash: H256;
  readonly ommersHash: H256;
  readonly beneficiary: EthAddress;
  readonly stateRoot: H256;
  readonly transactionsRoot: H256;
  readonly receiptsRoot: H256;
  readonly logsBloom: EthBloom;
  readonly difficulty: U256;
  readonly number: U256;
  readonly gasLimit: U256;
  readonly gasUsed: U256;
  readonly timestamp: u64;
  readonly extraData: Bytes;
  readonly mixMash: H256;
  readonly nonce: H64;
}

/** @name EthLog */
export interface EthLog extends Struct {
  readonly address: EthAddress;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
  readonly blockHash: Option<H256>;
  readonly blockNumber: Option<U256>;
  readonly transactionHash: Option<H256>;
  readonly transactionIndex: Option<U256>;
  readonly logIndex: Option<U256>;
  readonly transactionLogIndex: Option<U256>;
  readonly removed: bool;
}

/** @name EthTransactionAction */
export interface EthTransactionAction extends Enum {
  readonly isCall: boolean;
  readonly asCall: H160;
  readonly isCreate: boolean;
  readonly type: 'Call' | 'Create';
}

/** @name EthTransactionSignature */
export interface EthTransactionSignature extends Struct {
  readonly v: u64;
  readonly r: H256;
  readonly s: H256;
}

/** @name FpRpcTransactionStatus */
export interface FpRpcTransactionStatus extends Struct {
  readonly transactionHash: H256;
  readonly transactionIndex: u32;
  readonly from: EthAddress;
  readonly to: Option<EthAddress>;
  readonly contractAddress: Option<EthAddress>;
  readonly logs: Vec<EthLog>;
  readonly logsBloom: EthBloom;
}

/** @name LegacyTransaction */
export interface LegacyTransaction extends Struct {
  readonly nonce: U256;
  readonly gasPrice: U256;
  readonly gasLimit: U256;
  readonly action: EthTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly signature: EthTransactionSignature;
}

/** @name ToEthereumBackingRedeemFor */
export interface ToEthereumBackingRedeemFor extends Enum {
  readonly isToken: boolean;
  readonly isDeposit: boolean;
  readonly type: 'Token' | 'Deposit';
}

/** @name TransactionV2 */
export interface TransactionV2 extends Enum {
  readonly isLegacy: boolean;
  readonly asLegacy: LegacyTransaction;
  readonly isEip2930: boolean;
  readonly asEip2930: EIP2930Transaction;
  readonly isEip1559: boolean;
  readonly asEip1559: EIP1559Transaction;
  readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
}

export type PHANTOM_ETH = 'eth';
