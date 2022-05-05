// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Text } from '@polkadot/types-codec';

/** @name EvmCoreErrorExitReason */
export interface EvmCoreErrorExitReason extends Enum {
  readonly isSucceed: boolean;
  readonly asSucceed: ExitSucceed;
  readonly isError: boolean;
  readonly asError: ExitError;
  readonly isRevert: boolean;
  readonly asRevert: ExitRevert;
  readonly isFatal: boolean;
  readonly asFatal: ExitFatal;
  readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
}

/** @name ExitError */
export interface ExitError extends Enum {
  readonly isStackUnderflow: boolean;
  readonly isStackOverflow: boolean;
  readonly isInvalidJump: boolean;
  readonly isInvalidRange: boolean;
  readonly isDesignatedInvalid: boolean;
  readonly isCallTooDeep: boolean;
  readonly isCreateCollision: boolean;
  readonly isCreateContractLimit: boolean;
  readonly isOutOfOffset: boolean;
  readonly isOutOfGas: boolean;
  readonly isOutOfFund: boolean;
  readonly isPcUnderflow: boolean;
  readonly isCreateEmpty: boolean;
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other';
}

/** @name ExitFatal */
export interface ExitFatal extends Enum {
  readonly isNotSupported: boolean;
  readonly isUnhandledInterrupt: boolean;
  readonly isCallErrorAsFatal: boolean;
  readonly asCallErrorAsFatal: ExitError;
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
}

/** @name ExitRevert */
export interface ExitRevert extends Enum {
  readonly isReverted: boolean;
  readonly type: 'Reverted';
}

/** @name ExitSucceed */
export interface ExitSucceed extends Enum {
  readonly isStopped: boolean;
  readonly isReturned: boolean;
  readonly isSuicided: boolean;
  readonly type: 'Stopped' | 'Returned' | 'Suicided';
}

export type PHANTOM_EVM = 'evm';
