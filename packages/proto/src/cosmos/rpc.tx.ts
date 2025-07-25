//@ts-nocheck
import { Rpc } from '../helpers';
export const createRPCMsgClient = async ({ rpc }: { rpc: Rpc }) => ({
  cosmos: {
    auth: {
      v1beta1: new (await import('./auth/v1beta1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    authz: {
      v1beta1: new (await import('./authz/v1beta1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    bank: {
      v1beta1: new (await import('./bank/v1beta1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    circuit: {
      v1: new (await import('./circuit/v1/tx.rpc.msg')).MsgClientImpl(rpc),
    },
    consensus: {
      v1: new (await import('./consensus/v1/tx.rpc.msg')).MsgClientImpl(rpc),
    },
    distribution: {
      v1beta1: new (
        await import('./distribution/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    evm: {
      erc20: {
        v1: new (await import('./evm/erc20/v1/tx.rpc.msg')).MsgClientImpl(rpc),
      },
      feemarket: {
        v1: new (await import('./evm/feemarket/v1/tx.rpc.msg')).MsgClientImpl(
          rpc
        ),
      },
      vm: {
        v1: new (await import('./evm/vm/v1/tx.rpc.msg')).MsgClientImpl(rpc),
      },
    },
    feegrant: {
      v1beta1: new (
        await import('./feegrant/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    gov: {
      v1: new (await import('./gov/v1/tx.rpc.msg')).MsgClientImpl(rpc),
      v1beta1: new (await import('./gov/v1beta1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    group: {
      v1: new (await import('./group/v1/tx.rpc.msg')).MsgClientImpl(rpc),
    },
    mint: {
      v1beta1: new (await import('./mint/v1beta1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    staking: {
      v1beta1: new (await import('./staking/v1beta1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    upgrade: {
      v1beta1: new (await import('./upgrade/v1beta1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    vesting: {
      v1beta1: new (await import('./vesting/v1beta1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
  },
});
