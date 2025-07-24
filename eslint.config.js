import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    // Global settings
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      parser: tsParser,
      parserOptions: {
        project: false,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      prettier: prettierPlugin,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',

      // Prettier integration
      'prettier/prettier': 'error',

      // Common JavaScript rules
      'no-console': 'warn',
      semi: ['error', 'always'],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts', '**/*example.js'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    // Ignore patterns
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/build',
      '**/coverage',
      '*.json',
      '*.md',
      '*.yml',
      'packages/proto/*',
    ],
  },
];
