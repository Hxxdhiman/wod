import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { blogger } from '../../model/blogger/blogger';
import { dashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
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
  removeBlog(BlogId:any)
  {
    this.dashSer.removeBlog(BlogId).subscribe(
      user=>{
        console.log(user)
        alert('added to read later')
      },
      error=>{
        console.log(error)
      }
    )
  }
}
