import type { QWElement } from '@deranged/qualweb-qw-element';
import { ElementExists, ElementHasOneOfTheFollowingRoles } from '@deranged/qualweb-util/applicability';
import { Test, Verdict } from '@deranged/qualweb-core/evaluation';
import { AtomicRule } from '../lib/AtomicRule.object';

class QW_ACT_R41 extends AtomicRule {
  @ElementExists
  @ElementHasOneOfTheFollowingRoles([
    'checkbox',
    'combobox',
    'listbox',
    'menuitemcheckbox',
    'menuitemradio',
    'radio',
    'searchbox',
    'slider',
    'spinbutton',
    'switch',
    'textbox'
  ])
  execute(element: QWElement): void {
    const test = new Test(Verdict.WARNING, undefined, 'W1');
    test.addElement(element);
    this.addTestResult(test);
  }
}

export { QW_ACT_R41 };
