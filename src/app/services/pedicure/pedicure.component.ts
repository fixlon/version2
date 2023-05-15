import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-pedicure',
  templateUrl: './pedicure.component.html',
  styleUrls: ['./pedicure.component.css']
})
export class PedicureComponent implements OnInit {
pedicurelist:any;
  constructor(public service:BserviceService) { }

  ngOnInit() {
    this.service.pedicure().subscribe((data=>{
      this.pedicurelist=data;
    }))
  }

}
