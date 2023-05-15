import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {
makeuplist:any;
  constructor(private service:BserviceService){ }

  ngOnInit() {
    this.service.makeup().subscribe(data=>{
      this.makeuplist=data;
    })
  }

}
