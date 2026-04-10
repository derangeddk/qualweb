import { ModuleTranslator } from '@deranged/qualweb-core/locale';
import { EvaluationModuleDefinition, ModuleOptions, ModuleReport, ModuleType } from '@deranged/qualweb-core/evaluation';
import { WCAGTechniquesTester } from './lib/WCAGTechniquesTester.object';
import { TranslationOptions } from '@deranged/qualweb-locale';

export class WCAGTechniquesRunner extends EvaluationModuleDefinition<WCAGTechniquesTester> {
  protected readonly translator = new ModuleTranslator(this.type, this.translate);

  public constructor(moduleOptions: ModuleOptions, translationOptions: TranslationOptions) {
    const moduleType = ModuleType.WCAG_TECHNIQUES;
    const report = new ModuleReport(moduleType);
    const tester = new WCAGTechniquesTester(report);

    super(
      moduleType,
      moduleOptions,
      translationOptions,
      report,
      tester,
    );

    this.translator = new ModuleTranslator(this.type, this.translate);
    this.tester.init(this.translator);
  }
}
