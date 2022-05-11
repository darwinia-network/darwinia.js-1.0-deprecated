// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as substrateDefs from '@polkadot/types/interfaces/definitions';
import * as chainDefs from '@darwinia/types/src/interfaces/definitions';
import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';

export function main (): void {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
}
