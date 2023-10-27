import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorFn } from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-paymentservice',
  templateUrl: './paymentservice.component.html',
  styleUrls: ['./paymentservice.component.css']
})
export class PaymentserviceComponent implements OnInit{
  booking;
  date=new Date();
cardNumber: string;
cardHolder: string;
expiryDate: string;
cvv: string;
cardType: string = '';
paymentForm: FormGroup;
submit:boolean=true;

  constructor(private http: HttpClient,private router:Router,private formBuilder: FormBuilder,private login:LoginService) {
  }
ngOnInit() {
  this.paymentForm = this.formBuilder.group({
    cardNumber: ["", [Validators.required, Validators.minLength(12), Validators.pattern("^[0-9]+$")]],
    cardHolder:["",[Validators.required,Validators.pattern(/^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{2,15}$/)]],
    expiryDate: ["",[Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/[0-9]{2}$/),this.futureDateValidator,]],
    cvv:["",[Validators.pattern("^[0-9]*$"),Validators.minLength(3)]]
  });
}
  saveBooking(){
  const storedBooking = sessionStorage.getItem('booking1');
  if (storedBooking) {
    this.booking = JSON.parse(storedBooking); // Convert the string back to an object using JSON.parse()
    this.http.post('http://localhost:3000/payment', this.booking).subscribe(() => {
        console.log('Booking saved successfully');
        alert("Your service has been successfully booked.  ");
        this.login.sendemail("http://localhost:1999/paymentmail",this.booking ).subscribe(data=>{
          console.log(data);
        })
        this.router.navigate(['services']);
        console.log(this.booking)
      });

  } else {
    console.log('Booking details not found in sessionStorage');
  }
  this.submit = false;
}

  // Object to map card types to their image URLs
  cardTypeImages = {
    'Visa': '/assets/img/visa-payment-card.jpg',
    'MasterCard': '/assets/img/master-card.png',
    // Add more card types and their image URLs here as needed
  };



determineCardType() {
  if (!this.cardNumber || this.cardNumber.trim() === '') {
    // If the card number is empty, reset the cardType to an empty string
    this.cardType = '';
    return;
  }
  const cardNumberPattern = [
    { type: 'Visa', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
    { type: 'MasterCard', pattern: /^5[1-5][0-9]{14}$/ },
  ];

  for (const cardPattern of cardNumberPattern) {
    if (this.cardNumber.match(cardPattern.pattern)) {
      this.cardType = cardPattern.type;
      return;
    }
  }
  // If no card type pattern is matched, reset the cardType to an empty string
  this.cardType = '';
}

back(){
this.router.navigate([''])
}


futureDateValidator :ValidatorFn = (control) => {// here it take parameters from Abstractcontrol
  const value = control.value;
  if (!value) {
    return { required: true };
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth()+1;

  const [inputMonth, inputYear] = value.split('/');
  const expiryMonth = parseInt(inputMonth);
  const expiryYear = parseInt(inputYear);

  if (
    expiryYear < currentYear ||
    (expiryYear === currentYear && expiryMonth < currentMonth)
  ) {
    return { pattern: true };
  }

  return null; // Validation passed
}

canExit() {
  if ((this.cardNumber || this.cardHolder || this.expiryDate || this.cvv) && this.submit) {
    return confirm('You have unsaved changes. Are you sure you want to discard them?');
  }
  return true;
}
}
