// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OverrideVersionedType } from '@polkadot/types/types';

import crab from './crab';
import crabParachain from './crab-parachain';
import darwinia from './darwinia';
import pangolin from './pangolin';
import pangolinParachain from './pangolin-parachain';
import pangoro from './pangoro';

// Type overrides for specific spec types & versions as given in runtimeVersion
const typesSpec: Record<string, OverrideVersionedType[]> = {
  Crab: crab,
  CrabParachain: crabParachain,
  Darwinia: darwinia,
  Pangolin: pangolin,
  PangolinParachain: pangolinParachain,
  Pangoro: pangoro
};

export default typesSpec;
