//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../binary";
import { bytesFromBase64, base64FromBytes } from "../helpers";
/** AddressAssociation represents an association between a Cosmos and an Ethereum address. */
export interface AddressAssociation {
  /** Kii address */
  kiiAddress: string;
  /** Ethereum address */
  ethAddress: string;
}
export interface AddressAssociationProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.AddressAssociation";
  value: Uint8Array;
}
/** AddressAssociation represents an association between a Cosmos and an Ethereum address. */
export interface AddressAssociationAmino {
  /** Kii address */
  kii_address?: string;
  /** Ethereum address */
  eth_address?: string;
}
export interface AddressAssociationAminoMsg {
  type: "/kiichain.kiichain3.evm.AddressAssociation";
  value: AddressAssociationAmino;
}
/** AddressAssociation represents an association between a Cosmos and an Ethereum address. */
export interface AddressAssociationSDKType {
  kii_address: string;
  eth_address: string;
}
export interface Code {
  address: string;
  code: Uint8Array;
}
export interface CodeProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.Code";
  value: Uint8Array;
}
export interface CodeAmino {
  address?: string;
  code?: string;
}
export interface CodeAminoMsg {
  type: "/kiichain.kiichain3.evm.Code";
  value: CodeAmino;
}
export interface CodeSDKType {
  address: string;
  code: Uint8Array;
}
export interface ContractState {
  address: string;
  key: Uint8Array;
  value: Uint8Array;
}
export interface ContractStateProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.ContractState";
  value: Uint8Array;
}
export interface ContractStateAmino {
  address?: string;
  key?: string;
  value?: string;
}
export interface ContractStateAminoMsg {
  type: "/kiichain.kiichain3.evm.ContractState";
  value: ContractStateAmino;
}
export interface ContractStateSDKType {
  address: string;
  key: Uint8Array;
  value: Uint8Array;
}
export interface Nonce {
  address: string;
  nonce: bigint;
}
export interface NonceProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.Nonce";
  value: Uint8Array;
}
export interface NonceAmino {
  address?: string;
  nonce?: string;
}
export interface NonceAminoMsg {
  type: "/kiichain.kiichain3.evm.Nonce";
  value: NonceAmino;
}
export interface NonceSDKType {
  address: string;
  nonce: bigint;
}
export interface Serialized {
  prefix: Uint8Array;
  key: Uint8Array;
  value: Uint8Array;
}
export interface SerializedProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.Serialized";
  value: Uint8Array;
}
export interface SerializedAmino {
  prefix?: string;
  key?: string;
  value?: string;
}
export interface SerializedAminoMsg {
  type: "/kiichain.kiichain3.evm.Serialized";
  value: SerializedAmino;
}
export interface SerializedSDKType {
  prefix: Uint8Array;
  key: Uint8Array;
  value: Uint8Array;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
  params: Params;
  /** List of address associations */
  addressAssociations: AddressAssociation[];
  /** List of stored code */
  codes: Code[];
  /** List of contract state */
  states: ContractState[];
  nonces: Nonce[];
  serialized: Serialized[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /** List of address associations */
  address_associations?: AddressAssociationAmino[];
  /** List of stored code */
  codes?: CodeAmino[];
  /** List of contract state */
  states?: ContractStateAmino[];
  nonces?: NonceAmino[];
  serialized?: SerializedAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kiichain.kiichain3.evm.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  address_associations: AddressAssociationSDKType[];
  codes: CodeSDKType[];
  states: ContractStateSDKType[];
  nonces: NonceSDKType[];
  serialized: SerializedSDKType[];
}
function createBaseAddressAssociation(): AddressAssociation {
  return {
    kiiAddress: "",
    ethAddress: ""
  };
}
export const AddressAssociation = {
  typeUrl: "/kiichain.kiichain3.evm.AddressAssociation",
  encode(message: AddressAssociation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kiiAddress !== "") {
      writer.uint32(10).string(message.kiiAddress);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressAssociation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressAssociation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kiiAddress = reader.string();
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressAssociation>): AddressAssociation {
    const message = createBaseAddressAssociation();
    message.kiiAddress = object.kiiAddress ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: AddressAssociationAmino): AddressAssociation {
    const message = createBaseAddressAssociation();
    if (object.kii_address !== undefined && object.kii_address !== null) {
      message.kiiAddress = object.kii_address;
    }
    if (object.eth_address !== undefined && object.eth_address !== null) {
      message.ethAddress = object.eth_address;
    }
    return message;
  },
  toAmino(message: AddressAssociation): AddressAssociationAmino {
    const obj: any = {};
    obj.kii_address = message.kiiAddress === "" ? undefined : message.kiiAddress;
    obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: AddressAssociationAminoMsg): AddressAssociation {
    return AddressAssociation.fromAmino(object.value);
  },
  fromProtoMsg(message: AddressAssociationProtoMsg): AddressAssociation {
    return AddressAssociation.decode(message.value);
  },
  toProto(message: AddressAssociation): Uint8Array {
    return AddressAssociation.encode(message).finish();
  },
  toProtoMsg(message: AddressAssociation): AddressAssociationProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.AddressAssociation",
      value: AddressAssociation.encode(message).finish()
    };
  }
};
function createBaseCode(): Code {
  return {
    address: "",
    code: new Uint8Array()
  };
}
export const Code = {
  typeUrl: "/kiichain.kiichain3.evm.Code",
  encode(message: Code, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.code.length !== 0) {
      writer.uint32(18).bytes(message.code);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Code {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.code = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Code>): Code {
    const message = createBaseCode();
    message.address = object.address ?? "";
    message.code = object.code ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CodeAmino): Code {
    const message = createBaseCode();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    return message;
  },
  toAmino(message: Code): CodeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeAminoMsg): Code {
    return Code.fromAmino(object.value);
  },
  fromProtoMsg(message: CodeProtoMsg): Code {
    return Code.decode(message.value);
  },
  toProto(message: Code): Uint8Array {
    return Code.encode(message).finish();
  },
  toProtoMsg(message: Code): CodeProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.Code",
      value: Code.encode(message).finish()
    };
  }
};
function createBaseContractState(): ContractState {
  return {
    address: "",
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const ContractState = {
  typeUrl: "/kiichain.kiichain3.evm.ContractState",
  encode(message: ContractState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContractState>): ContractState {
    const message = createBaseContractState();
    message.address = object.address ?? "";
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ContractStateAmino): ContractState {
    const message = createBaseContractState();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: ContractState): ContractStateAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractStateAminoMsg): ContractState {
    return ContractState.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractStateProtoMsg): ContractState {
    return ContractState.decode(message.value);
  },
  toProto(message: ContractState): Uint8Array {
    return ContractState.encode(message).finish();
  },
  toProtoMsg(message: ContractState): ContractStateProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.ContractState",
      value: ContractState.encode(message).finish()
    };
  }
};
function createBaseNonce(): Nonce {
  return {
    address: "",
    nonce: BigInt(0)
  };
}
export const Nonce = {
  typeUrl: "/kiichain.kiichain3.evm.Nonce",
  encode(message: Nonce, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Nonce {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Nonce>): Nonce {
    const message = createBaseNonce();
    message.address = object.address ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NonceAmino): Nonce {
    const message = createBaseNonce();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: Nonce): NonceAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NonceAminoMsg): Nonce {
    return Nonce.fromAmino(object.value);
  },
  fromProtoMsg(message: NonceProtoMsg): Nonce {
    return Nonce.decode(message.value);
  },
  toProto(message: Nonce): Uint8Array {
    return Nonce.encode(message).finish();
  },
  toProtoMsg(message: Nonce): NonceProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.Nonce",
      value: Nonce.encode(message).finish()
    };
  }
};
function createBaseSerialized(): Serialized {
  return {
    prefix: new Uint8Array(),
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const Serialized = {
  typeUrl: "/kiichain.kiichain3.evm.Serialized",
  encode(message: Serialized, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.prefix.length !== 0) {
      writer.uint32(10).bytes(message.prefix);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Serialized {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSerialized();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.bytes();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Serialized>): Serialized {
    const message = createBaseSerialized();
    message.prefix = object.prefix ?? new Uint8Array();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SerializedAmino): Serialized {
    const message = createBaseSerialized();
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = bytesFromBase64(object.prefix);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: Serialized): SerializedAmino {
    const obj: any = {};
    obj.prefix = message.prefix ? base64FromBytes(message.prefix) : undefined;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: SerializedAminoMsg): Serialized {
    return Serialized.fromAmino(object.value);
  },
  fromProtoMsg(message: SerializedProtoMsg): Serialized {
    return Serialized.decode(message.value);
  },
  toProto(message: Serialized): Uint8Array {
    return Serialized.encode(message).finish();
  },
  toProtoMsg(message: Serialized): SerializedProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.Serialized",
      value: Serialized.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    addressAssociations: [],
    codes: [],
    states: [],
    nonces: [],
    serialized: []
  };
}
export const GenesisState = {
  typeUrl: "/kiichain.kiichain3.evm.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.addressAssociations) {
      AddressAssociation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.states) {
      ContractState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.nonces) {
      Nonce.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.serialized) {
      Serialized.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.addressAssociations.push(AddressAssociation.decode(reader, reader.uint32()));
          break;
        case 3:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 4:
          message.states.push(ContractState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.nonces.push(Nonce.decode(reader, reader.uint32()));
          break;
        case 6:
          message.serialized.push(Serialized.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.addressAssociations = object.addressAssociations?.map(e => AddressAssociation.fromPartial(e)) || [];
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.states = object.states?.map(e => ContractState.fromPartial(e)) || [];
    message.nonces = object.nonces?.map(e => Nonce.fromPartial(e)) || [];
    message.serialized = object.serialized?.map(e => Serialized.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.addressAssociations = object.address_associations?.map(e => AddressAssociation.fromAmino(e)) || [];
    message.codes = object.codes?.map(e => Code.fromAmino(e)) || [];
    message.states = object.states?.map(e => ContractState.fromAmino(e)) || [];
    message.nonces = object.nonces?.map(e => Nonce.fromAmino(e)) || [];
    message.serialized = object.serialized?.map(e => Serialized.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.addressAssociations) {
      obj.address_associations = message.addressAssociations.map(e => e ? AddressAssociation.toAmino(e) : undefined);
    } else {
      obj.address_associations = message.addressAssociations;
    }
    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toAmino(e) : undefined);
    } else {
      obj.codes = message.codes;
    }
    if (message.states) {
      obj.states = message.states.map(e => e ? ContractState.toAmino(e) : undefined);
    } else {
      obj.states = message.states;
    }
    if (message.nonces) {
      obj.nonces = message.nonces.map(e => e ? Nonce.toAmino(e) : undefined);
    } else {
      obj.nonces = message.nonces;
    }
    if (message.serialized) {
      obj.serialized = message.serialized.map(e => e ? Serialized.toAmino(e) : undefined);
    } else {
      obj.serialized = message.serialized;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};