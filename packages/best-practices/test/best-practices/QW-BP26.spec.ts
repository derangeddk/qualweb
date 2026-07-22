import { resolve } from 'node:path';
import { buildTest } from './template';

buildTest('QW-BP26', resolve(__dirname, '../fixtures/testcases/BP26/testcases.json'));