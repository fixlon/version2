import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';


@Component({
  selector: 'app-manicure',
  templateUrl: './manicure.component.html',
  styleUrls: ['./manicure.component.css']
})
export class ManicureComponent implements OnInit {
manicurelist:any;
adminButton;
  constructor(private service:BserviceService) {
    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
   }

  ngOnInit() {
this.service.manicureservice().subscribe((data=>{
  this.manicurelist=data;
}))
  }

}
