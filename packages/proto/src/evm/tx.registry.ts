//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEVMTransaction, MsgSend, MsgRegisterPointer, MsgAssociateContractAddress, MsgAssociate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kiichain.kiichain3.evm.MsgEVMTransaction", MsgEVMTransaction], ["/kiichain.kiichain3.evm.MsgSend", MsgSend], ["/kiichain.kiichain3.evm.MsgRegisterPointer", MsgRegisterPointer], ["/kiichain.kiichain3.evm.MsgAssociateContractAddress", MsgAssociateContractAddress], ["/kiichain.kiichain3.evm.MsgAssociate", MsgAssociate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    eVMTransaction(value: MsgEVMTransaction) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgEVMTransaction",
        value: MsgEVMTransaction.encode(value).finish()
      };
    },
    send(value: MsgSend) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    },
    registerPointer(value: MsgRegisterPointer) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgRegisterPointer",
        value: MsgRegisterPointer.encode(value).finish()
      };
    },
    associateContractAddress(value: MsgAssociateContractAddress) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgAssociateContractAddress",
        value: MsgAssociateContractAddress.encode(value).finish()
      };
    },
    associate(value: MsgAssociate) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgAssociate",
        value: MsgAssociate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    eVMTransaction(value: MsgEVMTransaction) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgEVMTransaction",
        value
      };
    },
    send(value: MsgSend) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgSend",
        value
      };
    },
    registerPointer(value: MsgRegisterPointer) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgRegisterPointer",
        value
      };
    },
    associateContractAddress(value: MsgAssociateContractAddress) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgAssociateContractAddress",
        value
      };
    },
    associate(value: MsgAssociate) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgAssociate",
        value
      };
    }
  },
  fromPartial: {
    eVMTransaction(value: MsgEVMTransaction) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgEVMTransaction",
        value: MsgEVMTransaction.fromPartial(value)
      };
    },
    send(value: MsgSend) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    },
    registerPointer(value: MsgRegisterPointer) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgRegisterPointer",
        value: MsgRegisterPointer.fromPartial(value)
      };
    },
    associateContractAddress(value: MsgAssociateContractAddress) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgAssociateContractAddress",
        value: MsgAssociateContractAddress.fromPartial(value)
      };
    },
    associate(value: MsgAssociate) {
      return {
        typeUrl: "/kiichain.kiichain3.evm.MsgAssociate",
        value: MsgAssociate.fromPartial(value)
      };
    }
  }
};