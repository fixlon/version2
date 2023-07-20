import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BserviceService } from '../bservice.service';
import { LoginService } from '../login.service';
import { AdminGuard } from '../admin.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
mservicelist:any;
adminButton:boolean=false;
  constructor(private service:BserviceService,public loginservice:LoginService,private router:Router) {
    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
  }

  ngOnInit() {
    this.service.mservice().subscribe((data=>{
      this.mservicelist=data;
    }))
  }



}
