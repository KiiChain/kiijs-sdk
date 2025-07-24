//@ts-nocheck
import {
  MsgAddRateLimit,
  MsgRemoveRateLimit,
  MsgResetRateLimit,
  MsgUpdateRateLimit,
} from './tx';
export const AminoConverter = {
  '/ratelimit.v1.MsgAddRateLimit': {
    aminoType: 'ratelimit/MsgAddRateLimit',
    toAmino: MsgAddRateLimit.toAmino,
    fromAmino: MsgAddRateLimit.fromAmino,
  },
  '/ratelimit.v1.MsgUpdateRateLimit': {
    aminoType: 'ratelimit/MsgUpdateRateLimit',
    toAmino: MsgUpdateRateLimit.toAmino,
    fromAmino: MsgUpdateRateLimit.fromAmino,
  },
  '/ratelimit.v1.MsgRemoveRateLimit': {
    aminoType: 'ratelimit/MsgRemoveRateLimit',
    toAmino: MsgRemoveRateLimit.toAmino,
    fromAmino: MsgRemoveRateLimit.fromAmino,
  },
  '/ratelimit.v1.MsgResetRateLimit': {
    aminoType: 'ratelimit/MsgResetRateLimit',
    toAmino: MsgResetRateLimit.toAmino,
    fromAmino: MsgResetRateLimit.fromAmino,
  },
};
