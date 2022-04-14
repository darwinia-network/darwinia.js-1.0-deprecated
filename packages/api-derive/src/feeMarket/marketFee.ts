// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, map } from 'rxjs';
import { memo } from '@polkadot/api-derive/util';

import type { ApiInterfaceRx } from '@polkadot/api-base/types';

import type { DeriveMarketFee } from './types';

import type { Relayer } from '@darwinia/types';
import type { Option, Vec } from '@polkadot/types-codec';

function lastmarkerFee (api: ApiInterfaceRx) : Observable<DeriveMarketFee | undefined> {
  return api.query.feeMarket.assignedRelayers<Option<Vec<Relayer>>>().pipe(
    map((relayers): DeriveMarketFee | undefined => {
      const datas = relayers.unwrapOr([]);

      if (datas.length === 0) {
        return undefined;
      }

      // The market fee comes from the last item in AssignedRelayers from substrate runtime
      return { amount: datas[datas.length - 1].fee };
    })
  );
}

/**
 * @name marketFee
 * @description market fee
 */

export function marketFee (instanceId: string, api: ApiInterfaceRx) : () => Observable<DeriveMarketFee | undefined> {
  return memo(instanceId, (): Observable<DeriveMarketFee | undefined> => {
    return lastmarkerFee(api);
  });
}
