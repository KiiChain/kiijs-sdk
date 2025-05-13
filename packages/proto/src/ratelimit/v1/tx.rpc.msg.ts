//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgAddRateLimit, MsgAddRateLimitResponse, MsgUpdateRateLimit, MsgUpdateRateLimitResponse, MsgRemoveRateLimit, MsgRemoveRateLimitResponse, MsgResetRateLimit, MsgResetRateLimitResponse } from "./tx";
/** Msg service for rate limit txs */
export interface Msg {
  /** Gov tx to add a new rate limit */
  addRateLimit(request: MsgAddRateLimit): Promise<MsgAddRateLimitResponse>;
  /** Gov tx to update an existing rate limit */
  updateRateLimit(request: MsgUpdateRateLimit): Promise<MsgUpdateRateLimitResponse>;
  /** Gov tx to remove a rate limit */
  removeRateLimit(request: MsgRemoveRateLimit): Promise<MsgRemoveRateLimitResponse>;
  /** Gov tx to reset the flow on a rate limit */
  resetRateLimit(request: MsgResetRateLimit): Promise<MsgResetRateLimitResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addRateLimit = this.addRateLimit.bind(this);
    this.updateRateLimit = this.updateRateLimit.bind(this);
    this.removeRateLimit = this.removeRateLimit.bind(this);
    this.resetRateLimit = this.resetRateLimit.bind(this);
  }
  addRateLimit(request: MsgAddRateLimit): Promise<MsgAddRateLimitResponse> {
    const data = MsgAddRateLimit.encode(request).finish();
    const promise = this.rpc.request("ratelimit.v1.Msg", "AddRateLimit", data);
    return promise.then(data => MsgAddRateLimitResponse.decode(new BinaryReader(data)));
  }
  updateRateLimit(request: MsgUpdateRateLimit): Promise<MsgUpdateRateLimitResponse> {
    const data = MsgUpdateRateLimit.encode(request).finish();
    const promise = this.rpc.request("ratelimit.v1.Msg", "UpdateRateLimit", data);
    return promise.then(data => MsgUpdateRateLimitResponse.decode(new BinaryReader(data)));
  }
  removeRateLimit(request: MsgRemoveRateLimit): Promise<MsgRemoveRateLimitResponse> {
    const data = MsgRemoveRateLimit.encode(request).finish();
    const promise = this.rpc.request("ratelimit.v1.Msg", "RemoveRateLimit", data);
    return promise.then(data => MsgRemoveRateLimitResponse.decode(new BinaryReader(data)));
  }
  resetRateLimit(request: MsgResetRateLimit): Promise<MsgResetRateLimitResponse> {
    const data = MsgResetRateLimit.encode(request).finish();
    const promise = this.rpc.request("ratelimit.v1.Msg", "ResetRateLimit", data);
    return promise.then(data => MsgResetRateLimitResponse.decode(new BinaryReader(data)));
  }
}