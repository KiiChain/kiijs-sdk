//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
/** Module is the config object of the bank module. */
export interface Module {
  /**
   * blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving
   * funds. If left empty it defaults to the list of account names supplied in the auth module configuration as
   * module_account_permissions
   */
  blockedModuleAccountsOverride: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
  /**
   * restrictions_order specifies the order of send restrictions and should be
   * a list of module names which provide a send restriction instance. If no
   * order is provided, then restrictions will be applied in alphabetical order
   * of module names.
   */
  restrictionsOrder: string[];
}
export interface ModuleProtoMsg {
  typeUrl: '/cosmos.bank.module.v1.Module';
  value: Uint8Array;
}
/** Module is the config object of the bank module. */
export interface ModuleAmino {
  /**
   * blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving
   * funds. If left empty it defaults to the list of account names supplied in the auth module configuration as
   * module_account_permissions
   */
  blocked_module_accounts_override?: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority?: string;
  /**
   * restrictions_order specifies the order of send restrictions and should be
   * a list of module names which provide a send restriction instance. If no
   * order is provided, then restrictions will be applied in alphabetical order
   * of module names.
   */
  restrictions_order?: string[];
}
export interface ModuleAminoMsg {
  type: 'cosmos-sdk/Module';
  value: ModuleAmino;
}
/** Module is the config object of the bank module. */
export interface ModuleSDKType {
  blocked_module_accounts_override: string[];
  authority: string;
  restrictions_order: string[];
}
function createBaseModule(): Module {
  return {
    blockedModuleAccountsOverride: [],
    authority: '',
    restrictionsOrder: [],
  };
}
export const Module = {
  typeUrl: '/cosmos.bank.module.v1.Module',
  encode(
    message: Module,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.blockedModuleAccountsOverride) {
      writer.uint32(10).string(v!);
    }
    if (message.authority !== '') {
      writer.uint32(18).string(message.authority);
    }
    for (const v of message.restrictionsOrder) {
      writer.uint32(26).string(v!);
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
          message.blockedModuleAccountsOverride.push(reader.string());
          break;
        case 2:
          message.authority = reader.string();
          break;
        case 3:
          message.restrictionsOrder.push(reader.string());
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
    message.blockedModuleAccountsOverride =
      object.blockedModuleAccountsOverride?.map((e) => e) || [];
    message.authority = object.authority ?? '';
    message.restrictionsOrder = object.restrictionsOrder?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    message.blockedModuleAccountsOverride =
      object.blocked_module_accounts_override?.map((e) => e) || [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.restrictionsOrder = object.restrictions_order?.map((e) => e) || [];
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    if (message.blockedModuleAccountsOverride) {
      obj.blocked_module_accounts_override =
        message.blockedModuleAccountsOverride.map((e) => e);
    } else {
      obj.blocked_module_accounts_override =
        message.blockedModuleAccountsOverride;
    }
    obj.authority = message.authority === '' ? undefined : message.authority;
    if (message.restrictionsOrder) {
      obj.restrictions_order = message.restrictionsOrder.map((e) => e);
    } else {
      obj.restrictions_order = message.restrictionsOrder;
    }
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
      typeUrl: '/cosmos.bank.module.v1.Module',
      value: Module.encode(message).finish(),
    };
  },
};
