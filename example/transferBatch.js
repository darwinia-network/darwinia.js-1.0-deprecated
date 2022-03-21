// external imports
/* eslint-disable */

const { ApiPromise, WsProvider } = require("@polkadot/api");
const { Keyring } = require("@polkadot/keyring");
const { cryptoWaitReady } = require("@polkadot/util-crypto");
const { typesBundleForPolkadotApps } = require("@darwinia/types/mix");

const darwiniaTypesBundle = {
  spec: {
    Crab: typesBundleForPolkadotApps.spec.Crab,
    Darwinia: typesBundleForPolkadotApps.spec.Darwinia,
    Pangolin: typesBundleForPolkadotApps.spec.Pangolin,
  },
};

const wsProvider = new WsProvider("wss://rpc.darwinia.network");

async function main() {
  const api = await ApiPromise.create({
    provider: wsProvider,
    typesBundle: darwiniaTypesBundle,
  });
  const BOB = "<wallet address>";

  cryptoWaitReady().then(() => {
    const txPool = [
      api.tx.balances.transfer(BOB, 100000000),
      api.tx.balances.transfer(BOB, 100000001),
      api.tx.balances.transfer(BOB, 10000000000),
    ];

    // Create a extrinsic, transferring amount units to Bob.
    const transfer = api.tx.utility.batch(txPool);

    const keyring = new Keyring({ type: "sr25519" });

    const alice = keyring.addFromUri(
      "*** mnemonic  ***"
    );

    transfer.signAndSend(alice, ({ events = [], status }) => {
      if (status.isInBlock) {
        console.log("Block hash " + status.asInBlock.toHex());
      } else {
        console.log("Status of transfer: " + status.type);
      }

      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(
          phase.toString() + " : " + section + "." + method +" " +data.toString()
        );
        if (
          status.type === "Finalized" &&
          section + "." + method === "system.ExtrinsicSuccess"
        ) {
          console.log("Transfer success");
          api.disconnect();
        }
      });
    });
  });
}

main();
