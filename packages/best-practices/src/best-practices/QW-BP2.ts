import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists, ElementHasAttribute, ElementHasNonEmptyAttribute } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { BestPractice } from '../lib/BestPractice.object';

class QW_BP2 extends BestPractice {
  @ElementExists
  @ElementHasAttribute('alt')
  @ElementHasNonEmptyAttribute('alt')
  async execute(element: QWElement): Promise<void> {
    const test = new Test();

    const altValue = <string>element.getElementAttribute('alt');

    if (altValue.trim().length <= 100) {
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

export { QW_BP2 };
