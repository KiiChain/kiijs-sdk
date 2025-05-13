//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Coin, CoinAmino, CoinSDKType } from "../../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20 {
  /**
   * contract_address of an ERC20 token contract, that is registered in a token
   * pair
   */
  contractAddress: string;
  /** amount of ERC20 tokens to convert */
  amount: string;
  /** receiver is the bech32 address to receive native Cosmos coins */
  receiver: string;
  /** sender is the hex address from the owner of the given ERC20 tokens */
  sender: string;
}
export interface MsgConvertERC20ProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgConvertERC20";
  value: Uint8Array;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20Amino {
  /**
   * contract_address of an ERC20 token contract, that is registered in a token
   * pair
   */
  contract_address?: string;
  /** amount of ERC20 tokens to convert */
  amount: string;
  /** receiver is the bech32 address to receive native Cosmos coins */
  receiver?: string;
  /** sender is the hex address from the owner of the given ERC20 tokens */
  sender?: string;
}
export interface MsgConvertERC20AminoMsg {
  type: "cosmos/evm/MsgConvertERC20";
  value: MsgConvertERC20Amino;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20SDKType {
  contract_address: string;
  amount: string;
  receiver: string;
  sender: string;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {}
export interface MsgConvertERC20ResponseProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgConvertERC20Response";
  value: Uint8Array;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20ResponseAmino {}
export interface MsgConvertERC20ResponseAminoMsg {
  type: "cosmos-sdk/MsgConvertERC20Response";
  value: MsgConvertERC20ResponseAmino;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20ResponseSDKType {}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
  /**
   * coin is a Cosmos coin whose denomination is registered in a token pair. The
   * coin amount defines the amount of coins to convert.
   */
  coin: Coin;
  /** receiver is the hex address to receive ERC20 token */
  receiver: string;
  /**
   * sender is the cosmos bech32 address from the owner of the given Cosmos
   * coins
   */
  sender: string;
}
export interface MsgConvertCoinProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgConvertCoin";
  value: Uint8Array;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinAmino {
  /**
   * coin is a Cosmos coin whose denomination is registered in a token pair. The
   * coin amount defines the amount of coins to convert.
   */
  coin?: CoinAmino;
  /** receiver is the hex address to receive ERC20 token */
  receiver?: string;
  /**
   * sender is the cosmos bech32 address from the owner of the given Cosmos
   * coins
   */
  sender?: string;
}
export interface MsgConvertCoinAminoMsg {
  type: "cosmos-sdk/MsgConvertCoin";
  value: MsgConvertCoinAmino;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinSDKType {
  coin: CoinSDKType;
  receiver: string;
  sender: string;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {}
export interface MsgConvertCoinResponseProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgConvertCoinResponse";
  value: Uint8Array;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponseAmino {}
export interface MsgConvertCoinResponseAminoMsg {
  type: "cosmos-sdk/MsgConvertCoinResponse";
  value: MsgConvertCoinResponseAmino;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/vm parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/vm parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos/evm/x/erc20/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgRegisterERC20 is the Msg/RegisterERC20 request type for registering
 * an Erc20 contract token pair.
 */
export interface MsgRegisterERC20 {
  /** authority is the address of the governance account. */
  authority: string;
  /** erc20addresses is a slice of ERC20 token contract hex addresses */
  erc20addresses: string[];
}
export interface MsgRegisterERC20ProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgRegisterERC20";
  value: Uint8Array;
}
/**
 * MsgRegisterERC20 is the Msg/RegisterERC20 request type for registering
 * an Erc20 contract token pair.
 */
export interface MsgRegisterERC20Amino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** erc20addresses is a slice of ERC20 token contract hex addresses */
  erc20addresses?: string[];
}
export interface MsgRegisterERC20AminoMsg {
  type: "cosmos/evm/x/erc20/MsgRegisterERC20";
  value: MsgRegisterERC20Amino;
}
/**
 * MsgRegisterERC20 is the Msg/RegisterERC20 request type for registering
 * an Erc20 contract token pair.
 */
export interface MsgRegisterERC20SDKType {
  authority: string;
  erc20addresses: string[];
}
/**
 * MsgRegisterERC20Response defines the response structure for executing a
 * MsgRegisterERC20 message.
 */
export interface MsgRegisterERC20Response {}
export interface MsgRegisterERC20ResponseProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgRegisterERC20Response";
  value: Uint8Array;
}
/**
 * MsgRegisterERC20Response defines the response structure for executing a
 * MsgRegisterERC20 message.
 */
export interface MsgRegisterERC20ResponseAmino {}
export interface MsgRegisterERC20ResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterERC20Response";
  value: MsgRegisterERC20ResponseAmino;
}
/**
 * MsgRegisterERC20Response defines the response structure for executing a
 * MsgRegisterERC20 message.
 */
export interface MsgRegisterERC20ResponseSDKType {}
/**
 * MsgToggleConversion is the Msg/MsgToggleConversion request type for toggling
 * an Erc20 contract conversion capability.
 */
export interface MsgToggleConversion {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}
export interface MsgToggleConversionProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgToggleConversion";
  value: Uint8Array;
}
/**
 * MsgToggleConversion is the Msg/MsgToggleConversion request type for toggling
 * an Erc20 contract conversion capability.
 */
