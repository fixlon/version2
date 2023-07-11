import { Component, OnInit } from '@angular/core';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.component.html',
  styleUrls: ['./haircut.component.css']
})
export class HaircutComponent implements OnInit {
haircutlist:any;
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
    this.service.haircutservice().subscribe((data=>{
      this.haircutlist=data;
    }))
  }
  searchedValue:string=''
searchingValue(searchText:string){
this.searchedValue=searchText;
}
}
