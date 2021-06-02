// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  MultiAddress: 'GenericMultiAddress',
  ValidatorPrefs: 'ValidatorPrefsWithBlocked',
  RawSolution: 'RawSolutionWith16',
  CompactAssignments: 'CompactAssignmentsWith16'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 22],
    types: {
      ...sharedTypes
    }
  },
  {
    minmax: [23, 24],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithTripleRefCount',
      AccountInfoWithTripleRefCount: {
        nonce: 'Index',
        consumers: 'RefCount',
        providers: 'RefCount',
        data: 'AccountData'
      }
    }
  },
  {
    minmax: [25, undefined],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithTripleRefCount',
      AccountInfoWithTripleRefCount: {
        nonce: 'Index',
        consumers: 'RefCount',
        providers: 'RefCount',
        sufficients: 'RefCount',
        data: 'AccountData'
      }
    }
  }
];

export default versioned;
