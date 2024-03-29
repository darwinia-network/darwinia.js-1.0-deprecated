// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bloom, EthereumAddress } from '@darwinia/types/interfaces/darwiniaInject';
import type { Bytes, Struct, U256, u64 } from '@polkadot/types-codec';
import type { H256 } from '@polkadot/types/interfaces';

/** @name BSCHeader */
export interface BSCHeader extends Struct {
  readonly parentHash: H256;
  readonly uncleHash: H256;
  readonly coinbase: EthereumAddress;
  readonly stateRoot: H256;
  readonly transactionsRoot: H256;
  readonly receiptsRoot: H256;
  readonly logBloom: Bloom;
  readonly difficulty: U256;
  readonly number: u64;
  readonly gasLimit: U256;
  readonly gasUsed: U256;
  readonly timestamp: u64;
  readonly extraData: Bytes;
  readonly mixDigest: H256;
  readonly nonce: Bytes;
}

export type PHANTOM_BSC = 'bsc';
