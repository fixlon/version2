import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-waxing',
  templateUrl: './waxing.component.html',
  styleUrls: ['./waxing.component.css']
})
export class WaxingComponent implements OnInit {
waxinglist:any;
adminButton;
  constructor(public service: BserviceService) {
    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
   }

  ngOnInit() {
    this.service.waxing().subscribe(data=>{
      this.waxinglist=data;
    })
  }

}
