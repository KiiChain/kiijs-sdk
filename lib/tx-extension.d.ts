import { Pubkey } from '@cosmjs/amino';
import { QueryClient } from '@cosmjs/stargate';
import { GetTxResponse, SimulateResponse } from 'cosmjs-types/cosmos/tx/v1beta1/service.js';
import { Any } from 'cosmjs-types/google/protobuf/any.js';
export interface TxExtension {
    readonly tx: {
        getTx: (txId: string) => Promise<GetTxResponse>;
        simulate: (messages: readonly Any[], memo: string | undefined, signer: Pubkey, sequence: number, nonCriticalExtensionOptions?: Any[]) => Promise<SimulateResponse>;
    };
}
export declare function setupTxExtension(base: QueryClient): TxExtension;
