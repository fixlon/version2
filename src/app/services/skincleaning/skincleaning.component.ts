import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-skincleaning',
  templateUrl: './skincleaning.component.html',
  styleUrls: ['./skincleaning.component.css']
})
export class SkincleaningComponent implements OnInit {
skinlist:any;
adminButton;
  constructor(public service:BserviceService) {
    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
  }

  ngOnInit() {
    this.service.skincleaning().subscribe(data=>{
      this.skinlist=data;
    })
  }

}
