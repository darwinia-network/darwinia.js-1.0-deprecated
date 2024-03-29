#!/usr/bin/env node
// Copyright 2017-2022 @darwinia/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

const babel = require('@babel/cli/lib/babel/dir').default;
const execSync = require('./execSync.cjs');
const cpx = require('cpx');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const CPX = ['css', 'gif', 'hbs', 'jpg', 'js', 'png', 'svg', 'd.ts']
  .map((ext) => `src/**/*.${ext}`)
  .concat('package.json');

console.log('$ darwinia-dev-build-ts', process.argv.slice(2).join(' '));

function buildWebpack () {
  execSync('yarn polkadot-exec-webpack --config webpack.config.js --mode production');
}

async function buildBabel (dir) {
  console.log(` build  babel ${dir}`);
  await babel({
    babelOptions: {
      configFile: path.join(process.cwd(), '../../babel.config.cjs')
    },
    cliOptions: {
      extensions: ['.ts', '.tsx'],
      filenames: ['src'],
      ignore: '**/*.d.ts',
      outDir: path.join(process.cwd(), 'build')
    }
  });

  [...CPX]
    .concat(`../../build/${dir}/src/**/*.d.ts`, `../../build/packages/${dir}/src/**/*.d.ts`)
    .forEach((src) => cpx.copySync(src, 'build'));
}

async function buildJs (dir) {
  console.log(` build  js ${dir}`);

  if (!fs.existsSync(path.join(process.cwd(), '.skip-build'))) {
    const { name, version } = require(path.join(process.cwd(), './package.json'));

    if (!name.startsWith('@darwinia/')) {
      return;
    }

    console.log(`*** ${name} ${version}`);

    mkdirp.sync('build');

    if (fs.existsSync(path.join(process.cwd(), 'public'))) {
      buildWebpack(dir);
    } else {
      await buildBabel(dir);
    }

    console.log();
  }
}

async function main () {
  execSync('yarn polkadot-dev-clean-build');
  execSync('yarn polkadot-exec-tsc --build tsconfig.build.json');
  process.chdir('packages');
  const dirs = fs
    .readdirSync('.')
    .filter((dir) => fs.statSync(dir).isDirectory() && fs.existsSync(path.join(process.cwd(), dir, 'src')));

  for (const dir of dirs) {
    process.chdir(dir);

    await buildJs(dir);

    process.chdir('..');
  }

  process.chdir('..');
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
