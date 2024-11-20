import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      'quotes': ['error', 'single'],
      'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }]
    }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  // eslint 通用规则
  pluginJs.configs.recommended,
  // react 通用规则
  pluginReact.configs.flat.recommended,
];