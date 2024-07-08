// @ts-check

const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
const reactRecommended = require('eslint-plugin-react/configs/recommended')

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  reactRecommended,
  {
    rules: {
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      // indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'react/prop-types': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
)
