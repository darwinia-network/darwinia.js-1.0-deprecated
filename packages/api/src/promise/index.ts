// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiPromise, { decorateMethod } from '@polkadot/api/promise';
import { ApiOptions } from '@polkadot/api/types';
import initOptionsFn, { ZERO_OPTIONS } from '@darwinia/api-options';

const initOptions: ApiOptions = initOptionsFn();

export default class DarwiniaApiPromise extends ApiPromise {
  constructor ({ derives, rpc, types, ...options }: ApiOptions = ZERO_OPTIONS) {
    super({
      derives: {
        // ...initOptions.derives,
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
    });
  }
}

export { decorateMethod };
