import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BserviceService } from 'src/app/bservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  adminButton;
  servicedata:any;
  manicuredata:any;
  displaydata:any;
  eyebrow:any;
  haircut:any;
    constructor(private service:BserviceService,private http:HttpClient,private route:Router) {
      // alert('service');
      this.servicedata=sessionStorage.getItem('service');
      this.http.get("http://localhost:3000/services").subscribe((servicedata2:any)=>{
        // console.log(servicedata2);
        const data=servicedata2.find((value:any)=>{
          // console.log(value);
          this.manicuredata=value;
          return this.servicedata==value.Name;
        })
        if(data){
          console.log(this.manicuredata.Name);
          this.displaydata=this.manicuredata.products;
        }

      })

      if(sessionStorage.getItem('admin')){
        this.adminButton = true;
      }
       else {
        this.adminButton = false;
      }
     }

     getTotal() {
      return this.displaydata.length;
    }

    getStandard() {
      return this.displaydata.filter((item) => item.type === 'standard').length;
    }

    getPremium() {
      return this.displaydata.filter((item) => item.type === 'premium').length;
    }

    eyebrowValueChanged: string = 'all';

    filterEyebrow(data: string) {
      this.eyebrowValueChanged = data;
    }

    service1(value:any){
  console.log(value);
  sessionStorage.setItem('products1',value);
  this.route.navigateByUrl('/services/details');
    }
    
    ngOnInit() {
  if(this.servicedata==='eyebrow'){
    this.eyebrow=this.servicedata;
  }
  else{
    if(this.servicedata==='hair cut'){
      this.haircut=this.servicedata;
    }

  }
    }
    searchedValue:string=''
  searchingValue(searchText:string){
    this.searchedValue=searchText;}
}