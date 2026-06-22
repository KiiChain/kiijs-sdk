const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const {
  RwaClient,
  RwaProtocolModule,
  TokenModule,
  IdentityModule,
  ComplianceModule,
} = require('@kiichain/kiijs-rwa');

const RPC_URL = 'https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/';
const CHAIN_ID = 'oro_1336-1';
const DENOM = 'akii';
const GAS_PRICE = '0.025akii';

const MNEMONIC = process.env.KII_MNEMONIC;
if (!MNEMONIC) {
  throw new Error('Set KII_MNEMONIC before running this example');
}
const GAS_LIMIT = 200000;

async function main() {
  console.log('--- RWA SDK Usage Example ---\n');

  try {
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(MNEMONIC, {
      prefix: 'kii',
    });
    const [{ address }] = await signer.getAccounts();
    console.log(`Wallet address: ${address}\n`);

    const rwaClient = await RwaClient.new(
      RPC_URL,
      CHAIN_ID,
      DENOM,
      GAS_PRICE,
      signer
    );
    console.log('RWA client connected to chain:', rwaClient.getChainId());

    const tokenAddress = 'kii1tokencontractaddress';
    const protocolAddress = 'kii1rwaprotocoladdress';
    const identityAddress = 'kii1identitycontractaddress';
    const complianceAddress = 'kii1compliancecontractaddress';
    const recipientAddress = 'kii1recipientaddress';

    const tokenModule = new TokenModule(rwaClient, tokenAddress);
    const protocolModule = new RwaProtocolModule(rwaClient, protocolAddress);
    const identityModule = new IdentityModule(rwaClient, identityAddress);
    const complianceModule = new ComplianceModule(
      rwaClient,
      complianceAddress
    );

    console.log('\n--- Module 1: Token Operations ---');
    console.log('Querying token info...');
    try {
      const tokenInfo = await tokenModule.tokenInfo();
      console.log('Token Info:', JSON.stringify(tokenInfo, null, 2));
    } catch (error) {
      console.log('Token info query (expected with dummy address):', error.message);
    }

    console.log('\nQuerying balance...');
    try {
      const { balance } = await tokenModule.balance({ address });
      console.log(`Balance: ${balance}`);
    } catch (error) {
      console.log('Balance query (expected with dummy address):', error.message);
    }

    console.log('\nApproving spender...');
    try {
      const approveResult = await tokenModule.approve({
        from: address,
        spender: recipientAddress,
        amount: 500,
        gas_limit: GAS_LIMIT,
      });
      console.log('Approve tx hash:', approveResult.transactionHash);
    } catch (error) {
      console.log('Approve (expected with dummy address):', error.message);
    }

    console.log('\nChecking allowance...');
    try {
      const { allowance } = await tokenModule.allowance(address, recipientAddress);
      console.log(`Allowance: ${allowance}`);
    } catch (error) {
      console.log('Allowance query (expected with dummy address):', error.message);
    }

    console.log('\nTransferring tokens...');
    try {
      const transferResult = await tokenModule.transfer({
        from: address,
        to: recipientAddress,
        amount: 100,
        gas_limit: GAS_LIMIT,
      });
      console.log('Transfer tx hash:', transferResult.transactionHash);
    } catch (error) {
      console.log('Transfer (expected with dummy address):', error.message);
    }

    console.log('\n--- Module 2: RWA Protocol Operations ---');
    const assetId = 'asset' + Date.now();
    console.log(`Asset ID: ${assetId}`);

    console.log('\nMinting new RWA asset...');
    try {
      const mintResult = await protocolModule.mintAsset({
        from: address,
        to: address,
        assetId,
        amount: '1000',
        metadata: {
          assetId,
          name: 'Real Estate Token',
          symbol: 'RET',
          description: 'Tokenized real estate asset',
          imageUri: 'https://example.com/image.png',
          externalLink: 'https://example.com/asset',
          issuer: address,
          issuanceDate: new Date().toISOString(),
          denomination: 'USD',
          totalSupply: '1000000',
        },
        gas_limit: GAS_LIMIT,
      });
      console.log('Mint tx hash:', mintResult.transactionHash);
    } catch (error) {
      console.log('Mint (expected with dummy address):', error.message);
    }

    console.log('\nQuerying asset metadata...');
    try {
      const metadata = await protocolModule.queryAssetMetadata({
        assetId,
      });
      console.log('Asset Metadata:', JSON.stringify(metadata, null, 2));
    } catch (error) {
      console.log('Asset metadata query (expected with dummy address):', error.message);
    }

    console.log('\nTransferring RWA asset...');
    try {
      const transferResult = await protocolModule.transferAsset({
        from: address,
        to: recipientAddress,
        assetId,
        amount: '500',
        gas_limit: GAS_LIMIT,
      });
      console.log('Asset transfer tx hash:', transferResult.transactionHash);
    } catch (error) {
      console.log('Asset transfer (expected with dummy address):', error.message);
    }

    console.log('\nRedeeming RWA asset...');
    try {
      const redeemResult = await protocolModule.redeemAsset({
        from: address,
        assetId,
        amount: '200',
        gas_limit: GAS_LIMIT,
      });
      console.log('Redeem tx hash:', redeemResult.transactionHash);
    } catch (error) {
      console.log('Redeem (expected with dummy address):', error.message);
    }

    console.log('\nQuerying collateral status...');
    try {
      const collateral = await protocolModule.queryCollateralStatus({
        assetId,
      });
      console.log('Collateral Status:', JSON.stringify(collateral, null, 2));
    } catch (error) {
      console.log('Collateral query (expected with dummy address):', error.message);
    }

    console.log('\nQuerying issuer credentials...');
    try {
      const issuer = await protocolModule.queryIssuerCredentials({
        issuerId: address,
      });
      console.log('Issuer Credentials:', JSON.stringify(issuer, null, 2));
    } catch (error) {
      console.log('Issuer query (expected with dummy address):', error.message);
    }

    console.log('\nUpdating asset metadata...');
    try {
      const updateResult = await protocolModule.updateAssetMetadata({
        from: address,
        assetId,
        metadata: { description: 'Updated description' },
        gas_limit: GAS_LIMIT,
      });
      console.log('Update metadata tx hash:', updateResult.transactionHash);
    } catch (error) {
      console.log('Update metadata (expected with dummy address):', error.message);
    }

    console.log('\nUpdating collateral status...');
    try {
      const updateResult = await protocolModule.updateCollateralStatus({
        from: address,
        assetId,
        collateralStatus: {
          collateralType: 'FIAT',
          collateralAmount: '500000',
          collateralRatio: '0.5',
        },
        gas_limit: GAS_LIMIT,
      });
      console.log('Update collateral tx hash:', updateResult.transactionHash);
    } catch (error) {
      console.log('Update collateral (expected with dummy address):', error.message);
    }

    console.log('\nVerifying issuer credentials...');
    try {
      const verifyResult = await protocolModule.verifyIssuerCredentials({
        from: address,
        issuerId: address,
        verificationStatus: true,
        gas_limit: GAS_LIMIT,
      });
      console.log('Verify issuer tx hash:', verifyResult.transactionHash);
    } catch (error) {
      console.log('Verify issuer (expected with dummy address):', error.message);
    }

    console.log('\n--- Module 3: Identity Operations ---');
    console.log('Adding identity...');
    try {
      const addResult = await identityModule.addIdentity({
        from: address,
        country: 'US',
        gas_limit: GAS_LIMIT,
      });
      console.log('Add identity tx hash:', addResult.transactionHash);
    } catch (error) {
      console.log('Add identity (expected with dummy address):', error.message);
    }

    console.log('\nUpdating identity...');
    try {
      const updateResult = await identityModule.updateIdentity({
        from: address,
        new_country: 'FR',
        identity_owner: address,
        gas_limit: GAS_LIMIT,
      });
      console.log('Update identity tx hash:', updateResult.transactionHash);
    } catch (error) {
      console.log('Update identity (expected with dummy address):', error.message);
    }

    console.log('\nRemoving identity...');
    try {
      const removeResult = await identityModule.removeIdentity({
        from: address,
        identity_owner: address,
        gas_limit: GAS_LIMIT,
      });
      console.log('Remove identity tx hash:', removeResult.transactionHash);
    } catch (error) {
      console.log('Remove identity (expected with dummy address):', error.message);
    }

    console.log('\n--- Module 4: Compliance Operations ---');
    console.log('Adding compliance module...');
    try {
      const addResult = await complianceModule.addComplianceModule({
        from: address,
        module_addr: 'kii1compliancemoduleaddress',
        gas_limit: GAS_LIMIT,
      });
      console.log('Add compliance module tx hash:', addResult.transactionHash);
    } catch (error) {
      console.log('Add compliance (expected with dummy address):', error.message);
    }

    console.log('\nRemoving compliance module...');
    try {
      const removeResult = await complianceModule.removeComplianceModule({
        from: address,
        module_addr: 'kii1compliancemoduleaddress',
        gas_limit: GAS_LIMIT,
      });
      console.log('Remove compliance module tx hash:', removeResult.transactionHash);
    } catch (error) {
      console.log('Remove compliance (expected with dummy address):', error.message);
    }

    console.log('\n--- Example Complete ---');
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
