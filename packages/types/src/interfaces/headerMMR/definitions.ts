// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  rpc: {
    genProof: {
      alias: ['headerMMR_genProof'],
      description: 'headerMMR_genProof',
      params: [
        {
          name: 'blockNumberOfMemberleaf',
          type: 'u64'
        },
        {
          name: 'blockNumberOfLastLeaf',
          type: 'u64'
        }
      ],
      type: 'MMRProofResult'
    }
  },
  types: {
    MMRProofResult: {
      mmrSize: 'u64',
      proof: 'Text'
    },
    NodeIndex: 'u64',
    MmrNodesPruningConfiguration: {
      step: 'NodeIndex',
      progress: 'NodeIndex',
      lastPosition: 'NodeIndex'
    }
  }
};
