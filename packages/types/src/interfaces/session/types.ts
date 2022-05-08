// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Signature } from '@darwinia/types/interfaces/darwiniaInject';
import type { AuthorityId } from '@darwinia/types/interfaces/grandpa';
import type { Enum, Struct, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { SetId } from '@polkadot/types/interfaces';
import type { BlockNumber, Hash } from '@polkadot/types/interfaces';


/** @name AuthoritySignature */
export interface AuthoritySignature extends Signature {}

/** @name grandpa */
export interface grandpa extends Struct {
  readonly Equivocation: GrandpaEquivocation;
  readonly EquivocationProof: GrandpaEquivocationProof;
}

/** @name GrandpaEquivocation */
export interface GrandpaEquivocation extends Enum {
  readonly isPrevote: boolean;
  readonly asPrevote: GrandpaEquivocationValue;
  readonly isPrecommit: boolean;
  readonly asPrecommit: GrandpaEquivocationValue;
  readonly type: 'Prevote' | 'Precommit';
}

/** @name GrandpaEquivocationProof */
export interface GrandpaEquivocationProof extends Struct {
  readonly setId: SetId;
  readonly equivocation: GrandpaEquivocation;
}

/** @name GrandpaEquivocationValue */
export interface GrandpaEquivocationValue extends Struct {
  readonly roundNumber: u64;
  readonly identity: AuthorityId;
  readonly first: ITuple<[GrandpaPrevote, AuthoritySignature]>;
  readonly second: ITuple<[GrandpaPrevote, AuthoritySignature]>;
}

/** @name GrandpaPrevote */
export interface GrandpaPrevote extends Struct {
  readonly targetHash: Hash;
  readonly targetNumber: BlockNumber;
}

/** @name PangolinRuntimePalletsSessionSessionKeys */
export interface PangolinRuntimePalletsSessionSessionKeys extends Struct {
  readonly aura: Aura;
  readonly grandpa: Grandpa;
}

export type PHANTOM_SESSION = 'session';
