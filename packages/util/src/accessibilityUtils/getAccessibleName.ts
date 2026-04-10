import type { QWElement } from '@deranged/qualweb-qw-element';
import getAccessibleNameRecursion from './getAccessibleNameRecursion';

function getAccessibleName(element: QWElement): string | undefined {
  return getAccessibleNameRecursion(element, false, false);
}
export default getAccessibleName;
