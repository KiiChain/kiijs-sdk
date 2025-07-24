//@ts-nocheck
import {
  MsgConvertERC20,
  MsgRegisterERC20,
  MsgToggleConversion,
  MsgUpdateParams,
} from './tx';
export const AminoConverter = {
  '/cosmos.evm.erc20.v1.MsgConvertERC20': {
    aminoType: 'cosmos/evm/MsgConvertERC20',
    toAmino: MsgConvertERC20.toAmino,
    fromAmino: MsgConvertERC20.fromAmino,
  },
  '/cosmos.evm.erc20.v1.MsgUpdateParams': {
    aminoType: 'cosmos/evm/x/erc20/MsgUpdateParams',
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  '/cosmos.evm.erc20.v1.MsgRegisterERC20': {
    aminoType: 'cosmos/evm/x/erc20/MsgRegisterERC20',
    toAmino: MsgRegisterERC20.toAmino,
    fromAmino: MsgRegisterERC20.fromAmino,
  },
  '/cosmos.evm.erc20.v1.MsgToggleConversion': {
    aminoType: 'cosmos/evm/x/erc20/MsgToggleConversion',
    toAmino: MsgToggleConversion.toAmino,
    fromAmino: MsgToggleConversion.fromAmino,
  },
};
