// Copyright 2017-2021 authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable sort-keys */

import typesSpec from '@darwinia/types-known/spec';
import balances from '../interfaces/balances/definitions';
import darwiniaInject from '../interfaces/darwiniaInject/definitions';
import headerMMR from '../interfaces/headerMMR/definitions';
import proxy from '../interfaces/proxy/definitions';
import relayerGame from '../interfaces/relayerGame/definitions';
import staking from '../interfaces/staking/definitions';
import { typesFromDefinitions, jsonrpcFromDefinitions } from './utils';

const polkadotCompatibleTypes = {
  BalanceLock: {
    id: 'LockIdentifier',
    lockFor: 'LockFor',
    reasons: 'Reasons',
    amount: 'Balance'
  },
  StakingLedgerT: {
    stash: 'AccountId',
    activeRing: 'Compact<Balance>',
    activeDepositRing: 'Compact<Balance>',
    activeKton: 'Compact<Balance>',
    depositItems: 'Vec<TimeDepositItem>',
    ringStakingLock: 'StakingLock',
    ktonStakingLock: 'StakingLock',
    claimedRewards: 'Vec<EraIndex>',
    total: 'Compact<Balance>',
    active: 'Compact<Balance>',
    unlocking: 'Vec<UnlockChunk>'
  },
  IndividualExposure: {
    who: 'AccountId',
    ringBalance: 'Compact<Balance>',
    ktonBalance: 'Compact<Balance>',
    power: 'Power',
    value: 'Compact<Balance>'
  }
};

const definitions = {
  balances,
  darwiniaInject,
  headerMMR,
  proxy,
  relayerGame,
  staking
};

export const types = {
  ...typesFromDefinitions(definitions)
};

export const jsonrpc = jsonrpcFromDefinitions(definitions);

// NOTE: The mapping is done from specName in state.getRuntimeVersion
function getBundleFromSpecName (specName: string, isPolkadotCompatible?: boolean) {
  return {
    alias: {},
    rpc: jsonrpc,
    types: [...typesSpec[specName]].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...types,
          ...version.types,
          ...isPolkadotCompatible ? polkadotCompatibleTypes : []
        }
      };
    })
  };
}

export const typesBundleForPolkadot = {
  spec: {
    crab: getBundleFromSpecName('Crab', true),
    darwinia: getBundleFromSpecName('Darwinia', true),
    pangolin: getBundleFromSpecName('Pangolin', true)
  }
};
