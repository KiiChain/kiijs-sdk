// Example usage of the SDK to mint a token
const { KiiJS } = require('kiijs-sdk');

const kii = new KiiJS({ /* your configuration */ });

async function mintToken() {
  try {
    const result = await kii.mint({ /* mint parameters */ });
    console.log('Token successfully minted:', result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

mintToken();
