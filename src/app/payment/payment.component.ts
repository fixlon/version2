import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { BserviceService } from '../bservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  url1:any="http://localhost:3000/package";
  returl:any;
  packageName;
  packageprice;
  customeremail;
  username;
  email;
  phone;
  cardnumber;
  cardHolder;
  expiryDate;
  cvv;
  submit:boolean=true;
  today: Date = new Date(); // Example date initialization
date=new Date();
now=this.date.toLocaleDateString();
paymentForm: FormGroup;
  constructor(private fb:FormBuilder,private service:UserService,private http:HttpClient,private router:Router,private activeroute:ActivatedRoute,public login:LoginService,private service1:BserviceService) {
    this.activeroute.queryParamMap.subscribe(data=>{
      this.returl=data.get("retUrl")
          })
         this.packageName=sessionStorage.getItem('packageName');
         this.packageprice=sessionStorage.getItem('packagePrice');
         this.customeremail=sessionStorage.getItem('email')
  }



  ngOnInit() {
   this.paymentForm=this.fb.group({
      username:["",[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{2,15}$"),Validators.minLength(3)]],
      email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone:["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      cardnumber: ["", [Validators.required, Validators.minLength(12), Validators.pattern("^[0-9]+$")]],
      cardHolder:["",[Validators.required,Validators.pattern(/^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{2,15}$/)]],
      expiryDate: ["",[Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/[0-9]{2}$/),this.futureDateValidator]],
      cvv:["",[Validators.pattern("^[0-9]*$"),Validators.minLength(3)]]
    })

  }

  adduser(){
    var body={
      name:this.paymentForm.controls['username'].value,
      phone:this.paymentForm.controls['phone'].value,
      email:this.paymentForm.controls['email'].value,
      date:this.date.toLocaleDateString(),
      packageName:this.packageName,
      price:this.packageprice,
      cemail:this.customeremail
    }
        this.service.addPackage(body).subscribe(data=>{
          alert('Payment Succsess \n kindly check your email');
          this.paymentForm.reset();
          this.router.navigate(['services']);
          console.log(body);
        })

  this.submit=false;
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
    if (this.paymentForm.dirty && this.submit) {
      return confirm('You have unsaved changes. Do you really want to discard these changes?');
    }
    return true;
  }

}
