import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists, ElementIsVisible } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { Technique } from '../lib/Technique.object';

class QW_WCAG_T19 extends Technique {

  @ElementExists
  @ElementIsVisible
  execute(element: QWElement): void {
    const test = new Test();

    const children = element.getElements(`input[type="submit"], input[type="image"], button[type="submit"]`);

    if (children.length > 0) {
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

export { QW_WCAG_T19 };
