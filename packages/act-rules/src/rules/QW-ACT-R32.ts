import { ElementExists } from '@deranged/qualweb-util/applicability';
import { CompositeRule } from '../lib/CompositeRule.object';

class QW_ACT_R32 extends CompositeRule {
  @ElementExists
  execute(): void {
    throw new Error('Method not implemented.');
  }
}

export { QW_ACT_R32 };
