#!/usr/bin/env node
// Copyright 2017-2022 @darwinia/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

let main;

try {
  main = require('../interfacesTs.cjs').main;
} catch (error) {
  process.env.JEST_WORKER_ID = '123';

  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', {
        alias: {
          '^@polkadot/api-(augment|base|derive)(.*)': './packages/api-\\1/src\\2',
          // eslint-disable-next-line sort-keys
          '^@polkadot/api(.*)': './packages/api/src/\\1',
          '^@polkadot/rpc-(augment|core|provider)(.*)': './packages/rpc-\\1/src\\2',
          '^@polkadot/types-(augment|codec|create|known|metadata|support)(.*)': './packages/types-\\1/src\\2',
          // eslint-disable-next-line sort-keys
          '^@polkadot/types(.*)': './packages/types/src\\1'
        }
      }]
    ]
  });

  main = require('../src/interfacesTs.ts').main;
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
