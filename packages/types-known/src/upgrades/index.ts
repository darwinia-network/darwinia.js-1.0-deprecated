// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN, hexToU8a } from '@polkadot/util';

import darwiniaCrab from './darwinia-crab';
import { ChainUpgrades, ChainUpgradesRaw } from './types';

function rawToFinal ({ genesisHash, versions }: ChainUpgradesRaw): ChainUpgrades {
  return {
    genesisHash: hexToU8a(genesisHash),
    versions: versions.map(([blockNumber, specVersion]) => ({
      blockNumber: new BN(blockNumber),
      specVersion: new BN(specVersion)
    }))
  };
}

// Type overrides for specific spec types & versions as given in runtimeVersion
const upgrades: ChainUpgrades[] = [
  rawToFinal(darwiniaCrab)
];

export default upgrades;
