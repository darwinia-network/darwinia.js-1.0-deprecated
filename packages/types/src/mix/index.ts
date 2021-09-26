// Copyright 2017-2021 authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable sort-keys */

import { OverrideBundleDefinition, OverrideVersionedType, RegistryTypes } from '@polkadot/types/types';

import typesSpec from '@darwinia/types-known/spec';
import balances from '../interfaces/balances/definitions';
import bridges from '../interfaces/bridges/definitions';
import bsc from '../interfaces/bsc/definitions';
import darwiniaInject from '../interfaces/darwiniaInject/definitions';
import headerMMR from '../interfaces/headerMMR/definitions';
import proxy from '../interfaces/proxy/definitions';
import relayerGame from '../interfaces/relayerGame/definitions';
import staking from '../interfaces/staking/definitions';
import { jsonrpcFromDefinitions, typesFromDefinitions } from './utils';

interface SpecOverrideBundleDefinition {
  spec: {
    Crab: OverrideBundleDefinition;
    Darwinia: OverrideBundleDefinition;
    Pangolin: OverrideBundleDefinition;
    Pangoro: OverrideBundleDefinition;
  };
}

interface CompatibleSpecOverrideBundleDefinition {
  spec: {
    crab: OverrideBundleDefinition;
    darwinia: OverrideBundleDefinition;
    pangolin: OverrideBundleDefinition;
    pangoro: OverrideBundleDefinition;
  }
}

const polkadotCompatibleTypes: RegistryTypes = {
  AccountData: {
    free: 'Balance',
    reserved: 'Balance',
    freeKton: 'Balance',
    reservedKton: 'Balance'
  },
  BalanceLock: {
    id: 'LockIdentifier',
    lockFor: 'LockFor',
    lockReasons: 'LockReasons'
  },
  IndividualExposure: {
    who: 'AccountId',
    ringBalance: 'Compact<Balance>',
    ktonBalance: 'Compact<Balance>',
    power: 'Power'
  },
  LockReasons: {
    _enum: {
      Fee: null,
      Misc: null,
      All: null
    }
  },
  RelayAuthoritySigner: 'EthereumAddress',
  StakingLedgerT: {
    stash: 'AccountId',
    active: 'Compact<Balance>',
    activeDepositRing: 'Compact<Balance>',
    activeKton: 'Compact<Balance>',
    depositItems: 'Vec<TimeDepositItem>',
    ringStakingLock: 'StakingLock',
    ktonStakingLock: 'StakingLock',
    claimedRewards: 'Vec<EraIndex>'
  }
};

const definitions = {
  balances,
  bridges,
  bsc,
  darwiniaInject,
  headerMMR,
  proxy,
  relayerGame,
  staking
};

export const types: RegistryTypes = {
  ...typesFromDefinitions(definitions)
};

export const jsonrpc = jsonrpcFromDefinitions(definitions);

// NOTE: The mapping is done from specName in state.getRuntimeVersion
function getBundleFromSpecName (specName: string, isPolkadotCompatible?: boolean): OverrideBundleDefinition {
  return {
    alias: {},
    rpc: jsonrpc,
    types: [...typesSpec[specName]].map(
      (version): OverrideVersionedType => {
        return {
          minmax: version.minmax,
          // eslint-disable-next-line
          // @ts-ignore
          types: {
            ...types,
            ...version.types,
            ...(isPolkadotCompatible ? polkadotCompatibleTypes : [])
          }
        };
      }
    )
  };
}

export const typesBundleForPolkadotApps: SpecOverrideBundleDefinition = {
  spec: {
    Crab: getBundleFromSpecName('Crab', true),
    Darwinia: getBundleFromSpecName('Darwinia', true),
    Pangolin: getBundleFromSpecName('Pangolin', true),
    Pangoro: getBundleFromSpecName('Pangolin', true)
  }
};

// Compatible with the old version
export const typesBundleForPolkadot: CompatibleSpecOverrideBundleDefinition = {
  spec: {
    crab: getBundleFromSpecName('Crab', true),
    darwinia: getBundleFromSpecName('Darwinia', true),
    pangolin: getBundleFromSpecName('Pangolin', true),
    pangoro: getBundleFromSpecName('Pangolin', true)
  }
};

export const typesBundle: SpecOverrideBundleDefinition = {
  spec: {
    Crab: getBundleFromSpecName('Crab', false),
    Darwinia: getBundleFromSpecName('Darwinia', false),
    Pangolin: getBundleFromSpecName('Pangolin', false),
    Pangoro: getBundleFromSpecName('Pangolin', false)
  }
};
