import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { dashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-blogapproval',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blogapproval.component.html',
  styleUrl: './blogapproval.component.css'
})
export class BlogapprovalComponent {
  constructor(private dashSer: dashboardService,private router:Router) {}
  Blogs:any;
  BlogsId:any;
  Bloging:any[]=[]
  userName:string=localStorage.getItem('userName')
  ngOnInit(): void {
    this.dashSer.showPending().subscribe({
        next: (response) => {
          this.Blogs=response
          console.log(this.Blogs);
        },
        error: (error) => {
          console.error('Error fetching blog posts:', error);
        }
      });
  }
  routerIt()
  {
    this.router.navigate(["/admin"])
  }
  removeThis(id:any)
  {
    this.dashSer.adminBlogRes(id,"false").subscribe(
      response=>{
        
      },
      error=>{
        console.log(error)
      }
    ) 

  }
  acceptThis(id:any)
  {
    this.dashSer.adminBlogRes(id,"true").subscribe(
      response=>{
        this.router.navigate(["/admin"])
        alert("publish request accepted")
      },
      error=>{
        console.log(error)
      }
    ) 

  }
}
