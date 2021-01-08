// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@polkadot/types/codec';
import { Text, u64 } from '@polkadot/types/primitive';

/** @name MMRProofResult */
export interface MMRProofResult extends Struct {
  readonly mmrSize: u64;
  readonly proof: Text;
}

export type PHANTOM_HEADERMMR = 'headerMMR';
