import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private router = inject(Router);
  private http = inject(HttpClient);

  baseUrl = environment.apiUrl;

  email: string = '';
  password: string = '';
  currentUser = signal<User | null>(null);

  constructor() { }

  // login(email: string, password: string)  {
  //   this.email = email;
  //   this.password = password;

  //   const user = this.userArray.find(user => user.email === this.email && user.password === this.password);
    
  //   if(user) {
  //     this.currentUser.set(user);
  //     localStorage.setItem('currentUser', JSON.stringify(user));
  //   }
  //   else {
  //     console.log('Invalid email or password');
  //   }
  // }

  login(email: string, password: string) {
    return this.http.get<User[]>(this.baseUrl + 'Users').subscribe (
      uesrs => {
        const matcheduser = uesrs.find(user => user.email === email);

        if(matcheduser) {
          this.currentUser.set(matcheduser); 
          localStorage.setItem('currentUser', JSON.stringify(matcheduser));

        }
      }
    )

    
    
  }

}
