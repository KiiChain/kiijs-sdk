//@ts-nocheck
import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import { MsgUpdateParams, MsgUpdateParamsResponse } from './tx';
/** Msg defines the x/mint Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/mint module
   * parameters. The authority is defaults to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.mint.v1beta1.Msg',
      'UpdateParams',
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data))
    );
  }
}
