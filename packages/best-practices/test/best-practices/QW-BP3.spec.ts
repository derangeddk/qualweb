import { resolve } from 'node:path';
import { buildTest } from './template';

buildTest('QW-BP3', resolve(__dirname, '../fixtures/testcases/BP3/testcases.json'));