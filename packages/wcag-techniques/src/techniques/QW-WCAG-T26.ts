import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists, ElementHasAttributes, ElementIsVisible } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { Technique } from '../lib/Technique.object';

class QW_WCAG_T26 extends Technique {
  @ElementExists
  @ElementHasAttributes
  @ElementIsVisible
  execute(element: QWElement): void {
    const test = new Test();

    if (window.AccessibilityUtils.isElementWidget(element)) {
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

export { QW_WCAG_T26 };
