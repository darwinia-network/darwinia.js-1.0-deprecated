// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
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
    minmax: [25, undefined],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithTripleRefCount',
      AccountInfoWithTripleRefCount: {
        nonce: 'Index',
        consumers: 'RefCount',
        providers: 'RefCount',
        sufficients: 'RefCount',
        data: 'AccountData'
      },
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
  }
];

export default versioned;
