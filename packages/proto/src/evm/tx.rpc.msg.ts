//@ts-nocheck
import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { MsgEVMTransaction, MsgEVMTransactionResponse, MsgSend, MsgSendResponse, MsgRegisterPointer, MsgRegisterPointerResponse, MsgAssociateContractAddress, MsgAssociateContractAddressResponse, MsgAssociate, MsgAssociateResponse } from "./tx";
export interface Msg {
  eVMTransaction(request: MsgEVMTransaction): Promise<MsgEVMTransactionResponse>;
  send(request: MsgSend): Promise<MsgSendResponse>;
  registerPointer(request: MsgRegisterPointer): Promise<MsgRegisterPointerResponse>;
  associateContractAddress(request: MsgAssociateContractAddress): Promise<MsgAssociateContractAddressResponse>;
  associate(request: MsgAssociate): Promise<MsgAssociateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.eVMTransaction = this.eVMTransaction.bind(this);
    this.send = this.send.bind(this);
    this.registerPointer = this.registerPointer.bind(this);
    this.associateContractAddress = this.associateContractAddress.bind(this);
    this.associate = this.associate.bind(this);
  }
  eVMTransaction(request: MsgEVMTransaction): Promise<MsgEVMTransactionResponse> {
    const data = MsgEVMTransaction.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Msg", "EVMTransaction", data);
    return promise.then(data => MsgEVMTransactionResponse.decode(new BinaryReader(data)));
  }
  send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Msg", "Send", data);
    return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
  }
  registerPointer(request: MsgRegisterPointer): Promise<MsgRegisterPointerResponse> {
    const data = MsgRegisterPointer.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Msg", "RegisterPointer", data);
    return promise.then(data => MsgRegisterPointerResponse.decode(new BinaryReader(data)));
  }
  associateContractAddress(request: MsgAssociateContractAddress): Promise<MsgAssociateContractAddressResponse> {
    const data = MsgAssociateContractAddress.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Msg", "AssociateContractAddress", data);
    return promise.then(data => MsgAssociateContractAddressResponse.decode(new BinaryReader(data)));
  }
  associate(request: MsgAssociate): Promise<MsgAssociateResponse> {
    const data = MsgAssociate.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Msg", "Associate", data);
    return promise.then(data => MsgAssociateResponse.decode(new BinaryReader(data)));
  }
}