import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import pluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier,
      import: pluginImport,
      'jsx-a11y': jsxA11y,
    },
    extends: [js.configs.recommended, ...ts.configs.recommended],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: ts.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'prettier/prettier': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // React settings
      'react/react-in-jsx-scope': 'off', // Not needed with jsx-runtime
      'react/jsx-uses-react': 'off', // Not needed with jsx-runtime

      // Import grouping rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // Installed packages
            'internal', // Internal modules (if you have path aliases)
            'parent', // Parent directory imports
            'sibling', // Same directory imports
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    ignores: ['**/tsconfig.*'],
  },
  {
    files: ['**/*.md', '**/*.mdx'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
]);
