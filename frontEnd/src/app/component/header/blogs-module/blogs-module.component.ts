import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { blogger } from '../../../model/blogger/blogger';
import { v4 as uuid } from 'uuid';
import { dashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-blogs-module',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,RouterOutlet],
  templateUrl: './blogs-module.component.html',
  styleUrl: './blogs-module.component.css'
})
export class BlogsModuleComponent implements OnInit{
  blog=new blogger();
  file:any
  ngOnInit(){

  }
  constructor(private dashSer:dashboardService,private router:Router){

  }
  generateAutoId(): string {
    return uuid();
  }
  base64textString:string;
  img:ArrayBuffer;
  autoId = this.generateAutoId();
  onFileChange(event:any)
  {
  this.blog.id=this.autoId;
  const files=event.target.files;
  const file=files[0];
  if(files && file){
    const reader=new FileReader();
    reader.onload=(readerEvt)=>{
      this._handleReaderLoaded(readerEvt);
    };
    reader.readAsBinaryString(file);
  }
}
_handleReaderLoaded(readerEvt:any){
const BinaryString=readerEvt.target.result;
this.base64textString=btoa(BinaryString);
console.log(this.base64textString);
}
  addBlog()
  {
    this.blog.img=this.base64textString;
    this.dashSer.postUserData(this.blog).subscribe({
      next:(response)=>{
        console.log(response)
        alert("Blog is successfully submitted !!! We will review and publish it")
        this.router.navigate(["/dashboard"])
      },
      error:(error)=>{
        console.log(error)
        alert("Please provide necessary fields")
      },
      complete:()=>{
        console.log("request is completed");
      }
    })

  }
}
