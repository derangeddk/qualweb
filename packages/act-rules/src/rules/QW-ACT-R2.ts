import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists, IsHTMLDocument, IsInMainContext } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { AtomicRule } from '../lib/AtomicRule.object';

class QW_ACT_R2 extends AtomicRule {
  @ElementExists
  @IsHTMLDocument
  @IsInMainContext
  execute(element: QWElement): void {
    const lang = element.getElementAttribute('lang');

    const test = new Test();

    if (lang && lang.trim() !== '') {
      test.verdict = Verdict.PASSED;
      test.resultCode = 'P1';
    } else {
      test.verdict = Verdict.FAILED;
      test.resultCode = 'F1';
    }

    test.addElement(element, false);
    this.addTestResult(test);
  }
}

export { QW_ACT_R2 };
