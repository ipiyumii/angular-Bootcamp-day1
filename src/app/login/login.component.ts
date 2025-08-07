import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatError],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private accountService: AccountService,private router: Router) {}

  errorMessage = signal('');

  loginForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.initializeForm();
  } 

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[ Validators.required, Validators.email]),
      password: new FormControl('',Validators.required)
    });
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.accountService.login(
      this.loginForm.value.email, 
      this.loginForm.value.password
    );
    }   
  }

  updateErrorMessage() {
    if(this.email.hasError('required')) {
      this.errorMessage.set("You must enter a value");
    } else if(this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }

    if(this.password.hasError('required')) {
      this.errorMessage.set("You must enter a value");
    } else if(this.accountService.errorMessage()) {
      this.errorMessage.set('email or password is not valid');
    }
  }

  onClickRegister() {
    this.router.navigate(['/register']);
  }
}
