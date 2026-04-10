import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { BestPractice } from '../lib/BestPractice.object';

class QW_BP13 extends BestPractice {
  @ElementExists
  execute(element: QWElement): void {
    const aWithImg = element.getElementParent();

    if (!aWithImg) {
      return;
    }

    const test = new Test();

    const href = aWithImg.getElementAttribute('href');
    const aWithImgNext = aWithImg.getElementNextSibling();
    const aWithImgPrev = aWithImg.getElementPreviousSibling();

    if (
      (aWithImgNext && aWithImgNext.getElementAttribute('href') === href) ||
      (aWithImgPrev && aWithImgPrev.getElementAttribute('href') === href)
    ) {
      test.verdict = Verdict.FAILED;
      test.resultCode = 'F1';
    } else {
      test.verdict = Verdict.PASSED;
      test.resultCode = 'P1';
    }

    if (aWithImg.getElementParent()) {
      test.addElement(element);
    }
    this.addTestResult(test);
  }
}

export { QW_BP13 };
