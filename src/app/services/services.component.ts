import { Component, OnInit } from '@angular/core';
import { BserviceService } from '../bservice.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
mservicelist:any;
  constructor(private service:BserviceService,public loginservice:LoginService) { }

  ngOnInit() {
    this.service.mservice().subscribe((data=>{
      this.mservicelist=data;
    }))
  }

}
