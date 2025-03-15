import { AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenNameValidator(forbiddenName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value === forbiddenName;
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}