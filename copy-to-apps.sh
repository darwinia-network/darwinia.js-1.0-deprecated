#!/usr/bin/env bash

function copy_folder () {
  SRC="packages/$1/build"
  DST="../apps/node_modules/@darwinia/$1"

  echo "** Copying $SRC to $DST"

  rm -rf $DST
  cp -r $SRC $DST
}

yarn polkadot-dev-build-ts

copy_folder "api"
copy_folder "api-option"
copy_folder "types"
