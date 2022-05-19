// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/api-augment';

import { map, Observable } from 'rxjs';

import { DeriveApi } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';
import { LaneId, MessageNonce } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types-codec/types';

function orders (api: DeriveApi): Observable<ITuple<[LaneId, MessageNonce]>[]> {
  return api.query.pangolinParachainFeeMarket.orders.keys().pipe(
    map((datas): ITuple<[LaneId, MessageNonce]>[] => {
      return datas.map(({ args: [item] }) => item);
    })
  );
}

/**
 * @name inProcessOrders
 * @return orders Array<(laneId, MessageNonce)>
 * @description query in process orders
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.feeMarket.inProcessOrders((orders) => {
 *   console.log(`the current feeMarket processing orders are ${orders}`);
 * });
 * ```
 */
export function inProcessOrders (instanceId: string, api: DeriveApi): () => Observable<ITuple<[LaneId, MessageNonce]>[]> {
  return memo(instanceId, (): Observable<ITuple<[LaneId, MessageNonce]>[]> => orders(api));
}
