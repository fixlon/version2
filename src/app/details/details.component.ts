import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BserviceService } from '../bservice.service';
import { LoggerService } from '../logger.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  services: any;
  serviceType: string;
  allservice:any;
  editMode: boolean=false;
  adminButton:boolean=false;
  CustomerName:String;
  cost: number = 0;
  selectedTimeSlot: any;
  bookedTimeSlots: string[] = [];
  timeSlots:any=[];
  proceed:boolean=true;
  booking:any;
  servicedata:any;
  manicuredata:any;
  displaydata:any;
  displayhtml:any;
  filterData:any;

  priceChange:any;
  constructor(private service: BserviceService, private activatedRoute: ActivatedRoute,private router:Router,private logger:LoggerService,private http:HttpClient) {

    this.servicedata=sessionStorage.getItem('service');
    this.serviceType=sessionStorage.getItem('products1');
    this.http.get("http://localhost:3000/services").subscribe((servicedata2:any)=>{
      // console.log(servicedata2);
      const data=servicedata2.find((value:any)=>{
        // console.log(value);
        this.manicuredata=value;
        return this.servicedata==value.Name;
      })
      if(data){
        this.displaydata=this.manicuredata.products;
        this.filterData=this.displaydata.find((data:any)=>{
          if(data.Name==this.serviceType){
            return data;
          }
        });
        this.displayhtml=this.filterData;
        this.priceChange=this.displayhtml.price;
        // console.log(this.filterData);
      }

    })

    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
   }

   //choosing service type by dynamic
  ngOnInit(): void {
    this.service.timeservice().subscribe((data) => {
      this.timeSlots = data;
    });

  }

  //choosing the stylist by type standard or premium
  selectService(type: string, priceDetails:any): void {
    this.serviceType = type;
    // console.log(this.displayhtml);
    this.priceChange = this.displayhtml.price+priceDetails;
  }

//clear the all selection
  clearSelection(): void {
    this.serviceType = null;
  }

//choosing time slot
  selectTimeSlot(slot: any): void {
    this.selectedTimeSlot= slot.slot;
    console.log(this.selectedTimeSlot);
  }

  clearTimeSlot(): void {
    this.selectedTimeSlot = null;
  }

  pay(){
    // this.proceed=false;
    if (this.CustomerName && this.selectedTimeSlot) {
      const cemail= sessionStorage.getItem('email');
      const totalCost = this.priceChange;//calling the method for storing the price  in service price
      const stylist=this.serviceType;
      const now=new Date();
      this.booking = {
        CustomerName: this.CustomerName,
        serviceType: this.serviceType,//get servicename by html id
        servicePrice:totalCost,
        stylist:stylist,
        time: this.selectedTimeSlot,
        email:cemail,
        bookingdate:now.toLocaleDateString(),

      };
      console.log(this.booking)

      sessionStorage.setItem('booking1', JSON.stringify(this.booking));
      this.router.navigate(['services/payment']);
    } else {
      this.logger.log('Please fill in all fields');
    }
  }


}


