// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
    BlockNumberFor: 'BlockNumber',
    NodeIndex: 'u64',
    MmrNodesPruningConfiguration: {
      step: 'NodeIndex',
      progress: 'NodeIndex',
      lastPosition: 'NodeIndex'
    }
  }
};
