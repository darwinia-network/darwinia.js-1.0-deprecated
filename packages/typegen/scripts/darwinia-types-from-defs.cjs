#!/usr/bin/env node
// Copyright 2017-2022 @darwinia/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

let main;

try {
  main = require('../fromDefs.cjs').main;
} catch (error) {
  process.env.JEST_WORKER_ID = '123';

  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', {
        alias: {
          '^@polkadot/types-known(.*)': './packages/types-known/src\\1',
          '^@polkadot/types-support(.*)': './packages/types-support/src\\1',
          '^@polkadot/types(.*)': './packages/types/src\\1'
        }
      }]
    ]
  });

  main = require('../src/fromDefs.ts').main;
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
