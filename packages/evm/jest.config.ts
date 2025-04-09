/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	setupFiles: ['dotenv/config'],
	testEnvironment: 'node',
	testMatch: ['**/tests/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	modulePathIgnorePatterns: ['<rootDir>/dist/']
};
