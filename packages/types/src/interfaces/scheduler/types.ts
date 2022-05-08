// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, u32, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { NodeRuntimeOriginCaller, FrameSupportScheduleMaybeHashed } from '@polkadot/types/lookup'

/** @name PalletSchedulerReleases */
export interface PalletSchedulerReleases extends Enum {
  readonly isV1: boolean;
  readonly isV2: boolean;
  readonly type: 'V1' | 'V2';
}

/** @name PalletSchedulerScheduledV2 */
export interface PalletSchedulerScheduledV2 extends Struct {
  readonly maybeId: Option<Bytes>;
  readonly priority: u8;
  readonly call: FrameSupportScheduleMaybeHashed;
  readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
  readonly origin: NodeRuntimeOriginCaller;
}

export type PHANTOM_SCHEDULER = 'scheduler';
