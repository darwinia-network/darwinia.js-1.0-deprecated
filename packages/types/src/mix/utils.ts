// Copyright 2017-2021 authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { DefinitionRpcExt, Definitions } from '@polkadot/types/types';

function typesFromDefinitions (
  /* eslint-disable @typescript-eslint/no-explicit-any */
  definitions: Record<string, { types: Record<string, any> }>,
  initTypes: Record<string, any> = {}
): Record<string, any> {
  return Object.values(definitions).reduce(
    (res: Record<string, any>, { types }): Record<string, any> => ({
      ...res,
      ...types
    }),
    initTypes
  );
}

function jsonrpcFromDefinitions (
  definitions: Record<string, Definitions>
) : Record<string, Record<string, DefinitionRpcExt>> {
  const jsonrpc: Record<string, Record<string, DefinitionRpcExt>> = {};

  Object
    .keys(definitions)
    .filter((key) => Object.keys((definitions)[key].rpc || {}).length !== 0)
    .forEach((section): void => {
      if (!jsonrpc[section]) {
        jsonrpc[section] = {};
      }

      Object
        .entries(definitions[section].rpc)
        .forEach(([method, def]): void => {
          const isSubscription = !!(def as DefinitionRpcExt).pubsub;

          jsonrpc[section][method] = ({ ...def, isSubscription, jsonrpc: `${section}_${method}`, method, section });
        });
    });

  return jsonrpc;
}

export {
  typesFromDefinitions,
  jsonrpcFromDefinitions
};
