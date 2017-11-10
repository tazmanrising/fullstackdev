import { NgModule } from '@angular/core';
import { IeNumeric } from './ie-numeric/ie-numeric.directive';
import { RequireDigitCount } from './require-digit-count/require-digit-count.directive';
import { InputMaskDirective  } from './input-mask/input-mask.directive';

@NgModule({
    imports: [],
    declarations: [IeNumeric, RequireDigitCount, InputMaskDirective ],
    exports: [IeNumeric, RequireDigitCount, InputMaskDirective],
    providers: []
})

export class DirectivesModule { }
