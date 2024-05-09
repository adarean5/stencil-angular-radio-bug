import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'stencil-library/loader';
import {RadioValueAccessor} from "./stencil-generated/radio-value-accessor";

@NgModule({
  declarations: [...DIRECTIVES, RadioValueAccessor],
  exports: [...DIRECTIVES, RadioValueAccessor],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class ComponentLibraryModule { }
