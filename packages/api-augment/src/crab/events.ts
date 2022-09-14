// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U256, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256, Permill } from '@polkadot/types/interfaces/runtime';
import type { BpMessagesDeliveredMessages, CrabRuntimeBridgesMessageCrabParachainCrabToCrabParachainParameter, CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter, CrabRuntimePalletsProxyProxyType, DarwiniaStakingStructsExposure, EthereumLog, EvmCoreErrorExitReason, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, PalletDemocracyVoteThreshold, PalletElectionProviderMultiPhaseElectionCompute, PalletFeeMarketS2sPaymentRewardItem, PalletFeeMarketSlashReport, PalletImOnlineSr25519AppSr25519Public, PalletMultisigTimepoint, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError, SpRuntimeTransactionValidityTransactionValidityError } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128, reserved: u128], { who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Some amount was deposited into the account (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    baseFee: {
      BaseFeeOverflow: AugmentedEvent<ApiType, []>;
      IsActive: AugmentedEvent<ApiType, [bool]>;
      NewBaseFeePerGas: AugmentedEvent<ApiType, [U256]>;
      NewElasticity: AugmentedEvent<ApiType, [Permill]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridgeCrabParachainDispatch: {
      /**
       * Phantom member, never used. Needed to handle multiple pallet instances.
       **/
      _Dummy: AugmentedEvent<ApiType, []>;
      /**
       * We have failed to decode Call from the message.
       **/
      MessageCallDecodeFailed: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>]>;
      /**
       * The call from the message has been rejected by the call validator.
       **/
      MessageCallValidateFailed: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, SpRuntimeTransactionValidityTransactionValidityError]>;
      /**
       * Message has been dispatched with given result.
       **/
      MessageDispatched: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * The origin account has failed to pay fee for dispatching the message.
       **/
      MessageDispatchPaymentFailed: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, AccountId32, u64]>;
      /**
       * Message has been rejected before reaching dispatch.
       **/
      MessageRejected: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>]>;
      /**
       * Message signature mismatch.
       **/
      MessageSignatureMismatch: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>]>;
      /**
       * Message has been rejected by dispatcher because of spec version mismatch.
       * Last two arguments are: expected and passed spec version.
       **/
      MessageVersionSpecMismatch: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, u32, u32]>;
      /**
       * Message has been rejected by dispatcher because of weight mismatch.
       * Last two arguments are: expected and passed call weight.
       **/
      MessageWeightMismatch: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, u64, u64]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridgeCrabParachainMessages: {
      /**
       * Message has been accepted and is waiting to be delivered.
       **/
      MessageAccepted: AugmentedEvent<ApiType, [U8aFixed, u64]>;
      /**
       * Messages in the inclusive range have been delivered to the bridged chain.
       **/
      MessagesDelivered: AugmentedEvent<ApiType, [U8aFixed, BpMessagesDeliveredMessages]>;
      /**
       * Pallet parameter has been updated.
       **/
      ParameterUpdated: AugmentedEvent<ApiType, [CrabRuntimeBridgesMessageCrabParachainCrabToCrabParachainParameter]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridgeDarwiniaDispatch: {
      /**
       * Phantom member, never used. Needed to handle multiple pallet instances.
       **/
      _Dummy: AugmentedEvent<ApiType, []>;
      /**
       * We have failed to decode Call from the message.
       **/
      MessageCallDecodeFailed: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>]>;
      /**
       * The call from the message has been rejected by the call validator.
       **/
      MessageCallValidateFailed: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, SpRuntimeTransactionValidityTransactionValidityError]>;
      /**
       * Message has been dispatched with given result.
       **/
      MessageDispatched: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * The origin account has failed to pay fee for dispatching the message.
       **/
      MessageDispatchPaymentFailed: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, AccountId32, u64]>;
      /**
       * Message has been rejected before reaching dispatch.
       **/
      MessageRejected: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>]>;
      /**
       * Message signature mismatch.
       **/
      MessageSignatureMismatch: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>]>;
      /**
       * Message has been rejected by dispatcher because of spec version mismatch.
       * Last two arguments are: expected and passed spec version.
       **/
      MessageVersionSpecMismatch: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, u32, u32]>;
      /**
       * Message has been rejected by dispatcher because of weight mismatch.
       * Last two arguments are: expected and passed call weight.
       **/
      MessageWeightMismatch: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>, u64, u64]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridgeDarwiniaMessages: {
      /**
       * Message has been accepted and is waiting to be delivered.
       **/
      MessageAccepted: AugmentedEvent<ApiType, [U8aFixed, u64]>;
      /**
       * Messages in the inclusive range have been delivered to the bridged chain.
       **/
      MessagesDelivered: AugmentedEvent<ApiType, [U8aFixed, BpMessagesDeliveredMessages]>;
      /**
       * Pallet parameter has been updated.
       **/
      ParameterUpdated: AugmentedEvent<ApiType, [CrabRuntimeBridgesMessageDarwiniaCrabToDarwiniaMessagesParameter]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    crabParachainFeeMarket: {
      /**
       * Relayer cancel enrollment. \[account_id\]
       **/
      CancelEnrollment: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Relayer enrollment. \[account_id, locked_collateral, relay_fee\]
       **/
      Enroll: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Slash report
       **/
      FeeMarketSlash: AugmentedEvent<ApiType, [PalletFeeMarketSlashReport]>;
      /**
       * Create new order. \[lane_id, message_nonce, order_fee, assigned_relayers,
       * out_of_slots_time\]
       **/
      OrderCreated: AugmentedEvent<ApiType, [U8aFixed, u64, u128, Vec<AccountId32>, Option<u32>]>;
      /**
       * Reward distribute of the order. \[lane_id, message_nonce, rewards\]
       **/
      OrderReward: AugmentedEvent<ApiType, [U8aFixed, u64, PalletFeeMarketS2sPaymentRewardItem]>;
      /**
       * Update market assigned relayers numbers. \[new_assigned_relayers_number\]
       **/
      UpdateAssignedRelayersNumber: AugmentedEvent<ApiType, [u32]>;
      /**
       * Update collateral slash protect value. \[slash_protect_value\]
       **/
      UpdateCollateralSlashProtect: AugmentedEvent<ApiType, [u128]>;
      /**
       * Update relayer locked collateral. \[account_id, new_collateral\]
       **/
      UpdateLockedCollateral: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Update relayer fee. \[account_id, new_fee\]
       **/
      UpdateRelayFee: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    darwiniaFeeMarket: {
      /**
       * Relayer cancel enrollment. \[account_id\]
       **/
      CancelEnrollment: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Relayer enrollment. \[account_id, locked_collateral, relay_fee\]
       **/
      Enroll: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Slash report
       **/
      FeeMarketSlash: AugmentedEvent<ApiType, [PalletFeeMarketSlashReport]>;
      /**
       * Create new order. \[lane_id, message_nonce, order_fee, assigned_relayers,
       * out_of_slots_time\]
       **/
      OrderCreated: AugmentedEvent<ApiType, [U8aFixed, u64, u128, Vec<AccountId32>, Option<u32>]>;
      /**
       * Reward distribute of the order. \[lane_id, message_nonce, rewards\]
       **/
      OrderReward: AugmentedEvent<ApiType, [U8aFixed, u64, PalletFeeMarketS2sPaymentRewardItem]>;
      /**
       * Update market assigned relayers numbers. \[new_assigned_relayers_number\]
       **/
      UpdateAssignedRelayersNumber: AugmentedEvent<ApiType, [u32]>;
      /**
       * Update collateral slash protect value. \[slash_protect_value\]
       **/
      UpdateCollateralSlashProtect: AugmentedEvent<ApiType, [u128]>;
      /**
       * Update relayer locked collateral. \[account_id, new_collateral\]
       **/
      UpdateLockedCollateral: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Update relayer fee. \[account_id, new_fee\]
       **/
      UpdateRelayFee: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * A proposal has been enacted.
       **/
      Executed: AugmentedEvent<ApiType, [refIndex: u32, result: Result<Null, SpRuntimeDispatchError>], { refIndex: u32, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       **/
      PreimageInvalid: AugmentedEvent<ApiType, [proposalHash: H256, refIndex: u32], { proposalHash: H256, refIndex: u32 }>;
      /**
       * A proposal could not be executed because its preimage was missing.
       **/
      PreimageMissing: AugmentedEvent<ApiType, [proposalHash: H256, refIndex: u32], { proposalHash: H256, refIndex: u32 }>;
      /**
       * A proposal's preimage was noted, and the deposit taken.
       **/
      PreimageNoted: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32, deposit: u128], { proposalHash: H256, who: AccountId32, deposit: u128 }>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       **/
      PreimageReaped: AugmentedEvent<ApiType, [proposalHash: H256, provider: AccountId32, deposit: u128, reaper: AccountId32], { proposalHash: H256, provider: AccountId32, deposit: u128, reaper: AccountId32 }>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       **/
      PreimageUsed: AugmentedEvent<ApiType, [proposalHash: H256, provider: AccountId32, deposit: u128], { proposalHash: H256, provider: AccountId32, deposit: u128 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128, depositors: Vec<AccountId32>], { proposalIndex: u32, deposit: u128, depositors: Vec<AccountId32> }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u32], { who: AccountId32, proposalHash: H256, until: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * The election has been finalized, with `Some` of the given computation, or else if the
       * election failed, `None`.
       **/
      ElectionFinalized: AugmentedEvent<ApiType, [electionCompute: Option<PalletElectionProviderMultiPhaseElectionCompute>], { electionCompute: Option<PalletElectionProviderMultiPhaseElectionCompute> }>;
      /**
       * An account has been rewarded for their signed submission being finalized.
       **/
      Rewarded: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * The signed phase of the given round has started.
       **/
      SignedPhaseStarted: AugmentedEvent<ApiType, [round: u32], { round: u32 }>;
      /**
       * An account has been slashed for submitting an invalid signed submission.
       **/
      Slashed: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * A solution was stored with the given compute.
       * 
       * If the solution is signed, this means that it hasn't yet been processed. If the
       * solution is unsigned, this means that it has also been processed.
       * 
       * The `bool` is `true` when a previous solution was ejected to make room for this one.
       **/
      SolutionStored: AugmentedEvent<ApiType, [electionCompute: PalletElectionProviderMultiPhaseElectionCompute, prevEjected: bool], { electionCompute: PalletElectionProviderMultiPhaseElectionCompute, prevEjected: bool }>;
      /**
       * The unsigned phase of the given round has started.
       **/
      UnsignedPhaseStarted: AugmentedEvent<ApiType, [round: u32], { round: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ethereum: {
      /**
       * DVM transfer.
       **/
      DVMTransfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: U256], { from: AccountId32, to: AccountId32, amount: U256 }>;
      /**
       * An ethereum transaction was successfully executed.
       **/
      Executed: AugmentedEvent<ApiType, [from: H160, to: H160, transactionHash: H256, exitReason: EvmCoreErrorExitReason], { from: H160, to: H160, transactionHash: H256, exitReason: EvmCoreErrorExitReason }>;
      /**
       * Kton transfer.
       **/
      KtonDVMTransfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: U256], { from: AccountId32, to: AccountId32, amount: U256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evm: {
      /**
       * A contract has been created at given.
       **/
      Created: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract was attempted to be created, but the execution failed.
       **/
      CreatedFailed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract has been executed successfully with states applied.
       **/
      Executed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract has been executed with errors. States are reverted with only gas fees
       * applied.
       **/
      ExecutedFailed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * Ethereum events from contracts.
       **/
      Log: AugmentedEvent<ApiType, [log: EthereumLog], { log: EthereumLog }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    fromDarwiniaIssuing: {
      /**
       * Set mapping token factory address
       * [old, new]
       **/
      MappingFactoryAddressUpdated: AugmentedEvent<ApiType, [H160, H160]>;
      /**
       * Update remote backing address \[account\]
       **/
      RemoteBackingAccountUpdated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Redeem Token
       * [backing_address, mapping_token, recipient, amount]
       **/
      TokenIssued: AugmentedEvent<ApiType, [H160, H160, H160, U256]>;
      /**
       * Create new token
       * [user, backing_address, original_token, mapping_token]
       **/
      TokenRegistered: AugmentedEvent<ApiType, [AccountId32, H160, H160, H160]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`.
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [authorityId: PalletImOnlineSr25519AppSr25519Public], { authorityId: PalletImOnlineSr25519AppSr25519Public }>;
      /**
       * At the end of the session, at least one validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<ApiType, [offline: Vec<ITuple<[AccountId32, DarwiniaStakingStructsExposure]>>], { offline: Vec<ITuple<[AccountId32, DarwiniaStakingStructsExposure]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A account index was assigned.
       **/
      IndexAssigned: AugmentedEvent<ApiType, [who: AccountId32, index: u32], { who: AccountId32, index: u32 }>;
      /**
       * A account index has been freed up (unassigned).
       **/
      IndexFreed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A account index has been frozen to its current account ID.
       **/
      IndexFrozen: AugmentedEvent<ApiType, [index: u32, who: AccountId32], { index: u32, who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    kton: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128, reserved: u128], { who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Some amount was deposited into the account (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ktonTreasury: {
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      Awarded: AugmentedEvent<ApiType, [u32, u128, AccountId32]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      Burnt: AugmentedEvent<ApiType, [u128]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [u128]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      Proposed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      Rejected: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      Rollover: AugmentedEvent<ApiType, [u128]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      Spending: AugmentedEvent<ApiType, [u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [kind: U8aFixed, timeslot: Bytes], { kind: U8aFixed, timeslot: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    phragmenElection: {
      /**
       * A candidate was slashed by amount due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128], { candidate: AccountId32, amount: u128 }>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A member has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A new term with new_members. This indicates that enough candidates existed to run
       * the election, not that enough have has been elected. The inner value must be examined
       * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
       * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
       * begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [newMembers: Vec<ITuple<[AccountId32, u128]>>], { newMembers: Vec<ITuple<[AccountId32, u128]>> }>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A seat holder was slashed by amount by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [seatHolder: AccountId32, amount: u128], { seatHolder: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [anonymous: AccountId32, who: AccountId32, proxyType: CrabRuntimePalletsProxyProxyType, disambiguationIndex: u16], { anonymous: AccountId32, who: AccountId32, proxyType: CrabRuntimePalletsProxyProxyType, disambiguationIndex: u16 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: CrabRuntimePalletsProxyProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: CrabRuntimePalletsProxyProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    recovery: {
      /**
       * Lost account has been successfully recovered by rescuer account.
       **/
      AccountRecovered: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process for lost account by rescuer account has been closed.
       **/
      RecoveryClosed: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process has been set up for an account.
       **/
      RecoveryCreated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A recovery process has been initiated for lost account by rescuer account.
       **/
      RecoveryInitiated: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process has been removed for an account.
       **/
      RecoveryRemoved: AugmentedEvent<ApiType, [lostAccount: AccountId32], { lostAccount: AccountId32 }>;
      /**
       * A recovery process for lost account by rescuer account has been vouched for by sender.
       **/
      RecoveryVouched: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32, sender: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32, sender: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [ITuple<[u32, u32]>, Option<Bytes>, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    society: {
      /**
       * A \[candidate\] was dropped (due to an excess of bids in the system).
       **/
      AutoUnbid: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A membership bid just happened. The given account is the candidate's ID and their offer
       * is the second. \[candidate_id, offer\]
       **/
      Bid: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A \[candidate\] has been suspended
       **/
      CandidateSuspended: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A \[member\] has been challenged
       **/
      Challenged: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A vote has been placed for a defending member \[voter, vote\]
       **/
      DefenderVote: AugmentedEvent<ApiType, [AccountId32, bool]>;
      /**
       * Some funds were deposited into the society account. \[value\]
       **/
      Deposit: AugmentedEvent<ApiType, [u128]>;
      /**
       * The society is founded by the given identity. \[founder\]
       **/
      Founded: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A group of candidates have been inducted. The batch's primary is the first value, the
       * batch in full is the second. \[primary, candidates\]
       **/
      Inducted: AugmentedEvent<ApiType, [AccountId32, Vec<AccountId32>]>;
      /**
       * A \[member\] has been suspended
       **/
      MemberSuspended: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new \[max\] member count has been set
       **/
      NewMaxMembers: AugmentedEvent<ApiType, [u32]>;
      /**
       * A suspended member has been judged. \[who, judged\]
       **/
      SuspendedMemberJudgement: AugmentedEvent<ApiType, [AccountId32, bool]>;
      /**
       * A \[candidate\] was dropped (by their request).
       **/
      Unbid: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Society is unfounded. \[founder\]
       **/
      Unfounded: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A \[candidate\] was dropped (by request of who vouched for them).
       **/
      Unvouch: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A vote has been placed \[candidate, voter, vote\]
       **/
      Vote: AugmentedEvent<ApiType, [AccountId32, AccountId32, bool]>;
      /**
       * A membership bid just happened by vouching. The given account is the candidate's ID and
       * their offer is the second. The vouching party is the third. \[candidate_id, offer,
       * vouching\]
       **/
      Vouch: AugmentedEvent<ApiType, [AccountId32, u128, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    staking: {
      /**
       * An account has stopped participating as either a validator or nominator.
       * \[stash\]
       **/
      Chilled: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Someone claimed his deposits. \[stash\]
       **/
      DepositsClaimed: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Someone claimed his deposits with some *KTON*s punishment. \[stash, forfeit\]
       **/
      DepositsClaimedWithPunish: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * \[era_index, validator_payout, remainder\]
       **/
      EraPaid: AugmentedEvent<ApiType, [u32, u128, u128]>;
      /**
       * A nominator has been kicked from a validator. \[nominator, stash\]
       **/
      Kicked: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * An account has bonded this amount. \[account, amount, start, end\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      KtonBonded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account has unbonded this amount. \[account, amount\]
       **/
      KtonUnbonded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. \[session_index\]
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [u32]>;
      /**
       * The stakers' rewards are getting paid. \[era_index, validator_stash\]
       **/
      PayoutStarted: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * The nominator has been rewarded by this amount. \[stash, amount\]
       **/
      Rewarded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account has bonded this amount. \[amount, start, end\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      RingBonded: AugmentedEvent<ApiType, [AccountId32, u128, u64, u64]>;
      /**
       * An account has unbonded this amount. \[amount\]
       **/
      RingUnbonded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * \[validator, amount, amount\]
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * A new set of stakers was elected.
       **/
      StakersElected: AugmentedEvent<ApiType, []>;
      /**
       * The election failed. No new era is planned.
       **/
      StakingElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * On on-chain remark happened. \[origin, remark_hash\]
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tips: {
      /**
       * A new tip suggestion has been opened.
       **/
      NewTip: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been closed.
       **/
      TipClosed: AugmentedEvent<ApiType, [tipHash: H256, who: AccountId32, payout: u128], { tipHash: H256, who: AccountId32, payout: u128 }>;
      /**
       * A tip suggestion has reached threshold and is closing.
       **/
      TipClosing: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been retracted.
       **/
      TipRetracted: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been slashed.
       **/
      TipSlashed: AugmentedEvent<ApiType, [tipHash: H256, finder: AccountId32, deposit: u128], { tipHash: H256, finder: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    toCrabParachainBacking: {
      /**
       * Update remote mapping token factory address \[account\]
       **/
      RemoteMappingFactoryAddressUpdated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Token locked \[lane_id, message_nonce, token address, sender, recipient, amount\]
       **/
      TokenLocked: AugmentedEvent<ApiType, [U8aFixed, u64, AccountId32, AccountId32, u128]>;
      /**
       * Token locked confirmed from remote \[lane_id, message_nonce, user, amount, result\]
       **/
      TokenLockedConfirmed: AugmentedEvent<ApiType, [U8aFixed, u64, AccountId32, u128, bool]>;
      /**
       * Token unlocked \[lane_id, message_nonce, recipient, amount\]
       **/
      TokenUnlocked: AugmentedEvent<ApiType, [U8aFixed, u64, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      Awarded: AugmentedEvent<ApiType, [u32, u128, AccountId32]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      Burnt: AugmentedEvent<ApiType, [u128]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [u128]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      Proposed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      Rejected: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      Rollover: AugmentedEvent<ApiType, [u128]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      Spending: AugmentedEvent<ApiType, [u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched. \[result\]
       **/
      DispatchedAs: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * The amount vested has been updated. This could indicate a change in funds available.
       * The balance given is the amount which is left unvested (and thus locked).
       **/
      VestingUpdated: AugmentedEvent<ApiType, [account: AccountId32, unvested: u128], { account: AccountId32, unvested: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
