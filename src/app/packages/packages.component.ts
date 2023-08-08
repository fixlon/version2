import { Component, OnInit } from '@angular/core';
import { BserviceService } from '../bservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  membership;
  email;
  constructor(private service:BserviceService,private router:Router,private http:HttpClient) { }

  ngOnInit() {

  }

  save(packageName: string, packagePrice: string) {
    const email=sessionStorage.getItem('email')
    // this.service.package().subscribe((data: any) => {
    //   this.membership = data.filter((booking) => booking.packageName === packageName);
    //   this.email=data.filter((booking)=>booking.cemail===email)

      this.http.get<any>("http://localhost:3000/package").subscribe(res => {
        const user = res.find((result: any) => {
           result.cemail === email && result.packageName!==packageName;
           return this.membership=packageName;
        });
        if (this.membership.length>0) {
          alert("You already booked this package.");
        } else {
          sessionStorage.setItem('packageName', packageName);
          sessionStorage.setItem('packagePrice', packagePrice);
          console.log(packageName, packagePrice);
          this.router.navigate(['packages/payment']);
        }

    });
  }



}
