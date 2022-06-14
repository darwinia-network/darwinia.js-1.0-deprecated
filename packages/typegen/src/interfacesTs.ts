// Copyright 2017-2022 @darwinia/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import * as chainDefs from '@darwinia/types/src/interfaces/definitions';
import crab from '@darwinia/types-support/src/metadata/static-crab';
import crabParachain from '@darwinia/types-support/src/metadata/static-crab-parachain';
import darwinia from '@darwinia/types-support/src/metadata/static-darwinia';
import pangolin from '@darwinia/types-support/src/metadata/static-pangolin';
import pangoro from '@darwinia/types-support/src/metadata/static-pangoro';
import path from 'path';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultLookup, generateDefaultQuery, generateDefaultRpc, generateDefaultTx } from '@polkadot/typegen/generate';
import { Definitions } from '@polkadot/types/types';

const BASE = 'packages/api-augment/src';
const RPCBASE = 'packages/rpc-augment/src';
const LOOKUP = 'packages/types-augment/src/lookup';

const METAS = Object.entries({ crab, crabParachain, darwinia, pangolin, pangoro }) as [string, HexString][];

export function main(): void {
  for (const [name, staticMeta] of METAS) {
    console.log(`** Generating lookup for ${name}`);

    generateDefaultLookup(`${LOOKUP}/${name}`, staticMeta);

    let chainLookupDefinitions: Definitions = { rpc: {}, types: {} };

    try {
      chainLookupDefinitions = {
        rpc: {},
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
        types: require(path.join(`@darwinia/types-augment/src/lookup/${name}`, 'lookup.ts')).default
      };
    } catch (error) {
      console.error('ERROR: No lookup definitions found:', (error as Error).message);
    }

    console.log(`*** Generating for ${name}`);

    generateDefaultRpc(`${RPCBASE}/${name}/jsonrpc.ts`, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultConsts(`${BASE}/${name}/consts.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs }, false, chainLookupDefinitions);
    generateDefaultErrors(`${BASE}/${name}/errors.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultEvents(`${BASE}/${name}/events.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs }, false, chainLookupDefinitions);
    generateDefaultQuery(`${BASE}/${name}/query.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs }, false, chainLookupDefinitions);
    generateDefaultTx(`${BASE}/${name}/tx.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs }, false, chainLookupDefinitions);
  }
}
