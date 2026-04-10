import type { CounterReport } from '@deranged/qualweb-core/evaluation';
import { ExecutableModuleContext, ModuleType } from '@deranged/qualweb-core/evaluation';
import type { QualwebPage } from '@deranged/qualweb-core/lib';

export class CounterModule extends ExecutableModuleContext {
  public readonly name = ModuleType.COUNTER;

  protected getModulePackage(): string {
    return '@qualweb/counter';
  }

  protected runModule(page: QualwebPage): Promise<CounterReport> {
    return page.evaluate(() => {
      // @ts-expect-error executCounter should be defined in page's context.
      return executeCounter();
    });
  }
}
