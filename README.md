# darwinia.js
Javascript API and Types

### Installtion

```bash
yarn add @darwinia/api-options
```
 How to instantiate a Darwinia API object and use it to connect to a node using ApiPromise.

### Examples


```javascript
import { typesBundleForPolkadotApps } from "@darwinia/types/mix";
import { ApiPromise, WsProvider } from "@polkadot/api";

export const darwiniaTypesBundle = {
  spec: {
    Crab: typesBundleForPolkadotApps.spec.Crab,
    Darwinia: typesBundleForPolkadotApps.spec.Darwinia,
    Pangolin: typesBundleForPolkadotApps.spec.Pangolin,
  },
};

const wsProvider = new WsProvider("wss://pangolin-rpc.darwinia.network");

ApiPromise.create({ provider: wsProvider, typesBundle: darwiniaTypesBundle })
  .then((api) => {
    api.query.system
      .account("5EYCAe5gKAhKhPeR7nUZzpcX2f9eYoAhqtEHqnG433EfnCpQ")
      .then(({ nonce, data }) => {
        console.log(`balance of ${data.free} and a nonce of ${nonce}`);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

```

```javascript
import darwiniaApiOptions from "@darwinia/api-options";
import { ApiPromise, WsProvider } from "@polkadot/api";

async function main () {
  const wsProvider = new WsProvider("wss://crab-rpc.darwinia.network");

  ApiPromise.create(darwiniaApiOptions({provider: wsProvider}))
    .then((api) => {
      api.query.system
        .account("5EYCAe5gKAhKhPeR7nUZzpcX2f9eYoAhqtEHqnG433EfnCpQ")
        .then(({ nonce, data }) => {
          console.log(`balance of ${data.free} and a nonce of ${nonce}`);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

main();
```

### Attention

node v0.11.2 (crab era period <= 256, darwinia era period <= 2400)

