import tseslint from 'typescript-eslint';
import calm from './eslint/index.js';

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**', 'coverage/**'] },

  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },

  // The package lints its own components with its own rules. The tests are
  // left out: they write reds and fourth buttons on purpose, to be refused.
  {
    ...calm.configs.recommended,
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['src/**/__tests__/**'],
  },
);
