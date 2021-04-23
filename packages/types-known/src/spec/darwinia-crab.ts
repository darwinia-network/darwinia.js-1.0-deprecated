// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  MultiAddress: 'GenericMultiAddress',
  ValidatorPrefs: 'ValidatorPrefsWithBlocked'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 41],
    types: {
      ...sharedTypes
    }
  },
  {
    minmax: [42, 43],
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
    minmax: [43, undefined],
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
