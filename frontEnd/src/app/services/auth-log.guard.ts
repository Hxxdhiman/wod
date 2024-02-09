import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { loginService } from './login.service';
export const authLogGuard: CanActivateFn = (route, state) => {
  const jwtSer:loginService=inject(loginService)
  const router:Router=inject(Router);
  if(jwtSer.isLoggedIn())
  {
    console.log("you have logged in successfully")
    return true
  }
  else{
    console.log("access denied without token")
    router.navigate(['']);
    return false;
  }
  
};
