//@ts-nocheck
import { Rpc } from '../helpers';
export const createRPCMsgClient = async ({ rpc }: { rpc: Rpc }) => ({
  cosmos: {
    auth: {
      v1beta1: new (
        await import('../cosmos/auth/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    authz: {
      v1beta1: new (
        await import('../cosmos/authz/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    bank: {
      v1beta1: new (
        await import('../cosmos/bank/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    circuit: {
      v1: new (await import('../cosmos/circuit/v1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    consensus: {
      v1: new (await import('../cosmos/consensus/v1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    distribution: {
      v1beta1: new (
        await import('../cosmos/distribution/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    evm: {
      erc20: {
        v1: new (
          await import('../cosmos/evm/erc20/v1/tx.rpc.msg')
        ).MsgClientImpl(rpc),
      },
      feemarket: {
        v1: new (
          await import('../cosmos/evm/feemarket/v1/tx.rpc.msg')
        ).MsgClientImpl(rpc),
      },
      vm: {
        v1: new (await import('../cosmos/evm/vm/v1/tx.rpc.msg')).MsgClientImpl(
          rpc
        ),
      },
    },
    feegrant: {
      v1beta1: new (
        await import('../cosmos/feegrant/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    gov: {
      v1: new (await import('../cosmos/gov/v1/tx.rpc.msg')).MsgClientImpl(rpc),
      v1beta1: new (
        await import('../cosmos/gov/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    group: {
      v1: new (await import('../cosmos/group/v1/tx.rpc.msg')).MsgClientImpl(
        rpc
      ),
    },
    mint: {
      v1beta1: new (
        await import('../cosmos/mint/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    staking: {
      v1beta1: new (
        await import('../cosmos/staking/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    upgrade: {
      v1beta1: new (
        await import('../cosmos/upgrade/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
    vesting: {
      v1beta1: new (
        await import('../cosmos/vesting/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
  },
  kiichain: {
    tokenfactory: {
      v1beta1: new (
        await import('./tokenfactory/v1beta1/tx.rpc.msg')
      ).MsgClientImpl(rpc),
    },
  },
});
