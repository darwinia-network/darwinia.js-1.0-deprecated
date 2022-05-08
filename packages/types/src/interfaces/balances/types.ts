// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Reasons } from '@darwinia/types/interfaces/darwiniaInject';
import type { Enum, Struct, U8aFixed } from '@polkadot/types-codec';
import type { Balance } from '@polkadot/types/interfaces/runtime';

/** @name DarwiniaBalancesReleases */
export interface DarwiniaBalancesReleases extends Enum {
  readonly isV100: boolean;
  readonly isV200: boolean;
  readonly type: 'V100' | 'V200';
}

/** @name DarwiniaBalancesReserveData */
export interface DarwiniaBalancesReserveData extends Struct {
  readonly id: ReserveIdentifier;
  readonly amount: Balance;
}

/** @name DarwiniaSupportStructsBalanceLock */
export interface DarwiniaSupportStructsBalanceLock extends Struct {
  readonly id: LockIdentifier;
  readonly amount: Balance;
  readonly reasons: Reasons;
}

/** @name LockIdentifier */
export interface LockIdentifier extends U8aFixed {}

/** @name ReserveIdentifier */
export interface ReserveIdentifier extends U8aFixed {}

/** @name Status */
export interface Status extends Enum {
  readonly isFree: boolean;
  readonly isReserved: boolean;
  readonly type: 'Free' | 'Reserved';
}

/** @name UsableBalance */
export interface UsableBalance extends Struct {
  readonly usableBalance: Balance;
}

export type PHANTOM_BALANCES = 'balances';
