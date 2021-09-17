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

### Generating

We can run the generate command via `yarn generate:meta`, generate types from Metadata. And run via `yarn generate:defs`, generate types from user-edits are the definitions.ts files.

Now if we check the actual output against the source via yarn lint, we would see that valid output has been generated -
```
> yarn lint
$ tsc --noEmit --pretty
```


### Build and Publish
1. `yarn lernaversion` - Before the publish, we need to bump the darwinia.js version, usually modify the versions of all packages at the same time for unified management.

2. Now we can build the generated types file via the `yarn build:ts` command. The files after build are saved in `packages/**/build`.

3. Via the `yarn build:publish` command run the file `./polkadot-ci-ghact-build.js` will traverse the build files under the packages folder and execute the `npm publish` command in build folders.

### Attention

node v0.11.2 (crab era period <= 256, darwinia era period <= 2400)

