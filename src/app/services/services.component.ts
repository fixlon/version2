import { Component, OnInit } from '@angular/core';
import { BserviceService } from '../bservice.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
mservicelist:any;
adminButton:boolean=false;
  constructor(private service:BserviceService,public loginservice:LoginService) {
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
