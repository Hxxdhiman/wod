import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { dashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {
  constructor(private dashSer: dashboardService,private router:Router) {}
  Blogs:any;
  BlogsId:any;
  Bloging:any[]=[]
  userName:string=localStorage.getItem('userName')
  ngOnInit(): void {
    this.dashSer.showFav(localStorage.getItem("userName")).subscribe(
      user=>{
        console.log(user)
        this.Blogs=user
        this.Bloging=this.Blogs
      },
      error=>{
        console.log(error)
      }
    )
  }
  removeFav(id:any)
  {
    this.dashSer.removeFav(this.userName,id).subscribe(
      user=>{
        console.log(user)
        window.location.reload()
      },
      error=>{
        console.log(error)
      }
    ) 

  }
}
