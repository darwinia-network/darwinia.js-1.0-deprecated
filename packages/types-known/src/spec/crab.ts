// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';
import { objectSpread } from '@polkadot/util';

const sharedTypes = {
  CompactAssignments: 'CompactAssignmentsWith16',
  RawSolution: 'RawSolutionWith16',
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: {
      Any: 0,
      NonTransfer: 1,
      Governance: 2,
      Staking: 3,
      UnusedSudoBalances: 4,
      IdentityJudgement: 5,
      CancelProxy: 6,
      Auction: 7
    }
  }
};

const addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 41],
    types: objectSpread({}, sharedTypes, addrAccountIdTypes, {
      StakingBalanceT: {
        _enum: {
          RingBalance: 'Balance',
          KtonBalance: 'Balance'
        }
      }
    })
  },
  {
    minmax: [42, 43],
    types: objectSpread({}, sharedTypes, {
      AccountInfo: 'AccountInfoWithTripleRefCount',
      AccountInfoWithTripleRefCount: {
        nonce: 'Index',
        consumers: 'RefCount',
        providers: 'RefCount',
        data: 'AccountData'
      }
    })
  },
  {
    minmax: [43, 1210],
    types: objectSpread({}, sharedTypes)
  },
  {
    minmax: [1210, undefined],
    types: {}
  }
];

export default versioned;
