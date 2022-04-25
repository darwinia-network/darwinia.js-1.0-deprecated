const base = require('@polkadot/dev/config/eslint');

module.exports = {
  ...base,
  ignorePatterns: [
    '**/build/*',
    '**/build-cjs/*',
    '**/build-esm/*',
    '**/coverage/*',
    '**/node_modules/*',
    '.eslintrc.cjs',
    '.eslintrc.js',
    '.eslintrc.mjs',
    '.github/**',
    '.prettierrc.cjs',
    '.vscode/**',
    '.yarn/**',
    'babel.config.cjs',
    'jest.config.cjs',
    'rollup.config.js',
    'rollup.config.mjs',
    '*.js'
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
   
  }
};
