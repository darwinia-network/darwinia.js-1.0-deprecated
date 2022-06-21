// Copyright 2017-2022 @darwinia/api-evm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import { TransactionResponse } from '@ethersproject/abstract-provider';
import { JsonRpcProvider } from '@ethersproject/providers';

import { GenericCall as Call, Metadata, TypeRegistry } from '@polkadot/types';
import { AccountId32, H160 } from '@polkadot/types/interfaces/runtime';

const WITHDRAW_GAS = 55000;
const precision = 1000_000_000;

export interface EvmConfig {
  balancesTransferIndex: [number, number];
  metadata: HexString;
  dispatchContractAddress: string;
}

export class DarwiniaEvm {
  protected _cfg: EvmConfig;
  protected ethers: JsonRpcProvider;
  protected _metadataType: Metadata;
  protected _registry = new TypeRegistry();

  constructor (cfg: EvmConfig, ethers: JsonRpcProvider) {
    this._cfg = cfg;
    this.ethers = ethers;
    this._metadataType = new Metadata(this._registry, this._cfg.metadata);
    this._registry.setMetadata(this._metadataType);
  }

  get config () {
    return this._cfg;
  }

  /**
   * @description transfer smart chain token to substrate chain by substrate contract
   * @param from  evm address
   * @param to    substrate account
   * @param amount  token amount with precision  1000_000_000
   * @param gas gasLimit
   * @returns
   */
  async balanceTransferDispatch (from: H160, to: AccountId32, amount: number, gas?: number): Promise<TransactionResponse> {
    const signer = this.ethers.getSigner();

    const decodInput = new Call(this._registry, {
      args: [to.toString(), Number(amount.toPrecision(9)) / precision],
      callIndex: this._cfg.balancesTransferIndex
    });

    return await signer.sendTransaction({
      data: decodInput.toU8a(),
      from: from.toString(),
      gasLimit: gas ?? WITHDRAW_GAS,
      to: this._cfg.dispatchContractAddress
    });
  }
}