export interface MsgToggleConversionAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token?: string;
}
export interface MsgToggleConversionAminoMsg {
  type: "cosmos/evm/x/erc20/MsgToggleConversion";
  value: MsgToggleConversionAmino;
}
/**
 * MsgToggleConversion is the Msg/MsgToggleConversion request type for toggling
 * an Erc20 contract conversion capability.
 */
export interface MsgToggleConversionSDKType {
  authority: string;
  token: string;
}
/**
 * MsgToggleConversionResponse defines the response structure for executing a
 * ToggleConversion message.
 */
export interface MsgToggleConversionResponse {}
export interface MsgToggleConversionResponseProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.MsgToggleConversionResponse";
  value: Uint8Array;
}
/**
 * MsgToggleConversionResponse defines the response structure for executing a
 * ToggleConversion message.
 */
export interface MsgToggleConversionResponseAmino {}
export interface MsgToggleConversionResponseAminoMsg {
  type: "cosmos-sdk/MsgToggleConversionResponse";
  value: MsgToggleConversionResponseAmino;
}
/**
 * MsgToggleConversionResponse defines the response structure for executing a
 * ToggleConversion message.
 */
export interface MsgToggleConversionResponseSDKType {}
function createBaseMsgConvertERC20(): MsgConvertERC20 {
  return {
    contractAddress: "",
    amount: "",
    receiver: "",
    sender: ""
  };
}
export const MsgConvertERC20 = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgConvertERC20",
  encode(message: MsgConvertERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConvertERC20>): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgConvertERC20Amino): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConvertERC20): MsgConvertERC20Amino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.amount = message.amount ?? "";
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20AminoMsg): MsgConvertERC20 {
    return MsgConvertERC20.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConvertERC20): MsgConvertERC20AminoMsg {
    return {
      type: "cosmos/evm/MsgConvertERC20",
      value: MsgConvertERC20.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConvertERC20ProtoMsg): MsgConvertERC20 {
    return MsgConvertERC20.decode(message.value);
  },
  toProto(message: MsgConvertERC20): Uint8Array {
    return MsgConvertERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20): MsgConvertERC20ProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgConvertERC20",
      value: MsgConvertERC20.encode(message).finish()
    };
  }
};
function createBaseMsgConvertERC20Response(): MsgConvertERC20Response {
  return {};
}
export const MsgConvertERC20Response = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgConvertERC20Response",
  encode(_: MsgConvertERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgConvertERC20Response>): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  fromAmino(_: MsgConvertERC20ResponseAmino): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  toAmino(_: MsgConvertERC20Response): MsgConvertERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20ResponseAminoMsg): MsgConvertERC20Response {
    return MsgConvertERC20Response.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConvertERC20Response): MsgConvertERC20ResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConvertERC20Response",
      value: MsgConvertERC20Response.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConvertERC20ResponseProtoMsg): MsgConvertERC20Response {
    return MsgConvertERC20Response.decode(message.value);
  },
  toProto(message: MsgConvertERC20Response): Uint8Array {
    return MsgConvertERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20Response): MsgConvertERC20ResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgConvertERC20Response",
      value: MsgConvertERC20Response.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCoin(): MsgConvertCoin {
  return {
    coin: Coin.fromPartial({}),
    receiver: "",
    sender: ""
  };
}
export const MsgConvertCoin = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgConvertCoin",
  encode(message: MsgConvertCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConvertCoin>): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgConvertCoinAmino): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConvertCoin): MsgConvertCoinAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinAminoMsg): MsgConvertCoin {
    return MsgConvertCoin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConvertCoin): MsgConvertCoinAminoMsg {
    return {
      type: "cosmos-sdk/MsgConvertCoin",
      value: MsgConvertCoin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConvertCoinProtoMsg): MsgConvertCoin {
    return MsgConvertCoin.decode(message.value);
  },
  toProto(message: MsgConvertCoin): Uint8Array {
    return MsgConvertCoin.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoin): MsgConvertCoinProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgConvertCoin",
      value: MsgConvertCoin.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCoinResponse(): MsgConvertCoinResponse {
  return {};
}
export const MsgConvertCoinResponse = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgConvertCoinResponse",
  encode(_: MsgConvertCoinResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  fromAmino(_: MsgConvertCoinResponseAmino): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  toAmino(_: MsgConvertCoinResponse): MsgConvertCoinResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinResponseAminoMsg): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConvertCoinResponse): MsgConvertCoinResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConvertCoinResponse",
      value: MsgConvertCoinResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConvertCoinResponseProtoMsg): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.decode(message.value);
  },
  toProto(message: MsgConvertCoinResponse): Uint8Array {
    return MsgConvertCoinResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoinResponse): MsgConvertCoinResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgConvertCoinResponse",
      value: MsgConvertCoinResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos/evm/x/erc20/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterERC20(): MsgRegisterERC20 {
  return {
    authority: "",
    erc20addresses: []
  };
}
export const MsgRegisterERC20 = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgRegisterERC20",
  encode(message: MsgRegisterERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.erc20addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.erc20addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterERC20>): MsgRegisterERC20 {
    const message = createBaseMsgRegisterERC20();
    message.authority = object.authority ?? "";
    message.erc20addresses = object.erc20addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRegisterERC20Amino): MsgRegisterERC20 {
    const message = createBaseMsgRegisterERC20();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.erc20addresses = object.erc20addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRegisterERC20): MsgRegisterERC20Amino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.erc20addresses) {
      obj.erc20addresses = message.erc20addresses.map(e => e);
    } else {
      obj.erc20addresses = message.erc20addresses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterERC20AminoMsg): MsgRegisterERC20 {
    return MsgRegisterERC20.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterERC20): MsgRegisterERC20AminoMsg {
    return {
      type: "cosmos/evm/x/erc20/MsgRegisterERC20",
      value: MsgRegisterERC20.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterERC20ProtoMsg): MsgRegisterERC20 {
    return MsgRegisterERC20.decode(message.value);
  },
  toProto(message: MsgRegisterERC20): Uint8Array {
    return MsgRegisterERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterERC20): MsgRegisterERC20ProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgRegisterERC20",
      value: MsgRegisterERC20.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterERC20Response(): MsgRegisterERC20Response {
  return {};
}
export const MsgRegisterERC20Response = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgRegisterERC20Response",
  encode(_: MsgRegisterERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRegisterERC20Response>): MsgRegisterERC20Response {
    const message = createBaseMsgRegisterERC20Response();
    return message;
  },
  fromAmino(_: MsgRegisterERC20ResponseAmino): MsgRegisterERC20Response {
    const message = createBaseMsgRegisterERC20Response();
    return message;
  },
  toAmino(_: MsgRegisterERC20Response): MsgRegisterERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterERC20ResponseAminoMsg): MsgRegisterERC20Response {
    return MsgRegisterERC20Response.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterERC20Response): MsgRegisterERC20ResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterERC20Response",
      value: MsgRegisterERC20Response.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterERC20ResponseProtoMsg): MsgRegisterERC20Response {
    return MsgRegisterERC20Response.decode(message.value);
  },
  toProto(message: MsgRegisterERC20Response): Uint8Array {
    return MsgRegisterERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterERC20Response): MsgRegisterERC20ResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgRegisterERC20Response",
      value: MsgRegisterERC20Response.encode(message).finish()
    };
  }
};
function createBaseMsgToggleConversion(): MsgToggleConversion {
  return {
    authority: "",
    token: ""
  };
}
export const MsgToggleConversion = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgToggleConversion",
  encode(message: MsgToggleConversion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleConversion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleConversion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgToggleConversion>): MsgToggleConversion {
    const message = createBaseMsgToggleConversion();
    message.authority = object.authority ?? "";
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: MsgToggleConversionAmino): MsgToggleConversion {
    const message = createBaseMsgToggleConversion();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: MsgToggleConversion): MsgToggleConversionAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: MsgToggleConversionAminoMsg): MsgToggleConversion {
    return MsgToggleConversion.fromAmino(object.value);
  },
  toAminoMsg(message: MsgToggleConversion): MsgToggleConversionAminoMsg {
    return {
      type: "cosmos/evm/x/erc20/MsgToggleConversion",
      value: MsgToggleConversion.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgToggleConversionProtoMsg): MsgToggleConversion {
    return MsgToggleConversion.decode(message.value);
  },
  toProto(message: MsgToggleConversion): Uint8Array {
    return MsgToggleConversion.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleConversion): MsgToggleConversionProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgToggleConversion",
      value: MsgToggleConversion.encode(message).finish()
    };
  }
};
function createBaseMsgToggleConversionResponse(): MsgToggleConversionResponse {
  return {};
}
export const MsgToggleConversionResponse = {
  typeUrl: "/cosmos.evm.erc20.v1.MsgToggleConversionResponse",
  encode(_: MsgToggleConversionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleConversionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleConversionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgToggleConversionResponse>): MsgToggleConversionResponse {
    const message = createBaseMsgToggleConversionResponse();
    return message;
  },
  fromAmino(_: MsgToggleConversionResponseAmino): MsgToggleConversionResponse {
    const message = createBaseMsgToggleConversionResponse();
    return message;
  },
  toAmino(_: MsgToggleConversionResponse): MsgToggleConversionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleConversionResponseAminoMsg): MsgToggleConversionResponse {
    return MsgToggleConversionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgToggleConversionResponse): MsgToggleConversionResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgToggleConversionResponse",
      value: MsgToggleConversionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgToggleConversionResponseProtoMsg): MsgToggleConversionResponse {
    return MsgToggleConversionResponse.decode(message.value);
  },
  toProto(message: MsgToggleConversionResponse): Uint8Array {
    return MsgToggleConversionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleConversionResponse): MsgToggleConversionResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.MsgToggleConversionResponse",
      value: MsgToggleConversionResponse.encode(message).finish()
    };
  }
};