import type { QWElement } from '@deranged/qualweb-qw-element';
import getAccessibleNameSVGRecursion from './getAccessibleNameSVGRecursion';

function getAccessibleNameSVG(element: QWElement): string | undefined {
  return getAccessibleNameSVGRecursion(element, false);
}

export default getAccessibleNameSVG;
