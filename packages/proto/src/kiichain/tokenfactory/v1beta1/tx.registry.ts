//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import {
  MsgBurn,
  MsgChangeAdmin,
  MsgCreateDenom,
  MsgForceTransfer,
  MsgMint,
  MsgSetDenomMetadata,
  MsgUpdateParams,
} from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ['/kiichain.tokenfactory.v1beta1.MsgCreateDenom', MsgCreateDenom],
  ['/kiichain.tokenfactory.v1beta1.MsgMint', MsgMint],
  ['/kiichain.tokenfactory.v1beta1.MsgBurn', MsgBurn],
  ['/kiichain.tokenfactory.v1beta1.MsgChangeAdmin', MsgChangeAdmin],
  ['/kiichain.tokenfactory.v1beta1.MsgSetDenomMetadata', MsgSetDenomMetadata],
  ['/kiichain.tokenfactory.v1beta1.MsgForceTransfer', MsgForceTransfer],
  ['/kiichain.tokenfactory.v1beta1.MsgUpdateParams', MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgCreateDenom',
        value: MsgCreateDenom.encode(value).finish(),
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgMint',
        value: MsgMint.encode(value).finish(),
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgBurn',
        value: MsgBurn.encode(value).finish(),
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgChangeAdmin',
        value: MsgChangeAdmin.encode(value).finish(),
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgSetDenomMetadata',
        value: MsgSetDenomMetadata.encode(value).finish(),
      };
    },
    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgForceTransfer',
        value: MsgForceTransfer.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgUpdateParams',
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgCreateDenom',
        value,
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgMint',
        value,
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgBurn',
        value,
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgChangeAdmin',
        value,
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgSetDenomMetadata',
        value,
      };
    },
    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgForceTransfer',
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgUpdateParams',
        value,
      };
    },
  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgCreateDenom',
        value: MsgCreateDenom.fromPartial(value),
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgMint',
        value: MsgMint.fromPartial(value),
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgBurn',
        value: MsgBurn.fromPartial(value),
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgChangeAdmin',
        value: MsgChangeAdmin.fromPartial(value),
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgSetDenomMetadata',
        value: MsgSetDenomMetadata.fromPartial(value),
      };
    },
    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgForceTransfer',
        value: MsgForceTransfer.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/kiichain.tokenfactory.v1beta1.MsgUpdateParams',
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
