import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';


@Directive({
  selector: '[appNombreProhibido]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NombreProhibidoDirective, multi: true }]
})
export class NombreProhibidoDirective implements Validator {
  @Input('appNombreProhibido') nombreProhibido: string;

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.nombreProhibido ? this.forbiddenNameValidator(new RegExp(this.nombreProhibido, 'i'))(control) : null;
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
  }

}
