//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import {
  Any,
  AnyAmino,
  AnyProtoMsg,
  AnySDKType,
} from '../../../google/protobuf/any';
import {
  AllowedMsgAllowance,
  AllowedMsgAllowanceProtoMsg,
  AllowedMsgAllowanceSDKType,
  BasicAllowance,
  BasicAllowanceProtoMsg,
  BasicAllowanceSDKType,
  PeriodicAllowance,
  PeriodicAllowanceProtoMsg,
  PeriodicAllowanceSDKType,
} from './feegrant';
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?:
    | BasicAllowance
    | PeriodicAllowance
    | AllowedMsgAllowance
    | Any
    | undefined;
}
export interface MsgGrantAllowanceProtoMsg {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowance';
  value: Uint8Array;
}
export type MsgGrantAllowanceEncoded = Omit<MsgGrantAllowance, 'allowance'> & {
  /** allowance can be any of basic, periodic, allowed fee allowance. */ allowance?:
    | BasicAllowanceProtoMsg
    | PeriodicAllowanceProtoMsg
    | AllowedMsgAllowanceProtoMsg
    | AnyProtoMsg
    | undefined;
};
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceAmino {
  /** granter is the address of the user granting an allowance of their funds. */
  granter?: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee?: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: AnyAmino;
}
export interface MsgGrantAllowanceAminoMsg {
  type: 'cosmos-sdk/MsgGrantAllowance';
  value: MsgGrantAllowanceAmino;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceSDKType {
  granter: string;
  grantee: string;
  allowance?:
    | BasicAllowanceSDKType
    | PeriodicAllowanceSDKType
    | AllowedMsgAllowanceSDKType
    | AnySDKType
    | undefined;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {}
export interface MsgGrantAllowanceResponseProtoMsg {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse';
  value: Uint8Array;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseAmino {}
export interface MsgGrantAllowanceResponseAminoMsg {
  type: 'cosmos-sdk/MsgGrantAllowanceResponse';
  value: MsgGrantAllowanceResponseAmino;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseSDKType {}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}
export interface MsgRevokeAllowanceProtoMsg {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowance';
  value: Uint8Array;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceAmino {
  /** granter is the address of the user granting an allowance of their funds. */
  granter?: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee?: string;
}
export interface MsgRevokeAllowanceAminoMsg {
  type: 'cosmos-sdk/MsgRevokeAllowance';
  value: MsgRevokeAllowanceAmino;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceSDKType {
  granter: string;
  grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {}
export interface MsgRevokeAllowanceResponseProtoMsg {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse';
  value: Uint8Array;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseAmino {}
export interface MsgRevokeAllowanceResponseAminoMsg {
  type: 'cosmos-sdk/MsgRevokeAllowanceResponse';
  value: MsgRevokeAllowanceResponseAmino;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseSDKType {}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowances {
  /** pruner is the address of the user pruning expired allowances. */
  pruner: string;
}
export interface MsgPruneAllowancesProtoMsg {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgPruneAllowances';
  value: Uint8Array;
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesAmino {
  /** pruner is the address of the user pruning expired allowances. */
  pruner?: string;
}
export interface MsgPruneAllowancesAminoMsg {
  type: 'cosmos-sdk/MsgPruneAllowances';
  value: MsgPruneAllowancesAmino;
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesSDKType {
  pruner: string;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponse {}
export interface MsgPruneAllowancesResponseProtoMsg {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse';
  value: Uint8Array;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponseAmino {}
export interface MsgPruneAllowancesResponseAminoMsg {
  type: 'cosmos-sdk/MsgPruneAllowancesResponse';
  value: MsgPruneAllowancesResponseAmino;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponseSDKType {}
function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return {
    granter: '',
    grantee: '',
    allowance: undefined,
  };
}
export const MsgGrantAllowance = {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowance',
  encode(
    message: MsgGrantAllowance,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance as Any, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance =
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder(reader) as Any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGrantAllowance>): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? '';
    message.grantee = object.grantee ?? '';
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Any.fromPartial(object.allowance)
        : undefined;
    return message;
  },
  fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino(
        object.allowance
      );
    }
    return message;
  },
  toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter === '' ? undefined : message.granter;
    obj.grantee = message.grantee === '' ? undefined : message.grantee;
    obj.allowance = message.allowance
      ? Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino(message.allowance as Any)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantAllowance): MsgGrantAllowanceAminoMsg {
    return {
      type: 'cosmos-sdk/MsgGrantAllowance',
      value: MsgGrantAllowance.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgGrantAllowanceProtoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.decode(message.value);
  },
  toProto(message: MsgGrantAllowance): Uint8Array {
    return MsgGrantAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantAllowance): MsgGrantAllowanceProtoMsg {
    return {
      typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowance',
      value: MsgGrantAllowance.encode(message).finish(),
    };
  },
};
function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}
export const MsgGrantAllowanceResponse = {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse',
  encode(
    _: MsgGrantAllowanceResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgGrantAllowanceResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
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
  fromPartial(
    _: Partial<MsgGrantAllowanceResponse>
  ): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgGrantAllowanceResponseAminoMsg
  ): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgGrantAllowanceResponse
  ): MsgGrantAllowanceResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgGrantAllowanceResponse',
      value: MsgGrantAllowanceResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgGrantAllowanceResponseProtoMsg
  ): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgGrantAllowanceResponse): Uint8Array {
    return MsgGrantAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgGrantAllowanceResponse
  ): MsgGrantAllowanceResponseProtoMsg {
    return {
      typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse',
      value: MsgGrantAllowanceResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return {
    granter: '',
    grantee: '',
  };
}
export const MsgRevokeAllowance = {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowance',
  encode(
    message: MsgRevokeAllowance,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgRevokeAllowance {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokeAllowance>): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? '';
    message.grantee = object.grantee ?? '';
    return message;
  },
  fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter === '' ? undefined : message.granter;
    obj.grantee = message.grantee === '' ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceAminoMsg {
    return {
      type: 'cosmos-sdk/MsgRevokeAllowance',
      value: MsgRevokeAllowance.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRevokeAllowanceProtoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.decode(message.value);
  },
  toProto(message: MsgRevokeAllowance): Uint8Array {
    return MsgRevokeAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceProtoMsg {
    return {
      typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowance',
      value: MsgRevokeAllowance.encode(message).finish(),
    };
  },
};
function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}
export const MsgRevokeAllowanceResponse = {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse',
  encode(
    _: MsgRevokeAllowanceResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgRevokeAllowanceResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
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
  fromPartial(
    _: Partial<MsgRevokeAllowanceResponse>
  ): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRevokeAllowanceResponseAminoMsg
  ): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgRevokeAllowanceResponse
  ): MsgRevokeAllowanceResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgRevokeAllowanceResponse',
      value: MsgRevokeAllowanceResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgRevokeAllowanceResponseProtoMsg
  ): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgRevokeAllowanceResponse): Uint8Array {
    return MsgRevokeAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRevokeAllowanceResponse
  ): MsgRevokeAllowanceResponseProtoMsg {
    return {
      typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse',
      value: MsgRevokeAllowanceResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgPruneAllowances(): MsgPruneAllowances {
  return {
    pruner: '',
  };
}
export const MsgPruneAllowances = {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgPruneAllowances',
  encode(
    message: MsgPruneAllowances,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.pruner !== '') {
      writer.uint32(10).string(message.pruner);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgPruneAllowances {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAllowances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPruneAllowances>): MsgPruneAllowances {
    const message = createBaseMsgPruneAllowances();
    message.pruner = object.pruner ?? '';
    return message;
  },
  fromAmino(object: MsgPruneAllowancesAmino): MsgPruneAllowances {
    const message = createBaseMsgPruneAllowances();
    if (object.pruner !== undefined && object.pruner !== null) {
      message.pruner = object.pruner;
    }
    return message;
  },
  toAmino(message: MsgPruneAllowances): MsgPruneAllowancesAmino {
    const obj: any = {};
    obj.pruner = message.pruner === '' ? undefined : message.pruner;
    return obj;
  },
  fromAminoMsg(object: MsgPruneAllowancesAminoMsg): MsgPruneAllowances {
    return MsgPruneAllowances.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAllowances): MsgPruneAllowancesAminoMsg {
    return {
      type: 'cosmos-sdk/MsgPruneAllowances',
      value: MsgPruneAllowances.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgPruneAllowancesProtoMsg): MsgPruneAllowances {
    return MsgPruneAllowances.decode(message.value);
  },
  toProto(message: MsgPruneAllowances): Uint8Array {
    return MsgPruneAllowances.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneAllowances): MsgPruneAllowancesProtoMsg {
    return {
      typeUrl: '/cosmos.feegrant.v1beta1.MsgPruneAllowances',
      value: MsgPruneAllowances.encode(message).finish(),
    };
  },
};
function createBaseMsgPruneAllowancesResponse(): MsgPruneAllowancesResponse {
  return {};
}
export const MsgPruneAllowancesResponse = {
  typeUrl: '/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse',
  encode(
    _: MsgPruneAllowancesResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgPruneAllowancesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAllowancesResponse();
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
  fromPartial(
    _: Partial<MsgPruneAllowancesResponse>
  ): MsgPruneAllowancesResponse {
    const message = createBaseMsgPruneAllowancesResponse();
    return message;
  },
  fromAmino(_: MsgPruneAllowancesResponseAmino): MsgPruneAllowancesResponse {
    const message = createBaseMsgPruneAllowancesResponse();
    return message;
  },
  toAmino(_: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgPruneAllowancesResponseAminoMsg
  ): MsgPruneAllowancesResponse {
    return MsgPruneAllowancesResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgPruneAllowancesResponse
  ): MsgPruneAllowancesResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgPruneAllowancesResponse',
      value: MsgPruneAllowancesResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgPruneAllowancesResponseProtoMsg
  ): MsgPruneAllowancesResponse {
    return MsgPruneAllowancesResponse.decode(message.value);
  },
  toProto(message: MsgPruneAllowancesResponse): Uint8Array {
    return MsgPruneAllowancesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgPruneAllowancesResponse
  ): MsgPruneAllowancesResponseProtoMsg {
    return {
      typeUrl: '/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse',
      value: MsgPruneAllowancesResponse.encode(message).finish(),
    };
  },
};
export const Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder = (
  input: BinaryReader | Uint8Array
): BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any => {
  const reader =
    input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case '/cosmos.feegrant.v1beta1.BasicAllowance':
      return BasicAllowance.decode(data.value);
    case '/cosmos.feegrant.v1beta1.PeriodicAllowance':
      return PeriodicAllowance.decode(data.value);
    case '/cosmos.feegrant.v1beta1.AllowedMsgAllowance':
      return AllowedMsgAllowance.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino = (
  content: AnyAmino
): Any => {
  switch (content.type) {
    case 'cosmos-sdk/BasicAllowance':
      return Any.fromPartial({
        typeUrl: '/cosmos.feegrant.v1beta1.BasicAllowance',
        value: BasicAllowance.encode(
          BasicAllowance.fromPartial(BasicAllowance.fromAmino(content.value))
        ).finish(),
      });
    case 'cosmos-sdk/PeriodicAllowance':
      return Any.fromPartial({
        typeUrl: '/cosmos.feegrant.v1beta1.PeriodicAllowance',
        value: PeriodicAllowance.encode(
          PeriodicAllowance.fromPartial(
            PeriodicAllowance.fromAmino(content.value)
          )
        ).finish(),
      });
    case 'cosmos-sdk/AllowedMsgAllowance':
      return Any.fromPartial({
        typeUrl: '/cosmos.feegrant.v1beta1.AllowedMsgAllowance',
        value: AllowedMsgAllowance.encode(
          AllowedMsgAllowance.fromPartial(
            AllowedMsgAllowance.fromAmino(content.value)
          )
        ).finish(),
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case '/cosmos.feegrant.v1beta1.BasicAllowance':
      return {
        type: 'cosmos-sdk/BasicAllowance',
        value: BasicAllowance.toAmino(
          BasicAllowance.decode(content.value, undefined)
        ),
      };
    case '/cosmos.feegrant.v1beta1.PeriodicAllowance':
      return {
        type: 'cosmos-sdk/PeriodicAllowance',
        value: PeriodicAllowance.toAmino(
          PeriodicAllowance.decode(content.value, undefined)
        ),
      };
    case '/cosmos.feegrant.v1beta1.AllowedMsgAllowance':
      return {
        type: 'cosmos-sdk/AllowedMsgAllowance',
        value: AllowedMsgAllowance.toAmino(
          AllowedMsgAllowance.decode(content.value, undefined)
        ),
      };
    default:
      return Any.toAmino(content);
  }
};
