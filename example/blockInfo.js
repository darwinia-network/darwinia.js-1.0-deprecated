// external imports
/* eslint-disable */

const { ApiPromise, WsProvider } = require('@polkadot/api');
const { typesBundleForPolkadotApps } = require("@darwinia/types/mix");


function filterEvents (index, events = []) {
  return events.filter(({ phase }) => phase.isApplyExtrinsic && phase.asApplyExtrinsic.eq(index));
}

const darwiniaTypesBundle = {
  spec: {
    Crab: typesBundleForPolkadotApps.spec.Crab,
    Darwinia: typesBundleForPolkadotApps.spec.Darwinia,
    Pangolin: typesBundleForPolkadotApps.spec.Pangolin
  }
};

const wsProvider = new WsProvider('wss://rpc.darwinia.network');

async function main () {
  const api = await ApiPromise.create({ provider: wsProvider, typesBundle: darwiniaTypesBundle });

  // get usable balance
  // params: tokenType(0 -> ring , 1 -> kton), adddres
  const usableBalance = await api.rpc.balances.usableBalance(0, '<your wallet address>');

  console.log('usableBalance', usableBalance.usableBalance.toString());

  // get account info
  const accountInfo = await api.query.system.account('<your wallet address>');

  // #############################
  // {
  //   "nonce": 8,
  //   "refcount": 0,
  //   "data": {
  //     "free": 10753082843,
  //     "reserved": 0,
  //     "freeKton": 0,
  //     "reservedKton": 0,
  //     "miscFrozen": 0,
  //     "feeFrozen": 0
  //   }
  // }
  // #############################
  console.log('-----accountInfo----- \n', JSON.stringify(accountInfo, null, 2));

  // get block info
  const blockHash = '<block hash>'; // system.ExtrinsicSuccess
  const block = await api.rpc.chain.getBlock(blockHash);
  const events = await api.query.system.events.at(blockHash);
  const blockHeader = await api.derive.chain.getHeader(blockHash);

  const blockNumber = blockHeader ? blockHeader.number.unwrap() : undefined;
  const parentHash = blockHeader ? blockHeader.parentHash.toHex() : undefined;

  // #############################
  // {
  //   "block": {
  //     "header": {
  //       "parentHash": "0x3fe1a1087ad1e872b148e98cb5c1ba45d63e7d73bc71e14679fc3530f5331ad3",
  //       "number": 6722195,
  //       "stateRoot": "0xb0e6c4afdaf3951473baf53300cc7a40ceaeaf190cefe6fbda47b03582773ec5",
  //       "extrinsicsRoot": "0x27b2eaa3751f2cefcbfd99fb052660477b21c65254a2e936e99870521549ac1b",
  //       "digest": {
  //         "logs": [
  //           {
  //             "preRuntime": [
  //               "0x42414245",
  //               "0x0268000000bc624f1000000000"
  //             ]
  //           },
  //           {
  //             "other": "0x4d4d5252ca8029e0f913e61d0d5b492d1da509bd5ab821bf2c86a44e18e11f084a4237c6"
  //           },
  //           {
  //             "seal": [
  //               "0x42414245",
  //               "0x3abcb2cbf10a9c0f83c5f794527900cc50c50f420704c631d1e65fa6ae50d165e7c9048237901af2e7aade0de799040dc6ca74e4ad1e58940044d1d7b0879789"
  //             ]
  //           }
  //         ]
  //       }
  //     },
  //     "extrinsics": [
  //       "0x280403000b41169a447e01",
  //       "0x450284000ef407af75417a160038262baf376a8ff8147142f860a8be9cb893d6f3a4971e01e0d3bc1bbd34e3ffc00fb927500ca632acbbb38a0f94d87370c00301ad34491f79f3d6e60204ee3df115d4a6c2de3ee19255f77d7952208a4459943fb5267a83f500a90a0004000022636d27fb735196a81a406b2a008016817048a8636732d5d6a1d944ebf971060700c4a5b684"
  //     ]
  //   },
  //   "justifications": null
  // }
  // #############################
  console.log('-----blockInfo By Hash----- \n', JSON.stringify(block, null, 2));
  // 6722195
  console.log('-----blockNumber----- \n', blockNumber.toString());
  // 0x3fe1a1087ad1e872b148e98cb5c1ba45d63e7d73bc71e14679fc3530f5331ad3
  console.log('-----parentHash----- \n', parentHash);

  // check transfer tx
  const extrinsics = block.block.extrinsics;

  extrinsics.map((value, index) => {
    const { meta, method, section } = api.registry.findMetaCall(value.callIndex);

    console.log(`-----extrinsic(${section}.${method})----- \n`, JSON.stringify({ meta, method, section }, null, 2));

    const thisEvents = filterEvents(index, events);

    thisEvents.map(({ event }, index) => {
      // #############################
      // balances.Transfer
      // {"index":"0x0402","data":["","",570000000000]}
      // system.ExtrinsicSuccess
      // {"index":"0x0000","data":[{"weight":193987000,"class":"Normal","paysFee":"Yes"}]}
      // #############################

      // Transfer succeeded (from, to, value).
      console.log('-----event section.method----- \n', `${event.section}.${event.method}`);
      console.log('-----event detail----- \n', JSON.stringify(event, null, 2));

      // Confirm whether a RING transfer transaction is successful
      // 1. The block is Finalized
      // 2. The current extrinsic event has ${event.section}.${event.method} === 'balances.Transfer'
      // 3. The current extrinsic event has ${event.section}.${event.method} === 'system.ExtrinsicSuccess'
    });
  });

  // get current block number
  const currentBlockNumber = await api.query.system.number();

  console.log('current block number', currentBlockNumber.toString());
}

main();
