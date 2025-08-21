import { DeliverTxResponse } from '@cosmjs/stargate';

import { RwaClient } from '../src/client';
import {
  RwaProtocolModule,
  AssetMetadata,
  CollateralStatus,
  IssuerCredentials,
} from '../src/protocol';

// Mock the RwaClient
jest.mock('../src/client');

describe('RwaProtocolModule', () => {
  let rwaClient: jest.Mocked<RwaClient>;
  let rwaProtocolModule: RwaProtocolModule;
  const mockRwaProtocolAddress = 'kii1rwaprotocoladdress';
  const mockFromAddress = 'kii1fromaddress';
  const mockToAddress = 'kii1toaddress';
  const mockAssetId = 'asset123';
  const mockIssuerId = 'issuer123';
  const mockGasLimit = 200000;

  beforeEach(() => {
    // Clear all mocks
    jest.clearAllMocks();

    // Create a mock RwaClient
    // We need to mock the static 'new' method since the constructor is private
    rwaClient = {} as jest.Mocked<RwaClient>;
    rwaClient.execute = jest.fn().mockResolvedValue({} as DeliverTxResponse);
    rwaClient.query = jest
      .fn()
      .mockImplementation((contractAddress, queryMsg) => {
        if (queryMsg.asset_metadata) {
          return Promise.resolve({
            assetId: mockAssetId,
            name: 'Test Asset',
            symbol: 'TRWA',
            description: 'Test RWA Asset',
            imageUri: 'https://example.com/image.png',
            externalLink: 'https://example.com',
            issuer: mockIssuerId,
            issuanceDate: '2023-01-01T00:00:00Z',
            denomination: 'USD',
            totalSupply: '1000000',
          } as AssetMetadata);
        } else if (queryMsg.collateral_status) {
          return Promise.resolve({
            assetId: mockAssetId,
            collateralType: 'FIAT',
            collateralAmount: '1000000',
            collateralRatio: '1.0',
            lastUpdated: '2023-01-01T00:00:00Z',
            custodian: 'Test Custodian',
          } as CollateralStatus);
        } else if (queryMsg.issuer_credentials) {
          return Promise.resolve({
            issuerId: mockIssuerId,
            name: 'Test Issuer',
            jurisdiction: 'Test Jurisdiction',
            licenseNumber: 'LICENSE123',
            verificationStatus: true,
            verificationDate: '2023-01-01T00:00:00Z',
          } as IssuerCredentials);
        }
        return Promise.resolve({});
      });

    // Create the RwaProtocolModule with the mock client
    rwaProtocolModule = new RwaProtocolModule(
      rwaClient,
      mockRwaProtocolAddress
    );
  });

  describe('mintAsset', () => {
    it('should call execute with correct parameters', async () => {
      const mockMetadata: AssetMetadata = {
        assetId: mockAssetId,
        name: 'Test Asset',
        symbol: 'TRWA',
        description: 'Test RWA Asset',
        imageUri: 'https://example.com/image.png',
        externalLink: 'https://example.com',
        issuer: mockIssuerId,
        issuanceDate: '2023-01-01T00:00:00Z',
        denomination: 'USD',
        totalSupply: '1000000',
      };

      await rwaProtocolModule.mintAsset({
        from: mockFromAddress,
        to: mockToAddress,
        assetId: mockAssetId,
        amount: '1000',
        metadata: mockMetadata,
        gas_limit: mockGasLimit,
      });

      expect(rwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          mint_asset: {
            recipient: mockToAddress,
            asset_id: mockAssetId,
            amount: '1000',
            metadata: mockMetadata,
          },
        },
        mockRwaProtocolAddress,
        [],
        mockGasLimit
      );
    });
  });

  describe('transferAsset', () => {
    it('should call execute with correct parameters', async () => {
      await rwaProtocolModule.transferAsset({
        from: mockFromAddress,
        to: mockToAddress,
        assetId: mockAssetId,
        amount: '500',
        gas_limit: mockGasLimit,
      });

      expect(rwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          transfer_asset: {
            recipient: mockToAddress,
            asset_id: mockAssetId,
            amount: '500',
          },
        },
        mockRwaProtocolAddress,
        [],
        mockGasLimit
      );
    });
  });

  describe('redeemAsset', () => {
    it('should call execute with correct parameters', async () => {
      await rwaProtocolModule.redeemAsset({
        from: mockFromAddress,
        assetId: mockAssetId,
        amount: '200',
        gas_limit: mockGasLimit,
      });

      expect(rwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          redeem_asset: {
            asset_id: mockAssetId,
            amount: '200',
          },
        },
        mockRwaProtocolAddress,
        [],
        mockGasLimit
      );
    });
  });

  describe('queryAssetMetadata', () => {
    it('should call query with correct parameters and return asset metadata', async () => {
      const result = await rwaProtocolModule.queryAssetMetadata({
        assetId: mockAssetId,
      });

      expect(rwaClient.query).toHaveBeenCalledWith(mockRwaProtocolAddress, {
        asset_metadata: {
          asset_id: mockAssetId,
        },
      });

      expect(result).toEqual({
        assetId: mockAssetId,
        name: 'Test Asset',
        symbol: 'TRWA',
        description: 'Test RWA Asset',
        imageUri: 'https://example.com/image.png',
        externalLink: 'https://example.com',
        issuer: mockIssuerId,
        issuanceDate: '2023-01-01T00:00:00Z',
        denomination: 'USD',
        totalSupply: '1000000',
      });
    });
  });

  describe('queryCollateralStatus', () => {
    it('should call query with correct parameters and return collateral status', async () => {
      const result = await rwaProtocolModule.queryCollateralStatus({
        assetId: mockAssetId,
      });

      expect(rwaClient.query).toHaveBeenCalledWith(mockRwaProtocolAddress, {
        collateral_status: {
          asset_id: mockAssetId,
        },
      });

      expect(result).toEqual({
        assetId: mockAssetId,
        collateralType: 'FIAT',
        collateralAmount: '1000000',
        collateralRatio: '1.0',
        lastUpdated: '2023-01-01T00:00:00Z',
        custodian: 'Test Custodian',
      });
    });
  });

  describe('queryIssuerCredentials', () => {
    it('should call query with correct parameters and return issuer credentials', async () => {
      const result = await rwaProtocolModule.queryIssuerCredentials({
        issuerId: mockIssuerId,
      });

      expect(rwaClient.query).toHaveBeenCalledWith(mockRwaProtocolAddress, {
        issuer_credentials: {
          issuer_id: mockIssuerId,
        },
      });

      expect(result).toEqual({
        issuerId: mockIssuerId,
        name: 'Test Issuer',
        jurisdiction: 'Test Jurisdiction',
        licenseNumber: 'LICENSE123',
        verificationStatus: true,
        verificationDate: '2023-01-01T00:00:00Z',
      });
    });
  });

  describe('updateAssetMetadata', () => {
    it('should call execute with correct parameters', async () => {
      const mockMetadataUpdate = {
        description: 'Updated Description',
        imageUri: 'https://example.com/updated-image.png',
      };

      await rwaProtocolModule.updateAssetMetadata({
        from: mockFromAddress,
        assetId: mockAssetId,
        metadata: mockMetadataUpdate,
        gas_limit: mockGasLimit,
      });

      expect(rwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          update_asset_metadata: {
            asset_id: mockAssetId,
            metadata: mockMetadataUpdate,
          },
        },
        mockRwaProtocolAddress,
        [],
        mockGasLimit
      );
    });
  });

  describe('updateCollateralStatus', () => {
    it('should call execute with correct parameters', async () => {
      const mockCollateralUpdate = {
        collateralAmount: '1500000',
        collateralRatio: '1.5',
        lastUpdated: '2023-02-01T00:00:00Z',
      };

      await rwaProtocolModule.updateCollateralStatus({
        from: mockFromAddress,
        assetId: mockAssetId,
        collateralStatus: mockCollateralUpdate,
        gas_limit: mockGasLimit,
      });

      expect(rwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          update_collateral_status: {
            asset_id: mockAssetId,
            collateral_status: mockCollateralUpdate,
          },
        },
        mockRwaProtocolAddress,
        [],
        mockGasLimit
      );
    });
  });

  describe('verifyIssuerCredentials', () => {
    it('should call execute with correct parameters', async () => {
      // Mock Date.now() to return a fixed timestamp
      const mockDate = new Date('2023-03-01T00:00:00Z');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);

      await rwaProtocolModule.verifyIssuerCredentials({
        from: mockFromAddress,
        issuerId: mockIssuerId,
        verificationStatus: true,
        gas_limit: mockGasLimit,
      });

      expect(rwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          verify_issuer_credentials: {
            issuer_id: mockIssuerId,
            verification_status: true,
            verification_date: '2023-03-01T00:00:00.000Z',
          },
        },
        mockRwaProtocolAddress,
        [],
        mockGasLimit
      );

      // Restore the original Date implementation
      jest.restoreAllMocks();
    });
  });
});
