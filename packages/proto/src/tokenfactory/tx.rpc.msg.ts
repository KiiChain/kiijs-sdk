//@ts-nocheck
import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgUpdateDenom, MsgUpdateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  updateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
  mint(request: MsgMint): Promise<MsgMintResponse>;
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDenom = this.createDenom.bind(this);
    this.updateDenom = this.updateDenom.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.changeAdmin = this.changeAdmin.bind(this);
    this.setDenomMetadata = this.setDenomMetadata.bind(this);
  }
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.tokenfactory.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new BinaryReader(data)));
  }
  updateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse> {
    const data = MsgUpdateDenom.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.tokenfactory.Msg", "UpdateDenom", data);
    return promise.then(data => MsgUpdateDenomResponse.decode(new BinaryReader(data)));
  }
  mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.tokenfactory.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new BinaryReader(data)));
  }
  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.tokenfactory.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  }
  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.tokenfactory.Msg", "ChangeAdmin", data);
    return promise.then(data => MsgChangeAdminResponse.decode(new BinaryReader(data)));
  }
  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse> {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.tokenfactory.Msg", "SetDenomMetadata", data);
    return promise.then(data => MsgSetDenomMetadataResponse.decode(new BinaryReader(data)));
  }
}