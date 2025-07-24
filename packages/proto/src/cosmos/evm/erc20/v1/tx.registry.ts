//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import {
  MsgConvertERC20,
  MsgRegisterERC20,
  MsgToggleConversion,
  MsgUpdateParams,
} from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ['/cosmos.evm.erc20.v1.MsgConvertERC20', MsgConvertERC20],
  ['/cosmos.evm.erc20.v1.MsgUpdateParams', MsgUpdateParams],
  ['/cosmos.evm.erc20.v1.MsgRegisterERC20', MsgRegisterERC20],
  ['/cosmos.evm.erc20.v1.MsgToggleConversion', MsgToggleConversion],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgConvertERC20',
        value: MsgConvertERC20.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgUpdateParams',
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    registerERC20(value: MsgRegisterERC20) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgRegisterERC20',
        value: MsgRegisterERC20.encode(value).finish(),
      };
    },
    toggleConversion(value: MsgToggleConversion) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgToggleConversion',
        value: MsgToggleConversion.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgConvertERC20',
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgUpdateParams',
        value,
      };
    },
    registerERC20(value: MsgRegisterERC20) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgRegisterERC20',
        value,
      };
    },
    toggleConversion(value: MsgToggleConversion) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgToggleConversion',
        value,
      };
    },
  },
  fromPartial: {
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgConvertERC20',
        value: MsgConvertERC20.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgUpdateParams',
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    registerERC20(value: MsgRegisterERC20) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgRegisterERC20',
        value: MsgRegisterERC20.fromPartial(value),
      };
    },
    toggleConversion(value: MsgToggleConversion) {
      return {
        typeUrl: '/cosmos.evm.erc20.v1.MsgToggleConversion',
        value: MsgToggleConversion.fromPartial(value),
      };
    },
  },
};
