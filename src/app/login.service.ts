import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isloggedin:boolean=false;
  isadmin:boolean=false;
  url:any="http://localhost:3000/usersprofile";
  email:any="";
  password:any="";
  constructor(public http:HttpClient){}
  userloggedin(u:any,p:any):void{
    this.email=u;
    this.password=p;
    sessionStorage.setItem(this.email,this.password);
    this.isloggedin=true;
  }

  isuserloggedin(){

   return (this.isloggedin);

  }

  sendemail(url:any,data:any){
    return this.http.post(url,data);
      }

  adminloggedin(){
    this.isadmin=true;
  }
  userloggedout():void{
    this.isloggedin=false;
  }
  adminloggedout():void{
    this.isadmin=false;
  }
}
