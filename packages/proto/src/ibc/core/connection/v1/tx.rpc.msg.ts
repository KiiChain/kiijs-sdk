//@ts-nocheck
import { BinaryReader } from '../../../../binary';
import { Rpc } from '../../../../helpers';
import {
  MsgConnectionOpenAck,
  MsgConnectionOpenAckResponse,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenConfirmResponse,
  MsgConnectionOpenInit,
  MsgConnectionOpenInitResponse,
  MsgConnectionOpenTry,
  MsgConnectionOpenTryResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from './tx';
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit(
    request: MsgConnectionOpenInit
  ): Promise<MsgConnectionOpenInitResponse>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry(
    request: MsgConnectionOpenTry
  ): Promise<MsgConnectionOpenTryResponse>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck(
    request: MsgConnectionOpenAck
  ): Promise<MsgConnectionOpenAckResponse>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  connectionOpenConfirm(
    request: MsgConnectionOpenConfirm
  ): Promise<MsgConnectionOpenConfirmResponse>;
  /**
   * UpdateConnectionParams defines a rpc handler method for
   * MsgUpdateParams.
   */
  updateConnectionParams(
    request: MsgUpdateParams
  ): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.connectionOpenInit = this.connectionOpenInit.bind(this);
    this.connectionOpenTry = this.connectionOpenTry.bind(this);
    this.connectionOpenAck = this.connectionOpenAck.bind(this);
    this.connectionOpenConfirm = this.connectionOpenConfirm.bind(this);
    this.updateConnectionParams = this.updateConnectionParams.bind(this);
  }
  connectionOpenInit(
    request: MsgConnectionOpenInit
  ): Promise<MsgConnectionOpenInitResponse> {
    const data = MsgConnectionOpenInit.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.core.connection.v1.Msg',
      'ConnectionOpenInit',
      data
    );
    return promise.then((data) =>
      MsgConnectionOpenInitResponse.decode(new BinaryReader(data))
    );
  }
  connectionOpenTry(
    request: MsgConnectionOpenTry
  ): Promise<MsgConnectionOpenTryResponse> {
    const data = MsgConnectionOpenTry.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.core.connection.v1.Msg',
      'ConnectionOpenTry',
      data
    );
    return promise.then((data) =>
      MsgConnectionOpenTryResponse.decode(new BinaryReader(data))
    );
  }
  connectionOpenAck(
    request: MsgConnectionOpenAck
  ): Promise<MsgConnectionOpenAckResponse> {
    const data = MsgConnectionOpenAck.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.core.connection.v1.Msg',
      'ConnectionOpenAck',
      data
    );
    return promise.then((data) =>
      MsgConnectionOpenAckResponse.decode(new BinaryReader(data))
    );
  }
  connectionOpenConfirm(
    request: MsgConnectionOpenConfirm
  ): Promise<MsgConnectionOpenConfirmResponse> {
    const data = MsgConnectionOpenConfirm.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.core.connection.v1.Msg',
      'ConnectionOpenConfirm',
      data
    );
    return promise.then((data) =>
      MsgConnectionOpenConfirmResponse.decode(new BinaryReader(data))
    );
  }
  updateConnectionParams(
    request: MsgUpdateParams
  ): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.core.connection.v1.Msg',
      'UpdateConnectionParams',
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data))
    );
  }
}
