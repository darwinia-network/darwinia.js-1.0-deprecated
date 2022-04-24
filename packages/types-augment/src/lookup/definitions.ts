// Copyright 2017-2020 @darwinia/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type { Definitions } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

import darwinia from './darwinia';
import crab from './crab';
import pangolin from './pangolin';
import pangoro from './pangoro';

export default {
  rpc: {},
  types: objectSpread({}, crab, darwinia, pangolin, pangoro)
} as Definitions;
