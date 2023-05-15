import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';


@Component({
  selector: 'app-manicure',
  templateUrl: './manicure.component.html',
  styleUrls: ['./manicure.component.css']
})
export class ManicureComponent implements OnInit {
manicurelist:any;
  constructor(private service:BserviceService) { }

  ngOnInit() {
this.service.manicureservice().subscribe((data=>{
  this.manicurelist=data;
}))
  }

}
