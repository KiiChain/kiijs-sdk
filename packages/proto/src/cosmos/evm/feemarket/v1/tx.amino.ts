//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/cosmos.evm.feemarket.v1.MsgUpdateParams": {
    aminoType: "cosmos/evm/x/feemarket/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};