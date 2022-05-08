// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {

  },
  types: {
    PangolinRuntimePalletsSessionSessionKeys: {
      babe: 'Babe',
      grandpa: 'Grandpa',
      beefy: 'Beefy',
      imOnline: 'ImOnline',
      authorityDiscovery: 'AuthorityDiscovery'
    },
    Grandpa: {
      Equivocation: 'GrandpaEquivocation',
      EquivocationProof: 'GrandpaEquivocationProof'
    },
    GrandpaEquivocation: {
      _enum: {
        Prevote: 'GrandpaEquivocationValue',
        Precommit: 'GrandpaEquivocationValue'
      }
    },
    GrandpaEquivocationProof: {
      setId: 'SetId',
      equivocation: 'GrandpaEquivocation'
    },
    GrandpaEquivocationValue: {
      roundNumber: 'u64',
      identity: 'AuthorityId',
      first: '(GrandpaPrevote, AuthoritySignature)',
      second: '(GrandpaPrevote, AuthoritySignature)'
    },
    GrandpaPrevote: {
      targetHash: 'Hash',
      targetNumber: 'BlockNumber'
    },
    AuthoritySignature: 'Signature'
    // Signature: 'H512'

  }
} as Definitions;
