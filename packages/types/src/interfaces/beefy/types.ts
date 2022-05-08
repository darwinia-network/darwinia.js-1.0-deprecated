// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, U8aFixed, u32, u64 } from '@polkadot/types-codec';
import type { H256 } from '@polkadot/types/interfaces/runtime';


/** @name BeefyPrimitivesCryptoPublic */
export interface BeefyPrimitivesCryptoPublic extends U8aFixed {}

/** @name BeefyPrimitivesMmrBeefyNextAuthoritySet */
export interface BeefyPrimitivesMmrBeefyNextAuthoritySet extends Struct {
  readonly id: u64;
  readonly len: u32;
  readonly root: H256;
}

export type PHANTOM_BEEFY = 'beefy';
