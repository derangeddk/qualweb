import { resolve } from 'node:path';
import { buildTest } from './template';

buildTest('QW-BP22', resolve(__dirname, '../fixtures/testcases/BP22/testcases.json'));
