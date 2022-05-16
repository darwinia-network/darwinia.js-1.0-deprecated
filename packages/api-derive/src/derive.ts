// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as usableBalance from './accounts';
import * as feeMarket from './feeMarket';
import * as staking from './staking';

export const methodDerive = {
  staking
};

export const sectionDerive = {
  feeMarket, usableBalance
};
