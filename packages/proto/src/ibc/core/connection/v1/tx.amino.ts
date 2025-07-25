//@ts-nocheck
import {
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
  MsgUpdateParams,
} from './tx';
export const AminoConverter = {
  '/ibc.core.connection.v1.MsgConnectionOpenInit': {
    aminoType: 'cosmos-sdk/MsgConnectionOpenInit',
    toAmino: MsgConnectionOpenInit.toAmino,
    fromAmino: MsgConnectionOpenInit.fromAmino,
  },
  '/ibc.core.connection.v1.MsgConnectionOpenTry': {
    aminoType: 'cosmos-sdk/MsgConnectionOpenTry',
    toAmino: MsgConnectionOpenTry.toAmino,
    fromAmino: MsgConnectionOpenTry.fromAmino,
  },
  '/ibc.core.connection.v1.MsgConnectionOpenAck': {
    aminoType: 'cosmos-sdk/MsgConnectionOpenAck',
    toAmino: MsgConnectionOpenAck.toAmino,
    fromAmino: MsgConnectionOpenAck.fromAmino,
  },
  '/ibc.core.connection.v1.MsgConnectionOpenConfirm': {
    aminoType: 'cosmos-sdk/MsgConnectionOpenConfirm',
    toAmino: MsgConnectionOpenConfirm.toAmino,
    fromAmino: MsgConnectionOpenConfirm.fromAmino,
  },
  '/ibc.core.connection.v1.MsgUpdateParams': {
    aminoType: 'cosmos-sdk/MsgUpdateParams',
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
};
