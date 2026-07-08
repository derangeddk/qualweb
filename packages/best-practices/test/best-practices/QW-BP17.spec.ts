import { resolve } from 'node:path';
import { buildTest } from './template';

buildTest('QW-BP17', resolve(__dirname, '../fixtures/testcases/BP17/testcases.json'));