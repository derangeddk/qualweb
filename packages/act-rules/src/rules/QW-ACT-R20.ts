import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists, ElementHasNonEmptyAttribute, ElementIsNotHidden } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { AtomicRule } from '../lib/AtomicRule.object';

class QW_ACT_R20 extends AtomicRule {
  @ElementExists
  @ElementHasNonEmptyAttribute('role')
  @ElementIsNotHidden
  execute(element: QWElement): void {
    const test = new Test();

    if (window.AccessibilityUtils.elementHasValidRole(element)) {
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

export { QW_ACT_R20 };
