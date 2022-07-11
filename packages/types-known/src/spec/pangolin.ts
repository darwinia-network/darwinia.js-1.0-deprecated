// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 28110],
    types: {
      ...sharedTypes
    }
  },
  {
    minmax: [28140, undefined],
    types: {}
  }
];

export default versioned;
