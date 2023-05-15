import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-hairstyle',
  templateUrl: './hairstyle.component.html',
  styleUrls: ['./hairstyle.component.css']
})
export class HairstyleComponent implements OnInit {
hairstylelist:any;
  constructor(private service:BserviceService) { }

  ngOnInit() {
    this.service.hairstyle().subscribe((data=>{
      this.hairstylelist=data
    }))
  }

}
