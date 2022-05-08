// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {
    powerOf: {
      alias: ['staking_powerOf'],
      description: 'staking_powerOf',
      params: [
        {
          name: 'accountId',
          type: 'AccountId'
        }
      ],
      type: 'PowerOf'
    }
  },
  types: {
    PowerOf: {
      power: 'Power'
    },
    DarwiniaStakingStructsExposure: {
      total: 'Compact<u128>',
      own: 'Compact<u128>',
      others: 'Vec<PalletStakingIndividualExposure>'
    },
    PalletStakingIndividualExposure: {
      who: 'AccountId32',
      value: 'Compact<u128>'
    },
    DarwiniaStakingStructsActiveEraInfo: {
      index: 'EraIndex',
      start: 'Option<u64>'
    },
    DarwiniaStakingStructsEraRewardPoints: {
      total: 'RewardPoint',
      individual: 'BTreeMap<AccountId, RewardPoint>'
    },
    RewardPoint: 'u32',
    DarwiniaStakingStructsValidatorPrefs: {
      commission: 'Perbill',
      blocked: 'bool'
    },
    DarwiniaStakingStructsForcing: {
      _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
    },
    DarwiniaStakingStructsNominations: {
      targets: 'Vec<AccountId>',
      submitted_in: 'EraIndex',
      suppressed: 'bool'
    },
    DarwiniaStakingStructsRewardDestination: {
      _enum: {
        Staked: 'Null',
        Stash: 'Null',
        Controller: 'Null',
        Account: 'AccountId',
        None: 'Null'
      }
    },
    DarwiniaStakingSlashingSlashingSpans: {
      spanIndex: 'SpanIndex',
      lastStart: 'EraIndex',
      lastNonzeroSlash: 'EraIndex',
      prior: 'Vec<EraIndex>'
    },
    SpanIndex: 'u32',
    DarwiniaStakingSlashingSpanRecord: {
      slashed: 'RKT',
      paidOut: 'RKT'
    },
    DarwiniaStakingStructsReleases: {
      _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0']
    },
    DarwiniaStakingStructsUnappliedSlash: {
      validator: 'AccountId',
      own: 'RKT',
      others: 'Vec<UnappliedSlashOther>',
      reporters: 'Vec<AccountId>',
      payout: 'RKT'
    },
    UnappliedSlashOther: '(AccountId, RKT)',
    DarwiniaStakingStructsStakingBalance: {
      _enum: {
        RingBalance: 'RingBalance',
        KtonBalance: 'KtonBalance'
      }
    }
  }
} as Definitions;
