import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;
isloggedin:boolean=false;
email:any="";
password:any="";

  // constructor() { }
  // isuserloggedin(){
  //     return !!localStorage.getItem('token');
  //   }

  userloggedin(u:any,p:any){
    this.email=u;
    this.password=p;
    this.isloggedin=true;
  }
  isuserloggedin(){
    return (this.isloggedin);
  }
  userloggedout(){
    this.isloggedin=false;
  }
}
