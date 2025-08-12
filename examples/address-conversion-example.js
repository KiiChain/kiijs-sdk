const { Bech32ToHex, HexToBech32 } = require('@kiichain/kiijs-utils');

async function main() {
  console.log('--- Address Conversion Example ---');

  // --- Bech32 to Hex ---
  const bech32Address = 'kii1jcl5k2vsyqy2qr3e24a2lq8z5mdtq65s22vj96';
  console.log(`Converting Bech32 address: ${bech32Address}`);

  const hexAddress = Bech32ToHex(bech32Address);

  if (hexAddress) {
    console.log(`Resulting Hex address: ${hexAddress}`);
  } else {
    console.log('Failed to convert Bech32 to Hex.');
  }

  console.log('\n' + '-'.repeat(30) + '\n');

  // --- Hex to Bech32 ---
  const hexToConvert = '0x87751B44263244715474d954698205fe55358A0A';
  console.log(`Converting Hex address: ${hexToConvert}`);

  const bech32Result = await HexToBech32(hexToConvert);

  if (bech32Result) {
    console.log(`Resulting Bech32 address: ${bech32Result}`);
  } else {
    console.log('Failed to convert Hex to Bech32.');
  }

  console.log('\n--- Example Complete ---');
}

main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
