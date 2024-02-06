import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';
import { WatchLaterService } from '../../services/watch-later.service';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {
  constructor(private _addser: AddService,private watchlater:WatchLaterService,private router:Router) {}
  Blogs:any;
  BlogsId:any;
  Bloging:any[]=[]
  userName:string=localStorage.getItem('userName')
  ngOnInit(): void {
    this.watchlater.showFav(localStorage.getItem("userName")).subscribe(
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
    this.watchlater.removeFav(this.userName,id).subscribe(
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
