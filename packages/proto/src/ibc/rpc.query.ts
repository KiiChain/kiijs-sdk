//@ts-nocheck
import { QueryClient } from '@cosmjs/stargate';
import { HttpEndpoint, Tendermint34Client } from '@cosmjs/tendermint-rpc';
export const createRPCQueryClient = async ({
  rpcEndpoint,
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      auth: {
        v1beta1: (
          await import('../cosmos/auth/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      authz: {
        v1beta1: (
          await import('../cosmos/authz/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      bank: {
        v1beta1: (
          await import('../cosmos/bank/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      base: {
        node: {
          v1beta1: (
            await import('../cosmos/base/node/v1beta1/query.rpc.Service')
          ).createRpcQueryExtension(client),
        },
      },
      circuit: {
        v1: (
          await import('../cosmos/circuit/v1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      consensus: {
        v1: (
          await import('../cosmos/consensus/v1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      distribution: {
        v1beta1: (
          await import('../cosmos/distribution/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      evm: {
        erc20: {
          v1: (
            await import('../cosmos/evm/erc20/v1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
        feemarket: {
          v1: (
            await import('../cosmos/evm/feemarket/v1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
        vm: {
          v1: (
            await import('../cosmos/evm/vm/v1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
      },
      feegrant: {
        v1beta1: (
          await import('../cosmos/feegrant/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      gov: {
        v1: (
          await import('../cosmos/gov/v1/query.rpc.Query')
        ).createRpcQueryExtension(client),
        v1beta1: (
          await import('../cosmos/gov/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      group: {
        v1: (
          await import('../cosmos/group/v1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      mint: {
        v1beta1: (
          await import('../cosmos/mint/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      orm: {
        query: {
          v1alpha1: (
            await import('../cosmos/orm/query/v1alpha1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
      },
      params: {
        v1beta1: (
          await import('../cosmos/params/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      staking: {
        v1beta1: (
          await import('../cosmos/staking/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
      tx: {
        v1beta1: (
          await import('../cosmos/tx/v1beta1/service.rpc.Service')
        ).createRpcQueryExtension(client),
      },
      upgrade: {
        v1beta1: (
          await import('../cosmos/upgrade/v1beta1/query.rpc.Query')
        ).createRpcQueryExtension(client),
      },
    },
    ibc: {
      applications: {
        interchain_accounts: {
          controller: {
            v1: (
              await import(
                './applications/interchain_accounts/controller/v1/query.rpc.Query'
              )
            ).createRpcQueryExtension(client),
          },
          host: {
            v1: (
              await import(
                './applications/interchain_accounts/host/v1/query.rpc.Query'
              )
            ).createRpcQueryExtension(client),
          },
        },
        transfer: {
          v1: (
            await import('./applications/transfer/v1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
      },
      core: {
        channel: {
          v1: (
            await import('./core/channel/v1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
        client: {
          v1: (
            await import('./core/client/v1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
        connection: {
          v1: (
            await import('./core/connection/v1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
      },
      lightclients: {
        wasm: {
          v1: (
            await import('./lightclients/wasm/v1/query.rpc.Query')
          ).createRpcQueryExtension(client),
        },
      },
    },
  };
};
