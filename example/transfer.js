// external imports
/* eslint-disable */

const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { cryptoWaitReady } = require('@polkadot/util-crypto');
const { typesBundleForPolkadotApps } =  require("@darwinia/types/mix");

const darwiniaTypesBundle = typesBundleForPolkadotApps;

const wsProvider = new WsProvider("wss://rpc.darwinia.network");

async function main() {
  const api = await ApiPromise.create({ provider: wsProvider, typesBundle: darwiniaTypesBundle });
  const BOB = '<wallet address>';
  const transferAmount = '123456789';

  cryptoWaitReady().then(async () => {
    // Create a extrinsic, transferring amount units to Bob.
    const transfer = api.tx.balances.transfer(BOB, transferAmount);
    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('*** mnemonic  ***');

    await transfer.signAndSend(alice, ({ events = [], status }) => {
      if (status.isInBlock) {
        console.log('Successful transfer of ' + transferAmount + ' with hash ' + status.asInBlock.toHex());
      } else {
        console.log('Status of transfer: ' + status.type);
      }

      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
        if (status.type === 'Finalized' && section + '.' + method === 'system.ExtrinsicSuccess') {
          console.log('transfer success');
          api.disconnect();
        }
      });
    });
  });
};

main();