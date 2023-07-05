import { Component, OnInit } from '@angular/core';
import { BserviceService } from '../bservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  stylistlist: any;

  constructor(public service: BserviceService) { }

  ngOnInit() {
    this.service.stylist().subscribe(data=>{
      this.stylistlist=data;
    })
  }

}
