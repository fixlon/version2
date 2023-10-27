import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isloggedin:boolean=false;
  isadmin:boolean=false;
  private userurl=environment.user;
  email:any="";
  password:any="";
  constructor(public http:HttpClient){}
  userloggedin(u:any,p:any):void{
    this.email=u;
    this.password=p;
    this.isloggedin=true;
  }

  sendemail(userurl:any,data:any){
    return this.http.post( userurl,data);
    }

    sendlog(user:any,data:any){
      return this.http.post(user,data);
      }
  adminloggedin(){
    this.isadmin=true;
  }

  userloggedout():void{
    this.isloggedin=false;
  }

}
