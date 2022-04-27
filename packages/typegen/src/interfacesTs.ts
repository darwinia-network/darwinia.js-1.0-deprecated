// Copyright 2017-2022 @darwinia/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import * as substrateDefs from '@polkadot/types/interfaces/definitions';

import darwinia from '@darwinia/types-support/src/metadata/static-darwinia';
import crab from '@darwinia/types-support/src/metadata/static-crab';
import pangolin from '@darwinia/types-support/src/metadata/static-pangolin';
import pangoro from '@darwinia/types-support/src/metadata/static-pangoro';

import * as chainDefs from '@darwinia/types/src/interfaces/definitions';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultQuery, generateDefaultRpc, generateDefaultTx } from '@polkadot/typegen/generate';

import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';

const BASE = 'packages/api-augment/src';
const RPCBASE = 'packages/rpc-augment/src';
const METAS = Object.entries({ crab, darwinia, pangolin, pangoro }) as [string, HexString][];

export function main (): void {
  // generateDefaultLookup();
  // generateDefaultInterface();
  // generateDefaultTsDef();

  const userKeys = Object.keys(chainDefs);
  const filteredBase = Object
    .entries(substrateDefs as Record<string, unknown>)
    .filter(([key]) => {
      if (userKeys.includes(key)) {
        console.warn(`Override found for ${key} in user types, ignoring in @polkadot/types`);

        return false;
      }

      return true;
    })
    .reduce((defs: Record<string, any>, [key, value]) => {
      defs[key] = value;

      return defs;
    }, {});

  const allDefs = {
    '@darwinia/types/interfaces': chainDefs,
    '@polkadot/types/interfaces': filteredBase

  };

  generateTsDef(allDefs, 'packages/types/src/interfaces', '@darwinia/types/interfaces');
  generateInterfaceTypes(allDefs, 'packages/types-augment/src/registry/interfaces.ts');

  for (const [name, staticMeta] of METAS) {
    console.log();
    console.log(`*** Generating for ${name}`);

    generateDefaultRpc(`${RPCBASE}/${name}/jsonrpc.ts`, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultConsts(`${BASE}/${name}/consts.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultErrors(`${BASE}/${name}/errors.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultEvents(`${BASE}/${name}/events.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultQuery(`${BASE}/${name}/query.ts`, staticMeta, { '@darwinia/types/interface': chainDefs });
    generateDefaultTx(`${BASE}/${name}/tx.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
  }
}
