import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userurl =environment.user;
  private serviceurl = environment.services;
  private packageurl= environment.package;

  constructor(private http: HttpClient) { }

  adduser(body: any) {
    return this.http.post<any>(this.userurl, body);
  }

  addservice1(body: any) {
    return this.http.post<any>(this.packageurl, body);
  }

  addservice(body: any) {
    return this.http.post<any>(this.serviceurl, body);
  }

  deleteservice(id: any) {
    return this.http.delete<any>(`${this.serviceurl}/${id}`);
  }

  updateuser(id: any, data: any) {
    return this.http.patch<any>(`${this.userurl}/${id}`, data);
  }

  updateProfile(id: any, value: any){
    return this.http.put<any>(`${this.userurl}/${id}`, value);
  }

  getUser(id: any) {
    return this.http.get<any>(`${this.userurl}/${id}`);
  }
}
