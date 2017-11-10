import { Directive, Attribute, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[preventSelect][ngControl], [preventSelect][ngFormControl],[preventSelect][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => PreventSelectValidatorDirective), multi: true }]

})


export class PreventSelectValidatorDirective implements Validator {

    validator: ValidatorFn;
    constructor() {
        this.validator = forbidSelect();
    }

    validate(control: AbstractControl) {
        return this.validator(control);
    }

}

//checks if controls.value if greater than 0 for it pass 
export function checkForPositive(c: number) {
    if (c > 0) {
        return true;
    } else {
        return false;
    }
}

//checks if the function callbacks returns true, if true, null represents pass else sets control validation to false

export function forbidSelect() {
    return (control: AbstractControl) => {
        return checkForPositive(control.value) ? null : { preventSelect: false }
    };

}
