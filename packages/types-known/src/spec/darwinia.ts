// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = { };

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 22],
    types: {
      ...sharedTypes
    }
  },
  {
    minmax: [23, 24],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithTripleRefCount',
      AccountInfoWithTripleRefCount: {
        nonce: 'Index',
        consumers: 'RefCount',
        providers: 'RefCount',
        data: 'AccountData'
      }
    }
  },
  {
    minmax: [25, 1150],
    types: {
      ...sharedTypes,
      Address: 'MultiAddress',
      LookupSource: 'MultiAddress',
      MultiAddress: 'GenericMultiAddress',
      AccountData: {
        feeFrozen: 'Balance',
        free: 'Balance',
        reserved: 'Balance',
        freeKton: 'Balance',
        reservedKton: 'Balance',
        miscFrozen: 'Balance'
      },
      BalanceInfo: '{}',
      BalanceLock: {
        id: 'LockIdentifier',
        lockFor: 'LockFor',
        reasons: 'Reasons'
      },
      EcdsaMessage: 'H256',
      EthashProof: {
        dagNodes: '(H512, H512)',
        proof: 'Vec<H128>'
      },
      EthereumReceipt: {
        gasUsed: 'U256',
        logBloom: 'Bloom',
        logs: 'Vec<LogEntry>',
        outcome: 'TransactionOutcome'
      },
      Order: {
        lane: 'LaneId',
        message: 'MessageNonce',
        sent_time: 'BlockNumber',
        confirm_time: 'BlockNumber',
        assigned_relayers: 'Vec<PriorRelayer>'
      },
      RelayAffirmationId: {
        relayHeaderId: 'EthereumBlockNumber',
        round: 'u32',
        index: 'u32'
      },
      RelayAuthorityT: {
        accountId: 'AccountId',
        signer: 'EthereumAddress',
        stake: 'Balance',
        term: 'BlockNumber'
      },
      Term: 'BlockNumber',
      Unbonding: {
        amount: 'Balance',
        moment: 'BlockNumber'
      }
    }
  },
  {
    minmax: [1160, 1200],
    types: {
      ...sharedTypes
    }
  },
  {
    minmax: [1210, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
