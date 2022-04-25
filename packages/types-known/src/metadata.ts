// Copyright 2017-2022 @darwinia/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OverrideVersionedType } from '@polkadot/types/types';

// Type overrides based on  metadata versions
const typesMeta: OverrideVersionedType[] = [
  {
    // NOTE this is for support of old, e.g. Alex, old metadata and BlockNumber/Index
    // This is detected based on metadata version, since this is what we have up-front
    //   v3 = Alex
    //   v4 = v1.0 branch
    minmax: [17, undefined],
    types: {

    }
  }
];

export default typesMeta;
