import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { BlogsService} from '../../../services/blogs.service';
import { ShowBlogsService } from '../../../services/show-blogs.service';

@Component({
  selector: 'app-card',

  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  constructor(private _blogser: BlogsService, private activeRoute : ActivatedRoute,private showB:ShowBlogsService) {}

  Blogss : any;
  Blogs : any;
  BlogsId : any;  
  ngOnInit(): void {
    this.showB.getBlogs().subscribe(
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
  }
  
