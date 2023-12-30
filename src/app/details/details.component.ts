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
  displayTime:any;
  date=new Date();
  time:any;
  array:any=[];
  notime:boolean=false;
  constructor(private service: BserviceService,private router:Router,private logger:LoggerService,private http:HttpClient) {

    // choosing timeSlots
    this.service.timeservice().subscribe((data) => {
      this.timeSlots = data;
      var length=this.timeSlots.length
      for(var i=0;i<length;i++){
          const dateString = this.timeSlots[i].slot;
      const [hoursStr, minutesStr, medium] = dateString.split(/[.: ]/);
      let hours = parseInt(hoursStr, 10);
      const minutes = parseInt(minutesStr, 10);
      // Adjust hours for 12-hour format
      if (medium.toLowerCase() === 'pm' && hours !== 12) {
        hours += 12;
      } else if (medium.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
      }
      const dateObject = new Date();
      dateObject.setHours(hours, minutes);
      const currentTime = new Date();
      if (dateObject > currentTime) { //checking current time and timeslots
        this.time=this.timeSlots[i].slot
        this.array.push(this.time);
      }
      else{
        if(i==length-1){
          this.notime=true;
          console.log(this.notime)
        }

      }
      }
    });

    // choosing products
    this.servicedata=sessionStorage.getItem('service');
    this.serviceType=sessionStorage.getItem('products1');
    this.http.get("http://localhost:3000/services").subscribe((servicedata2:any)=>{
      const data=servicedata2.find((value:any)=>{
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
      }
    })

    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
   }


  ngOnInit(){
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
    const currentDate = new Date();
    const hours= currentDate.getHours();
    console.log(hours);
    this.selectedTimeSlot= slot;
    console.log(this.selectedTimeSlot);
  }

  clearTimeSlot(): void {
    this.selectedTimeSlot = null;
  }

  // booking service data to payment page
  pay(){
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


