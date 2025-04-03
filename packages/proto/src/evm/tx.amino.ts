//@ts-nocheck
import { MsgEVMTransaction, MsgSend, MsgRegisterPointer, MsgAssociateContractAddress, MsgAssociate } from "./tx";
export const AminoConverter = {
  "/kiichain.kiichain3.evm.MsgEVMTransaction": {
    aminoType: "/kiichain.kiichain3.evm.MsgEVMTransaction",
    toAmino: MsgEVMTransaction.toAmino,
    fromAmino: MsgEVMTransaction.fromAmino
  },
  "/kiichain.kiichain3.evm.MsgSend": {
    aminoType: "/kiichain.kiichain3.evm.MsgSend",
    toAmino: MsgSend.toAmino,
    fromAmino: MsgSend.fromAmino
  },
  "/kiichain.kiichain3.evm.MsgRegisterPointer": {
    aminoType: "/kiichain.kiichain3.evm.MsgRegisterPointer",
    toAmino: MsgRegisterPointer.toAmino,
    fromAmino: MsgRegisterPointer.fromAmino
  },
  "/kiichain.kiichain3.evm.MsgAssociateContractAddress": {
    aminoType: "/kiichain.kiichain3.evm.MsgAssociateContractAddress",
    toAmino: MsgAssociateContractAddress.toAmino,
    fromAmino: MsgAssociateContractAddress.fromAmino
  },
  "/kiichain.kiichain3.evm.MsgAssociate": {
    aminoType: "/kiichain.kiichain3.evm.MsgAssociate",
    toAmino: MsgAssociate.toAmino,
    fromAmino: MsgAssociate.fromAmino
  }
};