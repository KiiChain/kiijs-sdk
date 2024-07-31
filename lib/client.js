"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KiiStargateClient = void 0;
const amino_1 = require("@cosmjs/amino");
const encoding_1 = require("@cosmjs/encoding");
const math_1 = require("@cosmjs/math");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const utils_1 = require("@cosmjs/utils");
const signing_js_1 = require("cosmjs-types/cosmos/tx/signing/v1beta1/signing.js");
const tx_js_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx.js");
const simulate_tx_rest_1 = __importDefault(require("simulate-tx-rest"));
const tx_extension_1 = require("./tx-extension");
class KiiStargateClient extends stargate_1.StargateClient {
    static connect(endpoint, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const cometClient = yield (0, tendermint_rpc_1.connectComet)(endpoint);
            return new KiiStargateClient(cometClient, undefined, options);
        });
    }
    static connectWithSigner(endpoint, signer, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const cometClient = yield (0, tendermint_rpc_1.connectComet)(endpoint);
            return KiiStargateClient.createWithSigner(cometClient, signer, options);
        });
    }
    static createWithSigner(cometClient, signer, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new KiiStargateClient(cometClient, signer, options);
        });
    }
    static offline(signer, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new KiiStargateClient(undefined, signer, options);
        });
    }
    constructor(cometClient, signer, options) {
        super(cometClient, options);
        const { registry = new proto_signing_1.Registry(stargate_1.defaultRegistryTypes), aminoTypes = new stargate_1.AminoTypes((0, stargate_1.createDefaultAminoConverters)()), } = options;
        this.registry = registry;
        this.aminoTypes = aminoTypes;
        this.signer = signer;
        this.broadcastTimeoutMs = options.broadcastTimeoutMs;
        this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
        this.gasPrice = options.gasPrice;
        this.simulateEndpoint = options.simulateEndpoint;
        if (cometClient) {
            this.customQueryClient = stargate_1.QueryClient.withExtensions(cometClient, stargate_1.setupAuthExtension, stargate_1.setupBankExtension, stargate_1.setupStakingExtension, tx_extension_1.setupTxExtension);
        }
    }
    forceGetQueryClient() {
        if (!this.customQueryClient) {
            throw new Error('Query client not available. You cannot use online functionality in offline mode.');
        }
        return this.customQueryClient;
    }
    simulate(signerAddress, messages, memo, nonCriticalExtensionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const accountFromSigner = (yield this.signer.getAccounts()).find((account) => account.address === signerAddress);
            if (!accountFromSigner) {
                throw new Error('Failed to retrieve account from signer');
            }
            const pubkey = (0, amino_1.encodeSecp256k1Pubkey)(accountFromSigner.pubkey);
            const { sequence } = yield this.getSequence(signerAddress);
            let gasInfo;
            if (this.simulateEndpoint) {
                ;
                ({ gasInfo } = yield (0, simulate_tx_rest_1.default)(this.simulateEndpoint, this.registry, messages, memo, pubkey, sequence, nonCriticalExtensionOptions));
            }
            else {
                const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));
                const anyNonCriticalExtensionOptions = nonCriticalExtensionOptions === null || nonCriticalExtensionOptions === void 0 ? void 0 : nonCriticalExtensionOptions.map((m) => this.registry.encodeAsAny(m));
                ({ gasInfo } = yield this.forceGetQueryClient().tx.simulate(anyMsgs, memo, pubkey, sequence, anyNonCriticalExtensionOptions));
            }
            (0, utils_1.assertDefined)(gasInfo);
            return math_1.Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
        });
    }
    estimate(signerAddress, messages, memo, nonCriticalExtensionOptions, fee = 'auto') {
        return __awaiter(this, void 0, void 0, function* () {
            (0, utils_1.assertDefined)(this.gasPrice, 'Gas price must be set in the client options when auto gas is used.');
            const gasEstimation = yield this.simulate(signerAddress, messages, memo, nonCriticalExtensionOptions);
            const multiplier = typeof fee === 'number' ? fee : 1.4;
            return (0, stargate_1.calculateFee)(Math.round(gasEstimation * multiplier), this.gasPrice);
        });
    }
    signAndBroadcast(signerAddress, messages, fee, memo = '', timeoutHeight, nonCriticalExtensionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let usedFee;
            if (fee == 'auto' || typeof fee === 'number') {
                (0, utils_1.assertDefined)(this.gasPrice, 'Gas price must be set in the client options when auto gas is used.');
                const gasEstimation = yield this.simulate(signerAddress, messages, memo, nonCriticalExtensionOptions);
                const multiplier = typeof fee === 'number' ? fee : 1.4;
                usedFee = (0, stargate_1.calculateFee)(Math.round(gasEstimation * multiplier), this.gasPrice);
            }
            else {
                usedFee = fee;
            }
            const txRaw = yield this.sign(signerAddress, messages, usedFee, memo, undefined, timeoutHeight, nonCriticalExtensionOptions);
            const txBytes = tx_js_1.TxRaw.encode(txRaw).finish();
            return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
        });
    }
    signAndBroadcastSync(signerAddress, messages, fee, memo = '', timeoutHeight, nonCriticalExtensionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let usedFee;
            if (fee == 'auto' || typeof fee === 'number') {
                (0, utils_1.assertDefined)(this.gasPrice, 'Gas price must be set in the client options when auto gas is used.');
                const gasEstimation = yield this.simulate(signerAddress, messages, memo, nonCriticalExtensionOptions);
                const multiplier = typeof fee === 'number' ? fee : 1.3;
                usedFee = (0, stargate_1.calculateFee)(Math.round(gasEstimation * multiplier), this.gasPrice);
            }
            else {
                usedFee = fee;
            }
            const txRaw = yield this.sign(signerAddress, messages, usedFee, memo, undefined, timeoutHeight, nonCriticalExtensionOptions);
            const txBytes = tx_js_1.TxRaw.encode(txRaw).finish();
            return this.broadcastTxSync(txBytes);
        });
    }
    sign(signerAddress, messages, fee, memo, explicitSignerData, timeoutHeight, nonCriticalExtensionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let signerData;
            if (explicitSignerData) {
                signerData = explicitSignerData;
            }
            else {
                const { accountNumber, sequence } = yield this.getSequence(signerAddress);
                const chainId = yield this.getChainId();
                signerData = {
                    accountNumber: accountNumber,
                    sequence: sequence,
                    chainId: chainId,
                };
            }
            return (0, proto_signing_1.isOfflineDirectSigner)(this.signer)
                ? this.signDirect(signerAddress, messages, fee, memo, signerData, timeoutHeight, nonCriticalExtensionOptions)
                : this.signAmino(signerAddress, messages, fee, memo, signerData, timeoutHeight, nonCriticalExtensionOptions);
        });
    }
    signAmino(signerAddress, messages, fee, memo, { accountNumber, sequence, chainId }, timeoutHeight, nonCriticalExtensionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, utils_1.assert)(!(0, proto_signing_1.isOfflineDirectSigner)(this.signer));
            const accountFromSigner = (yield this.signer.getAccounts()).find((account) => account.address === signerAddress);
            if (!accountFromSigner) {
                throw new Error('Failed to retrieve account from signer');
            }
            const pubkey = (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(accountFromSigner.pubkey));
            const signMode = signing_js_1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
            const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
            const signDoc = (0, amino_1.makeSignDoc)(msgs, fee, chainId, memo, accountNumber, sequence, timeoutHeight);
            const { signature, signed } = yield this.signer.signAmino(signerAddress, signDoc);
            const anyNonCriticalExtensionOptions = nonCriticalExtensionOptions === null || nonCriticalExtensionOptions === void 0 ? void 0 : nonCriticalExtensionOptions.map((m) => this.registry.encodeAsAny(m));
            const signedTxBody = {
                messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
                memo: signed.memo,
                timeoutHeight: timeoutHeight,
                nonCriticalExtensionOptions: anyNonCriticalExtensionOptions,
            };
            const signedTxBodyEncodeObject = {
                typeUrl: '/cosmos.tx.v1beta1.TxBody',
                value: signedTxBody,
            };
            const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
            const signedGasLimit = math_1.Int53.fromString(signed.fee.gas).toNumber();
            const signedSequence = math_1.Int53.fromString(signed.sequence).toNumber();
            const signedAuthInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, signed.fee.granter, signed.fee.payer, signMode);
            return tx_js_1.TxRaw.fromPartial({
                bodyBytes: signedTxBodyBytes,
                authInfoBytes: signedAuthInfoBytes,
                signatures: [(0, encoding_1.fromBase64)(signature.signature)],
            });
        });
    }
    signDirect(signerAddress, messages, fee, memo, { accountNumber, sequence, chainId }, timeoutHeight, nonCriticalExtensionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, utils_1.assert)((0, proto_signing_1.isOfflineDirectSigner)(this.signer));
            const accountFromSigner = (yield this.signer.getAccounts()).find((account) => account.address === signerAddress);
            if (!accountFromSigner) {
                throw new Error('Failed to retrieve account from signer');
            }
            const pubkey = (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(accountFromSigner.pubkey));
            const anyNonCriticalExtensionOptions = nonCriticalExtensionOptions === null || nonCriticalExtensionOptions === void 0 ? void 0 : nonCriticalExtensionOptions.map((m) => this.registry.encodeAsAny(m));
            const txBodyEncodeObject = {
                typeUrl: '/cosmos.tx.v1beta1.TxBody',
                value: {
                    messages: messages,
                    memo: memo,
                    timeoutHeight: timeoutHeight,
                    nonCriticalExtensionOptions: anyNonCriticalExtensionOptions,
                },
            };
            const txBodyBytes = this.registry.encode(txBodyEncodeObject);
            const gasLimit = math_1.Int53.fromString(fee.gas).toNumber();
            const authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey, sequence }], fee.amount, gasLimit, fee.granter, fee.payer);
            const signDoc = (0, proto_signing_1.makeSignDoc)(txBodyBytes, authInfoBytes, chainId, accountNumber);
            const { signature, signed } = yield this.signer.signDirect(signerAddress, signDoc);
            return tx_js_1.TxRaw.fromPartial({
                bodyBytes: signed.bodyBytes,
                authInfoBytes: signed.authInfoBytes,
                signatures: [(0, encoding_1.fromBase64)(signature.signature)],
            });
        });
    }
}
exports.KiiStargateClient = KiiStargateClient;
