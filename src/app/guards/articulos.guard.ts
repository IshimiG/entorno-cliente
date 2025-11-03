import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';

export const articulosGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);
  let login=inject(LoginService)

  return login.isLogged;
};
