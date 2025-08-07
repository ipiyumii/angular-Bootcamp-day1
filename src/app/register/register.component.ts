import { Component, signal } from '@angular/core';
import { AbstractControl, EmailValidator, Form, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatError, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatError, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private accountService:AccountService){}

  registerForm: FormGroup = new FormGroup([]);
  errorMessage = "";

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      age: new FormControl('', [Validators.required, this.ageValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpwd: new FormControl('', [Validators.required, this.passwordMatchValidator] )
    })
  }

  
    ageValidator (control:AbstractControl) : ValidationErrors | null {
      const age = control.value;
      
      if(age === null || age === '' || isNaN(age) || age < 0 || age > 120) { 
        return {invalidAge : true};
      }

      return null;
    }

    passwordMatchValidator(control:AbstractControl) : ValidationErrors | null {
      const password = control.get('password')?.value;
      const confirmpwd = control.get('confirmpwd')?.value;

      if(password !== confirmpwd) {
        return {passwordMatch: true};
      }

      return null;
    }

    get email() {
      return this.registerForm.get('email') as FormControl;
    }

    get age() {
      return this.registerForm.get('age') as FormControl;
    }

    get name() {
      return this.registerForm.get('name') as FormControl;
    }

    get password() {
      return this.registerForm.get('password') as FormControl;
    }

    updateErrorMessage() {
      if(this.email.hasError('required')) {
      this.errorMessage = "You must enter a value";
    } else if(this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
    }
  
    onSubmit() {
      const user: User = {
        userId: Math.random().toString(),
        name: this.registerForm.get('name')?.value,
        age: this.registerForm.get('age')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      }
      this.accountService.register(user);
    }
}
