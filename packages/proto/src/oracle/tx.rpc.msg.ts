//@ts-nocheck
import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse, MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse } from "./tx";
export interface Msg {
  /**
   * AggregateExchangeRateVote defines the method for submitting an
   * aggregate exchange rate vote
   */
  aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse>;
  /** DelegateFeedConsent defines the method for delegate the prive voting */
  delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.aggregateExchangeRateVote = this.aggregateExchangeRateVote.bind(this);
    this.delegateFeedConsent = this.delegateFeedConsent.bind(this);
  }
  aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse> {
    const data = MsgAggregateExchangeRateVote.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.oracle.Msg", "AggregateExchangeRateVote", data);
    return promise.then(data => MsgAggregateExchangeRateVoteResponse.decode(new BinaryReader(data)));
  }
  delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.oracle.Msg", "DelegateFeedConsent", data);
    return promise.then(data => MsgDelegateFeedConsentResponse.decode(new BinaryReader(data)));
  }
}