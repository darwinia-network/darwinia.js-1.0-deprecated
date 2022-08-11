// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPrefs, DeriveStakerRewardValidator, DeriveStakingQuery } from '@polkadot/api-derive/staking/types';
import { DeriveApi } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';
import { u32 } from '@polkadot/types';
import { AccountId, EraIndex } from '@polkadot/types/interfaces';
import { BN, BN_BILLION, BN_ZERO } from '@polkadot/util';

import { DarwiniaStakingStructsStakingLedger } from '../darwiniaStaking/types';
import { DeriveStakerExposure, DeriveStakerReward } from './types';

type ErasResult = [DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[]];

// eslint-disable-next-line max-len
function parseRewards (api: ApiInterfaceRx, stashId: AccountId, [erasPoints, erasPrefs, erasRewards]: ErasResult, exposures: DeriveStakerExposure[]): DeriveStakerReward[] {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }): DeriveStakerReward => {
    const { eraPoints, validators: allValPoints } = erasPoints.find((p) => p.era.eq(era)) || {
      eraPoints: BN_ZERO,
      validators: {}
    };
    const { eraReward } = erasRewards.find((r) => r.era.eq(era)) || { eraReward: api.registry.createType('Balance') };
    const { validators: allValPrefs } = erasPrefs.find((p) => p.era.eq(era)) || { validators: {} as DeriveEraValPrefs };
    const validators: Record<string, DeriveStakerRewardValidator> = {};
    const stakerId = stashId.toString();
    let total = BN_ZERO;

    // eslint-disable-next-line complexity
    Object.entries(eraValidators).forEach(([validatorId, exposure]): void => {
      const valPoints = allValPoints[validatorId] || BN_ZERO;
      const valComm = allValPrefs[validatorId]?.commission.unwrap() || BN_ZERO;
      const expTotal = exposure.totalPower;
      let avail = BN_ZERO;
      let value: BN | undefined;

      if (!(expTotal.isZero() || valPoints.isZero() || eraPoints.isZero())) {
        avail = eraReward.mul(valPoints).div(eraPoints);

        const valCut = valComm.mul(avail).div(BN_BILLION);
        let staked: BN;

        if (validatorId === stakerId) {
          staked = exposure.ownPower;
        } else {
          const stakerExp = exposure.others.find(({ who }) => who.eq(stakerId));

          staked = stakerExp ? stakerExp.power : BN_ZERO;
        }

        value = avail
          .sub(valCut)
          .imul(staked)
          .div(expTotal)
          .iadd(validatorId === stakerId ? valCut : BN_ZERO);
        total = total.add(value);
      }

      validators[validatorId] = {
        total: api.registry.createType('Balance', avail),
        value: api.registry.createType('Balance', value)
      };
    });

    return {
      era,
      eraReward,
      isEmpty,
      isValidator,
      nominating,
      total: api.registry.createType('Balance', total),
      validators
    };
  });
}

function allUniqValidators (rewards: DeriveStakerReward[][]): [string[], string[][]] {
  return rewards.reduce(
    ([all, perStash]: [string[], string[][]], cur) => {
      const uniq: string[] = [];

      perStash.push(uniq);
      cur.forEach(({ validators }) =>
        Object.keys(validators).forEach((validatorId): void => {
          if (!uniq.includes(validatorId)) {
            uniq.push(validatorId);

            if (!all.includes(validatorId)) {
              all.push(validatorId);
            }
          }
        })
      );

      return [all, perStash];
    },
    [[], []]
  );
}

function removeClaimed (validators: string[], queryValidators: DeriveStakingQuery[], reward: DeriveStakerReward): void {
  const rm: string[] = [];

  Object.keys(reward.validators).forEach((validatorId): void => {
    const index = validators.indexOf(validatorId);

    if (index !== -1) {
      const valLedger = queryValidators[index].stakingLedger;

      if (valLedger?.claimedRewards.some((e: u32) => reward.era.eq(e))) {
        rm.push(validatorId);
      }
    }
  });

  rm.forEach((validatorId): void => {
    delete reward.validators[validatorId];
  });
}

function filterRewards (eras: EraIndex[], valInfo: [string, DeriveStakingQuery][], { rewards, stakingLedger }: { rewards: DeriveStakerReward[]; stakingLedger: DarwiniaStakingStructsStakingLedger }): DeriveStakerReward[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const filter = eras.filter((e) => !stakingLedger.claimedRewards.some((s: u32) => s.eq(e)));
  const validators = valInfo.map(([v]) => v);
  const queryValidators = valInfo.map(([, q]) => q);

  return rewards
    .filter(({ isEmpty }) => !isEmpty)
    .filter((reward): boolean => {
      if (!filter.some((e) => reward.era.eq(e))) {
        return false;
      }

      removeClaimed(validators, queryValidators, reward);

      return true;
    })
    .filter(({ validators: source }) => Object.keys(source).length !== 0)
    .map((reward) => ({
      ...reward,
      nominators: reward.nominating.filter((n) => reward.validators[n.validatorId])
    }));
}

export function _stakerRewards (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive?: boolean) => Observable<DeriveStakerReward[][]> {
  return memo(
    instanceId,
    (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive = false): Observable<DeriveStakerReward[][]> =>
      combineLatest([api.derive.staking.queryMulti(accountIds, { withLedger: true }), api.derive.staking._stakerExposures(accountIds, eras, withActive), api.derive.staking._stakerRewardsEras(eras, withActive)]).pipe(
        switchMap(([queries, exposures, erasResult]): Observable<DeriveStakerReward[][]> => {
          const allRewards = queries.map(({ stakingLedger, stashId }, index): DeriveStakerReward[] => (!stashId || !stakingLedger ? [] : parseRewards(api, stashId, erasResult, exposures[index] as unknown as DeriveStakerExposure[])));

          if (withActive) {
            return of(allRewards);
          }

          const [allValidators, stashValidators] = allUniqValidators(allRewards);

          return api.derive.staking.queryMulti(allValidators, { withLedger: true }).pipe(
            map((queriedVals): DeriveStakerReward[][] =>
              queries.map(({ stakingLedger }, index): DeriveStakerReward[] => {
                const lederValue = stakingLedger as unknown as DarwiniaStakingStructsStakingLedger;

                return filterRewards(
                  eras,
                  stashValidators[index].map((validatorId): [string, DeriveStakingQuery] => [validatorId, queriedVals.find((q) => q.accountId.eq(validatorId)) as DeriveStakingQuery]),
                  {
                    rewards: allRewards[index],
                    stakingLedger: lederValue
                  }
                );
              })
            )
          );
        })
      )
  );
}
