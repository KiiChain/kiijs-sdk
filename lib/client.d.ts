import { StdFee } from '@cosmjs/amino';
import { EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { AuthExtension, BankExtension, SigningStargateClientOptions as BaseSigningStargateClientOptions, DeliverTxResponse, HttpEndpoint, QueryClient, SignerData, StakingExtension, StargateClient, StargateClientOptions } from '@cosmjs/stargate';
import { CometClient } from '@cosmjs/tendermint-rpc';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx.js';
import { TxExtension } from './tx-extension';
interface SigningStargateClientOptions extends BaseSigningStargateClientOptions {
    simulateEndpoint?: string;
}
export declare class KiiStargateClient extends StargateClient {
    readonly registry: Registry;
    readonly broadcastTimeoutMs: number | undefined;
    readonly broadcastPollIntervalMs: number | undefined;
    private readonly signer;
    private readonly aminoTypes;
    private readonly gasPrice;
    private readonly customQueryClient;
    private readonly simulateEndpoint;
    static connect(endpoint: string | HttpEndpoint, options?: StargateClientOptions): Promise<KiiStargateClient>;
    static connectWithSigner(endpoint: string | HttpEndpoint, signer: OfflineSigner, options?: SigningStargateClientOptions): Promise<KiiStargateClient>;
    static createWithSigner(cometClient: CometClient, signer: OfflineSigner, options?: SigningStargateClientOptions): Promise<KiiStargateClient>;
    static offline(signer: OfflineSigner, options?: SigningStargateClientOptions): Promise<KiiStargateClient>;
    protected constructor(cometClient: CometClient | undefined, signer: OfflineSigner, options: SigningStargateClientOptions);
    protected forceGetQueryClient(): QueryClient & AuthExtension & BankExtension & StakingExtension & TxExtension;
    simulate(signerAddress: string, messages: readonly EncodeObject[], memo: string | undefined, nonCriticalExtensionOptions?: EncodeObject[]): Promise<number>;
    estimate(signerAddress: string, messages: readonly EncodeObject[], memo: string | undefined, nonCriticalExtensionOptions?: EncodeObject[], fee?: StdFee | 'auto' | number): Promise<StdFee>;
    signAndBroadcast(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | 'auto' | number, memo?: string, timeoutHeight?: bigint, nonCriticalExtensionOptions?: EncodeObject[]): Promise<DeliverTxResponse>;
    signAndBroadcastSync(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | 'auto' | number, memo?: string, timeoutHeight?: bigint, nonCriticalExtensionOptions?: EncodeObject[]): Promise<string>;
    sign(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, explicitSignerData?: SignerData, timeoutHeight?: bigint, nonCriticalExtensionOptions?: EncodeObject[]): Promise<TxRaw>;
    private signAmino;
    private signDirect;
}
export {};
