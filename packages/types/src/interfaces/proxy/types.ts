// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from '@polkadot/types-codec';
import type { ProxyAnnouncement } from '@polkadot/types/interfaces/proxy';

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
  readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'EthereumBridge';
}

export type PHANTOM_PROXY = 'proxy';
