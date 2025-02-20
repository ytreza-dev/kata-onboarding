import js from '@eslint/js';
import globals from 'globals';
import typescript from 'typescript-eslint';

export default typescript.config(
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['target/'],
  },
  js.configs.recommended,
  ...typescript.configs.recommended.map(config => (config.name === 'typescript-eslint/base' ? config : { ...config, files: ['**/*.ts'] })),
  {
    files: ['src/*/webapp/**/*.ts'],
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
);
