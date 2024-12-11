import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.ts'] },
  {
    ignores: ['node_modules/**', '*dist'],
  },

  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      // eqeqeq: "off",
      // "no-unused-vars": "error",
      // "no-console":"warn"
      //"prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
];