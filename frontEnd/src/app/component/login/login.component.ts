import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { loginService } from '../../services/login.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials={
    username:"",password:""
  }
  constructor(private logSer:loginService,private router:Router){
  }
  temo:boolean=true;
  checkStatus(d1:string)
  {
    if(d1==null)
    {
      this.temo=false;
      
    }
  }
  onSubmit()
  {
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password))
    {
      console.log("Login ready to send data to server")
      this.logSer.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response.token)
          this.logSer.storeUsername(this.credentials.username)
          this.logSer.loginUser(response.token)
          if(response.admin=="true")
          {
            this.router.navigate(["/admin"])
            this.logSer.isAdmin(response.admin)
            console.log(response.admin)
          }
          else
          {
            this.router.navigate(["/dashboard"])
          }
        },
        error=>{
          console.log(error)
          alert("wrong password or username")
        } 
      )
    }
    else{
      alert("Make sure that no field is empty")
    }
  }
}
