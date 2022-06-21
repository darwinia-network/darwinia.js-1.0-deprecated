// Copyright 2017-2022 @darwinia/api-evm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import crab from '@darwinia/types-support/src/metadata/static-crab';
import pangolin from '@darwinia/types-support/src/metadata/static-pangolin';

import { CallIndexConfig } from './api';

export const PangolinCallIndex: CallIndexConfig = {
  balanceTransfer: [4, 0],
  metadata: pangolin as HexString
};

export const CrabCallIndex: CallIndexConfig = {
  balanceTransfer: [23, 0],
  metadata: crab as HexString
};
