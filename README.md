# darwinia.js 
This Library contains Typescript bindings for custom darwinia-node modules.




### Overview

The repo is split up into a number of internal packages 

* @darwinia/api-option Provider user to inject derived, rpc method and additional types used by runtime modules.
  
* @darwinia/types Definition of customize types for Darwinia's chains(Darwinia, Crab, Crab parachain, Pangolin/Pangoro etc).
* @darwinia/types-known Specific known base type overrides for Darwinia's chains & specs. This does not contain user-specfic types. 
	
	
### Dependencies

Your project's @polkadot/api version must be greater than 7.11.1, The polkadot/api library wraps APIs around polkadot and substrate based chains via RPC calls, visit the [document portal](https://polkadot.js.org/docs/api/).
	

### Usage

```bash
yarn add @darwinia/types  
```

You will also need to update the tsconfig.json of your project to include the following: 

```json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api/augment": ["./node_modules/@darwinia/types/interfaces/augment-api.d.ts"],
      "@polkadot/types/augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
    }
  }
}

```

After that, you can import the darwinia/types/mix and polkadot/api in your project. A few examples:


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


### Project using Darwinia.js


* Darwinia apps         —  Darwinia applications and portal
* Darwinia Wormhole-ui  —  Cross-chain transfer of assets portal
* Staking-payouts       —  CLI to make staking payout transactions for Substrate FRAME-based chains
* Polkadot apps         —  Basic Polkadot/Substrate UI for interacting with a Polkadot and Substrate node
* Darwinia smart-app    —  Transfer ring/kton between Darwinia Smart account and Darwinia account     
