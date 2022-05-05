// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BpMessagesDeliveredMessages, PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter } from '@darwinia/types/interfaces/bridges';
import type { DpAssetTokenMetadata, EthereumLog } from '@darwinia/types/interfaces/darwiniaInject';
import type { EvmCoreErrorExitReason } from '@darwinia/types/interfaces/evm';
import type { DarwiniaFeeMarketSlashReport } from '@darwinia/types/interfaces/fee';
import type { DarwiniaStakingStructsExposure } from '@darwinia/types/interfaces/staking';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U256, U8aFixed, Vec, bool, u128, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, PalletElectionProviderMultiPhaseElectionCompute, PalletImOnlineSr25519AppSr25519Public, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';

declare module '@polkadot/api-base/types/events' {
  export interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
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
    bridgePangolinDispatch: {
      /**
       * Phantom member, never used. Needed to handle multiple pallet instances.
       **/
      _Dummy: AugmentedEvent<ApiType, []>;
      /**
       * We have failed to decode Call from the message.
       **/
      MessageCallDecodeFailed: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>]>;
      /**
       * The call from the message has been rejected by the call filter.
       **/
      MessageCallRejected: AugmentedEvent<ApiType, [U8aFixed, ITuple<[U8aFixed, u64]>]>;
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
    bridgePangolinMessages: {
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
      ParameterUpdated: AugmentedEvent<ApiType, [PangoroRuntimeBridgesMessagePangolinPangoroToPangolinMessagesParameter]>;
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
      ElectionFinalized: AugmentedEvent<ApiType, [Option<PalletElectionProviderMultiPhaseElectionCompute>]>;
      /**
       * An account has been rewarded for their signed submission being finalized.
       **/
      Rewarded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * The signed phase of the given round has started.
       **/
      SignedPhaseStarted: AugmentedEvent<ApiType, [u32]>;
      /**
       * An account has been slashed for submitting an invalid signed submission.
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A solution was stored with the given compute.
       * 
       * If the solution is signed, this means that it hasn't yet been processed. If the
       * solution is unsigned, this means that it has also been processed.
       * 
       * The `bool` is `true` when a previous solution was ejected to make room for this one.
       **/
      SolutionStored: AugmentedEvent<ApiType, [PalletElectionProviderMultiPhaseElectionCompute, bool]>;
      /**
       * The unsigned phase of the given round has started.
       **/
      UnsignedPhaseStarted: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ethereum: {
      /**
       * DVM transfer. \[from, to, value\]
       **/
      DVMTransfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, U256]>;
      /**
       * An ethereum transaction was successfully executed. \[from, to/contract_address, transaction_hash, exit_reason\]
       **/
      Executed: AugmentedEvent<ApiType, [H160, H160, H256, EvmCoreErrorExitReason]>;
      /**
       * Kton transfer \[from, to, value\]
       **/
      KtonDVMTransfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, U256]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evm: {
      /**
       * A deposit has been made at a given address. \[sender, address, value\]
       **/
      BalanceDeposit: AugmentedEvent<ApiType, [AccountId32, H160, U256]>;
      /**
       * A withdrawal has been made from a given address. \[sender, address, value\]
       **/
      BalanceWithdraw: AugmentedEvent<ApiType, [AccountId32, H160, U256]>;
      /**
       * A contract has been created at given \[address\].
       **/
      Created: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] was attempted to be created, but the execution failed.
       **/
      CreatedFailed: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] has been executed successfully with states applied.
       **/
      Executed: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
       **/
      ExecutedFailed: AugmentedEvent<ApiType, [H160]>;
      /**
       * Ethereum events from contracts.
       **/
      Log: AugmentedEvent<ApiType, [EthereumLog]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>]>;
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
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [PalletImOnlineSr25519AppSr25519Public]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId32, DarwiniaStakingStructsExposure]>>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    kton: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
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
      Offence: AugmentedEvent<ApiType, [U8aFixed, Bytes]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    pangolinFeeMarket: {
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
      FeeMarketSlash: AugmentedEvent<ApiType, [DarwiniaFeeMarketSlashReport]>;
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
       * New session has happened. Note that the argument is the \[session_index\], not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [u32]>;
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
    substrate2SubstrateBacking: {
      /**
       * Update remote mapping token factory address \[account\]
       **/
      RemoteMappingFactoryAddressUpdated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Token locked \[lane_id, message_nonce, token address, sender, recipient, amount\]
       **/
      TokenLocked: AugmentedEvent<ApiType, [U8aFixed, u64, H160, AccountId32, H160, u128]>;
      /**
       * Token locked confirmed from remote \[lane_id, message_nonce, user, amount, result\]
       **/
      TokenLockedConfirmed: AugmentedEvent<ApiType, [U8aFixed, u64, AccountId32, u128, bool]>;
      /**
       * Token registered \[token metadata, sender\]
       **/
      TokenRegistered: AugmentedEvent<ApiType, [DpAssetTokenMetadata, AccountId32]>;
      /**
       * Token unlocked \[lane_id, message_nonce, token_address, recipient, amount\]
       **/
      TokenUnlocked: AugmentedEvent<ApiType, [U8aFixed, u64, H160, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
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
    transactionPause: {
      /**
       * Paused transaction . \[pallet_name_bytes, function_name_bytes\]
       **/
      TransactionPaused: AugmentedEvent<ApiType, [Bytes, Bytes]>;
      /**
       * Unpaused transaction . \[pallet_name_bytes, function_name_bytes\]
       **/
      TransactionUnpaused: AugmentedEvent<ApiType, [Bytes, Bytes]>;
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
  } // AugmentedEvents
} // declare module
