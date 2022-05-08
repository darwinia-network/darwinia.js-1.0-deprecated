// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AddressT, EcdsaSignature } from '@darwinia/types/interfaces/darwiniaInject';
import type { Enum } from '@polkadot/types-codec';

/** @name DarwiniaClaimsOtherAddress */
export interface DarwiniaClaimsOtherAddress extends Enum {
  readonly isEth: boolean;
  readonly asEth: AddressT;
  readonly isTron: boolean;
  readonly asTron: AddressT;
  readonly type: 'Eth' | 'Tron';
}

/** @name DarwiniaClaimsOtherSignature */
export interface DarwiniaClaimsOtherSignature extends Enum {
  readonly isEth: boolean;
  readonly asEth: EcdsaSignature;
  readonly isTron: boolean;
  readonly asTron: EcdsaSignature;
  readonly type: 'Eth' | 'Tron';
}

export type PHANTOM_CLAIMS = 'claims';
