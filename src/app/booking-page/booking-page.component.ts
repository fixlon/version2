import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  serviceType: string;
  bookings: any[] = []; // Array to store the booking details
  booking: any = {}; // Object to store the current booking details
  availableSlots: number = 3; // Number of available slots per time

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceType = params['serviceType'];
      // Use the serviceType parameter for further processing or data retrieval
    });
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  isSlotDisabled(timeSlot: string): boolean {
    // Check if the slot is disabled based on the number of available slots
    return this.getBookingsCount(timeSlot) >= this.availableSlots;
  }

  getBookingsCount(timeSlot: string): number {
    // Count the number of bookings for the specified time slot
    return this.bookings.filter(booking => booking.time === timeSlot).length;
  }


  submitBooking(timeSlot: string) {

    // Validate the date
    const selectedDate = new Date(this.booking.date);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      // Date is in the past, display an error message or take appropriate action
      console.log('Invalid date');
      return;
    }

    // Handle the form submission here
    console.log(this.booking); // Example: Log the booking details to the console

    // Add the current booking to the bookings array
    this.bookings.push({...this.booking, time: timeSlot });
    // Decrease the available slots count
    this.availableSlots--;
    // Reset the form after submission
    this.booking = {};
  }
}
