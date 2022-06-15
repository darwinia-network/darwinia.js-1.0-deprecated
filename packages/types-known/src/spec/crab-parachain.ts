// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';
import { objectSpread } from '@polkadot/util';

const sharedTypes = {};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 5210],
    types: objectSpread({}, sharedTypes)
  }
];

export default versioned;
