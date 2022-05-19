// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, u32 } from '@polkadot/types-codec';

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingElected, StakingQueryFlags } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';
import { AccountId, ValidatorPrefs } from '@polkadot/types/interfaces';
import { arrayFlatten } from '@polkadot/util';

export interface IDeriveStakingElected extends DeriveStakingElected {
  activeCommissions: ValidatorPrefs[];
}

const DEFAULT_FLAGS = { withController: true, withExposure: true, withPrefs: true };

function combineAccounts (nextElected: AccountId[], validators: AccountId[]): AccountId[] {
  return arrayFlatten([nextElected, validators.filter((v) => !nextElected.find((n) => n.eq(v)))]);
}

export function electedInfo (instanceId: string, api: ApiInterfaceRx): () => Observable<IDeriveStakingElected> {
  return memo(
    instanceId,
    (flags: StakingQueryFlags = DEFAULT_FLAGS): Observable<DeriveStakingElected> =>
      api.derive.staking.validators().pipe(
        switchMap(({ nextElected, validators }): Observable<DeriveStakingElected> => {
          const infoObs = api.derive.staking.queryMulti(combineAccounts(nextElected, validators), flags).pipe(map((info): Pick<IDeriveStakingElected, 'info'> => ({ info })));
          const commissionsObs = api.query.staking.currentEra<Option<u32>>().pipe(
            switchMap((currentEra) => combineLatest(nextElected.map((accountId) => api.query.staking.erasValidatorPrefs(currentEra.unwrap(), accountId.toString())))),
            map(
              (active): Pick<IDeriveStakingElected, 'activeCommissions'> => ({
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                activeCommissions: active as ValidatorPrefs[]
              })
            )
          );

          return combineLatest([infoObs, commissionsObs], (i, c) => ({ ...i, ...c, nextElected, validators }));
        })
      )
  );
}
