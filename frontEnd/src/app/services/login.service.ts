import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from '../model/blogger/register';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  baseUrl="http://localhost:8083/auth"

  credentials={
    username:"",password:""
  }
  //API methods

  registerUser(reg:register):Observable<Object>{
    console.log(reg)
    return this.http.post(`${this.baseUrl}/register`,reg);
  }
  constructor(private http:HttpClient,private router:Router) { }
  generateToken(credentials:any)
  {
    return this.http.post(`${this.baseUrl}/login`,credentials)
  }
  
  //to check user is logged in or not
  loginUser(token)
  {
    localStorage.setItem("token",token)
    return true;
  }
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
  isAdmin(admin)
  {
    localStorage.setItem("admin",admin)
    return true
  }
  temp:any;
  findAdminn()
  {
    this.temp=localStorage.getItem("admin")
    if(this.temp=="true")
    {
      return true
    }
    else
    {
      return false
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem("userName");
    localStorage.removeItem("admin")
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
