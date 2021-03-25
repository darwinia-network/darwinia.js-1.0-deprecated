// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Text, u64 } from '@polkadot/types';

/** @name MMRProofResult */
export interface MMRProofResult extends Struct {
  readonly mmrSize: u64;
  readonly proof: Text;
}

export type PHANTOM_HEADERMMR = 'headerMMR';
