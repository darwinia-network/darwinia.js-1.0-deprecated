const base = require('@polkadot/dev/config/eslint.cjs');

module.exports = {
  ...base,
  ignorePatterns: [
    ...base.ignorePatterns
  ],
  parserOptions: {
    ...base.parserOptions,
    project: [
      './tsconfig.eslint.json'
    ]
  },
  rules: {
    ...base.rules,
    // add override for any (a metric ton of them, initial conversion)
    '@typescript-eslint/no-explicit-any': 'off',
    // this seems very broken atm, false positives
    '@typescript-eslint/unbound-method': 'off',
    "header/header": [2, 'line', [
      { pattern: ' Copyright 20(17|18|19|20|21|22)(-2022)? @darwinia/' },
      ' SPDX-License-Identifier: Apache-2.0'
    ], 2],
  }
};
