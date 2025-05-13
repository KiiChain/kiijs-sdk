//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddRateLimit, MsgUpdateRateLimit, MsgRemoveRateLimit, MsgResetRateLimit } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ratelimit.v1.MsgAddRateLimit", MsgAddRateLimit], ["/ratelimit.v1.MsgUpdateRateLimit", MsgUpdateRateLimit], ["/ratelimit.v1.MsgRemoveRateLimit", MsgRemoveRateLimit], ["/ratelimit.v1.MsgResetRateLimit", MsgResetRateLimit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addRateLimit(value: MsgAddRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgAddRateLimit",
        value: MsgAddRateLimit.encode(value).finish()
      };
    },
    updateRateLimit(value: MsgUpdateRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgUpdateRateLimit",
        value: MsgUpdateRateLimit.encode(value).finish()
      };
    },
    removeRateLimit(value: MsgRemoveRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgRemoveRateLimit",
        value: MsgRemoveRateLimit.encode(value).finish()
      };
    },
    resetRateLimit(value: MsgResetRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgResetRateLimit",
        value: MsgResetRateLimit.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addRateLimit(value: MsgAddRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgAddRateLimit",
        value
      };
    },
    updateRateLimit(value: MsgUpdateRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgUpdateRateLimit",
        value
      };
    },
    removeRateLimit(value: MsgRemoveRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgRemoveRateLimit",
        value
      };
    },
    resetRateLimit(value: MsgResetRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgResetRateLimit",
        value
      };
    }
  },
  fromPartial: {
    addRateLimit(value: MsgAddRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgAddRateLimit",
        value: MsgAddRateLimit.fromPartial(value)
      };
    },
    updateRateLimit(value: MsgUpdateRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgUpdateRateLimit",
        value: MsgUpdateRateLimit.fromPartial(value)
      };
    },
    removeRateLimit(value: MsgRemoveRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgRemoveRateLimit",
        value: MsgRemoveRateLimit.fromPartial(value)
      };
    },
    resetRateLimit(value: MsgResetRateLimit) {
      return {
        typeUrl: "/ratelimit.v1.MsgResetRateLimit",
        value: MsgResetRateLimit.fromPartial(value)
      };
    }
  }
};