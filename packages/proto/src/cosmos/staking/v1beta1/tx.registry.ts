//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import {
  MsgBeginRedelegate,
  MsgCancelUnbondingDelegation,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
  MsgUpdateParams,
} from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ['/cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator],
  ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator],
  ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate],
  ['/cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate],
  ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate],
  [
    '/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation',
    MsgCancelUnbondingDelegation,
  ],
  ['/cosmos.staking.v1beta1.MsgUpdateParams', MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
        value: MsgCreateValidator.encode(value).finish(),
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
        value: MsgEditValidator.encode(value).finish(),
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.encode(value).finish(),
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value: MsgBeginRedelegate.encode(value).finish(),
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: MsgUndelegate.encode(value).finish(),
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation',
        value: MsgCancelUnbondingDelegation.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUpdateParams',
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
        value,
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
        value,
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value,
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value,
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value,
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation',
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUpdateParams',
        value,
      };
    },
  },
  fromPartial: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
        value: MsgCreateValidator.fromPartial(value),
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
        value: MsgEditValidator.fromPartial(value),
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.fromPartial(value),
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value: MsgBeginRedelegate.fromPartial(value),
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: MsgUndelegate.fromPartial(value),
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation',
        value: MsgCancelUnbondingDelegation.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUpdateParams',
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
