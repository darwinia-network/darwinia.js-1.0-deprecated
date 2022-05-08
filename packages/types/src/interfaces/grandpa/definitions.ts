// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    BpHeaderChainAuthoritySet: {
      authorities: 'AuthorityList',
      setId: 'SetId'
    },
    AuthorityList: 'Vec<NextAuthority>',
    setId: 'u64',
    NextAuthority: '(AuthorityId, AuthorityWeight)',
    AuthorityWeight: 'u64',
    AuthorityId: '[u8;32]',
    BpHeaderChainInitializationData: {
      header: 'Box<Header>',
      authorityList: 'AuthorityList',
      setId: 'SetId',
      isHalted: 'bool'
    },
    SetId: 'u64',
    BpHeaderChainJustificationGrandpaJustification: {
      round: 'u64',
      commit: 'GrandpaCommit',
      votesAncestries: 'Vec<Header>'
    }

  }
} as Definitions;
