// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { LaneId, MessageNonce } from '@darwinia/types/interfaces/bridges';
import type { Option, Struct, Vec } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { BlockNumber, AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name DarwiniaFeeMarketSlashReport */
export interface DarwiniaFeeMarketSlashReport extends Struct {
  readonly lane: LaneId;
  readonly message: MessageNonce;
  readonly sent_time: BlockNumber;
  readonly confirm_time: Option<BlockNumber>;
  readonly delay_time: Option<BlockNumber>;
  readonly account_id: AccountId;
  readonly amount: Balance;
}

/** @name DpFeeSlashReport */
export interface DpFeeSlashReport extends Struct {
  readonly lane: LaneId;
  readonly message: MessageNonce;
  readonly sent_time: BlockNumber;
  readonly confirm_time: Option<BlockNumber>;
  readonly delay_time: Option<BlockNumber>;
  readonly account_id: AccountId;
  readonly amount: Balance;
}

/** @name Fee */
export interface Fee extends Struct {
  readonly amount: Balance;
}

/** @name InProcessOrders */
export interface InProcessOrders extends Struct {
  readonly orders: Vec<ITuple<[LaneId, MessageNonce]>>;
}

/** @name PalletFeeMarketSlashReport */
export interface PalletFeeMarketSlashReport extends Struct {
  readonly lane: LaneId;
  readonly message: MessageNonce;
  readonly sent_time: BlockNumber;
  readonly confirm_time: Option<BlockNumber>;
  readonly delay_time: Option<BlockNumber>;
  readonly account_id: AccountId;
  readonly amount: Balance;
}

export type PHANTOM_FEE = 'fee';
