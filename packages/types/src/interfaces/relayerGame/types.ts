// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { EthashProof, EthereumBlockNumber } from '@darwinia/types/interfaces/darwiniaInject';
import type { Struct, Vec, u32 } from '@polkadot/types-codec';

import type { AccountId, H256 } from '@polkadot/types/interfaces/runtime';

/** @name EthereumRelayProofs */
export interface EthereumRelayProofs extends Struct {
  readonly ethashProof: Vec<EthashProof>;
  readonly mmrProof: Vec<H256>;
}

/** @name RelayAffirmationId */
export interface RelayAffirmationId extends Struct {
  readonly relayHeaderId: RelayHeaderId;
  readonly round: u32;
  readonly index: u32;
}

/** @name RelayHeaderId */
export interface RelayHeaderId extends EthereumBlockNumber {}

/** @name RelayProofs */
export interface RelayProofs extends EthereumRelayProofs {}

/** @name RelayVotingState */
export interface RelayVotingState extends Struct {
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
}

export type PHANTOM_RELAYERGAME = 'relayerGame';
