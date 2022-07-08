// Copyright 2017-2022 @darwinia/api-evm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import crab from '@darwinia/types-support/src/metadata/static-crab';
import pangolin from '@darwinia/types-support/src/metadata/static-pangolin';
import pangoro from '@darwinia/types-support/src/metadata/static-pangoro';

import { EvmConfig } from './api';

export const PangolinCallIndex: EvmConfig = {
  balancesTransferIndex: [4, 0],
  dispatchContractAddress: '0x0000000000000000000000000000000000000401',
  metadata: pangolin as HexString
};

export const PangoroCallIndex: EvmConfig = {
  balancesTransferIndex: [4, 0],
  dispatchContractAddress: '0x0000000000000000000000000000000000000401',
  metadata: pangoro as HexString
};

export const CrabCallIndex: EvmConfig = {
  balancesTransferIndex: [23, 0],
  dispatchContractAddress: '0x0000000000000000000000000000000000000401',
  metadata: crab as HexString
};
