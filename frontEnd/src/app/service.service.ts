import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { blogger } from './model/blogger/blogger';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) {}
    getAllUsers():Observable<blogger[]>{
      let url="http://localhost:8008/harsh-login/auth/getAll";
      return this.http.get<blogger[]>(`${url}`);
  }

}
