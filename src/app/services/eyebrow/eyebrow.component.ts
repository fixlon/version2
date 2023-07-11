import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-eyebrow',
  templateUrl: './eyebrow.component.html',
  styleUrls: ['./eyebrow.component.css']
})
export class EyebrowComponent implements OnInit {
eyebrowlist:any;
adminButton;
  constructor(private service:BserviceService,private activatedRoute:ActivatedRoute) {
    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
  }

  ngOnInit() {

    this.service.eyebrowservice().subscribe((data=>{
      this.eyebrowlist=data;
    }))


  }

  getTotal(){
    return this.eyebrowlist.length;
  }
  getStandard(){
    return this.eyebrowlist.filter(item => item.type==='standard').length;
  }
  getPremium(){
    return this.eyebrowlist.filter(item => item.type==='premium').length;
  }

  eyebrowValueChanged:string='all'

  filterEybrow(data:string){
    this.eyebrowValueChanged=data;
    // console.log(this.eyebrowValueChanged);
  }
}
