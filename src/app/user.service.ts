import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:any="http://localhost:3000/usersprofile";
  url1:any="http://localhost:3000/services";
  getuser: any;

constructor(private http:HttpClient) { }
adduser(body:any){
return this.http.post(this.url,body);
}

addservice(body:any){
  return this.http.post(this.url1,body);
  }
deleteservice(id:any){
  return this.http.delete(this.url1+"/"+id);
}
retriveuser(){
  return this.http.get(this.url);
}
retriveoneuser(id:any){
  console.log(this.url+"/"+id)
  return this.http.get(this.url+"/"+id);
}
updateuser(id:any,data:any){
  return this.http.patch(this.url+"/"+id,data);
}

}
