//@ts-nocheck
import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import {
  MsgCancelProposal,
  MsgCancelProposalResponse,
  MsgDeposit,
  MsgDepositResponse,
  MsgExecLegacyContent,
  MsgExecLegacyContentResponse,
  MsgSubmitProposal,
  MsgSubmitProposalResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgVote,
  MsgVoteResponse,
  MsgVoteWeighted,
  MsgVoteWeightedResponse,
} from './tx';
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given the messages. */
  submitProposal(
    request: MsgSubmitProposal
  ): Promise<MsgSubmitProposalResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  execLegacyContent(
    request: MsgExecLegacyContent
  ): Promise<MsgExecLegacyContentResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  vote(request: MsgVote): Promise<MsgVoteResponse>;
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/gov module
   * parameters. The authority is defined in the keeper.
   *
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * CancelProposal defines a method to cancel governance proposal
   *
   * Since: cosmos-sdk 0.50
   */
  cancelProposal(
    request: MsgCancelProposal
  ): Promise<MsgCancelProposalResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.execLegacyContent = this.execLegacyContent.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.deposit = this.deposit.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.cancelProposal = this.cancelProposal.bind(this);
  }
  submitProposal(
    request: MsgSubmitProposal
  ): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.gov.v1.Msg',
      'SubmitProposal',
      data
    );
    return promise.then((data) =>
      MsgSubmitProposalResponse.decode(new BinaryReader(data))
    );
  }
  execLegacyContent(
    request: MsgExecLegacyContent
  ): Promise<MsgExecLegacyContentResponse> {
    const data = MsgExecLegacyContent.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.gov.v1.Msg',
      'ExecLegacyContent',
      data
    );
    return promise.then((data) =>
      MsgExecLegacyContentResponse.decode(new BinaryReader(data))
    );
  }
  vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Msg', 'Vote', data);
    return promise.then((data) =>
      MsgVoteResponse.decode(new BinaryReader(data))
    );
  }
  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Msg', 'VoteWeighted', data);
    return promise.then((data) =>
      MsgVoteWeightedResponse.decode(new BinaryReader(data))
    );
  }
  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Msg', 'Deposit', data);
    return promise.then((data) =>
      MsgDepositResponse.decode(new BinaryReader(data))
    );
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Msg', 'UpdateParams', data);
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data))
    );
  }
  cancelProposal(
    request: MsgCancelProposal
  ): Promise<MsgCancelProposalResponse> {
    const data = MsgCancelProposal.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.gov.v1.Msg',
      'CancelProposal',
      data
    );
    return promise.then((data) =>
      MsgCancelProposalResponse.decode(new BinaryReader(data))
    );
  }
}
