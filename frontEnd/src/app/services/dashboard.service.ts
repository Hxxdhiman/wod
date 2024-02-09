import { Injectable } from '@angular/core';
import { CardComponent } from '../component/dashboard/card/card.component';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { comment } from '../model/blogger/comment';
import { blogger } from '../model/blogger/blogger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8085/dashboard"
  addComments(info:comment)
  {
    return this.http.post(`${this.baseUrl}/addComment`,info)
  }
  showComments(id:string)
  {
    return this.http.get(`${this.baseUrl}/getComments/${id}`)
  }
  postUserData(blog:any): Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/putBlogs`,blog)
  }
  getBlogs()
  {
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<blogger[]>(`${this.baseUrl}/showBlogs`,{headers})
  }
  addToReadLater(userName:any,vlogsId:any)
  {
    return this.http.get(`${this.baseUrl}/setFav/${userName}/${vlogsId}`)
  }
  showFav(userName:any)
  {
    return this.http.get(`${this.baseUrl}/showFav/${userName}`)
  }
  removeFav(userName:any,vlogsId:any)
  {
    return this.http.get(`${this.baseUrl}/removeFav/${userName}/${vlogsId}`)
  }
}

