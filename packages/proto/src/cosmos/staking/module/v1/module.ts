//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
/** Module is the config object of the staking module. */
export interface Module {
  /**
   * hooks_order specifies the order of staking hooks and should be a list
   * of module names which provide a staking hooks instance. If no order is
   * provided, then hooks will be applied in alphabetical order of module names.
   */
  hooksOrder: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
  /** bech32_prefix_validator is the bech32 validator prefix for the app. */
  bech32PrefixValidator: string;
  /** bech32_prefix_consensus is the bech32 consensus node prefix for the app. */
  bech32PrefixConsensus: string;
}
export interface ModuleProtoMsg {
  typeUrl: '/cosmos.staking.module.v1.Module';
  value: Uint8Array;
}
/** Module is the config object of the staking module. */
export interface ModuleAmino {
  /**
   * hooks_order specifies the order of staking hooks and should be a list
   * of module names which provide a staking hooks instance. If no order is
   * provided, then hooks will be applied in alphabetical order of module names.
   */
  hooks_order?: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority?: string;
  /** bech32_prefix_validator is the bech32 validator prefix for the app. */
  bech32_prefix_validator?: string;
  /** bech32_prefix_consensus is the bech32 consensus node prefix for the app. */
  bech32_prefix_consensus?: string;
}
export interface ModuleAminoMsg {
  type: 'cosmos-sdk/Module';
  value: ModuleAmino;
}
/** Module is the config object of the staking module. */
export interface ModuleSDKType {
  hooks_order: string[];
  authority: string;
  bech32_prefix_validator: string;
  bech32_prefix_consensus: string;
}
function createBaseModule(): Module {
  return {
    hooksOrder: [],
    authority: '',
    bech32PrefixValidator: '',
    bech32PrefixConsensus: '',
  };
}
export const Module = {
  typeUrl: '/cosmos.staking.module.v1.Module',
  encode(
    message: Module,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.hooksOrder) {
      writer.uint32(10).string(v!);
    }
    if (message.authority !== '') {
      writer.uint32(18).string(message.authority);
    }
    if (message.bech32PrefixValidator !== '') {
      writer.uint32(26).string(message.bech32PrefixValidator);
    }
    if (message.bech32PrefixConsensus !== '') {
      writer.uint32(34).string(message.bech32PrefixConsensus);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hooksOrder.push(reader.string());
          break;
        case 2:
          message.authority = reader.string();
          break;
        case 3:
          message.bech32PrefixValidator = reader.string();
          break;
        case 4:
          message.bech32PrefixConsensus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.hooksOrder = object.hooksOrder?.map((e) => e) || [];
    message.authority = object.authority ?? '';
    message.bech32PrefixValidator = object.bech32PrefixValidator ?? '';
    message.bech32PrefixConsensus = object.bech32PrefixConsensus ?? '';
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    message.hooksOrder = object.hooks_order?.map((e) => e) || [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (
      object.bech32_prefix_validator !== undefined &&
      object.bech32_prefix_validator !== null
    ) {
      message.bech32PrefixValidator = object.bech32_prefix_validator;
    }
    if (
      object.bech32_prefix_consensus !== undefined &&
      object.bech32_prefix_consensus !== null
    ) {
      message.bech32PrefixConsensus = object.bech32_prefix_consensus;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    if (message.hooksOrder) {
      obj.hooks_order = message.hooksOrder.map((e) => e);
    } else {
      obj.hooks_order = message.hooksOrder;
    }
    obj.authority = message.authority === '' ? undefined : message.authority;
    obj.bech32_prefix_validator =
      message.bech32PrefixValidator === ''
        ? undefined
        : message.bech32PrefixValidator;
    obj.bech32_prefix_consensus =
      message.bech32PrefixConsensus === ''
        ? undefined
        : message.bech32PrefixConsensus;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: 'cosmos-sdk/Module',
      value: Module.toAmino(message),
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: '/cosmos.staking.module.v1.Module',
      value: Module.encode(message).finish(),
    };
  },
};
