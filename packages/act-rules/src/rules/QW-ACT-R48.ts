import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { AtomicRule } from '../lib/AtomicRule.object';

class QW_ACT_R48 extends AtomicRule {
  @ElementExists
  execute(element: QWElement): void {
    const test = new Test();

    const isInAT = window.AccessibilityUtils.isElementInAT(element);
    if (!isInAT) {
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

export { QW_ACT_R48 };
