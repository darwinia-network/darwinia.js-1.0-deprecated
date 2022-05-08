// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, U8aFixed, Vec, bool, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Header } from '@polkadot/types/interfaces/runtime';
import type { GrandpaCommit, SetId } from '@polkadot/types/interfaces';

/** @name AuthorityId */
export interface AuthorityId extends U8aFixed {}

/** @name AuthorityList */
export interface AuthorityList extends Vec<NextAuthority> {}

/** @name AuthorityWeight */
export interface AuthorityWeight extends u64 {}

/** @name BpHeaderChainAuthoritySet */
export interface BpHeaderChainAuthoritySet extends Struct {
  readonly authorities: AuthorityList;
  readonly setId: SetId;
}

/** @name BpHeaderChainInitializationData */
export interface BpHeaderChainInitializationData extends Struct {
  readonly header: Header;
  readonly authorityList: AuthorityList;
  readonly setId: SetId;
  readonly isHalted: bool;
}

/** @name BpHeaderChainJustificationGrandpaJustification */
export interface BpHeaderChainJustificationGrandpaJustification extends Struct {
  readonly round: u64;
  readonly commit: GrandpaCommit;
  readonly votesAncestries: Vec<Header>;
}

/** @name NextAuthority */
export interface NextAuthority extends ITuple<[AuthorityId, AuthorityWeight]> {}

/** @name setId */
export interface setId extends u64 {}

export type PHANTOM_GRANDPA = 'grandpa';
