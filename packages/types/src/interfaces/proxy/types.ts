// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AccountId, Hash, BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { Enum, Struct } from '@polkadot/types';

export interface ProxyAnnouncement extends Struct {
  real: AccountId;
  callHash: Hash;
  height: BlockNumber;
}

/** @name Announcement */
export interface Announcement extends ProxyAnnouncement {}

/** @name ProxyType */
export interface ProxyType extends Enum {
  readonly isAny: boolean;
  readonly isNonTransfer: boolean;
  readonly isGovernance: boolean;
  readonly isStaking: boolean;
  readonly isIdentityJudgement: boolean;
  readonly isEthereumBridge: boolean;
}

export type PHANTOM_PROXY = 'proxy';
