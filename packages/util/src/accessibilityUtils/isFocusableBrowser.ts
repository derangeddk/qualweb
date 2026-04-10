import type { QWElement } from '@deranged/qualweb-qw-element';

function isFocusableBrowser(element: QWElement): boolean {
  element.focusElement();
  const focused = window.qwPage.getFocusedElement();
  return element.getElementSelector() === focused?.getElementSelector();
}

export default isFocusableBrowser;
