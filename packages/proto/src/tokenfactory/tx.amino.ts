//@ts-nocheck
import { MsgCreateDenom, MsgUpdateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const AminoConverter = {
  "/kiichain.kiichain3.tokenfactory.MsgCreateDenom": {
    aminoType: "/kiichain.kiichain3.tokenfactory.MsgCreateDenom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/kiichain.kiichain3.tokenfactory.MsgUpdateDenom": {
    aminoType: "/kiichain.kiichain3.tokenfactory.MsgUpdateDenom",
    toAmino: MsgUpdateDenom.toAmino,
    fromAmino: MsgUpdateDenom.fromAmino
  },
  "/kiichain.kiichain3.tokenfactory.MsgMint": {
    aminoType: "/kiichain.kiichain3.tokenfactory.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/kiichain.kiichain3.tokenfactory.MsgBurn": {
    aminoType: "/kiichain.kiichain3.tokenfactory.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/kiichain.kiichain3.tokenfactory.MsgChangeAdmin": {
    aminoType: "/kiichain.kiichain3.tokenfactory.MsgChangeAdmin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/kiichain.kiichain3.tokenfactory.MsgSetDenomMetadata": {
    aminoType: "/kiichain.kiichain3.tokenfactory.MsgSetDenomMetadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  }
};