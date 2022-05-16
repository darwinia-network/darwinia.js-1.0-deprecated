// Copyright 2017-2022 @darwinia/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@polkadot/dev/config/jest.cjs');

module.exports = {
  ...config,
  moduleNameMapper: {
    '@darwinia/api-(augment|base|contract|derive)(.*)$': '<rootDir>/packages/api-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@darwinia/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@darwinia/rpc-(augment|core|provider)(.*)$': '<rootDir>/packages/rpc-$1/src/$2',
    '@darwinia/typegen(.*)$': '<rootDir>/packages/typegen/src/$1',
    '@darwinia/types-(augment|codec|create|known|support)(.*)$': '<rootDir>/packages/types-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@darwinia/types(.*)$': '<rootDir>/packages/types/src/$1'
  },
  "transformIgnorePatterns": [
    '/node_modules/(?!@polkadot|@substrate/connect|@babel/runtime/helpers/esm/)'
  ],
  testTimeout: 30000
};
