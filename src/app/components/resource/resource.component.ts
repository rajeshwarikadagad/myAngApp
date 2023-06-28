import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
export class Validation {
  
  static passwordPattern(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      console.log(control);
      if (!value) {
        return null;
      }

      const hasLowerCase = /[a-z]/.test(value);
      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumbers = /[0-9]/.test(value);
      // const hasspecialChar = /[&._-]/.test(value);
      const isValidated = hasUpperCase && hasLowerCase && hasNumbers;
      if (!isValidated) {
        control.setErrors({ passwordStrength: true });
        return { passwordStrength: true }
      } else {
          control.setErrors(null);
          return control
      }
    }

  }

  static passwordMatch(password1: string, confirmPassword2: string): ValidatorFn {
return (controls: AbstractControl): ValidationErrors | null => {
  console.log('passwordMatch', controls);
const pass = controls.get(password1);
const confirmPass = controls.get(confirmPassword2);
if(pass === confirmPass) {
  return null;
} else {
  confirmPass?.setErrors({match: true})
  return confirmPass
}
}
  }
};


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['',  Validators.required, Validators.minLength(3)],
      lasttName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validation.passwordPattern()],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      mobileNum: ['', Validators.required, Validators.maxLength(10), Validators.minLength(10)],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: [''],
      checkMeOut: [''],
    },
      {
        validators: Validation.passwordMatch('password', 'confirmPassword') 
      }
    );
  }

  get rgFormControls() {
    return this.registerForm.controls;
  }
  onSubmitregisterForm(): any {
    this.submitted = true;
    if (this.registerForm.invalid) {
      window.alert('Form Is Invalid');

      return false
    }
    console.log(this.registerForm.getRawValue());
    window.alert('Form Submitted successfully;');
  }
}
