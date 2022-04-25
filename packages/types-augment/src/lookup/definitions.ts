// Copyright 2017-2022 @darwinia/types-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
