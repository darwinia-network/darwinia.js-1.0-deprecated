// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Judgement: 'IdentityJudgement',
  RewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId'
    }
  },
  Signer: 'EthereumAddress',
  RelayAuthorityT: {
    accountId: 'AccountId',
    signer: 'Signer',
    stake: 'Balance',
    term: 'BlockNumber'
  },
  MMRRoot: 'Hash',
  EcdsaAddress: 'EthereumAddress',
  EcdsaSignature: '[u8; 65; EcdsaSignature]',
  EcdsaMessage: 'H256',
  RelayAuthoritySigner: 'EcdsaAddress',
  RelayAuthorityMessage: 'EcdsaMessage',
  RelayAuthoritySignature: 'EcdsaSignature'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
