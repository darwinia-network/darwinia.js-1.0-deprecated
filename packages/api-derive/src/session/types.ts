// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Option, u32 } from '@polkadot/types';
import { BlockNumber, EraIndex, Moment, SessionIndex } from '@polkadot/types/interfaces';

export interface DeriveSessionIndexes {
  activeEra: EraIndex;
  activeEraStart: Option<Moment>;
  currentEra: EraIndex;
  currentIndex: SessionIndex;
  validatorCount: u32;
}

export interface DeriveSessionInfo extends DeriveSessionIndexes {
  eraLength: BlockNumber;
  isEpoch: boolean;
  sessionLength: BlockNumber;
  sessionsPerEra: SessionIndex;
}

export interface DeriveSessionProgress extends DeriveSessionInfo {
  eraProgress: BlockNumber;
  sessionProgress: BlockNumber;
}
