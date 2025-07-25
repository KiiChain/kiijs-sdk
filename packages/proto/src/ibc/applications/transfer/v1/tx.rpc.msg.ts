//@ts-nocheck
import { BinaryReader } from '../../../../binary';
import { Rpc } from '../../../../helpers';
import {
  MsgTransfer,
  MsgTransferResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from './tx';
/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
  /** UpdateParams defines a rpc handler for MsgUpdateParams. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.transfer = this.transfer.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Msg',
      'Transfer',
      data
    );
    return promise.then((data) =>
      MsgTransferResponse.decode(new BinaryReader(data))
    );
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Msg',
      'UpdateParams',
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data))
    );
  }
}
