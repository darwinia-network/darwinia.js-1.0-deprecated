// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct } from '@polkadot/types-codec';
import type { AccountId, BlockNumber, Hash } from '@polkadot/types/interfaces';

/** @name Announcement */
export interface Announcement extends ProxyAnnouncement {}

/** @name CrabRuntimePalletsProxyProxyType */
export interface CrabRuntimePalletsProxyProxyType extends Enum {
  readonly isAny: boolean;
  readonly isNonTransfer: boolean;
  readonly isGovernance: boolean;
  readonly isStaking: boolean;
  readonly isIdentityJudgement: boolean;
  readonly isEthereumBridge: boolean;
  readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'EthereumBridge';
}

/** @name DarwiniaRuntimePalletsProxyProxyType */
export interface DarwiniaRuntimePalletsProxyProxyType extends Enum {
  readonly isAny: boolean;
  readonly isNonTransfer: boolean;
  readonly isGovernance: boolean;
  readonly isStaking: boolean;
  readonly isIdentityJudgement: boolean;
  readonly isEthereumBridge: boolean;
  readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'EthereumBridge';
}

/** @name ProxyAnnouncement */
export interface ProxyAnnouncement extends Struct {
  readonly real: AccountId;
  readonly callHash: Hash;
  readonly height: BlockNumber;
}

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
