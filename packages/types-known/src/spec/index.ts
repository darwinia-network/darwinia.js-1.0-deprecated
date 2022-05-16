// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OverrideVersionedType } from '@polkadot/types/types';

import darwinia from './darwinia';
import darwiniaCrab from './darwinia-crab';
import pangolin from './pangolin';
import pangoro from './pangoro';

// Type overrides for specific spec types & versions as given in runtimeVersion
const typesSpec: Record<string, OverrideVersionedType[]> = {
  Crab: darwiniaCrab,
  Darwinia: darwinia,
  Pangolin: pangolin,
  Pangoro: pangoro
};

export default typesSpec;
