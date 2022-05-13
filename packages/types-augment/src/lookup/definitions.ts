// Copyright 2017-2022 @darwinia/types-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

import darwinia from './darwinia/lookup';
import pangolin from './pangolin/lookup';
import pangoro from './pangoro/lookup';

export default {
  rpc: {},
  types: objectSpread({}, darwinia, pangolin, pangoro)
} as Definitions;
