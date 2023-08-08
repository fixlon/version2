import { Component ,OnInit} from '@angular/core';
import { BserviceService } from '../bservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements  OnInit{
bookingHistoryList:any;
url="http://localhost:3000/payment";
useremail:any;

constructor(public service:BserviceService){}

  ngOnInit(){
    if(sessionStorage.getItem('admin')){
        this.service.payment().subscribe((data=>{
          this.bookingHistoryList=data;
        }));
    }

    else {
          const useremail=sessionStorage.getItem('email');//stored user email while login and use for checking
          this.service.payment().subscribe((data:any) => {
          this.bookingHistoryList = data.filter(booking => booking.email === useremail);//filter a data from database by checking mail
          });
         }
  }


}
