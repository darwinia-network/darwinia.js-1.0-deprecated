// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { LaneId, MessageNonce } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { ITuple } from '@polkadot/types-codec/types';
import { Observable, map } from 'rxjs';
import { memo } from '@polkadot/api-derive/util';

function orders (api:ApiInterfaceRx):Observable<ITuple<[LaneId, MessageNonce]>[]> {
  return api.query.feeMarket.orders.keys().pipe(
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
export function inProcessOrders (instanceId:string, api: ApiInterfaceRx): () => Observable<ITuple<[LaneId, MessageNonce]>[]> {
  return memo(instanceId, ():Observable<ITuple<[LaneId, MessageNonce]>[]> =>
    orders(api));
}
