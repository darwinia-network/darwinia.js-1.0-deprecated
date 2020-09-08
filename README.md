# darwinia.js
Javascript API and Types

### Installtion

```bash
yarn add @darwinia/api
```
 How to instantiate a Darwinia API object and use it to connect to a node using ApiPromise.

### Examples
```javascript
const { ApiPromise, WsProvider } = require('@darwinia/api');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('wss://crab.darwinia.network');

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

main().catch(console.error).finally(() => process.exit());
```



