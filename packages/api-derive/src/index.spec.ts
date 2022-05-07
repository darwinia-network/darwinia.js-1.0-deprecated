// Copyright 2017-2022 @darwinia/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { from, Observable } from 'rxjs';
import { ApiRx, WsProvider } from '@polkadot/api';
import { ExactDerive } from '@polkadot/api-derive/derive';

const testFunction = (api: ApiRx): any => {
  return <S extends keyof ExactDerive, M extends keyof (typeof api.derive[S])>(section: S, method: M, inputs: any[]): void => {
    describe(`derive.${section}.${method}`, (): void => {
      it('should be a function', (): void => {
        expect(typeof api.derive[section][method]).toBe('function');
      });

      it('should return an Observable', (): void => {
        expect((api.derive[section][method] as any)(...inputs)).toBeInstanceOf(Observable);
      });
    });
  };
};

describe('derive', (): void => {
  // const registry = new TypeRegistry();
  const pangolin = 'wss://pangolin-rpc.darwinia.network';

  describe('builtin', (): void => {
    const api = new ApiRx({ provider: new WsProvider(pangolin) });

    beforeAll((done): void => {
      api.isReady.subscribe(() => done());
    });

    afterAll(async () => {
      await api.disconnect();
    });

    testFunction(api)('accounts', 'idAndIndex', []);
  });

  describe('custom', (): void => {
    const api = new ApiRx({
      derives: {
        custom: {
          test: (): any => (): Observable<string> => from(['a', 'b'])
        },
        fee: {
          inProcessOrder: ():any => (): Observable<any> => from('test'),

          markert: ():any => (): Observable<any> => from([1, 2, 3])

        },
        usableBalance: {
          balance: ():any => (): Observable<any> => from('test')
        }

      },
      provider: new WsProvider(pangolin),
      throwOnConnect: true
    });

    beforeAll((done): void => {
      api.isReady.subscribe(() => done());
    });

    afterAll(async () => {
      await api.disconnect();
    });

    testFunction(api)('custom', 'test', ['a', 'b']);

    testFunction(api)('fee', 'inProcessOrder', 'test');
    testFunction(api)('fee', 'markert', [1, 2, 3]);

    testFunction(api)('usableBalance', 'balance', 'test');
  });
});
