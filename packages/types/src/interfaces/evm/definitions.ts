// Copyright 2017-2022 @darwinia/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    EvmCoreErrorExitReason: {
      _enum: {
        Succeed: 'ExitSucceed',
        Error: 'ExitError',
        Revert: 'ExitRevert',
        Fatal: 'ExitFatal'
      }
    },
    ExitRevert: {
      _enum: ['Reverted']
    },
    ExitSucceed: {
      _enum: ['Stopped', 'Returned', 'Suicided']
    },
    ExitFatal: {
      _enum: {
        NotSupported: 'Null',
        UnhandledInterrupt: 'Null',
        CallErrorAsFatal: 'ExitError',
        Other: 'Text'
      }
    },
    ExitError: {
      _enum: {
        StackUnderflow: 'Null',
        StackOverflow: 'Null',
        InvalidJump: 'Null',
        InvalidRange: 'Null',
        DesignatedInvalid: 'Null',
        CallTooDeep: 'Null',
        CreateCollision: 'Null',
        CreateContractLimit: 'Null',
        OutOfOffset: 'Null',
        OutOfGas: 'Null',
        OutOfFund: 'Null',
        PCUnderflow: 'Null',
        CreateEmpty: 'Null',
        Other: 'Text'
      }
    }
  }
} as Definitions;
