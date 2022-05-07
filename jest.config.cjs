// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@polkadot/dev/config/jest.js');

module.exports = {
  ...config,
  "transformIgnorePatterns": [
    '/node_modules/(?!@polkadot|@substrate/connect|@babel/runtime/helpers/esm/)'
  ],
  testTimeout: 30000
};
