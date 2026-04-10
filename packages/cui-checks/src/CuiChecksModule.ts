import type {
  EvaluationReport,
  ModuleOptions,
  TestingData,
} from '@deranged/qualweb-core/evaluation';
import {
  ModuleType,
  ExecutableModuleContext,
} from '@deranged/qualweb-core/evaluation';
import type { TranslationOptions } from '@deranged/qualweb-locale';
import type { QualwebPage } from '@deranged/qualweb-core/lib';
import { CUIChecksRunner } from './CuiChecksRunner';
import { RuleTest } from './lib/types';

export class CUIChecksModule extends ExecutableModuleContext {
  public readonly name = ModuleType.CUI_CHECKS;

  protected getModulePackage(): string {
    return '@qualweb/cui-checks';
  }

  protected runModule(
    page: QualwebPage,
    options: ModuleOptions,
    translate: TranslationOptions,
    data: TestingData,
  ): Promise<EvaluationReport> {
    return page.evaluate(
      (data: TestingData, options: ModuleOptions, translate: TranslationOptions,rules?:RuleTest[]) => {
        //@ts-expect-error The package exists inside the context of the WebPage
        return new CUIChecksRunner(options, translate,"",rules).configure(options).executeTests(data).getReport();
      },
      data,
      options,
      translate
    );
  }
}
