import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { register } from '../model/register';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {
  credentials={
    username:"",password:""
  }
  constructor(private http:HttpClient,private router:Router) { }
  generateToken(credentials:any)
  {
    return this.http.post(`http://localhost:8083/auth/login`,credentials)
  }
  loginUser(token)
  {
    localStorage.setItem("token",token)
    return true;
  }
  //to check user is logged in or not
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem("userName");
    this.router.navigate([''])
    return true;
  }
  getToken()
  {
    return localStorage.getItem("token")
  }
  storeUsername(userN:string)
  {
    localStorage.setItem("userName",userN)
  }
}
