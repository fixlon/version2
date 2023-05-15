import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-eyebrow',
  templateUrl: './eyebrow.component.html',
  styleUrls: ['./eyebrow.component.css']
})
export class EyebrowComponent implements OnInit {
eyebrowlist:any;
  constructor(private service:BserviceService) { }

  ngOnInit() {
    this.service.eyebrowservice().subscribe((data=>{
      this.eyebrowlist=data;
    }))
  }

}
