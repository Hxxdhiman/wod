import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';
import { AuthServService } from '../../services/auth.service';
import { BlogsService } from '../../services/blogs.service';
import { JwtServiceService } from '../../services/jwt-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private _blogser: BlogsService, private _addser: AddService,private temp:AuthServService,private jwtser:JwtServiceService,private router:Router) {}
  public loggedIn=false;
  isVisible = false;
  toggleVisibility() {
    this.isVisible = !this.isVisible;

  }
  ngOnInit(): void {
    this.loggedIn=this.jwtser.isLoggedIn()
  }
  logoutUser()
  {
    this.jwtser.logout()
    location.reload()
    this.router.navigate([''])
  }
  toggleVis() {
    this.isVisible = false;
    this.temp.logout();
  }
  isloggedin()
  {
    return this.loggedIn=this.jwtser.isLoggedIn()
  }
  gotodashboard()
  {
    this.router.navigate(["/dashboard"])
  }
  

}
