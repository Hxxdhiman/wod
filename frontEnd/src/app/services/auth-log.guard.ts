import { CanActivateFn, Router } from '@angular/router';
import { JwtServiceService } from './jwt-service.service';
import { inject } from '@angular/core';
export const authLogGuard: CanActivateFn = (route, state) => {
  const jwtSer:JwtServiceService=inject(JwtServiceService)
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
