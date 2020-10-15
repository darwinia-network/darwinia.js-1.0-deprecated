// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @ts-nocheck

import polkadotJsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { DefinitionRpcExt } from '@polkadot/types/types';

import * as definitions from './definitions';

const jsonrpc: Record<string, Record<string, DefinitionRpcExt>> = { ...polkadotJsonrpc };

Object
  .keys(definitions)
  .filter((key) => Object.keys((definitions as any)[key as 'babe'].rpc || {}).length !== 0)
  .forEach((section): void => {
    if (!jsonrpc[section]) {
      jsonrpc[section] = {};
    }

    Object
      .entries(definitions[section as 'babe'].rpc)
      .forEach(([method, def]): void => {
        const isSubscription = !!(def as DefinitionRpcSub).pubsub;

        jsonrpc[section][method] = ({ ...def, isSubscription, jsonrpc: `${section}_${method}`, method, section });
      });
  });
export default jsonrpc;
