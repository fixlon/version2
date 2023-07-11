import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { BserviceService } from './bservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginButton:boolean=true;
  logoutButton:boolean=false;
returl:any;
userName:any;
showHeader = false;
adminButton:boolean=false;
  constructor(public service:LoginService,private bservice:BserviceService,private router:Router,public activeroute:ActivatedRoute,) {
  activeroute.queryParamMap.subscribe(data=>{
    this.returl=data.get("retUrl")
        })
        if(sessionStorage.getItem('email')||sessionStorage.getItem('admin')){
          this.loginButton=false;
          this.logoutButton=true;
        }
        else{
          this.loginButton=true;
          this.logoutButton=false;
          this.adminButton=false;
        }
this.userName=sessionStorage.getItem('userName');
      }
  ngOnInit() {

  }

  title = 'fixlon';

  logoutuser(){

this.service.userloggedout();
if(confirm("Are you logout")){
  sessionStorage.removeItem('email')
  sessionStorage.removeItem('admin')
  sessionStorage.removeItem('userName')
  window.location.reload();
}
this.router.navigate([this.returl || '/']);
  }




  toggleHeader(){
    this.showHeader = !this.showHeader;
  }

}

