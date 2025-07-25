//@ts-nocheck
import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import {
  MsgAddCodeUploadParamsAddresses,
  MsgAddCodeUploadParamsAddressesResponse,
  MsgClearAdmin,
  MsgClearAdminResponse,
  MsgExecuteContract,
  MsgExecuteContractResponse,
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgInstantiateContract2Response,
  MsgInstantiateContractResponse,
  MsgMigrateContract,
  MsgMigrateContractResponse,
  MsgPinCodes,
  MsgPinCodesResponse,
  MsgRemoveCodeUploadParamsAddresses,
  MsgRemoveCodeUploadParamsAddressesResponse,
  MsgStoreAndInstantiateContract,
  MsgStoreAndInstantiateContractResponse,
  MsgStoreAndMigrateContract,
  MsgStoreAndMigrateContractResponse,
  MsgStoreCode,
  MsgStoreCodeResponse,
  MsgSudoContract,
  MsgSudoContractResponse,
  MsgUnpinCodes,
  MsgUnpinCodesResponse,
  MsgUpdateAdmin,
  MsgUpdateAdminResponse,
  MsgUpdateContractLabel,
  MsgUpdateContractLabelResponse,
  MsgUpdateInstantiateConfig,
  MsgUpdateInstantiateConfigResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from './tx';
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /**
   * InstantiateContract creates a new smart contract instance for the given
   *  code id.
   */
  instantiateContract(
    request: MsgInstantiateContract
  ): Promise<MsgInstantiateContractResponse>;
  /**
   * InstantiateContract2 creates a new smart contract instance for the given
   *  code id with a predictable address
   */
  instantiateContract2(
    request: MsgInstantiateContract2
  ): Promise<MsgInstantiateContract2Response>;
  /** Execute submits the given message data to a smart contract */
  executeContract(
    request: MsgExecuteContract
  ): Promise<MsgExecuteContractResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(
    request: MsgMigrateContract
  ): Promise<MsgMigrateContractResponse>;
  /** UpdateAdmin sets a new admin for a smart contract */
  updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
  /** ClearAdmin removes any admin stored for a smart contract */
  clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
  /** UpdateInstantiateConfig updates instantiate config for a smart contract */
  updateInstantiateConfig(
    request: MsgUpdateInstantiateConfig
  ): Promise<MsgUpdateInstantiateConfigResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/wasm
   * module parameters. The authority is defined in the keeper.
   *
   * Since: 0.40
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * SudoContract defines a governance operation for calling sudo
   * on a contract. The authority is defined in the keeper.
   *
   * Since: 0.40
   */
  sudoContract(request: MsgSudoContract): Promise<MsgSudoContractResponse>;
  /**
   * PinCodes defines a governance operation for pinning a set of
   * code ids in the wasmvm cache. The authority is defined in the keeper.
   *
   * Since: 0.40
   */
  pinCodes(request: MsgPinCodes): Promise<MsgPinCodesResponse>;
  /**
   * UnpinCodes defines a governance operation for unpinning a set of
   * code ids in the wasmvm cache. The authority is defined in the keeper.
   *
   * Since: 0.40
   */
  unpinCodes(request: MsgUnpinCodes): Promise<MsgUnpinCodesResponse>;
  /**
   * StoreAndInstantiateContract defines a governance operation for storing
   * and instantiating the contract. The authority is defined in the keeper.
   *
   * Since: 0.40
   */
  storeAndInstantiateContract(
    request: MsgStoreAndInstantiateContract
  ): Promise<MsgStoreAndInstantiateContractResponse>;
  /**
   * RemoveCodeUploadParamsAddresses defines a governance operation for
   * removing addresses from code upload params.
   * The authority is defined in the keeper.
   */
  removeCodeUploadParamsAddresses(
    request: MsgRemoveCodeUploadParamsAddresses
  ): Promise<MsgRemoveCodeUploadParamsAddressesResponse>;
  /**
   * AddCodeUploadParamsAddresses defines a governance operation for
   * adding addresses to code upload params.
   * The authority is defined in the keeper.
   */
  addCodeUploadParamsAddresses(
    request: MsgAddCodeUploadParamsAddresses
  ): Promise<MsgAddCodeUploadParamsAddressesResponse>;
  /**
   * StoreAndMigrateContract defines a governance operation for storing
   * and migrating the contract. The authority is defined in the keeper.
   *
   * Since: 0.42
   */
  storeAndMigrateContract(
    request: MsgStoreAndMigrateContract
  ): Promise<MsgStoreAndMigrateContractResponse>;
  /**
   * UpdateContractLabel sets a new label for a smart contract
   *
   * Since: 0.43
   */
  updateContractLabel(
    request: MsgUpdateContractLabel
  ): Promise<MsgUpdateContractLabelResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.instantiateContract2 = this.instantiateContract2.bind(this);
    this.executeContract = this.executeContract.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.clearAdmin = this.clearAdmin.bind(this);
    this.updateInstantiateConfig = this.updateInstantiateConfig.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.sudoContract = this.sudoContract.bind(this);
    this.pinCodes = this.pinCodes.bind(this);
    this.unpinCodes = this.unpinCodes.bind(this);
    this.storeAndInstantiateContract =
      this.storeAndInstantiateContract.bind(this);
    this.removeCodeUploadParamsAddresses =
      this.removeCodeUploadParamsAddresses.bind(this);
    this.addCodeUploadParamsAddresses =
      this.addCodeUploadParamsAddresses.bind(this);
    this.storeAndMigrateContract = this.storeAndMigrateContract.bind(this);
    this.updateContractLabel = this.updateContractLabel.bind(this);
  }
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request('cosmwasm.wasm.v1.Msg', 'StoreCode', data);
    return promise.then((data) =>
      MsgStoreCodeResponse.decode(new BinaryReader(data))
    );
  }
  instantiateContract(
    request: MsgInstantiateContract
  ): Promise<MsgInstantiateContractResponse> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'InstantiateContract',
      data
    );
    return promise.then((data) =>
      MsgInstantiateContractResponse.decode(new BinaryReader(data))
    );
  }
  instantiateContract2(
    request: MsgInstantiateContract2
  ): Promise<MsgInstantiateContract2Response> {
    const data = MsgInstantiateContract2.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'InstantiateContract2',
      data
    );
    return promise.then((data) =>
      MsgInstantiateContract2Response.decode(new BinaryReader(data))
    );
  }
  executeContract(
    request: MsgExecuteContract
  ): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'ExecuteContract',
      data
    );
    return promise.then((data) =>
      MsgExecuteContractResponse.decode(new BinaryReader(data))
    );
  }
  migrateContract(
    request: MsgMigrateContract
  ): Promise<MsgMigrateContractResponse> {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'MigrateContract',
      data
    );
    return promise.then((data) =>
      MsgMigrateContractResponse.decode(new BinaryReader(data))
    );
  }
  updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse> {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'UpdateAdmin',
      data
    );
    return promise.then((data) =>
      MsgUpdateAdminResponse.decode(new BinaryReader(data))
    );
  }
  clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse> {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'ClearAdmin',
      data
    );
    return promise.then((data) =>
      MsgClearAdminResponse.decode(new BinaryReader(data))
    );
  }
  updateInstantiateConfig(
    request: MsgUpdateInstantiateConfig
  ): Promise<MsgUpdateInstantiateConfigResponse> {
    const data = MsgUpdateInstantiateConfig.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'UpdateInstantiateConfig',
      data
    );
    return promise.then((data) =>
      MsgUpdateInstantiateConfigResponse.decode(new BinaryReader(data))
    );
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'UpdateParams',
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data))
    );
  }
  sudoContract(request: MsgSudoContract): Promise<MsgSudoContractResponse> {
    const data = MsgSudoContract.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'SudoContract',
      data
    );
    return promise.then((data) =>
      MsgSudoContractResponse.decode(new BinaryReader(data))
    );
  }
  pinCodes(request: MsgPinCodes): Promise<MsgPinCodesResponse> {
    const data = MsgPinCodes.encode(request).finish();
    const promise = this.rpc.request('cosmwasm.wasm.v1.Msg', 'PinCodes', data);
    return promise.then((data) =>
      MsgPinCodesResponse.decode(new BinaryReader(data))
    );
  }
  unpinCodes(request: MsgUnpinCodes): Promise<MsgUnpinCodesResponse> {
    const data = MsgUnpinCodes.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'UnpinCodes',
      data
    );
    return promise.then((data) =>
      MsgUnpinCodesResponse.decode(new BinaryReader(data))
    );
  }
  storeAndInstantiateContract(
    request: MsgStoreAndInstantiateContract
  ): Promise<MsgStoreAndInstantiateContractResponse> {
    const data = MsgStoreAndInstantiateContract.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'StoreAndInstantiateContract',
      data
    );
    return promise.then((data) =>
      MsgStoreAndInstantiateContractResponse.decode(new BinaryReader(data))
    );
  }
  removeCodeUploadParamsAddresses(
    request: MsgRemoveCodeUploadParamsAddresses
  ): Promise<MsgRemoveCodeUploadParamsAddressesResponse> {
    const data = MsgRemoveCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'RemoveCodeUploadParamsAddresses',
      data
    );
    return promise.then((data) =>
      MsgRemoveCodeUploadParamsAddressesResponse.decode(new BinaryReader(data))
    );
  }
  addCodeUploadParamsAddresses(
    request: MsgAddCodeUploadParamsAddresses
  ): Promise<MsgAddCodeUploadParamsAddressesResponse> {
    const data = MsgAddCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'AddCodeUploadParamsAddresses',
      data
    );
    return promise.then((data) =>
      MsgAddCodeUploadParamsAddressesResponse.decode(new BinaryReader(data))
    );
  }
  storeAndMigrateContract(
    request: MsgStoreAndMigrateContract
  ): Promise<MsgStoreAndMigrateContractResponse> {
    const data = MsgStoreAndMigrateContract.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'StoreAndMigrateContract',
      data
    );
    return promise.then((data) =>
      MsgStoreAndMigrateContractResponse.decode(new BinaryReader(data))
    );
  }
  updateContractLabel(
    request: MsgUpdateContractLabel
  ): Promise<MsgUpdateContractLabelResponse> {
    const data = MsgUpdateContractLabel.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Msg',
      'UpdateContractLabel',
      data
    );
    return promise.then((data) =>
      MsgUpdateContractLabelResponse.decode(new BinaryReader(data))
    );
  }
}
