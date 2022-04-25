// Copyright 2017-2022 @darwinia/api-option authors & contributors
// SPDX-License-Identifier: Apache-2.0
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import jsonrpc from '@darwinia/types/interfaces/jsonrpc';
// import { derive as darwiniaDerive } from '@darwinia/api-derive';
import { ApiOptions } from '@polkadot/api/types';
import { typesBundle } from '@darwinia/types/mix';

export const ZERO_OPTIONS: ApiOptions = {
  derives: {},
  rpc: {},
  types: {}
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
    ...types
  },
  typesBundle: {
    ...typesBundle
  },
  ...customApiOptions
});
