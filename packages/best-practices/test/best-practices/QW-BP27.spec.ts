import { resolve } from 'node:path';
import { buildTest } from './template';

buildTest('QW-BP27', resolve(__dirname, '../fixtures/testcases/BP27/testcases.json'));