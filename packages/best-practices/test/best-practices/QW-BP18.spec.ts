import { resolve } from 'node:path';
import { buildTest } from './template';

buildTest('QW-BP18', resolve(__dirname, '../fixtures/testcases/BP18/testcases.json'));