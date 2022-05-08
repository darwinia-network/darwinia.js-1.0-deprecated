// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { EraIndex, KtonBalance, Power, RKT, RingBalance } from '@darwinia/types/interfaces/darwiniaInject';
import type { BTreeMap, Compact, Enum, Option, Struct, Vec, bool, u128, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

import type { AccountId, AccountId32, Perbill } from '@polkadot/types/interfaces/runtime';

/** @name DarwiniaStakingSlashingSlashingSpans */
export interface DarwiniaStakingSlashingSlashingSpans extends Struct {
  readonly spanIndex: SpanIndex;
  readonly lastStart: EraIndex;
  readonly lastNonzeroSlash: EraIndex;
  readonly prior: Vec<EraIndex>;
}

/** @name DarwiniaStakingSlashingSpanRecord */
export interface DarwiniaStakingSlashingSpanRecord extends Struct {
  readonly slashed: RKT;
  readonly paidOut: RKT;
}

/** @name DarwiniaStakingStructsActiveEraInfo */
export interface DarwiniaStakingStructsActiveEraInfo extends Struct {
  readonly index: EraIndex;
  readonly start: Option<u64>;
}

/** @name DarwiniaStakingStructsEraRewardPoints */
export interface DarwiniaStakingStructsEraRewardPoints extends Struct {
  readonly total: RewardPoint;
  readonly individual: BTreeMap<AccountId, RewardPoint>;
}

/** @name DarwiniaStakingStructsExposure */
export interface DarwiniaStakingStructsExposure extends Struct {
  readonly total: Compact<u128>;
  readonly own: Compact<u128>;
  readonly others: Vec<PalletStakingIndividualExposure>;
}

/** @name DarwiniaStakingStructsForcing */
export interface DarwiniaStakingStructsForcing extends Enum {
  readonly isNotForcing: boolean;
  readonly isForceNew: boolean;
  readonly isForceNone: boolean;
  readonly isForceAlways: boolean;
  readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
}

/** @name DarwiniaStakingStructsNominations */
export interface DarwiniaStakingStructsNominations extends Struct {
  readonly targets: Vec<AccountId>;
  readonly submitted_in: EraIndex;
  readonly suppressed: bool;
}

/** @name DarwiniaStakingStructsReleases */
export interface DarwiniaStakingStructsReleases extends Enum {
  readonly isV100Ancient: boolean;
  readonly isV200: boolean;
  readonly isV300: boolean;
  readonly isV400: boolean;
  readonly isV500: boolean;
  readonly isV600: boolean;
  readonly isV700: boolean;
  readonly type: 'V100Ancient' | 'V200' | 'V300' | 'V400' | 'V500' | 'V600' | 'V700';
}

/** @name DarwiniaStakingStructsRewardDestination */
export interface DarwiniaStakingStructsRewardDestination extends Enum {
  readonly isStaked: boolean;
  readonly isStash: boolean;
  readonly isController: boolean;
  readonly isAccount: boolean;
  readonly asAccount: AccountId;
  readonly isNone: boolean;
  readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
}

/** @name DarwiniaStakingStructsStakingBalance */
export interface DarwiniaStakingStructsStakingBalance extends Enum {
  readonly isRingBalance: boolean;
  readonly asRingBalance: RingBalance;
  readonly isKtonBalance: boolean;
  readonly asKtonBalance: KtonBalance;
  readonly type: 'RingBalance' | 'KtonBalance';
}

/** @name DarwiniaStakingStructsUnappliedSlash */
export interface DarwiniaStakingStructsUnappliedSlash extends Struct {
  readonly validator: AccountId;
  readonly own: RKT;
  readonly others: Vec<UnappliedSlashOther>;
  readonly reporters: Vec<AccountId>;
  readonly payout: RKT;
}

/** @name DarwiniaStakingStructsValidatorPrefs */
export interface DarwiniaStakingStructsValidatorPrefs extends Struct {
  readonly commission: Perbill;
  readonly blocked: bool;
}

/** @name PalletStakingIndividualExposure */
export interface PalletStakingIndividualExposure extends Struct {
  readonly who: AccountId32;
  readonly value: Compact<u128>;
}

/** @name PowerOf */
export interface PowerOf extends Struct {
  readonly power: Power;
}

/** @name RewardPoint */
export interface RewardPoint extends u32 {}

/** @name SpanIndex */
export interface SpanIndex extends u32 {}

/** @name UnappliedSlashOther */
export interface UnappliedSlashOther extends ITuple<[AccountId, RKT]> {}

export type PHANTOM_STAKING = 'staking';
