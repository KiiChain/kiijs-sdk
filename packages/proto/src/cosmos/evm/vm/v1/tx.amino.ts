//@ts-nocheck
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/cosmos.evm.vm.v1.MsgEthereumTx": {
    aminoType: "cosmos/evm/MsgEthereumTx",
    toAmino: MsgEthereumTx.toAmino,
    fromAmino: MsgEthereumTx.fromAmino
  },
  "/cosmos.evm.vm.v1.MsgUpdateParams": {
    aminoType: "cosmos/evm/x/vm/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};