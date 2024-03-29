import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { dashboardService } from '../../../services/dashboard.service';


@Component({
  selector: 'app-card',

  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  constructor(private dashSer:dashboardService, private activeRoute : ActivatedRoute,private router:Router) {}

  Blogss : any;
  Blogs : any;
  BlogsId : any;  
  ngOnInit(): void {
    this.dashSer.getBlogs().subscribe(
      user=>{
        this.Blogss=user
        this.BlogsId=this.activeRoute.snapshot.params['id'];
        console.log(this.BlogsId)
        this.Blogs = this.Blogss.find((x) => x.id == this.BlogsId);
      },
      error=>{
        console.log(error)
      }
    )
  }
  routeMe()
  {
    if(localStorage.getItem("admin")=="true")
    {
      this.router.navigate(["/blog-approval"])
    }
    else
    {
      this.router.navigate(["/dashboard"])
    }
  }
  }
  
