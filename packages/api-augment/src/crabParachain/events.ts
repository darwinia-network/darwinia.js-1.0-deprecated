// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';
import type { Null, Option, Result, U8aFixed, Vec, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { BpMessagesDeliveredMessages, CrabParachainRuntimeBridgesMessageCrabCrabParachainToCrabParameter, CrabParachainRuntimePalletsProxyProxyType, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, PalletFeeMarketSlashReport, PalletMultisigTimepoint, SpRuntimeDispatchError, XcmV1MultiLocation, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation } from '@polkadot/types/lookup';

declare module '@polkadot/api-base/types/events' {
  export interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridgeCrabDispatch: {
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
    bridgeCrabMessages: {
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
      ParameterUpdated: AugmentedEvent<ApiType, [CrabParachainRuntimeBridgesMessageCrabCrabParachainToCrabParameter]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    collatorSelection: {
      CandidateAdded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      CandidateRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      NewCandidacyBond: AugmentedEvent<ApiType, [u128]>;
      NewDesiredCandidates: AugmentedEvent<ApiType, [u32]>;
      NewInvulnerables: AugmentedEvent<ApiType, [Vec<AccountId32>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    crabFeeMarket: {
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
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV2TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dmpQueue: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV2TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is overweight and was placed in the overweight queue.
       * \[ id, index, required \]
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [U8aFixed, u64, u64]>;
      /**
       * Downward message from the overweight queue was executed.
       * \[ index, used \]
       **/
      OverweightServiced: AugmentedEvent<ApiType, [u64, u64]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * The weight limit for handling downward messages was reached.
       * \[ id, remaining, required \]
       **/
      WeightExhausted: AugmentedEvent<ApiType, [U8aFixed, u64, u64]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [AccountId32, AccountId32, U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       * \[ weight_used, result_mqc_head \]
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [u64, H256]>;
      /**
       * Some downward messages have been received and will be processed.
       * \[ count \]
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [u32]>;
      /**
       * An upgrade has been authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [H256]>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [u32]>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been placed in an asset trap.
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Execution of an XCM message was attempted.
       * 
       * \[ outcome \]
       **/
      Attempted: AugmentedEvent<ApiType, [XcmV2TraitsOutcome]>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected location \]
       **/
      InvalidResponder: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       * 
       * \[ id, pallet index, call index \]
       **/
      Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The registered notification could
       * not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       * 
       * \[ id, pallet index, call index, actual weight, max budgeted weight \]
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, u64, u64]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       * 
       * \[ location, query ID \]
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       * 
       * \[ location, query ID, error \]
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, XcmV2TraitsError]>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       * 
       * \[ id, response \]
       **/
      ResponseReady: AugmentedEvent<ApiType, [u64, XcmV2Response]>;
      /**
       * Received query response has been read and removed.
       * 
       * \[ id \]
       **/
      ResponseTaken: AugmentedEvent<ApiType, [u64]>;
      /**
       * A XCM message was sent.
       * 
       * \[ origin, destination, message \]
       **/
      Sent: AugmentedEvent<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       * 
       * \[ location, XCM version \]
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       * 
       * \[ origin location, id \]
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * \[ destination, result \]
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [AccountId32, AccountId32, H256]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [AccountId32, AccountId32, CrabParachainRuntimePalletsProxyProxyType, u16]>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [AccountId32, AccountId32, CrabParachainRuntimePalletsProxyProxyType, u32]>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
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
      NewSession: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [Option<AccountId32>]>;
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
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
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
      BatchInterrupted: AugmentedEvent<ApiType, [u32, SpRuntimeDispatchError]>;
      /**
       * A call was dispatched.
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
    xcmpQueue: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [Option<H256>]>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [Option<H256>]>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [Option<H256>, XcmV2TraitsError]>;
      /**
       * An XCM exceeded the individual message weight budget.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [u32, u32, u64, u64]>;
      /**
       * An XCM from the overweight queue was executed with the given actual weight used.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [u64, u64]>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [Option<H256>]>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [Option<H256>]>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [Option<H256>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
