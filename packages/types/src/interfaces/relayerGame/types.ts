// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Option, Struct, Vec } from '@polkadot/types/codec';
import { bool, u32 } from '@polkadot/types/primitive';
import { EthereumBlockNumber, EthereumRelayHeaderParcel, EthereumRelayProofs } from '@darwinia/types/interfaces/darwiniaInject';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name RelayAffirmationId */
export interface RelayAffirmationId extends Struct {
  readonly relayHeaderId: EthereumBlockNumber;
  readonly round: u32;
  readonly index: u32;
}

/** @name RelayAffirmationT */
export interface RelayAffirmationT extends Struct {
  readonly relayer: AccountId;
  readonly relayHeaderParcels: EthereumRelayHeaderParcel;
  readonly bond: Balance;
  readonly maybeExtendedRelayAffirmationId: Option<RelayAffirmationId>;
  readonly verified: bool;
}

/** @name RelayHeaderId */
export interface RelayHeaderId extends EthereumBlockNumber {}

/** @name RelayHeaderParcel */
export interface RelayHeaderParcel extends EthereumRelayHeaderParcel {}

/** @name RelayProofs */
export interface RelayProofs extends EthereumRelayProofs {}

/** @name RelayVotingState */
export interface RelayVotingState extends Struct {
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
}

export type PHANTOM_RELAYERGAME = 'relayerGame';
