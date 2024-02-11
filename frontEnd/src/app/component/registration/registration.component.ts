
import { CommonModule } from '@angular/common';

import { Component, NgModule, OnInit, ViewChild } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { register } from '../../model/blogger/register';
import { loginService } from '../../services/login.service';
 
@Component({

  selector: 'app-registration',

  standalone: true,

  imports: [CommonModule,FormsModule,RouterModule,CommonModule,RouterOutlet],

  templateUrl: './registration.component.html',

  styleUrl: './registration.component.css'

})

export class RegistrationComponent{
  @ViewChild('registartion') reg: NgForm;
  constructor(private logSer:loginService,private router:Router){}
  onSubmit(reg:register)
  {
    console.log(reg)
    console.log(reg.username)
    if(reg.cnfrmPassword!="" && reg.email!="" && reg.fName!="" && reg.lName!="" && reg.username!="" && reg.password!="")
    {
      this.logSer.registerUser(reg).subscribe(data=>{
        alert("User registered successfully")
        this.router.navigate(["/login"])
      },error=>alert("user is not registered")
      )
    }
    else{
      alert("make sure no field is empty")
      console.log("no data shipped")
    }
   
  }

}
