// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OverrideVersionedType } from '@polkadot/types/types';

import crab from './crab';
import darwinia from './darwinia';
import pangolin from './pangolin';
import pangoro from './pangoro';

// Type overrides for specific spec types & versions as given in runtimeVersion
const typesSpec: Record<string, OverrideVersionedType[]> = {
  Crab: crab,
  Darwinia: darwinia,
  Pangolin: pangolin,
  Pangoro: pangoro
};

export default typesSpec;
