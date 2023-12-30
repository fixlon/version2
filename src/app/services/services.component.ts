import { Component, OnInit } from '@angular/core';
import { BserviceService } from '../bservice.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
mservicelist:any=[];
adminButton:boolean=false;
data:any;
  constructor(private service:BserviceService,public loginservice:LoginService,private route:Router) {
    this.service.mservice().subscribe((data=>{
      this.mservicelist=data;
      // console.log(this.mservicelist);
    }))
    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
  }

  service1(value:any){
    console.log(value);
    sessionStorage.setItem('service',value);
    this.route.navigateByUrl('services/products');
  }
value(){
  this.data=true;
  // console.log(this.data);
  sessionStorage.setItem('value',this.data);
  sessionStorage.removeItem('value1');
}
  ngOnInit() {

  }


}
