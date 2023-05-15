import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.component.html',
  styleUrls: ['./haircut.component.css']
})
export class HaircutComponent implements OnInit {
haircutlist:any;
  constructor(private service:BserviceService) { }

  ngOnInit() {
    this.service.haircutservice().subscribe((data=>{
      this.haircutlist=data;
    }))
  }

}
