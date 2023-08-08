import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private url: string = `${this.apiUrl}/usersprofile`;
  private url1: string = `${this.apiUrl}/services`;
  private url2: string = `${this.apiUrl}/package`;

  constructor(private http: HttpClient) { }

  adduser(body: any): Observable<any> {
    return this.http.post<any>(this.url, body);
  }

  addservice1(body: any): Observable<any> {
    return this.http.post<any>(this.url2, body);
  }

  addservice(body: any): Observable<any> {
    return this.http.post<any>(this.url1, body);
  }

  deleteservice(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url1}/${id}`);
  }

  retriveuser(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  retriveoneuser(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  updateuser(id: any, data: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}`, data);
  }

  updateProfile(id: any, value: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, value);
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
