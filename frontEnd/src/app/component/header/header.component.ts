import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { loginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router,private logSer:loginService) {}
  public loggedIn=false;
  isVisible = false;
  toggleVisibility() {
    this.isVisible = !this.isVisible;

  }
  ngOnInit(): void {
    this.loggedIn=this.logSer.isLoggedIn()
  }
  logoutUser()
  {
    this.logSer.logout()
    location.reload()
    this.router.navigate([''])
  }
  isloggedin()
  {
    return this.loggedIn=this.logSer.isLoggedIn()
  }
  gotodashboard()
  {
    this.router.navigate(["/dashboard"])
  }
  

}
