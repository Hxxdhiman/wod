import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { blogger } from '../../model/blogger/blogger';
import { dashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private dashSer: dashboardService) {}
  Blogs:blogger[]=[];
  userName:string=localStorage.getItem('userName')
  ngOnInit(): void {
    this.dashSer.getBlogs().subscribe({
      next: (response) => {
        this.Blogs=response
        console.log(this.Blogs);
      },
      error: (error) => {
        console.error('Error fetching blog posts:', error);
      }
    });
  }

  
  addToWatchLater(blogId:any)
  {
    this.dashSer.addToReadLater(this.userName,blogId).subscribe(
      user=>{
        console.log(user)
        alert('added to read later')
      },
      error=>{
        console.log(error)
      }
    ) 
  }
  // readlater(data){
  //   console.log(data)
  //   this._addser.addToReadLater(data);
  //   alert("Added to Favourite")
  // }
 
}
