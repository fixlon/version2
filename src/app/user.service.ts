import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private url =environment.url;
  private url1: string = environment.services;
  private url2: string = environment.package;

  constructor(private http: HttpClient) {
    console.log(environment.url);
  }

  adduser(body: any): Observable<any> {
    return this.http.post<any>(this.url, body);
  }

  addPackage(body: any): Observable<any> {
    return this.http.post<any>(this.url2, body);
  }

  addservice(body: any): Observable<any> {
    return this.http.post<any>(environment.services, body);
  }

  addProduct(body: any,email:any): Observable<any> {
    return this.http.patch<any>(environment.products+email, {products:body});
  }

  updateuser(id: any, data: any): Observable<any> {
    return this.http.patch<any>(environment.user+id, data);
  }

  updateService(body:any){
   return this.http.patch(environment.products+body.email,body);
  }

  updateProduct(body:any,email:any){
    return this.http.patch(environment.products+email+'/'+body.email,{products:body});
  }

  deleteProduct(body:any,email:any){
    return this.http.patch<any>(environment.products+email,{products:body});
  }
}
