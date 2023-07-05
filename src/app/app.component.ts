import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { BserviceService } from './bservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
returl:any;
  constructor(public service:LoginService,private bservice:BserviceService,private router:Router,public activeroute:ActivatedRoute) {
  activeroute.queryParamMap.subscribe(data=>{
    this.returl=data.get("retUrl")
        })}
  ngOnInit() {

  }

  title = 'fixlon';

  logoutuser(){
this.service.userloggedout();
// alert(confirm("Are you Want to Logout "))

this.router.navigate(['home']);
  }
  logoutadmin(){
    this.service.adminloggedout();
    this.router.navigate(['home']);
      }

}

