import { CanActivateFn, Router } from '@angular/router';
import { loginService } from './login.service';
import { inject } from '@angular/core';

export const adminLoginGuard: CanActivateFn = (route, state) => {
  const adminSer:loginService=inject(loginService)
  const router:Router=inject(Router);
  if(adminSer.findAdminn())
  {
    console.log("admin approved successfully")
    return true;
  }
  else{
    console.log("no admin acess")
    router.navigate(['']);
    return false;
  }
  return true;
};
