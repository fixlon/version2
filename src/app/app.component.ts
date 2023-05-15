import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { BserviceService } from './bservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public service:LoginService,private bservice:BserviceService,private router:Router) { }
  ngOnInit() {}

  title = 'fixlon';
  logoutuser(){
this.service.userloggedout();
alert("Are you Want to Logout ")
this.router.navigate(['home']);
  }
  logoutadmin(){
    this.service.adminloggedout();
    this.router.navigate(['home']);
      }
}

