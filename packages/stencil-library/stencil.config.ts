import { Config } from '@stencil/core';
import {angularOutputTarget, ValueAccessorConfig} from "@stencil/angular-output-target";

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: [
        {
          elementSelectors: ['cust-radio'],
          event: 'myChange',
          targetAttr: 'value',
          type: 'radio',
        },
      ]
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
