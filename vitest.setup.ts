import { existsSync } from 'node:fs';

// Runs in each test worker before the test files, from the package's folder. The package's .env (see its
// .env.example) holds the testnet account the network suites use. Variables already set, like the ones CI passes
// from its secrets, win over the file.
if (existsSync('.env')) {
  process.loadEnvFile('.env');
}
