/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: false,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [`/node_modules/*`],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['dist/*'],
  moduleNameMapper: {
    '^@kiichain/proto$': '<rootDir>/src/index.ts'
  }
};
