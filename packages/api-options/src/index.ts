// Copyright 2017-2020 @darwinia/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as definitions from '@darwinia/types/interfaces/definitions';
import jsonrpc from '@darwinia/types/interfaces/jsonrpc';
// import { derive as darwiniaDerive } from '@darwinia/api-derive';
import { ApiOptions } from '@polkadot/api/types';

const darwiniaTypes = Object.values(definitions).reduce((res, { types }) => ({ ...res, ...types }), {});

export const ZERO_OPTIONS: ApiOptions = {
  derives: {}, rpc: {}, types: {}
};

export default ({ derives, rpc, types, ...customApiOptions }: ApiOptions = ZERO_OPTIONS): ApiOptions => ({
  derives: {
    // ...darwiniaDerive,
    ...derives
  },
  rpc: {
    ...jsonrpc,
    ...rpc
  },
  types: {
    ...darwiniaTypes,
    ...types
  },
  ...customApiOptions
});
