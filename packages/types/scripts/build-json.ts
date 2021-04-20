// Copyright 2017-2021 authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as fs from 'fs';
import { types, jsonrpc } from '@darwinia/types/mix';

fs.writeFileSync('packages/types/src/json/types.json', JSON.stringify(types, null, 4));
fs.writeFileSync('packages/types/src/json/rpc.json', JSON.stringify(jsonrpc, null, 4));
