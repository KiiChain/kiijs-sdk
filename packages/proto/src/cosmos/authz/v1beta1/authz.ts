//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import {
  ContractExecutionAuthorization,
  ContractExecutionAuthorizationProtoMsg,
  ContractExecutionAuthorizationSDKType,
  ContractMigrationAuthorization,
  ContractMigrationAuthorizationProtoMsg,
  ContractMigrationAuthorizationSDKType,
  StoreCodeAuthorization,
  StoreCodeAuthorizationProtoMsg,
  StoreCodeAuthorizationSDKType,
} from '../../../cosmwasm/wasm/v1/authz';
import {
  Any,
  AnyAmino,
  AnyProtoMsg,
  AnySDKType,
} from '../../../google/protobuf/any';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { fromTimestamp, toTimestamp } from '../../../helpers';
import {
  TransferAuthorization,
  TransferAuthorizationProtoMsg,
  TransferAuthorizationSDKType,
} from '../../../ibc/applications/transfer/v1/authz';
import {
  SendAuthorization,
  SendAuthorizationProtoMsg,
  SendAuthorizationSDKType,
} from '../../bank/v1beta1/authz';
import {
  StakeAuthorization,
  StakeAuthorizationProtoMsg,
  StakeAuthorizationSDKType,
} from '../../staking/v1beta1/authz';
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
  $typeUrl?: '/cosmos.authz.v1beta1.GenericAuthorization';
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}
export interface GenericAuthorizationProtoMsg {
  typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization';
  value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationAmino {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg?: string;
}
export interface GenericAuthorizationAminoMsg {
  type: 'cosmos-sdk/GenericAuthorization';
  value: GenericAuthorizationAmino;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
  $typeUrl?: '/cosmos.authz.v1beta1.GenericAuthorization';
  msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
  authorization?:
    | GenericAuthorization
    | SendAuthorization
    | StakeAuthorization
    | StoreCodeAuthorization
    | ContractExecutionAuthorization
    | ContractMigrationAuthorization
    | TransferAuthorization
    | Any
    | undefined;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: Date;
}
export interface GrantProtoMsg {
  typeUrl: '/cosmos.authz.v1beta1.Grant';
  value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, 'authorization'> & {
  authorization?:
    | GenericAuthorizationProtoMsg
    | SendAuthorizationProtoMsg
    | StakeAuthorizationProtoMsg
    | StoreCodeAuthorizationProtoMsg
    | ContractExecutionAuthorizationProtoMsg
    | ContractMigrationAuthorizationProtoMsg
    | TransferAuthorizationProtoMsg
    | AnyProtoMsg
    | undefined;
};
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantAmino {
  authorization?: AnyAmino;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: string;
}
export interface GrantAminoMsg {
  type: 'cosmos-sdk/Grant';
  value: GrantAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
  authorization?:
    | GenericAuthorizationSDKType
    | SendAuthorizationSDKType
    | StakeAuthorizationSDKType
    | StoreCodeAuthorizationSDKType
    | ContractExecutionAuthorizationSDKType
    | ContractMigrationAuthorizationSDKType
    | TransferAuthorizationSDKType
    | AnySDKType
    | undefined;
  expiration?: Date;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
  granter: string;
  grantee: string;
  authorization?:
    | GenericAuthorization
    | SendAuthorization
    | StakeAuthorization
    | StoreCodeAuthorization
    | ContractExecutionAuthorization
    | ContractMigrationAuthorization
    | TransferAuthorization
    | Any
    | undefined;
  expiration?: Date;
}
export interface GrantAuthorizationProtoMsg {
  typeUrl: '/cosmos.authz.v1beta1.GrantAuthorization';
  value: Uint8Array;
}
export type GrantAuthorizationEncoded = Omit<
  GrantAuthorization,
  'authorization'
> & {
  authorization?:
    | GenericAuthorizationProtoMsg
    | SendAuthorizationProtoMsg
    | StakeAuthorizationProtoMsg
    | StoreCodeAuthorizationProtoMsg
    | ContractExecutionAuthorizationProtoMsg
    | ContractMigrationAuthorizationProtoMsg
    | TransferAuthorizationProtoMsg
    | AnyProtoMsg
    | undefined;
};
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationAmino {
  granter?: string;
  grantee?: string;
  authorization?: AnyAmino;
  expiration?: string;
}
export interface GrantAuthorizationAminoMsg {
  type: 'cosmos-sdk/GrantAuthorization';
  value: GrantAuthorizationAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationSDKType {
  granter: string;
  grantee: string;
  authorization?:
    | GenericAuthorizationSDKType
    | SendAuthorizationSDKType
    | StakeAuthorizationSDKType
    | StoreCodeAuthorizationSDKType
    | ContractExecutionAuthorizationSDKType
    | ContractMigrationAuthorizationSDKType
    | TransferAuthorizationSDKType
    | AnySDKType
    | undefined;
  expiration?: Date;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
  /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
  msgTypeUrls: string[];
}
export interface GrantQueueItemProtoMsg {
  typeUrl: '/cosmos.authz.v1beta1.GrantQueueItem';
  value: Uint8Array;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemAmino {
  /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
  msg_type_urls?: string[];
}
export interface GrantQueueItemAminoMsg {
  type: 'cosmos-sdk/GrantQueueItem';
  value: GrantQueueItemAmino;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemSDKType {
  msg_type_urls: string[];
}
function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    $typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
    msg: '',
  };
}
export const GenericAuthorization = {
  typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
  encode(
    message: GenericAuthorization,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.msg !== '') {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): GenericAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? '';
    return message;
  },
  fromAmino(object: GenericAuthorizationAmino): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    }
    return message;
  },
  toAmino(message: GenericAuthorization): GenericAuthorizationAmino {
    const obj: any = {};
    obj.msg = message.msg === '' ? undefined : message.msg;
    return obj;
  },
  fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization {
    return GenericAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: GenericAuthorization): GenericAuthorizationAminoMsg {
    return {
      type: 'cosmos-sdk/GenericAuthorization',
      value: GenericAuthorization.toAmino(message),
    };
  },
  fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization {
    return GenericAuthorization.decode(message.value);
  },
  toProto(message: GenericAuthorization): Uint8Array {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg {
    return {
      typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
      value: GenericAuthorization.encode(message).finish(),
    };
  },
};
function createBaseGrant(): Grant {
  return {
    authorization: undefined,
    expiration: undefined,
  };
}
export const Grant = {
  typeUrl: '/cosmos.authz.v1beta1.Grant',
  encode(
    message: Grant,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.authorization !== undefined) {
      Any.encode(
        message.authorization as Any,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization =
            Cosmos_authzv1beta1Authorization_InterfaceDecoder(reader) as Any;
          break;
        case 2:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Grant>): Grant {
    const message = createBaseGrant();
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromPartial(object.authorization)
        : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromAmino(object: GrantAmino): Grant {
    const message = createBaseGrant();
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = Cosmos_authzv1beta1Authorization_FromAmino(
        object.authorization
      );
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(
        Timestamp.fromAmino(object.expiration)
      );
    }
    return message;
  },
  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.authorization = message.authorization
      ? Cosmos_authzv1beta1Authorization_ToAmino(message.authorization as Any)
      : undefined;
    obj.expiration = message.expiration
      ? Timestamp.toAmino(toTimestamp(message.expiration))
      : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAminoMsg): Grant {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg(message: Grant): GrantAminoMsg {
    return {
      type: 'cosmos-sdk/Grant',
      value: Grant.toAmino(message),
    };
  },
  fromProtoMsg(message: GrantProtoMsg): Grant {
    return Grant.decode(message.value);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: '/cosmos.authz.v1beta1.Grant',
      value: Grant.encode(message).finish(),
    };
  },
};
function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    granter: '',
    grantee: '',
    authorization: undefined,
    expiration: undefined,
  };
}
export const GrantAuthorization = {
  typeUrl: '/cosmos.authz.v1beta1.GrantAuthorization',
  encode(
    message: GrantAuthorization,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(
        message.authorization as Any,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): GrantAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
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
          message.authorization =
            Cosmos_authzv1beta1Authorization_InterfaceDecoder(reader) as Any;
          break;
        case 4:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GrantAuthorization>): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? '';
    message.grantee = object.grantee ?? '';
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromPartial(object.authorization)
        : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromAmino(object: GrantAuthorizationAmino): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = Cosmos_authzv1beta1Authorization_FromAmino(
        object.authorization
      );
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(
        Timestamp.fromAmino(object.expiration)
      );
    }
    return message;
  },
  toAmino(message: GrantAuthorization): GrantAuthorizationAmino {
    const obj: any = {};
    obj.granter = message.granter === '' ? undefined : message.granter;
    obj.grantee = message.grantee === '' ? undefined : message.grantee;
    obj.authorization = message.authorization
      ? Cosmos_authzv1beta1Authorization_ToAmino(message.authorization as Any)
      : undefined;
    obj.expiration = message.expiration
      ? Timestamp.toAmino(toTimestamp(message.expiration))
      : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization {
    return GrantAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg {
    return {
      type: 'cosmos-sdk/GrantAuthorization',
      value: GrantAuthorization.toAmino(message),
    };
  },
  fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization {
    return GrantAuthorization.decode(message.value);
  },
  toProto(message: GrantAuthorization): Uint8Array {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg {
    return {
      typeUrl: '/cosmos.authz.v1beta1.GrantAuthorization',
      value: GrantAuthorization.encode(message).finish(),
    };
  },
};
function createBaseGrantQueueItem(): GrantQueueItem {
  return {
    msgTypeUrls: [],
  };
}
export const GrantQueueItem = {
  typeUrl: '/cosmos.authz.v1beta1.GrantQueueItem',
  encode(
    message: GrantQueueItem,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantQueueItem {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantQueueItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GrantQueueItem>): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: GrantQueueItemAmino): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msg_type_urls?.map((e) => e) || [];
    return message;
  },
  toAmino(message: GrantQueueItem): GrantQueueItemAmino {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: GrantQueueItemAminoMsg): GrantQueueItem {
    return GrantQueueItem.fromAmino(object.value);
  },
  toAminoMsg(message: GrantQueueItem): GrantQueueItemAminoMsg {
    return {
      type: 'cosmos-sdk/GrantQueueItem',
      value: GrantQueueItem.toAmino(message),
    };
  },
  fromProtoMsg(message: GrantQueueItemProtoMsg): GrantQueueItem {
    return GrantQueueItem.decode(message.value);
  },
  toProto(message: GrantQueueItem): Uint8Array {
    return GrantQueueItem.encode(message).finish();
  },
  toProtoMsg(message: GrantQueueItem): GrantQueueItemProtoMsg {
    return {
      typeUrl: '/cosmos.authz.v1beta1.GrantQueueItem',
      value: GrantQueueItem.encode(message).finish(),
    };
  },
};
export const Cosmos_authzv1beta1Authorization_InterfaceDecoder = (
  input: BinaryReader | Uint8Array
):
  | GenericAuthorization
  | SendAuthorization
  | StakeAuthorization
  | StoreCodeAuthorization
  | ContractExecutionAuthorization
  | ContractMigrationAuthorization
  | TransferAuthorization
  | Any => {
  const reader =
    input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case '/cosmos.authz.v1beta1.GenericAuthorization':
      return GenericAuthorization.decode(data.value);
    case '/cosmos.bank.v1beta1.SendAuthorization':
      return SendAuthorization.decode(data.value);
    case '/cosmos.staking.v1beta1.StakeAuthorization':
      return StakeAuthorization.decode(data.value);
    case '/cosmwasm.wasm.v1.StoreCodeAuthorization':
      return StoreCodeAuthorization.decode(data.value);
    case '/cosmwasm.wasm.v1.ContractExecutionAuthorization':
      return ContractExecutionAuthorization.decode(data.value);
    case '/cosmwasm.wasm.v1.ContractMigrationAuthorization':
      return ContractMigrationAuthorization.decode(data.value);
    case '/ibc.applications.transfer.v1.TransferAuthorization':
      return TransferAuthorization.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_authzv1beta1Authorization_FromAmino = (
  content: AnyAmino
): Any => {
  switch (content.type) {
    case 'cosmos-sdk/GenericAuthorization':
      return Any.fromPartial({
        typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
        value: GenericAuthorization.encode(
          GenericAuthorization.fromPartial(
            GenericAuthorization.fromAmino(content.value)
          )
        ).finish(),
      });
    case 'cosmos-sdk/SendAuthorization':
      return Any.fromPartial({
        typeUrl: '/cosmos.bank.v1beta1.SendAuthorization',
        value: SendAuthorization.encode(
          SendAuthorization.fromPartial(
            SendAuthorization.fromAmino(content.value)
          )
        ).finish(),
      });
    case 'cosmos-sdk/StakeAuthorization':
      return Any.fromPartial({
        typeUrl: '/cosmos.staking.v1beta1.StakeAuthorization',
        value: StakeAuthorization.encode(
          StakeAuthorization.fromPartial(
            StakeAuthorization.fromAmino(content.value)
          )
        ).finish(),
      });
    case 'wasm/StoreCodeAuthorization':
      return Any.fromPartial({
        typeUrl: '/cosmwasm.wasm.v1.StoreCodeAuthorization',
        value: StoreCodeAuthorization.encode(
          StoreCodeAuthorization.fromPartial(
            StoreCodeAuthorization.fromAmino(content.value)
          )
        ).finish(),
      });
    case 'wasm/ContractExecutionAuthorization':
      return Any.fromPartial({
        typeUrl: '/cosmwasm.wasm.v1.ContractExecutionAuthorization',
        value: ContractExecutionAuthorization.encode(
          ContractExecutionAuthorization.fromPartial(
            ContractExecutionAuthorization.fromAmino(content.value)
          )
        ).finish(),
      });
    case 'wasm/ContractMigrationAuthorization':
      return Any.fromPartial({
        typeUrl: '/cosmwasm.wasm.v1.ContractMigrationAuthorization',
        value: ContractMigrationAuthorization.encode(
          ContractMigrationAuthorization.fromPartial(
            ContractMigrationAuthorization.fromAmino(content.value)
          )
        ).finish(),
      });
    case 'cosmos-sdk/TransferAuthorization':
      return Any.fromPartial({
        typeUrl: '/ibc.applications.transfer.v1.TransferAuthorization',
        value: TransferAuthorization.encode(
          TransferAuthorization.fromPartial(
            TransferAuthorization.fromAmino(content.value)
          )
        ).finish(),
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_authzv1beta1Authorization_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case '/cosmos.authz.v1beta1.GenericAuthorization':
      return {
        type: 'cosmos-sdk/GenericAuthorization',
        value: GenericAuthorization.toAmino(
          GenericAuthorization.decode(content.value, undefined)
        ),
      };
    case '/cosmos.bank.v1beta1.SendAuthorization':
      return {
        type: 'cosmos-sdk/SendAuthorization',
        value: SendAuthorization.toAmino(
          SendAuthorization.decode(content.value, undefined)
        ),
      };
    case '/cosmos.staking.v1beta1.StakeAuthorization':
      return {
        type: 'cosmos-sdk/StakeAuthorization',
        value: StakeAuthorization.toAmino(
          StakeAuthorization.decode(content.value, undefined)
        ),
      };
    case '/cosmwasm.wasm.v1.StoreCodeAuthorization':
      return {
        type: 'wasm/StoreCodeAuthorization',
        value: StoreCodeAuthorization.toAmino(
          StoreCodeAuthorization.decode(content.value, undefined)
        ),
      };
    case '/cosmwasm.wasm.v1.ContractExecutionAuthorization':
      return {
        type: 'wasm/ContractExecutionAuthorization',
        value: ContractExecutionAuthorization.toAmino(
          ContractExecutionAuthorization.decode(content.value, undefined)
        ),
      };
    case '/cosmwasm.wasm.v1.ContractMigrationAuthorization':
      return {
        type: 'wasm/ContractMigrationAuthorization',
        value: ContractMigrationAuthorization.toAmino(
          ContractMigrationAuthorization.decode(content.value, undefined)
        ),
      };
    case '/ibc.applications.transfer.v1.TransferAuthorization':
      return {
        type: 'cosmos-sdk/TransferAuthorization',
        value: TransferAuthorization.toAmino(
          TransferAuthorization.decode(content.value, undefined)
        ),
      };
    default:
      return Any.toAmino(content);
  }
};
