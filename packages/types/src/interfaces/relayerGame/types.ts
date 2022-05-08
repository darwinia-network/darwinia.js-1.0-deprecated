// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { EthereumBlockNumber, EthereumRelayHeaderParcel } from '@darwinia/types/interfaces/darwiniaInject';
import type { Option, Struct, Vec, bool, u32 } from '@polkadot/types-codec';
import type {  AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name DarwiniaRelayPrimitivesRelayerGameRelayAffirmation */
export interface DarwiniaRelayPrimitivesRelayerGameRelayAffirmation extends Struct {
  readonly relayer: AccountId;
  readonly relayHeaderParcels: EthereumRelayHeaderParcel;
  readonly bond: Balance;
  readonly maybeExtendedRelayAffirmationId: Option<RelayAffirmationId>;
  readonly verified: bool;
}

/** @name DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId */
export interface DarwiniaRelayPrimitivesRelayerGameRelayAffirmationId extends Struct {
  readonly game_id: RelayHeaderId;
  readonly round: u32;
  readonly index: u32;
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
