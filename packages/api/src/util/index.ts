// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiOptions } from '@polkadot/api/types';
import { ZERO_OPTIONS } from '@darwinia/api-options';

export function mergeOptions (initOptions: ApiOptions, { derives, rpc, types, ...options }: ApiOptions = ZERO_OPTIONS): ApiOptions {
  return {
    derives: {
      ...initOptions.derives,
      ...derives
    },
    rpc: {
      ...initOptions.rpc,
      ...rpc
    },
    types: {
      ...initOptions.types,
      ...types
    },
    ...options
  };
}
