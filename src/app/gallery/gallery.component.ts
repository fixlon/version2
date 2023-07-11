import { Component, OnInit } from '@angular/core';
import { BserviceService } from '../bservice.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
gallerylist:any;
reviewlist:any;


  constructor(private service:BserviceService,public loginservice:LoginService) { }

  ngOnInit() {
    this.service.sservice().subscribe((data=>{
      this.gallerylist=data;
    }));
    this.service.review().subscribe((data=>{
      this.reviewlist=data;
    }));
  }

  
}
