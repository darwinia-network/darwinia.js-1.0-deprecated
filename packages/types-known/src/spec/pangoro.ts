// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  // Pangoro types
  PangoroBalance: 'Balance',
  PangoroBlockHash: 'Hash',
  PangoroBlockNumber: 'BlockNumber',
  PangoroHeader: {
    parent_Hash: 'PangoroBlockHash',
    number: 'Compact<PangoroBlockNumber>',
    state_root: 'PangoroBlockHash',
    extrinsics_root: 'PangoroBlockHash',
    digest: 'PangoroDigest'
  },
  PangoroDigest: {
    logs: 'Vec<PangoroDigestItem>'
  },
  PangoroDigestItem: {
    _enum: {
      Other: 'Vec<u8>',
      AuthoritiesChange: 'Vec<AuthorityId>',
      ChangesTrieRoot: 'PangoroBlockHash',
      SealV0: 'SealV0',
      Consensus: 'Consensus',
      Seal: 'Seal',
      PreRuntime: 'PreRuntime'
    }
  },
  // Rialto types
  RialtoBalance: 'u128',
  RialtoBlockHash: 'H256',
  RialtoBlockNumber: 'u32',
  RialtoHeader: {
    parent_Hash: 'RialtoBlockHash',
    number: 'Compact<RialtoBlockNumber>',
    state_root: 'RialtoBlockHash',
    extrinsics_root: 'RialtoBlockHash',
    digest: 'RialtoDigest'
  },
  RialtoDigest: {
    logs: 'Vec<RialtoDigestItem>'
  },
  RialtoDigestItem: {
    _enum: {
      Other: 'Vec<u8>',
      AuthoritiesChange: 'Vec<AuthorityId>',
      ChangesTrieRoot: 'RialtoBlockHash',
      SealV0: 'SealV0',
      Consensus: 'Consensus',
      Seal: 'Seal',
      PreRuntime: 'PreRuntime'
    }
  },
  // common types
  Address: 'MultiAddress',
  LookupSource: 'Address',
  AuthoritySignature: '[u8;64]',
  AuthorityId: '[u8;32]',
  Fee: 'PangoroBalance',
  BlockHash: 'PangoroBlockHash',
  BridgedBlockHash: 'RialtoBlockHash',
  BridgedBlockNumber: 'RialtoBlockNumber',
  BridgedHeader: 'RialtoHeader',
  Parameter: {
    _enum: {
      PangoroToRialtoConversionRate: 'u128'
    }
  },
  RingBalance: 'Balance',
  KtonBalance: 'Balance',
  Power: 'u32'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
