import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-skincleaning',
  templateUrl: './skincleaning.component.html',
  styleUrls: ['./skincleaning.component.css']
})
export class SkincleaningComponent implements OnInit {
skinlist:any;
  constructor(public service:BserviceService) { }

  ngOnInit() {
    this.service.skincleaning().subscribe(data=>{
      this.skinlist=data;
    })
  }

}
