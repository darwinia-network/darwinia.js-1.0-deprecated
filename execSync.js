// Copyright 2017-2022 @darwinia/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

const { execSync } = require('child_process');

module.exports = function execute (cmd, noLog) {
  !noLog && console.log(`$ ${cmd}`);

  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (error) {
    process.exit(-1);
  }
};
