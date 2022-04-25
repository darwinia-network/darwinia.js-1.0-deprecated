// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
