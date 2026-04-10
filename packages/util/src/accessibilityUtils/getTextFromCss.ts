import type { QWElement } from '@deranged/qualweb-qw-element';

function getTextFromCss(element: QWElement, textContent: string): string {
  const before = element.getElementStyleProperty('computed-style-before', 'content');
  const after = element.getElementStyleProperty('computed-style-after', 'content');

  return before + textContent + after;
}

export default getTextFromCss;
