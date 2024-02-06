import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogger } from '../model/blogger/blogger';

@Injectable({
  providedIn: 'root'
})
export class ShowBlogsService {

  constructor(private http:HttpClient) { }
  getBlogs()
  {
    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<blogger[]>(`http://localhost:8085/dashboard/showBlogs`,{headers})
  }
}
