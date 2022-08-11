// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    authorship: {
      /**
       * The uncle is genesis.
       **/
      GenesisUncle: AugmentedError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      InvalidUncleParent: AugmentedError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      OldUncle: AugmentedError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      TooHighUncle: AugmentedError<ApiType>;
      /**
       * Too many uncles.
       **/
      TooManyUncles: AugmentedError<ApiType>;
      /**
       * The uncle is already included.
       **/
      UncleAlreadyIncluded: AugmentedError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      UnclesAlreadySet: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    babe: {
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Lock - POISONED.
       **/
      LockP: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bridgePangolinGrandpa: {
      /**
       * The pallet has already been initialized.
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * All pallet operations are halted.
       **/
      Halted: AugmentedError<ApiType>;
      /**
       * The authority set from the underlying header chain is invalid.
       **/
      InvalidAuthoritySet: AugmentedError<ApiType>;
      /**
       * The given justification is invalid for the given header.
       **/
      InvalidJustification: AugmentedError<ApiType>;
      /**
       * The pallet is not yet initialized.
       **/
      NotInitialized: AugmentedError<ApiType>;
      /**
       * The header being imported is older than the best finalized header known to the pallet.
       **/
      OldHeader: AugmentedError<ApiType>;
      /**
       * The storage proof doesn't contains storage root. So it is invalid for given header.
       **/
      StorageRootMismatch: AugmentedError<ApiType>;
      /**
       * There are too many requests for the current window to handle.
       **/
      TooManyRequests: AugmentedError<ApiType>;
      /**
       * The header is unknown to the pallet.
       **/
      UnknownHeader: AugmentedError<ApiType>;
      /**
       * The scheduled authority set change found in the header is unsupported by the pallet.
       * 
       * This is the case for non-standard (e.g forced) authority set changes.
       **/
      UnsupportedScheduledChange: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bridgePangolinMessages: {
      /**
       * Submitter has failed to pay fee for delivering and dispatching messages.
       **/
      FailedToWithdrawMessageFee: AugmentedError<ApiType>;
      /**
       * All pallet operations are halted.
       **/
      Halted: AugmentedError<ApiType>;
      /**
       * Invalid messages delivery proof has been submitted.
       **/
      InvalidMessagesDeliveryProof: AugmentedError<ApiType>;
      /**
       * Invalid messages has been submitted.
       **/
      InvalidMessagesProof: AugmentedError<ApiType>;
      /**
       * The bridged chain has invalid `UnrewardedRelayers` in its storage (fatal for the lane).
       **/
      InvalidUnrewardedRelayers: AugmentedError<ApiType>;
      /**
       * The relayer has declared invalid unrewarded relayers state in the
       * `receive_messages_delivery_proof` call.
       **/
      InvalidUnrewardedRelayersState: AugmentedError<ApiType>;
      /**
       * The message someone is trying to work with (i.e. increase fee) is already-delivered.
       **/
      MessageIsAlreadyDelivered: AugmentedError<ApiType>;
      /**
       * The message someone is trying to work with (i.e. increase fee) is not yet sent.
       **/
      MessageIsNotYetSent: AugmentedError<ApiType>;
      /**
       * Message has been treated as invalid by chain verifier.
       **/
      MessageRejectedByChainVerifier: AugmentedError<ApiType>;
      /**
       * Message has been treated as invalid by lane verifier.
       **/
      MessageRejectedByLaneVerifier: AugmentedError<ApiType>;
      /**
       * The transaction brings too many messages.
       **/
      TooManyMessagesInTheProof: AugmentedError<ApiType>;
      /**
       * The number of actually confirmed messages is going to be larger than the number of
       * messages in the proof. This may mean that this or bridged chain storage is corrupted.
       **/
      TryingToConfirmMoreMessagesThanExpected: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ecdsaAuthority: {
      /**
       * This authority had already finished his duty.
       **/
      AlreadySubmitted: AugmentedError<ApiType>;
      /**
       * Require at least one authority. Not allow to decrease below one.
       **/
      AtLeastOneAuthority: AugmentedError<ApiType>;
      /**
       * The authority is already existed.
       **/
      AuthorityExisted: AugmentedError<ApiType>;
      /**
       * Failed to verify the signature.
       **/
      BadSignature: AugmentedError<ApiType>;
      /**
       * Didn't find any authorities changes to sign.
       **/
      NoAuthoritiesChange: AugmentedError<ApiType>;
      /**
       * Didn't find any new message root to sign.
       **/
      NoNewMessageRoot: AugmentedError<ApiType>;
      /**
       * This is not an authority.
       **/
      NotAuthority: AugmentedError<ApiType>;
      /**
       * Currently, the authorities is changing.
       **/
      OnAuthoritiesChange: AugmentedError<ApiType>;
      /**
       * Too many authorities.
       **/
      TooManyAuthorities: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * The call is not allowed at this point.
       **/
      CallNotAllowed: AugmentedError<ApiType>;
      /**
       * `Self::insert_submission` returned an invalid index.
       **/
      InvalidSubmissionIndex: AugmentedError<ApiType>;
      /**
       * Snapshot metadata should exist but didn't.
       **/
      MissingSnapshotMetadata: AugmentedError<ApiType>;
      /**
       * OCW submitted solution for wrong round
       **/
      OcwCallWrongEra: AugmentedError<ApiType>;
      /**
       * Submission was too early.
       **/
      PreDispatchEarlySubmission: AugmentedError<ApiType>;
      /**
       * Submission was too weak, score-wise.
       **/
      PreDispatchWeakSubmission: AugmentedError<ApiType>;
      /**
       * Wrong number of winners presented.
       **/
      PreDispatchWrongWinnerCount: AugmentedError<ApiType>;
      /**
       * The origin failed to pay the deposit.
       **/
      SignedCannotPayDeposit: AugmentedError<ApiType>;
      /**
       * Witness data to dispatchable is invalid.
       **/
      SignedInvalidWitness: AugmentedError<ApiType>;
      /**
       * The queue was full, and the solution was not better than any of the existing ones.
       **/
      SignedQueueFull: AugmentedError<ApiType>;
      /**
       * The signed submission consumes too much weight
       **/
      SignedTooMuchWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ethereum: {
      /**
       * The internal transaction failed.
       **/
      InternalTransactionExitError: AugmentedError<ApiType>;
      InternalTransactionFatalError: AugmentedError<ApiType>;
      InternalTransactionRevertError: AugmentedError<ApiType>;
      /**
       * Signature is invalid.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Message transaction invalid
       **/
      MessageTransactionError: AugmentedError<ApiType>;
      /**
       * Message validate invalid
       **/
      MessageValidateError: AugmentedError<ApiType>;
      /**
       * Pre-log is present, therefore transact is not allowed.
       **/
      PreLogExists: AugmentedError<ApiType>;
      /**
       * The internal call failed.
       **/
      ReadyOnlyCall: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    evm: {
      /**
       * Not enough balance to perform action
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * Calculating total fee overflowed
       **/
      FeeOverflow: AugmentedError<ApiType>;
      /**
       * Gas price is too low.
       **/
      GasPriceTooLow: AugmentedError<ApiType>;
      /**
       * Nonce is invalid
       **/
      InvalidNonce: AugmentedError<ApiType>;
      /**
       * Calculating total payment overflowed
       **/
      PaymentOverflow: AugmentedError<ApiType>;
      /**
       * Withdraw fee failed
       **/
      WithdrawFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    imOnline: {
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    kton: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Lock - POISONED.
       **/
      LockP: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    pangolinFeeMarket: {
      /**
       * The relayer has been enrolled.
       **/
      AlreadyEnrolled: AugmentedError<ApiType>;
      /**
       * Locked collateral is too low to cover one order.
       **/
      CollateralTooLow: AugmentedError<ApiType>;
      /**
       * Insufficient balance.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * This relayer doesn't enroll ever.
       **/
      NotEnrolled: AugmentedError<ApiType>;
      /**
       * The relayer is occupied, and can't cancel enrollment now.
       **/
      OccupiedRelayer: AugmentedError<ApiType>;
      /**
       * The fee is lower than MinimumRelayFee.
       **/
      RelayFeeTooLow: AugmentedError<ApiType>;
      /**
       * Update locked collateral is not allow since some orders are not confirm.
       **/
      StillHasOrdersNotConfirmed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    staking: {
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Controller is already paired.
       **/
      AlreadyPaired: AugmentedError<ApiType>;
      /**
       * Internal state has become somehow corrupted and the operation cannot continue.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * A nomination target was supplied that was blocked or otherwise not a validator.
       **/
      BadTarget: AugmentedError<ApiType>;
      /**
       * The user has enough bond and thus cannot be chilled forcefully by an external person.
       **/
      CannotChillOther: AugmentedError<ApiType>;
      /**
       * Duplicate index.
       **/
      DuplicateIndex: AugmentedError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      EmptyTargets: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      IncorrectSlashingSpans: AugmentedError<ApiType>;
      /**
       * Can not bond with value less than minimum required.
       **/
      InsufficientBond: AugmentedError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      InvalidEraToReward: AugmentedError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      InvalidNumberOfNominations: AugmentedError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      InvalidSlashIndex: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      NotSortedAndUnique: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedError<ApiType>;
      /**
       * Payout - INSUFFICIENT
       **/
      PayoutIns: AugmentedError<ApiType>;
      /**
       * There are too many nominators in the system. Governance needs to adjust the staking
       * settings to keep things safe for the runtime.
       **/
      TooManyNominators: AugmentedError<ApiType>;
      /**
       * Too many nomination targets supplied.
       **/
      TooManyTargets: AugmentedError<ApiType>;
      /**
       * There are too many validators in the system. Governance needs to adjust the staking
       * settings to keep things safe for the runtime.
       **/
      TooManyValidators: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    substrate2SubstrateBacking: {
      /**
       * Insufficient balance.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Invalid recipient
       **/
      InvalidRecipient: AugmentedError<ApiType>;
      /**
       * Message nonce duplicated.
       **/
      NonceDuplicated: AugmentedError<ApiType>;
      /**
       * Redeem Daily Limited
       **/
      RingDailyLimited: AugmentedError<ApiType>;
      /**
       * Ring Lock LIMITED.
       **/
      RingLockLimited: AugmentedError<ApiType>;
      /**
       * Unsupported token
       **/
      UnsupportedToken: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    transactionPause: {
      /**
       * can not pause
       **/
      CannotPause: AugmentedError<ApiType>;
      /**
       * invalid character encoding
       **/
      InvalidCharacter: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
