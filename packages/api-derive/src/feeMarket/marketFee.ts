// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletFeeMarketRelayer } from '@polkadot/types/lookup';
import type { Option, Vec } from '@polkadot/types-codec';
import type { DeriveMarketFee } from './types';

import { map, Observable } from 'rxjs';

import { DeriveApi } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';

function lastAssignedRelayerFee (api: DeriveApi): Observable<DeriveMarketFee | undefined> {
  return api.query.pangolinParachainFeeMarket.assignedRelayers<Option<Vec<PalletFeeMarketRelayer>>>().pipe(
    map((relayers): DeriveMarketFee | undefined => {
      const data = relayers.unwrapOr([]);

      if (data.length === 0) {
        return undefined;
      }

      // The market fee comes from the last item in AssignedRelayers from substrate runtime
      return { amount: data[data.length - 1].fee };
    })
  );
}

/**
 * @name marketFee
 * @description market fee
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.feeMarket.marketFee((fee) => {
 *   console.log(`the current market fee is ${fee}`);
 * });
 * ```
 */

export function marketFee (instanceId: string, api: DeriveApi): () => Observable<DeriveMarketFee | undefined> {
  return memo(instanceId, (): Observable<DeriveMarketFee | undefined> => {
    return lastAssignedRelayerFee(api);
  });
}
