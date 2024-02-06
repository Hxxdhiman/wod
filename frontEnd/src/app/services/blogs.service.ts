import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { blogger } from '../model/blogger/blogger';
import { ServiceService } from '../service.service';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private http:HttpClient){
  }
  postUserData(blog:any): Observable<Object>
  {
    return this.http.post(`http://localhost:8085/dashboard/putBlogs`,blog)
  }
}
