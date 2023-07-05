import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-galleryfull',
  templateUrl: './galleryfull.component.html',
  styleUrls: ['./galleryfull.component.css']
})
export class GalleryfullComponent implements OnInit {
videolist:any;
  constructor(private service:BserviceService ,public loginservice:LoginService) { }

  ngOnInit() {
    this.service.galleryvideo().subscribe((data=>{
      this.videolist=data;
    }))
  }

}
