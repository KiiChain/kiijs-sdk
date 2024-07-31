import { Pubkey } from '@cosmjs/amino';
import { EncodeObject, Registry } from '@cosmjs/proto-signing';
import { SimulateResponse } from 'cosmjs-types/cosmos/tx/v1beta1/service.js';
export interface GasSimulateResponse {
    gas_info: GasInfo;
}
export interface GasInfo {
    gas_wanted: string;
    gas_used: string;
}
export default function simulateTxRest(endpoint: string, registry: Registry, messages: readonly EncodeObject[], memo: string | undefined, signer: Pubkey, sequence: number, nonCriticalExtensionOptions?: EncodeObject[]): Promise<SimulateResponse>;
