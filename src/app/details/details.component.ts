import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BserviceService } from '../bservice.service';
import { LoggerService } from '../logger.service';


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
  selectedTimeSlot: string;
  bookedTimeSlots: string[] = [];
  timeSlots: string[] = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
  proceed:boolean=true;
  booking:any;

  constructor(private service: BserviceService, private activatedRoute: ActivatedRoute,private router:Router,private logger:LoggerService) {

    if(sessionStorage.getItem('admin')){
      this.adminButton = true;
    }
     else {
      this.adminButton = false;
    }
   }

   //choosing service type by dynamic
  ngOnInit(): void {

    this.serviceType = this.activatedRoute.snapshot.paramMap.get('serviceType');//getting service type by query params and acess for the current state route and name of the parameter

    switch (this.serviceType) {
      case 'eyebrow':
        this.service.eyebrowservice().subscribe((data) => {
          this.services = data;
          this.allservice = this.services.find(service => service.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'haircut':
        this.service.haircutservice().subscribe((data) => {
          this.services = data;
          this.allservice = this.services.find(service => service.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'waxing':
        this.service.waxing().subscribe((data) => {
          this.services = data;
          this.allservice= this.services.find(service => service.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'pedicure':
        this.service.pedicure().subscribe((data) => {
          this.services = data;
          this.allservice= this.services.find(service => service.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'manicure':
        this.service.manicureservice().subscribe((data) => {
          this.services = data;
          this.allservice = this.services.find(service => service.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'skincleaning':
        this.service.skincleaning().subscribe((data) => {
          this.services = data;
          this.allservice = this.services.find(service => service.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'makeup':
        this.service.makeup().subscribe((data) => {
          this.services = data;
          this.allservice = this.services.find(service => service.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      case 'hairstyle':
        this.service.hairstyle().subscribe((data) => {
          this.services = data;
          this.allservice = this.services.find(service => service.id === +this.activatedRoute.snapshot.paramMap.get('id'));
        });
        break;

      default:
        // Handle unknown service type
        break;
    }
//  this.activatedRoute.params.subscribe((params) => {
//       this.serviceType = params['serviceType'];
//     });

    // this.activatedRoute.queryParamMap.subscribe((param) => {
    //   this.editMode = Boolean(param.get('edit'));
    // });
  }

  //choosing the stylist by type standard or premium
  selectService(type: string): void {
    this.serviceType = type;
  }

//clear the all selection
  clearSelection(): void {
    this.serviceType = null;
  }

//choosing time slot
  selectTimeSlot(slot: string): void {
    this.selectedTimeSlot = slot;
  }

//calculate total amount
calculateTotalCost(): number {
  if (this.allservice) { // Check if allservice is defined
    if (this.serviceType === 'premium') {
      this.cost =parseInt(document.getElementById('servicePrice').textContent.trim()) +
        this.allservice.premium;
    } else if (this.serviceType === 'standard') {
      this.cost =parseInt(document.getElementById('servicePrice').textContent.trim()) +
        this.allservice.standard;
    } else {
      this.cost = parseInt(document.getElementById('servicePrice').textContent.trim());
    }
  }

  return this.cost;
}

stylist(){
  let stylist="";
  if(this.serviceType==='premium'){
    stylist="premium";
  }
  else if(this.serviceType === "standard"){
    stylist="standard";
  }
  else{
    stylist="basic";
  }
  return stylist;
}

  clearTimeSlot(): void {
    this.selectedTimeSlot = null;
  }

  pay(){
    // this.proceed=false;
    if (this.CustomerName && this.selectedTimeSlot) {
      const cemail= sessionStorage.getItem('email');
      const totalCost = this.calculateTotalCost();//calling the method for storing the price  in service price
      const stylist=this.stylist();
      const now=new Date();
      this.booking = {
        CustomerName: this.CustomerName,
        serviceType: document.getElementById('serviceType').textContent,//get servicename by html id
        servicePrice:totalCost,
        stylist:stylist,
        time: this.selectedTimeSlot,
        email:cemail,
        bookingdate:now.toLocaleDateString(),

      };
      console.log(this.booking)

      sessionStorage.setItem('booking1', JSON.stringify(this.booking));
      this.router.navigate(['services/'+this.activatedRoute.snapshot.paramMap.get('serviceType')+'/'+this.activatedRoute.snapshot.paramMap.get('id')+'/'+'payment']);
    } else {
      this.logger.log('Please fill in all fields');
    }
  }


}


