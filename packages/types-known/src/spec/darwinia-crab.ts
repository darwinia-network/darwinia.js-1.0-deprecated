// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0
/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {};

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
      ...sharedTypes
    }
  },
  {
    minmax: [1210, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
