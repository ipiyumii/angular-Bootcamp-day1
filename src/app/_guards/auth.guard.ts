import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);

  const user = accountService.currentUser();
    console.log('authGuard checked, currentUser:', user);


  if(user) {
      console.log('authGuard checked, currentUser:', user);

    return true;
  }

  return false;
};
