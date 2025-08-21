import { DeliverTxResponse } from '@cosmjs/stargate';

import { RwaClient } from './client';

export interface AssetMetadata {
  assetId: string;
  name: string;
  symbol: string;
  description: string;
  imageUri: string;
  externalLink: string;
  issuer: string;
  issuanceDate: string;
  maturityDate?: string;
  denomination: string;
  totalSupply: string;
}

export interface CollateralStatus {
  assetId: string;
  collateralType: string;
  collateralAmount: string;
  collateralRatio: string;
  lastUpdated: string;
  custodian: string;
}

export interface IssuerCredentials {
  issuerId: string;
  name: string;
  jurisdiction: string;
  licenseNumber: string;
  verificationStatus: boolean;
  verificationDate: string;
}

export interface MintRequest {
  from: string;
  to: string;
  assetId: string;
  amount: string;
  metadata?: AssetMetadata;
  gas_limit: number;
}

export interface TransferRequest {
  from: string;
  to: string;
  assetId: string;
  amount: string;
  gas_limit: number;
}

export interface RedeemRequest {
  from: string;
  assetId: string;
  amount: string;
  gas_limit: number;
}

export interface AssetQueryRequest {
  assetId: string;
}

export interface IssuerQueryRequest {
  issuerId: string;
}

export class RwaProtocolModule {
  constructor(
    private rwaClient: RwaClient,
    private rwaProtocolAddress: string
  ) {}

  /**
   * Mints new tokenized RWA assets.
   * @param request - A MintRequest containing minting details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async mintAsset(
    request: MintRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      mint_asset: {
        recipient: request.to,
        asset_id: request.assetId,
        amount: request.amount,
        metadata: request.metadata,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.rwaProtocolAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Transfers tokenized RWA assets from one address to another.
   * @param request - A TransferRequest containing transfer details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async transferAsset(
    request: TransferRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      transfer_asset: {
        recipient: request.to,
        asset_id: request.assetId,
        amount: request.amount,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.rwaProtocolAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Redeems tokenized RWA assets.
   * @param request - A RedeemRequest containing redemption details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async redeemAsset(
    request: RedeemRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      redeem_asset: {
        asset_id: request.assetId,
        amount: request.amount,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.rwaProtocolAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Queries asset metadata for a specific asset.
   * @param request - An AssetQueryRequest containing the asset ID
   * @returns Promise<AssetMetadata> - The asset metadata
   */
  public async queryAssetMetadata(
    request: AssetQueryRequest
  ): Promise<AssetMetadata> {
    const queryMsg = {
      asset_metadata: {
        asset_id: request.assetId,
      },
    };

    return this.rwaClient.query<AssetMetadata>(
      this.rwaProtocolAddress,
      queryMsg
    );
  }

  /**
   * Queries collateral status for a specific asset.
   * @param request - An AssetQueryRequest containing the asset ID
   * @returns Promise<CollateralStatus> - The collateral status
   */
  public async queryCollateralStatus(
    request: AssetQueryRequest
  ): Promise<CollateralStatus> {
    const queryMsg = {
      collateral_status: {
        asset_id: request.assetId,
      },
    };

    return this.rwaClient.query<CollateralStatus>(
      this.rwaProtocolAddress,
      queryMsg
    );
  }

  /**
   * Queries issuer credentials for a specific issuer.
   * @param request - An IssuerQueryRequest containing the issuer ID
   * @returns Promise<IssuerCredentials> - The issuer credentials
   */
  public async queryIssuerCredentials(
    request: IssuerQueryRequest
  ): Promise<IssuerCredentials> {
    const queryMsg = {
      issuer_credentials: {
        issuer_id: request.issuerId,
      },
    };

    return this.rwaClient.query<IssuerCredentials>(
      this.rwaProtocolAddress,
      queryMsg
    );
  }

  /**
   * Updates asset metadata for a specific asset.
   * @param request - Contains from, assetId, metadata, and gas_limit
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async updateAssetMetadata(request: {
    from: string;
    assetId: string;
    metadata: Partial<AssetMetadata>;
    gas_limit: number;
  }): Promise<DeliverTxResponse> {
    const msg = {
      update_asset_metadata: {
        asset_id: request.assetId,
        metadata: request.metadata,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.rwaProtocolAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Updates collateral status for a specific asset.
   * @param request - Contains from, assetId, collateralStatus, and gas_limit
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async updateCollateralStatus(request: {
    from: string;
    assetId: string;
    collateralStatus: Partial<CollateralStatus>;
    gas_limit: number;
  }): Promise<DeliverTxResponse> {
    const msg = {
      update_collateral_status: {
        asset_id: request.assetId,
        collateral_status: request.collateralStatus,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.rwaProtocolAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Verifies an issuer's credentials.
   * @param request - Contains from, issuerId, verificationStatus, and gas_limit
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async verifyIssuerCredentials(request: {
    from: string;
    issuerId: string;
    verificationStatus: boolean;
    gas_limit: number;
  }): Promise<DeliverTxResponse> {
    const msg = {
      verify_issuer_credentials: {
        issuer_id: request.issuerId,
        verification_status: request.verificationStatus,
        verification_date: new Date().toISOString(),
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.rwaProtocolAddress,
      [],
      request.gas_limit
    );
  }
}