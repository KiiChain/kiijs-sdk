//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgUpdateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kiichain.kiichain3.tokenfactory.MsgCreateDenom", MsgCreateDenom], ["/kiichain.kiichain3.tokenfactory.MsgUpdateDenom", MsgUpdateDenom], ["/kiichain.kiichain3.tokenfactory.MsgMint", MsgMint], ["/kiichain.kiichain3.tokenfactory.MsgBurn", MsgBurn], ["/kiichain.kiichain3.tokenfactory.MsgChangeAdmin", MsgChangeAdmin], ["/kiichain.kiichain3.tokenfactory.MsgSetDenomMetadata", MsgSetDenomMetadata]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },
    updateDenom(value: MsgUpdateDenom) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgUpdateDenom",
        value: MsgUpdateDenom.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgChangeAdmin",
        value: MsgChangeAdmin.encode(value).finish()
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgCreateDenom",
        value
      };
    },
    updateDenom(value: MsgUpdateDenom) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgUpdateDenom",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgBurn",
        value
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgChangeAdmin",
        value
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgSetDenomMetadata",
        value
      };
    }
  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },
    updateDenom(value: MsgUpdateDenom) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgUpdateDenom",
        value: MsgUpdateDenom.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(value)
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/kiichain.kiichain3.tokenfactory.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    }
  }
};