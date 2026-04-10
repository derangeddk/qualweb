import type { QWElement } from '@deranged/qualweb-qw-element';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { BestPractice } from '../lib/BestPractice.object';

class QW_BP5 extends BestPractice {
  execute(element?: QWElement): void {
    const test = new Test();

    if (!element) {
      test.verdict = Verdict.PASSED;
      test.resultCode = 'P1';
    } else {
      test.verdict = Verdict.FAILED;
      test.resultCode = 'F1';
      test.addElement(element);
    }

    this.addTestResult(test);
  }
}

export { QW_BP5 };
