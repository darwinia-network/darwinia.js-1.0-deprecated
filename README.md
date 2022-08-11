# darwinia.js 
This Library contains Typescript bindings for custom darwinia-node modules.




### Overview

The repo is split up into a number of internal packages 

* @darwinia/api-augment applies darwinia, crab, pangolin, pangoro, crabParachain, pangolinParachain types and endpoint augmentation
* @darwinia/api-derive Derived api for darwinia.
* @darwinia/api-option Provider user to inject derived, rpc method and additional types used by runtime modules.
* @darwinia/rpc-augment  decorate all RPC endpoints
* @darwinia/types Definition of customize types for Darwinia's chains(Darwinia, Crab, Crab parachain, Pangolin/Pangoro).
* @darwnia/types-augment applies all generic lookup types for darwinia, crab, pangolin, pangoro.
* @darwinia/types-known Specific known base type overrides for Darwinia's chains & specs. This does not contain user-specfic types. 
* @darwnia/types-support runtime metadata for darwinia, crab, pangolin, pangoro.
	
	
### Dependencies

Your project's @polkadot/api version must be greater than 8.1.2-1, The polkadot/api library wraps APIs around polkadot and substrate based chains via RPC calls, visit the [document portal](https://polkadot.js.org/docs/api/). The darwinia.js related library version must be greater than 2.8.2.
	

### Usage

```bash
yarn add @polkadot/api @darwinia/api-options    
```

check your package.json dependencies

```json

    "@darwinia/api-options": "^2.8.2",
    
```


You will also need to update the **tsconfig.json** of your project to include the following: 


#### mapping darwinia api and types

```json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/index.d.ts"]
    }
  }
}

```


#### mapping crab api and types

```json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/crab/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/crab/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/lookup/crab/index.d.ts"]
    }
  }
}

```

####  mapping pangolin api and types

```json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/pangolin/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/pangolin/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/lookup/pangolin/index.d.ts"]
    }
  }
}

```


#### mapping pangoro api and types

```json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/pangoro/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/pangoro/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/lookup/pangoro/index.d.ts"]
    }
  }
}

```


#### mapping crabParachain api and types

```json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/crabParachain/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/crabParachain/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/lookup/crabParachain/index.d.ts"]
    }
  }
}

```



#### mapping pangolinParachain api and types

```json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/pangolinParachain/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/pangolinParachain/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/lookup/pangolinParachain/index.d.ts"]
    }
  }
}

```



After that, you can import the darwinia/types/mix and polkadot/api in your project. A few examples:


```javascript
import { typesBundle } from "@darwinia/types/mix";
import { ApiPromise, WsProvider } from "@polkadot/api";

export const darwiniaTypesBundle = {
  spec: {
    Crab: typesBundle.spec.Crab,
    Darwinia: typesBundle.spec.Darwinia,
    Pangolin: typesBundle.spec.Pangolin,
    Pangoro: typesBundle.spec.pangoro
  },
};

const darwinia = "wss://rpc.darwinia.network";
const crab = "wss://crab-rpc.darwinia.network"
const pangolin = "wss://pangolin-rpc.darwinia.network"
const pangoro = "wss://pangoro-rpc.darwinia.network"

// connect pangolin 
const wsProvider = new WsProvider(pangolin);

ApiPromise.create({ provider: wsProvider, typesBundle: darwiniaTypesBundle })
  .then((api) => {
    api.query.system
      .account("<address>")
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


You could find more usecases at example directory of root project.



### api-derive usage

Those api derive from RPC calls and storage queries base on pangolin endpoint at now. In futrue we could
maintain darwinia, crab, pangolin and pangoro different derived api. taking an 'usableBalance' exmple to 
show how derived api working.  @darwiniaapi-derive library bersion must be greater than 2.8.0.

```bash
  yarn add @darwinia/api-derive
```


config tsconfig.json with  paths as below:
#### mapping pangolin api and types
```json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/pangolin/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/pangolin/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/lookup/pangolin/index.d.ts"]
    }
  }
}

```

```javascript

    import { darwiniaDerive } from '@darwinia/api-derive/bundle';
    import '@polkadot/api-augment';

    import { typesBundle } from '@darwinia/types/mix';

    import { ApiPromise, WsProvider } from '@polkadot/api';
    import { DeriveCustom } from '@polkadot/api/types';

    import * as accounts from '@darwinia/api-derive/accounts';
    import { TokenType } from '@darwinia/api-derive/accounts/types';

    const darwiniaTypesBundle = {
      spec: {
        Crab: typesBundle.spec.Crab,
        Darwinia: typesBundle.spec.Darwinia,
        Pangolin: typesBundle.spec.Pangolin,
        Pangoro: typesBundle.spec.Pangoro
      }
    };

    const pangolin = 'wss://pangolin-rpc.darwinia.network';
    const address = '<address>';


    function main () {
      const wsProvider = new WsProvider(pangolin);

      ApiPromise.create({ derives: darwiniaDerive, provider: wsProvider, typesBundle: darwiniaTypesBundle }).then(async (api) => {
       
        // usableBalance from darwiniaDerive       
        await api.derive.usableBalance.balance(TokenType.Ring, address).then((balance) => {
          console.log(` account usableBalance ${balance.usableBalance} `);
        });
      }).catch((err) => {
        console.log(err);
      });
    }

    main();


```


### Generating

We can run the generate command via `yarn build:interfaces`, generate all chain's api-augment from Metadata. And run via `yarn build:defs`, generate types from customer definition in definitions.ts files and runtime lookup types.

Now if we check the actual output against the source via yarn lint, we would see that valid output has been generated -
```
> yarn lint
$ tsc --noEmit --pretty
```


### Build and Publish
1. `yarn lernaversion` - Before the publish, we need to bump the darwinia.js version, usually modify the versions of all packages at the same time for unified management.

2. Now we can build the generated types file via the `yarn build:ts` command. The files after build are saved in `packages/**/build`.

3. Via the `yarn publish` command will traverse the build files under the packages folder and execute the `npm publish` command in each build folders.


### Project using Darwinia.js


* Darwinia apps         —  Darwinia applications and portal
* Darwinia Wormhole-ui  —  Cross-chain transfer of assets portal
* Staking-payouts       —  CLI to make staking payout transactions for Substrate FRAME-based chains
* Polkadot apps         —  Basic Polkadot/Substrate UI for interacting with a Polkadot and Substrate node
* Darwinia smart-app    —  Transfer ring/kton between Darwinia Smart account and Darwinia account     
