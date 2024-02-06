import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AddService } from '../../../services/add.service';
import { BlogsService } from '../../../services/blogs.service';
import { comment } from '../../../model/blogger/comment';
import { FormsModule } from '@angular/forms';
import { ShowBlogsService } from '../../../services/show-blogs.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,RouterOutlet],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  BlogsId:any
  comme=new comment("","","","")
  comm:any
  com:comment
  Blogss:any
  Blogs:any
  noCommInfo:string=""
  nameCom:string="show previous comments?"
  commentAccess:boolean=false
  constructor(private _blogser: BlogsService, private activeRoute : ActivatedRoute,private addser :AddService,private showB:ShowBlogsService,private router:Router) {}
  ngOnInit(): void {
    this.showB.getBlogs().subscribe(
      (user) => {
        this.Blogss = user;
        this.BlogsId = this.activeRoute.snapshot.params['id'];
        this.Blogs = this.Blogss.find((x) => x.id == this.BlogsId);
        console.log(this.Blogs);
        this.addser.showComments(this.BlogsId).subscribe(
          (user) => {
            console.log(user);
            this.comm = user;
          },
          (error) => {
            console.log(error);
          }
        );   // Call showComments here after setting BlogsId
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
  showComment()
  {
    
    if(this.commentAccess)
    {
      this.commentAccess=false
      this.nameCom="show previous comments?"
    }
    else
    {
      this.commentAccess=true
      this.nameCom="Hide previous comments"
    }
  }
  isAllow()
  {
    return this.commentAccess
  }

  generateAutoId(): string {
     return uuid();
  }
  onChangeFileField(event:any)
  {
    this.comme.commentId=this.generateAutoId()
    this.comme.vId=this.BlogsId
    this.comme.commentUsername=localStorage.getItem('userName')
  }
  addComm()
  {
    this.addser.addComments(this.comme).subscribe({
      next:(response)=>{
        console.log(response)
      },
      error:(error)=>{
        console.log(error)
        alert("error")
      },
      complete:()=>{
        console.log("request is completed");
      }
    })
    this.addser.showComments(this.BlogsId).subscribe(
      user=>{
        console.log(user)
        this.comm=user
      },
      error=>{
        console.log(error)
      }
    )

  }
  routerIt()
  {
    this.router.navigate(["/dashboard"])
  }

}