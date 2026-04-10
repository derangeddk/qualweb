import type { QWElement } from '@deranged/qualweb-qw-element';
import { Check } from '../lib/Check.object';
import { ElementExists } from '@deranged/qualweb-util/applicability';
import { QWBrowserTest } from '../lib/decorator';


class QW_CUI_C8 extends Check {

         @ElementExists
         @QWBrowserTest
         // @ts-ignore
         async execute(element?: QWElement): Promise<void> {
          
       }
}

export { QW_CUI_C8 };
