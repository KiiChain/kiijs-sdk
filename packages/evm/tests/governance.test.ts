import { ethers } from 'ethers';
import 'dotenv/config';
import { getGovernancePrecompileEthersV6Contract } from '../src/ethers/governancePrecompile';
import { setupProviderAndWallet } from './utils';

jest.setTimeout(60_000); // Total test timeout

describe('Governance Precompile Tests', () => {
  let wallet: ethers.Wallet;
  let governanceContract: ReturnType<
    typeof getGovernancePrecompileEthersV6Contract
  >;

  beforeAll(async () => {
    const [, walletInstance] = setupProviderAndWallet();
    wallet = walletInstance;
    governanceContract = getGovernancePrecompileEthersV6Contract(wallet);
    console.log('Wallet address:', wallet.address);
  });

  it('should get governance parameters', async () => {
    const params = await governanceContract.getParams();

    console.log('Governance Parameters:', {
      votingPeriod: params.votingPeriod,
      minDeposit: params.minDeposit,
      maxDepositPeriod: params.maxDepositPeriod,
      quorum: params.quorum,
      threshold: params.threshold,
      vetoThreshold: params.vetoThreshold,
    });

    expect(params.votingPeriod).toBeDefined();
    expect(params.minDeposit).toBeDefined();
  });

  it('should list proposals with pagination', async () => {
    // Get proposals with pagination
    // Status 0 = all proposals
    const { proposals, pageResponse } = await governanceContract.getProposals(
      0, // All proposal statuses
      ethers.ZeroAddress, // No voter filter
      ethers.ZeroAddress, // No depositor filter
      {
        key: new Uint8Array(),
        offset: 0,
        limit: 10,
        countTotal: true,
        reverse: false,
      }
    );

    console.log(
      `Found ${proposals.length} proposals, total: ${pageResponse.total}`
    );

    // Log details of the first proposal if any exist
    if (proposals.length > 0) {
      const firstProposal = proposals[0];
      console.log('First proposal:', {
        id: firstProposal.id,
        status: firstProposal.status,
        submitTime: new Date(
          Number(firstProposal.submitTime) * 1000
        ).toISOString(),
        title: firstProposal.metadata
          ? firstProposal.metadata.substring(0, 50)
          : 'No title',
      });
    }
  });

  // Separate test for proposal details
  it('should get proposal details if available', async () => {
    // First get a list of proposals
    const { proposals } = await governanceContract.getProposals(
      0, // All proposal statuses
      ethers.ZeroAddress, // No voter filter
      ethers.ZeroAddress, // No depositor filter
      {
        key: new Uint8Array(),
        offset: 0,
        limit: 1,
        countTotal: false,
        reverse: false,
      }
    );

    // Skip the test if no proposals are available
    if (proposals.length === 0) {
      console.log('No proposals available to test proposal details');
      return;
    }

    const firstProposal = proposals[0];
    const proposal = await governanceContract.getProposal(firstProposal.id);
    expect(proposal.id).toEqual(firstProposal.id);
    console.log('Proposal details:', {
      id: proposal.id,
      status: proposal.status,
      finalTallyResult: proposal.finalTallyResult,
    });
  });

  // Separate test for tally results
  it('should get tally result if available', async () => {
    // First get a list of proposals
    const { proposals } = await governanceContract.getProposals(
      0, // All proposal statuses
      ethers.ZeroAddress, // No voter filter
      ethers.ZeroAddress, // No depositor filter
      {
        key: new Uint8Array(),
        offset: 0,
        limit: 1,
        countTotal: false,
        reverse: false,
      }
    );

    // Skip the test if no proposals are available
    if (proposals.length === 0) {
      console.log('No proposals available to test tally results');
      return;
    }

    const firstProposal = proposals[0];
    const tally = await governanceContract.getTallyResult(firstProposal.id);
    console.log('Tally result:', {
      yes: tally.yes,
      no: tally.no,
      abstain: tally.abstain,
      noWithVeto: tally.noWithVeto,
    });
    expect(tally).toBeDefined();
  });
});
