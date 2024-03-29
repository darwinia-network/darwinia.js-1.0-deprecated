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
    bounties: {
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bridgePangolinParachainMessages: {
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
    bridgePangoroGrandpa: {
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
    bridgePangoroMessages: {
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
    bridgeRococoGrandpa: {
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
    bridgeRococoParachains: {
      /**
       * Failed to extract state root from given parachain head.
       **/
      FailedToExtractStateRoot: AugmentedError<ApiType>;
      /**
       * Invalid storage proof has been passed.
       **/
      InvalidStorageProof: AugmentedError<ApiType>;
      /**
       * The storage proof doesn't contains storage root. So it is invalid for given header.
       **/
      StorageRootMismatch: AugmentedError<ApiType>;
      /**
       * Given parachain head is unknown.
       **/
      UnknownParaHead: AugmentedError<ApiType>;
      /**
       * Relay chain block is unknown to us.
       **/
      UnknownRelayChainBlock: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    council: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Preimage already noted
       **/
      DuplicatePreimage: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Imminent
       **/
      Imminent: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Not imminent
       **/
      NotImminent: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Invalid preimage
       **/
      PreimageInvalid: AugmentedError<ApiType>;
      /**
       * Preimage not found
       **/
      PreimageMissing: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Too early
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
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
    ecdsaRelayAuthority: {
      /**
       * Authorities Count - TOO LOW
       **/
      AuthoritiesCountTL: AugmentedError<ApiType>;
      /**
       * Authorities - MISMATCHED
       **/
      AuthoritiesMis: AugmentedError<ApiType>;
      /**
       * Authority - ALREADY EXISTED
       **/
      AuthorityAE: AugmentedError<ApiType>;
      /**
       * Authority - IN TERM
       **/
      AuthorityIT: AugmentedError<ApiType>;
      /**
       * Authority - NOT EXISTED
       **/
      AuthorityNE: AugmentedError<ApiType>;
      /**
       * Candidate - ALREADY EXISTED
       **/
      CandidateAE: AugmentedError<ApiType>;
      /**
       * Candidate - NOT EXISTED
       **/
      CandidateNE: AugmentedError<ApiType>;
      /**
       * Next Authorities - NOT EXISTED
       **/
      NextAuthoritiesNE: AugmentedError<ApiType>;
      /**
       * On Authorities Change - DISABLED
       **/
      OnAuthoritiesChangeDis: AugmentedError<ApiType>;
      /**
       * Scheduled Sign -NOT EXISTED
       **/
      ScheduledSignNE: AugmentedError<ApiType>;
      /**
       * Signature - INVALID
       **/
      SignatureInv: AugmentedError<ApiType>;
      /**
       * Stake - INSUFFICIENT
       **/
      StakeIns: AugmentedError<ApiType>;
      /**
       * Term - MISMATCHED
       **/
      TermMis: AugmentedError<ApiType>;
      /**
       * Too many members
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Too many scheduled `MmrToSign`.
       **/
      TooManySchedules: AugmentedError<ApiType>;
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
    ethereumBacking: {
      /**
       * Address - CONVERSION FAILED
       **/
      AddressCF: AugmentedError<ApiType>;
      /**
       * Address Length - MISMATCHED
       **/
      AddrLenMis: AugmentedError<ApiType>;
      /**
       * Array - CONVERSION FAILED
       **/
      ArrayCF: AugmentedError<ApiType>;
      /**
       * Asset - ALREADY REDEEMED
       **/
      AssetAR: AugmentedError<ApiType>;
      /**
       * Authorities Change - ALREADY SYNCED
       **/
      AuthoritiesChangeAR: AugmentedError<ApiType>;
      /**
       * Bytes - CONVERSION FAILED
       **/
      BytesCF: AugmentedError<ApiType>;
      /**
       * Eth Log - PARSING FAILED
       **/
      EthLogPF: AugmentedError<ApiType>;
      /**
       * Int - CONVERSION FAILED
       **/
      IntCF: AugmentedError<ApiType>;
      /**
       * *KTON* Locked - NO SUFFICIENT BACKING ASSETS
       **/
      KtonLockedNSBA: AugmentedError<ApiType>;
      /**
       * Kton Lock - LIMITED
       **/
      KtonLockLim: AugmentedError<ApiType>;
      /**
       * Log Entry - NOT EXISTED
       **/
      LogEntryNE: AugmentedError<ApiType>;
      /**
       * Pubkey Prefix - MISMATCHED
       **/
      PubkeyPrefixMis: AugmentedError<ApiType>;
      /**
       * Redeem - DISABLED
       **/
      RedeemDis: AugmentedError<ApiType>;
      /**
       * *RING* Locked - NO SUFFICIENT BACKING ASSETS
       **/
      RingLockedNSBA: AugmentedError<ApiType>;
      /**
       * Ring Lock - LIMITED
       **/
      RingLockLim: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ethereumRelay: {
      /**
       * Affirmation - EXISTED
       **/
      AffirmationExisted: AugmentedError<ApiType>;
      /**
       * Already Vote for Aye - DUPLICATED
       **/
      AlreadyVoteForAyeDup: AugmentedError<ApiType>;
      /**
       * Already Vote for Nay - DUPLICATED
       **/
      AlreadyVoteForNayDup: AugmentedError<ApiType>;
      /**
       * Confirmed Blocks - CONFLICT
       **/
      ConfirmedBlocksC: AugmentedError<ApiType>;
      /**
       * Confirmed Header - NOT EXISTED
       **/
      ConfirmedHeaderNE: AugmentedError<ApiType>;
      /**
       * Continuous - INVALID
       **/
      ContinuousInv: AugmentedError<ApiType>;
      /**
       * Header Hash - INVALID
       **/
      HeaderHashInv: AugmentedError<ApiType>;
      /**
       * Header Hash - MISMATCHED
       **/
      HeaderHashMis: AugmentedError<ApiType>;
      /**
       * Header - INVALID
       **/
      HeaderInv: AugmentedError<ApiType>;
      /**
       * MMR - INVALID
       **/
      MMRInv: AugmentedError<ApiType>;
      /**
       * Pending Relay Header Parcel - ALREADY EXISTED
       **/
      PendingRelayHeaderParcelAE: AugmentedError<ApiType>;
      /**
       * Pending Relay Header Parcel - NOT EXISTED
       **/
      PendingRelayHeaderParcelNE: AugmentedError<ApiType>;
      /**
       * EthereumReceipt Proof - INVALID
       **/
      ReceiptProofInv: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ethereumRelayerGame: {
      /**
       * Active Games - TOO MANY
       **/
      ActiveGamesTM: AugmentedError<ApiType>;
      /**
       * Existed Affirmation(s) Found - CONFLICT
       **/
      ExistedAffirmationsFoundC: AugmentedError<ApiType>;
      /**
       * Extended Relay Affirmation - NOT EXISTED
       **/
      ExtendedRelayAffirmationNE: AugmentedError<ApiType>;
      /**
       * Game at This Round - CLOSED
       **/
      GameAtThisRoundC: AugmentedError<ApiType>;
      /**
       * Pending Relay Parcel - NOT EXISTED
       **/
      PendingRelayParcelNE: AugmentedError<ApiType>;
      /**
       * Previous Relay Proofs - INCOMPLETE
       **/
      PreviousRelayProofsInc: AugmentedError<ApiType>;
      /**
       * Relay Affirmation - DUPLICATED
       **/
      RelayAffirmationDup: AugmentedError<ApiType>;
      /**
       * Relay Affirmation - NOT EXISTED
       **/
      RelayAffirmationNE: AugmentedError<ApiType>;
      /**
       * Relay Parcel - ALREADY RELAYED
       **/
      RelayParcelAR: AugmentedError<ApiType>;
      /**
       * Relay Proofs Quantity - INVALID
       **/
      RelayProofsQuantityInv: AugmentedError<ApiType>;
      /**
       * Round - MISMATCHED
       **/
      RoundMis: AugmentedError<ApiType>;
      /**
       * Usable *RING* for Stake - INSUFFICIENT
       **/
      StakeIns: AugmentedError<ApiType>;
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
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
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
    ktonTreasury: {
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
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    pangolinParachainFeeMarket: {
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
    pangoroFeeMarket: {
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
    phragmenElection: {
      /**
       * Duplicated candidate submission.
       **/
      DuplicatedCandidate: AugmentedError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      InsufficientCandidateFunds: AugmentedError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      InvalidRenouncing: AugmentedError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      InvalidReplacement: AugmentedError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      InvalidVoteCount: AugmentedError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      InvalidWitnessData: AugmentedError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      MaximumVotesExceeded: AugmentedError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      MemberSubmit: AugmentedError<ApiType>;
      /**
       * Must be a voter.
       **/
      MustBeVoter: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * Cannot report self.
       **/
      ReportSelf: AugmentedError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      RunnerUpSubmit: AugmentedError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      TooManyVotes: AugmentedError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      UnableToPayBond: AugmentedError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      UnableToVote: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    recovery: {
      /**
       * This account is already set up for recovery
       **/
      AlreadyProxy: AugmentedError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      AlreadyRecoverable: AugmentedError<ApiType>;
      /**
       * A recovery process has already started for this account
       **/
      AlreadyStarted: AugmentedError<ApiType>;
      /**
       * This user has already vouched for this recovery
       **/
      AlreadyVouched: AugmentedError<ApiType>;
      /**
       * Some internal state is broken.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * The friend must wait until the delay period to vouch for this recovery
       **/
      DelayPeriod: AugmentedError<ApiType>;
      /**
       * Friends list must be less than max friends
       **/
      MaxFriends: AugmentedError<ApiType>;
      /**
       * User is not allowed to make a call on behalf of this account
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * Friends list must be greater than zero and threshold
       **/
      NotEnoughFriends: AugmentedError<ApiType>;
      /**
       * This account is not a friend who can vouch
       **/
      NotFriend: AugmentedError<ApiType>;
      /**
       * This account is not set up for recovery
       **/
      NotRecoverable: AugmentedError<ApiType>;
      /**
       * Friends list must be sorted and free of duplicates
       **/
      NotSorted: AugmentedError<ApiType>;
      /**
       * A recovery process has not started for this rescuer
       **/
      NotStarted: AugmentedError<ApiType>;
      /**
       * There are still active recovery attempts that need to be closed
       **/
      StillActive: AugmentedError<ApiType>;
      /**
       * The threshold for recovering this account has not been met
       **/
      Threshold: AugmentedError<ApiType>;
      /**
       * Threshold must be greater than zero
       **/
      ZeroThreshold: AugmentedError<ApiType>;
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
    society: {
      /**
       * User has already made a bid.
       **/
      AlreadyBid: AugmentedError<ApiType>;
      /**
       * User is already a candidate.
       **/
      AlreadyCandidate: AugmentedError<ApiType>;
      /**
       * Society already founded.
       **/
      AlreadyFounded: AugmentedError<ApiType>;
      /**
       * User is already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Member is already vouching or banned from vouching again.
       **/
      AlreadyVouching: AugmentedError<ApiType>;
      /**
       * An incorrect position was provided.
       **/
      BadPosition: AugmentedError<ApiType>;
      /**
       * Cannot remove the founder.
       **/
      Founder: AugmentedError<ApiType>;
      /**
       * Cannot remove the head of the chain.
       **/
      Head: AugmentedError<ApiType>;
      /**
       * Not enough in pot to accept candidate.
       **/
      InsufficientPot: AugmentedError<ApiType>;
      /**
       * Too many members in the society.
       **/
      MaxMembers: AugmentedError<ApiType>;
      /**
       * Nothing to payout.
       **/
      NoPayout: AugmentedError<ApiType>;
      /**
       * User is not a candidate.
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * The caller is not the founder.
       **/
      NotFounder: AugmentedError<ApiType>;
      /**
       * The caller is not the head.
       **/
      NotHead: AugmentedError<ApiType>;
      /**
       * User is not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * User is not suspended.
       **/
      NotSuspended: AugmentedError<ApiType>;
      /**
       * Member is not vouching.
       **/
      NotVouching: AugmentedError<ApiType>;
      /**
       * User is suspended.
       **/
      Suspended: AugmentedError<ApiType>;
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
       * Cannot have a validator or nominator role, with value less than the minimum defined by
       * governance (see `MinValidatorBond` and `MinNominatorBond`). If unbonding is the
       * intention, `chill` first to remove one's role as validator/nominator.
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
    substrate2SubstrateIssuing: {
      /**
       * invalid ethereum address length
       **/
      InvalidAddressLen: AugmentedError<ApiType>;
      /**
       * encode erc20 tx failed
       **/
      InvalidEncodeERC20: AugmentedError<ApiType>;
      /**
       * encode issue tx failed
       **/
      InvalidIssueEncoding: AugmentedError<ApiType>;
      /**
       * Invalid Issuing System Account
       **/
      InvalidIssuingAccount: AugmentedError<ApiType>;
      /**
       * invalid message sender
       **/
      InvalidMessageSender: AugmentedError<ApiType>;
      /**
       * StringCF
       **/
      StringCF: AugmentedError<ApiType>;
      /**
       * Token unregistered when issuing
       **/
      TokenUnregistered: AugmentedError<ApiType>;
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
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
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
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tips: {
      /**
       * The tip was already found/started.
       **/
      AlreadyKnown: AugmentedError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      NotFinder: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      StillOpen: AugmentedError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      UnknownTip: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    toPangolinParachainBacking: {
      /**
       * Insufficient balance.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
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
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * The account already has `MaxVestingSchedules` count of schedules and thus
       * cannot add another one. Consider merging existing schedules in order to add another.
       **/
      AtMaxVestingSchedules: AugmentedError<ApiType>;
      /**
       * Failed to create a new schedule because some parameter was invalid.
       **/
      InvalidScheduleParams: AugmentedError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      NotVesting: AugmentedError<ApiType>;
      /**
       * An index was out of bounds of the vesting schedules.
       **/
      ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
