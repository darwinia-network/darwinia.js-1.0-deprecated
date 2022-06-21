// Copyright 2017-2022 @darwinia/api-evm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import { TransactionResponse } from '@ethersproject/abstract-provider';
import { JsonRpcProvider } from '@ethersproject/providers';

import { GenericCall as Call, Metadata, TypeRegistry } from '@polkadot/types';

import { BalanceTransferInput } from './types';

const WITHDRAW_GAS = 55000;
const precision = 100000000;

export interface CallIndexConfig {
  balanceTransfer: [number, number];
  metadata: HexString;
}

export class DarwiniaDvmApi {
  protected _cfg: CallIndexConfig;
  protected ethers: JsonRpcProvider;
  protected _metadataType: Metadata;
  protected _registry = new TypeRegistry();

  constructor (cfg: CallIndexConfig, ethers: JsonRpcProvider) {
    this._cfg = cfg;
    this.ethers = ethers;
    this._metadataType = new Metadata(this._registry, this._cfg.metadata);
    this._registry.setMetadata(this._metadataType);
  }

  get config () {
    return this._cfg;
  }

  async balanceTransferDispatch (from: string, to: string, input: BalanceTransferInput, gas?: number): Promise<TransactionResponse> {
    const signer = this.ethers.getSigner();

    const decodInput = new Call(this._registry, {
      args: [input.destAccount, Number(input.amount.toPrecision(9)) * precision],
      callIndex: this._cfg.balanceTransfer
    });

    return await signer.sendTransaction({
      data: decodInput.toU8a(),
      from,
      gasLimit: gas ?? WITHDRAW_GAS,
      to
    });
  }
}
