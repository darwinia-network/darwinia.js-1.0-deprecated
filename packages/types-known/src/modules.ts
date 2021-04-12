// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideModuleType } from '@polkadot/types/types';

// type overrides for modules (where duplication between modules exist)
const typesModules: Record<string, OverrideModuleType> = {
  assets: {
    Approval: 'AssetApproval',
    ApprovalKey: 'AssetApprovalKey',
    Balance: 'TAssetBalance',
    DestroyWitness: 'AssetDestroyWitness'
  },
  babe: {
    EquivocationProof: 'BabeEquivocationProof'
  },
  balances: {
    Status: 'BalanceStatus'
  },
  contracts: {
    StorageKey: 'ContractStorageKey'
  },
  electionProviderMultiPhase: {
    Phase: 'ElectionPhase'
  },
  ethereum: {
    Block: 'EthBlock',
    Header: 'EthHeader',
    Receipt: 'EthReceipt',
    Transaction: 'EthTransaction',
    TransactionStatus: 'EthTransactionStatus'
  },
  evm: {
    Account: 'EvmAccount',
    Log: 'EvmLog',
    Vicinity: 'EvmVicinity'
  },
  grandpa: {
    Equivocation: 'GrandpaEquivocation',
    EquivocationProof: 'GrandpaEquivocationProof'
  },
  identity: {
    Judgement: 'IdentityJudgement'
  },
  inclusion: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  parachains: {
    Id: 'ParaId'
  },
  parasScheduler: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  proposeParachain: {
    Proposal: 'ParachainProposal'
  },
  proxy: {
    Announcement: 'ProxyAnnouncement'
  },
  scheduler: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  shared: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  society: {
    Judgement: 'SocietyJudgement',
    Vote: 'SocietyVote'
  },
  staking: {
    Compact: 'CompactAssignments'
  },
  treasury: {
    Proposal: 'TreasuryProposal'
  }
};

export default typesModules;
