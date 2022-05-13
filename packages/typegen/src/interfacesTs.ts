// Copyright 2017-2022 @darwinia/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

// import pangoro from '@darwinia/types-support/src/metadata/static-pangoro';
import * as chainDefs from '@darwinia/types/src/interfaces/definitions';
import crab from '@darwinia/types-support/src/metadata/static-crab';

// import darwinia from '@darwinia/types-support/src/metadata/static-darwinia';
// import pangolin from '@darwinia/types-support/src/metadata/static-pangolin';
// import pangoro from '@darwinia/types-support/src/metadata/static-pangoro';
import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultLookup, generateDefaultQuery, generateDefaultRpc, generateDefaultTx } from '@polkadot/typegen/generate';

const BASE = 'packages/api-augment/src';
const RPCBASE = 'packages/rpc-augment/src';
const LOOKUP = 'packages/types-augment/src/lookup';

const METAS = Object.entries({ crab }) as [string, HexString][];

export function main (): void {
  for (const [name, staticMeta] of METAS) {
    console.log(`** Generating lookup for ${name}`);
    generateDefaultLookup(`${LOOKUP}/${name}`, staticMeta);

    console.log(`*** Generating for ${name}`);

    generateDefaultRpc(`${RPCBASE}/${name}/jsonrpc.ts`, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultConsts(`${BASE}/${name}/consts.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultErrors(`${BASE}/${name}/errors.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultEvents(`${BASE}/${name}/events.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultQuery(`${BASE}/${name}/query.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
    generateDefaultTx(`${BASE}/${name}/tx.ts`, staticMeta, { '@darwinia/types/interfaces': chainDefs });
  }
}
