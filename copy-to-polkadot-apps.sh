#!/usr/bin/env bash

function copy_folder () {
  SRC="packages/$1/build"
  DST="../polkadot-apps/node_modules/@darwinia/$1"

  echo "** Copying $SRC to $DST"

  rm -rf $DST
  cp -r $SRC $DST
}

yarn polkadot-dev-build-ts

# copy_folder "api-options"
copy_folder "types"
# copy_folder "types-known"
