import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { BestPractice } from '../lib/BestPractice.object';

class QW_BP26 extends BestPractice {
  @ElementExists
  execute(element: QWElement): void {
    const test = new Test();

    const isTopLevel = window.AccessibilityUtils.landmarkIsTopLevel(element);
    if (isTopLevel) {
      test.verdict = Verdict.PASSED;
      test.resultCode = 'P1';
    } else {
      test.verdict = Verdict.FAILED;
      test.resultCode = 'F1';
    }
    test.addElement(element);
    this.addTestResult(test);
  }
}

export { QW_BP26 };
