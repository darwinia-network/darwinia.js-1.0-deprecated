// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  types: {
    ProxyType: {
      _enum: {
        Any: null,
        NonTransfer: null,
        Governance: null,
        Staking: null,
        IdentityJudgement: null,
        EthereumBridge: null
      }
    },
    Announcement: 'ProxyAnnouncement'
  },
  rpc: {
  }
};
