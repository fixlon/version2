import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BserviceService } from '../bservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  services: any;
  serviceType: string;
  allservice:any;
  editMode: boolean=false;
  adminButton:boolean=false;
  CustomerName:String;
  timeslot;
  cost: number = 0;
  selectedTimeSlot: string;
  bookedTimeSlots: string[] = [];
  timeSlots: string[] = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
  proceed:boolean=true;
  booking:any;

  constructor(private service: BserviceService, private activatedRoute: ActivatedRoute,private http:HttpClient) {
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

      this.activatedRoute.params.subscribe(params => {
        this.serviceType = params['serviceType'];
        // Use the serviceType parameter for further processing or data retrieval
      });
      this.serviceType = null;
      this.activatedRoute.queryParamMap.subscribe((param)=>{
        this.editMode = Boolean(param.get('edit'));
      })
  }

  //choosing the stylist by type standard or premium
  selectService(type: string): void {
    this.serviceType = type;
  }

//clear the all selection
  clearSelection(): void {
    this.serviceType = null;
  }

  //updating the data to db.json
  updateData(): void {
    this.editMode = false;
    // Make a copy of the allservice object
    const updatedData = Object.assign({}, this.allservice);

    // Send the updated data to the server
    this.service.updateServiceData(
      this.activatedRoute.snapshot.paramMap.get('serviceType'),
      +this.activatedRoute.snapshot.paramMap.get('id'),
      updatedData
    ).subscribe()
    console.log(updatedData);
  }
// In your component class




//choosing time slot
  selectTimeSlot(slot: string): void {
    this.selectedTimeSlot = slot;
  }

//calculate total amount
  calculateTotalCost(): number {
  if (this.serviceType === 'premium') {
    this.cost = parseInt(document.getElementById('servicePrice').textContent.trim()) + this.allservice.premium;
  } else if (this.serviceType === 'standard') {
    this.cost = parseInt(document.getElementById('servicePrice').textContent.trim()) + this.allservice.standard;
  } else {
    this.cost = parseInt(document.getElementById('servicePrice').textContent.trim());
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

  saveBooking(): void {//send data to db.json
    this.http.post('http://localhost:3000/payment', this.booking).subscribe(() => {
        console.log('Booking saved successfully');
        alert("sucessfully Booked ")
        console.log(this.booking)
      });
  }

  clearTimeSlot(): void {
    this.selectedTimeSlot = null;
  }

  pay(){
    this.proceed=false;
    if (this.CustomerName && this.selectedTimeSlot) {
      const cemail= sessionStorage.getItem('email');
      const totalCost = this.calculateTotalCost();//calling the method for storing the price  in service price
      const stylist=this.stylist();
      this.booking = {
        CustomerName: this.CustomerName,
        serviceType: document.getElementById('serviceType').textContent,//get servicename by html id
        servicePrice:totalCost,
        stylist:stylist,
        time: this.selectedTimeSlot,
        email:cemail

      };
      this.bookedTimeSlots.push(this.selectedTimeSlot);

    } else {
      console.log('Please fill in all fields');
    }
  }

  back(){
    this.proceed=true;

  }
  canExit(){
    if(this.CustomerName|| this.timeslot||this.allservice.standard||this.allservice.premium){
      return confirm('you have unsaved changes. Do you really want to discard these changes?');
    }
    return true;
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions or resources here
  }
}
