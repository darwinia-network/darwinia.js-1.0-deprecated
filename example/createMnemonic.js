
// external imports
/* eslint-disable */

const {
  mnemonicGenerate,
  mnemonicToMiniSecret,
  mnemonicValidate,
  naclBoxPairFromSecret
} = require('@polkadot/util-crypto');

// generate address
// https://polkadot.js.org/docs/ui-keyring/start/accounts

async function main () {
  // Create mnemonic string for Alice using BIP39
  const mnemonicAlice = mnemonicGenerate();

  console.log(`Generated mnemonic: ${mnemonicAlice}`);

  // Validate the mnemic string that was generated
  const isValidMnemonic = mnemonicValidate(mnemonicAlice);

  console.log(`isValidMnemonic: ${isValidMnemonic}`);

  // Create valid Substrate-compatible seed from mnemonic
  const seedAlice = mnemonicToMiniSecret(mnemonicAlice);

  // Generate new public/secret keypair for Alice from the supplied seed
  const { publicKey, secretKey } = naclBoxPairFromSecret(seedAlice);
  console.log('publicKey, secretKey', publicKey, secretKey)
}

main().catch(console.error).finally(() => process.exit());