// Import required packages
const { ethers } = require('ethers');
const {
  getGovernancePrecompileEthersV6Contract,
} = require('@kiichain/kiijs-evm');

// Configuration
const RPC_URL = 'https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/';

// IMPORTANT: This is a dummy private key for example purposes only
// DO NOT use in production environment
// Replace with your own private key for real testing
const PRIVATE_KEY =
  '0x0000000000000000000000000000000000000000000000000000000000000001';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CHAIN_ID = 1336; // EVM Chain ID for KiiChain testnet

// Example proposal ID - replace with an actual proposal ID from your network
const EXAMPLE_PROPOSAL_ID = 1;

// Main function
async function main() {
  try {
    // Connect to KiiChain network
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    // Get wallet address and balance
    const address = await wallet.getAddress();
    console.log(`Wallet address: ${address}`);

    const balance = await provider.getBalance(address);
    console.log(`Wallet balance: ${ethers.formatEther(balance)} ETH`);

    // Get governance precompile contract
    const governanceContract = getGovernancePrecompileEthersV6Contract(wallet);

    // Get governance parameters
    const params = await governanceContract.getParams();
    console.log('Governance Parameters:');
    console.log(`- Voting Period: ${params.votingPeriod} seconds`);
    console.log(
      `- Min Deposit: ${params.minDeposit[0].amount} ${params.minDeposit[0].denom}`
    );
    console.log(`- Max Deposit Period: ${params.maxDepositPeriod} seconds`);
    console.log(`- Quorum: ${params.quorum}`);
    console.log(`- Threshold: ${params.threshold}`);
    console.log(`- Veto Threshold: ${params.vetoThreshold}`);

    // Get proposals
    const proposalStatus = 0; // 0 for all proposals
    const pagination = {
      key: '0x',
      offset: 0,
      limit: 10,
      countTotal: true,
      reverse: false,
    };

    const proposalsResult = await governanceContract.getProposals(
      proposalStatus,
      ethers.ZeroAddress, // voter address (none for this query)
      ethers.ZeroAddress, // depositor address (none for this query)
      pagination
    );

    console.log(`\nFound ${proposalsResult.pageResponse.total} proposals`);

    // Display proposal information
    if (proposalsResult.proposals.length > 0) {
      console.log('\nProposal List:');
      for (const proposal of proposalsResult.proposals) {
        console.log(`- ID: ${proposal.id}`);
        console.log(`  Title: ${proposal.title}`);
        console.log(`  Status: ${getProposalStatusString(proposal.status)}`);
        console.log(
          `  Voting End Time: ${new Date(Number(proposal.votingEndTime) * 1000).toLocaleString()}`
        );
      }
    }

    // Get specific proposal details
    try {
      const proposal =
        await governanceContract.getProposal(EXAMPLE_PROPOSAL_ID);
      console.log(`\nProposal ${EXAMPLE_PROPOSAL_ID} Details:`);
      console.log(`- Title: ${proposal.title}`);
      console.log(`- Summary: ${proposal.summary}`);
      console.log(`- Status: ${getProposalStatusString(proposal.status)}`);
      console.log(`- Proposer: ${proposal.proposer}`);
      console.log(
        `- Voting Start: ${new Date(Number(proposal.votingStartTime) * 1000).toLocaleString()}`
      );
      console.log(
        `- Voting End: ${new Date(Number(proposal.votingEndTime) * 1000).toLocaleString()}`
      );

      // Get tally result
      const tallyResult =
        await governanceContract.getTallyResult(EXAMPLE_PROPOSAL_ID);
      console.log('\nCurrent Tally:');
      console.log(`- Yes: ${tallyResult.yes}`);
      console.log(`- No: ${tallyResult.no}`);
      console.log(`- Abstain: ${tallyResult.abstain}`);
      console.log(`- No With Veto: ${tallyResult.noWithVeto}`);
    } catch (error) {
      console.log(
        `Proposal ${EXAMPLE_PROPOSAL_ID} not found or error retrieving: ${error.message}`
      );
    }

    // Check if the user has already voted
    try {
      const vote = await governanceContract.getVote(
        EXAMPLE_PROPOSAL_ID,
        address
      );
      console.log('\nYour vote:');
      for (const option of vote.options) {
        console.log(
          `- Option: ${getVoteOptionString(option.option)}, Weight: ${option.weight}`
        );
      }
    } catch (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error
    ) {
      console.log('\nYou have not voted on this proposal yet.');
    }

    // Vote on a proposal
    // Note: This will only work if the proposal is in the voting period
    const voteOption = 1; // 1 = Yes, 2 = Abstain, 3 = No, 4 = NoWithVeto
    const metadata = ''; // Optional metadata for the vote

    try {
      console.log(
        `\nVoting on proposal ${EXAMPLE_PROPOSAL_ID} with option: ${getVoteOptionString(voteOption)}...`
      );

      // Create transaction data
      const tx = await governanceContract.vote(
        address,
        EXAMPLE_PROPOSAL_ID,
        voteOption,
        metadata
      );

      // Wait for transaction to be mined
      const receipt = await tx.wait();
      console.log(`Vote successful! Transaction hash: ${receipt.hash}`);
    } catch (error) {
      console.log(`Error voting on proposal: ${error.message}`);
    }

    // Vote with weighted options
    // Note: This will only work if the proposal is in the voting period and you haven't voted yet
    try {
      console.log('\nVoting with weighted options...');

      // Create weighted vote options
      const weightedOptions = [
        { option: 1, weight: '0.7' }, // 70% Yes
        { option: 3, weight: '0.3' }, // 30% No
      ];

      // Create transaction data
      const tx = await governanceContract.voteWeighted(
        address,
        EXAMPLE_PROPOSAL_ID,
        weightedOptions,
        metadata
      );

      // Wait for transaction to be mined
      const receipt = await tx.wait();
      console.log(
        `Weighted vote successful! Transaction hash: ${receipt.hash}`
      );
    } catch (error) {
      console.log(`Error voting with weighted options: ${error.message}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Helper function to convert proposal status code to string
function getProposalStatusString(status) {
  const statusMap = {
    0: 'Unspecified',
    1: 'Deposit Period',
    2: 'Voting Period',
    3: 'Passed',
    4: 'Rejected',
    5: 'Failed',
  };
  return statusMap[status] || `Unknown (${status})`;
}

// Helper function to convert vote option code to string
function getVoteOptionString(option) {
  const optionMap = {
    0: 'Unspecified',
    1: 'Yes',
    2: 'Abstain',
    3: 'No',
    4: 'No With Veto',
  };
  return optionMap[option] || `Unknown (${option})`;
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
