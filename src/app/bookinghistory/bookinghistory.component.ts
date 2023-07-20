import { Component ,OnInit} from '@angular/core';
import { BserviceService } from '../bservice.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements  OnInit{
bookingHistoryList:any;

constructor(public service:BserviceService){}

  ngOnInit(){
    this.service.timeSlot().subscribe((data=>{
      this.bookingHistoryList=data;
    }));
  }

}
