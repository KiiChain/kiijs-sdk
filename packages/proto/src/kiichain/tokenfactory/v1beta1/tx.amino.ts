//@ts-nocheck
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgForceTransfer, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/kiichain.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "tokenfactory/create-denom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/kiichain.tokenfactory.v1beta1.MsgMint": {
    aminoType: "tokenfactory/mint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/kiichain.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "tokenfactory/burn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/kiichain.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "tokenfactory/change-admin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/kiichain.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "tokenfactory/set-denom-metadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  },
  "/kiichain.tokenfactory.v1beta1.MsgForceTransfer": {
    aminoType: "tokenfactory/force-transfer",
    toAmino: MsgForceTransfer.toAmino,
    fromAmino: MsgForceTransfer.fromAmino
  },
  "/kiichain.tokenfactory.v1beta1.MsgUpdateParams": {
    aminoType: "tokenfactory/update-params",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};