import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-hairstyle',
  templateUrl: './hairstyle.component.html',
  styleUrls: ['./hairstyle.component.css']
})
export class HairstyleComponent implements OnInit {
hairstylelist:any;
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
    this.service.hairstyle().subscribe((data=>{
      this.hairstylelist=data
    }))
  }

}
