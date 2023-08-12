import { Component, OnInit } from '@angular/core';
import { BserviceService } from '../bservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  membership;
  email;
  url:"http://localhost:3000/package";
  constructor(private service:BserviceService,private router:Router,private http:HttpClient,private log:LoggerService) { }

  ngOnInit() {

  }

  // save(packageName: string, packagePrice: string) {
  //   const email=sessionStorage.getItem('email')
  //   // this.service.package().subscribe((data: any) => {
  //   //   this.membership = data.filter((booking) => booking.packageName === packageName);
  //   //   this.email=data.filter((booking)=>booking.cemail===email)

  //     this.service.package().subscribe((res:any) => {
  //       const user = res.find((result: any) => {
  //          result.cemail === email && result.packageName!==packageName;
  //          return this.membership=packageName;
  //       });
  //       if (this.membership.length>0) {
  //         alert("You already booked this package.");
  //       } else {
  //         sessionStorage.setItem('packageName', packageName);
  //         sessionStorage.setItem('packagePrice', packagePrice);
  //         console.log(packageName, packagePrice);
  //         this.router.navigate(['packages/payment']);
  //       }

  //   });
  // }
  save(packageName: string, packagePrice: string) {
    const email = sessionStorage.getItem('email');

    this.service.package().subscribe((res: any) => {
      // Check if a user has already booked the package
      const user = res.find((result: any) => {
        return result.cemail === email && result.packageName === packageName;
      });

      if (user) {
        // User already booked the package
        alert("You already booked this package.");
      } else {
        // User hasn't booked the package, proceed
        this.membership = packageName; // Assign packageName to membership
        sessionStorage.setItem('packageName', packageName);
        sessionStorage.setItem('packagePrice', packagePrice);
        console.log(packageName, packagePrice);
        this.router.navigate(['packages/payment']);
      }
    });
  }



}
