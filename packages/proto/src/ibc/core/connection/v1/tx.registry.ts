//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import {
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
  MsgUpdateParams,
} from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ['/ibc.core.connection.v1.MsgConnectionOpenInit', MsgConnectionOpenInit],
  ['/ibc.core.connection.v1.MsgConnectionOpenTry', MsgConnectionOpenTry],
  ['/ibc.core.connection.v1.MsgConnectionOpenAck', MsgConnectionOpenAck],
  [
    '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
    MsgConnectionOpenConfirm,
  ],
  ['/ibc.core.connection.v1.MsgUpdateParams', MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    connectionOpenInit(value: MsgConnectionOpenInit) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenInit',
        value: MsgConnectionOpenInit.encode(value).finish(),
      };
    },
    connectionOpenTry(value: MsgConnectionOpenTry) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenTry',
        value: MsgConnectionOpenTry.encode(value).finish(),
      };
    },
    connectionOpenAck(value: MsgConnectionOpenAck) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenAck',
        value: MsgConnectionOpenAck.encode(value).finish(),
      };
    },
    connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
        value: MsgConnectionOpenConfirm.encode(value).finish(),
      };
    },
    updateConnectionParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgUpdateParams',
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    connectionOpenInit(value: MsgConnectionOpenInit) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenInit',
        value,
      };
    },
    connectionOpenTry(value: MsgConnectionOpenTry) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenTry',
        value,
      };
    },
    connectionOpenAck(value: MsgConnectionOpenAck) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenAck',
        value,
      };
    },
    connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
        value,
      };
    },
    updateConnectionParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgUpdateParams',
        value,
      };
    },
  },
  fromPartial: {
    connectionOpenInit(value: MsgConnectionOpenInit) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenInit',
        value: MsgConnectionOpenInit.fromPartial(value),
      };
    },
    connectionOpenTry(value: MsgConnectionOpenTry) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenTry',
        value: MsgConnectionOpenTry.fromPartial(value),
      };
    },
    connectionOpenAck(value: MsgConnectionOpenAck) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenAck',
        value: MsgConnectionOpenAck.fromPartial(value),
      };
    },
    connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
        value: MsgConnectionOpenConfirm.fromPartial(value),
      };
    },
    updateConnectionParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/ibc.core.connection.v1.MsgUpdateParams',
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
