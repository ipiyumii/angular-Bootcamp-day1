import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private router = inject(Router);

  email: string = '';
  password: string = '';
  currentUser = signal<User | null>(null);

  constructor() { }

  private userArray = [
      {  
        userId: 'u1', 
        name: 'Piyumi',
        email: 'piyumi@gmail.com',
        password: 'piyumi123',
        age: 25
      },
      {
        userId: 'u2',
        name: 'John',
        email: 'john@gmial.com',
        password: 'john123',
        age: 30
      },
      {
        userId: 'u3',
        name: 'Jane',
        email: 'jane@gmail.com',
        password: 'jane123',
        age: 28
      },
  ];

  login(email: string, password: string) {
    this.email = email;
    this.password = password;

    const user = this.userArray.find(user => user.email === this.email && user.password === this.password);
    
    if(user) {
      this.currentUser.set(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
    }

    else {
      console.log('Invalid email or password');
    }

  }

}
