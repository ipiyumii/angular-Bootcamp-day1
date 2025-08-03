import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private accountService: AccountService,private router: Router) {}

  loginForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.initializeForm();
  } 

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.accountService.login(
      this.loginForm.value.email, 
      this.loginForm.value.password
    );
    
    this.router.navigate(['/tasks']);
    }
    

    
  }
}
