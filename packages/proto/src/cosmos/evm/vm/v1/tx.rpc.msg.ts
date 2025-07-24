//@ts-nocheck
import { BinaryReader } from '../../../../binary';
import { Rpc } from '../../../../helpers';
import {
  MsgEthereumTx,
  MsgEthereumTxResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from './tx';
/** Msg defines the evm Msg service. */
export interface Msg {
  /** EthereumTx defines a method submitting Ethereum transactions. */
  ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
  /**
   * UpdateParams defined a governance operation for updating the x/vm module
   * parameters. The authority is hard-coded to the Cosmos SDK x/gov module
   * account
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ethereumTx = this.ethereumTx.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse> {
    const data = MsgEthereumTx.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.evm.vm.v1.Msg',
      'EthereumTx',
      data
    );
    return promise.then((data) =>
      MsgEthereumTxResponse.decode(new BinaryReader(data))
    );
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.evm.vm.v1.Msg',
      'UpdateParams',
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data))
    );
  }
}
