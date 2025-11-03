import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let log = inject(LoginService)
  let router = inject(Router)
  if(!log.isLogged) router.navigate(["/login"])
  return log.isLogged
};
