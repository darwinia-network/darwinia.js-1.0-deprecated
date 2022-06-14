// Copyright 2017-2022 @darwinia/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import * as chainDefs from '@darwinia/types/src/interfaces/definitions';
import path from 'path';
import yargs from 'yargs';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultLookup, generateDefaultQuery, generateDefaultRpc, generateDefaultTx } from '@polkadot/typegen/generate';
import { formatNumber } from '@polkadot/util';
import { WebSocket } from '@polkadot/x-ws';

const BASE = 'packages/api-augment/src';
const RPCBASE = 'packages/rpc-augment/src';
const LOOKUP = 'packages/types-augment/src/lookup';

function generate(metaHex: HexString, name: string, isStrict?: boolean): void {
  console.log(`Generating from metadata, ${formatNumber((metaHex.length - 2) / 2)} bytes`);

  console.log(`** Generating lookup for ${name}`);

  generateDefaultLookup(`${LOOKUP}/${name}`, metaHex);

  console.log(`*** Generating for ${name}`);

  generateDefaultRpc(`${RPCBASE}/${name}/jsonrpc.ts`, { '@darwinia/types/interfaces': chainDefs });
  generateDefaultConsts(`${BASE}/${name}/consts.ts`, metaHex, { '@darwinia/types/interfaces': chainDefs }, isStrict);
  generateDefaultErrors(`${BASE}/${name}/errors.ts`, metaHex, { '@darwinia/types/interfaces': chainDefs }, isStrict);
  generateDefaultEvents(`${BASE}/${name}/events.ts`, metaHex, { '@darwinia/types/interfaces': chainDefs }, isStrict);
  generateDefaultQuery(`${BASE}/${name}/query.ts`, metaHex, { '@darwinia/types/interfaces': chainDefs }, isStrict);
  generateDefaultTx(`${BASE}/${name}/tx.ts`, metaHex, { '@darwinia/types/interfaces': chainDefs }, isStrict);

  process.exit(0);
}

type ArgV = { endpoint: string; name: string; strict?: boolean };

export function main(): void {
  const {
    endpoint,
    name,
    strict: isStrict
  } = yargs.strict().options({
    endpoint: {
      description: 'The endpoint to connect to (e.g. wss://rpc.darwinia.network) or relative path to a file containing the JSON output of an RPC state_getMetadata call',
      required: true,
      type: 'string'
    },
    name: {
      description: 'The dest name to contain generating files',
      required: true,
      type: 'string'
    },
    strict: {
      description: 'Turns on strict mode, no output of catch-all generic versions',
      type: 'boolean'
    }
  }).argv as ArgV;

  if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
    try {
      const websocket = new WebSocket(endpoint);

      websocket.onclose = (event: { code: number; reason: string }): void => {
        console.error(`disconnected, code: '${event.code}' reason: '${event.reason}'`);
        process.exit(1);
      };

      websocket.onerror = (event: unknown): void => {
        console.error(event);
        process.exit(1);
      };

      websocket.onopen = (): void => {
        console.log('connected');
        websocket.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
      };

      websocket.onmessage = (message: unknown): void => {
        generate((JSON.parse((message as Record<string, string>).data) as Record<string, HexString>).result, name, isStrict);
      };
    } catch (error) {
      process.exit(1);
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    generate((require(path.join(process.cwd(), endpoint)) as Record<string, HexString>).result, name, isStrict);
  }
}
