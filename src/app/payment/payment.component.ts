import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators, FormControl, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  url1:any="http://localhost:3000/payment";
  returl:any;




  constructor(private fb:FormBuilder,private service:UserService,private http:HttpClient,private router:Router,private activeroute:ActivatedRoute,public login:LoginService) {
    activeroute.queryParamMap.subscribe(data=>{
      this.returl=data.get("retUrl")
          })
  }
  url:any="http://localhost:3000/usersprofile";

  loginform1=this.fb.group({
    username:["",[Validators.required,Validators.minLength(3)]],
    email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone:["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    date:["",[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    time:["",[Validators.required]],
    nameoncard:["",[Validators.required]],
    cardnumber:["",[Validators.required,Validators.minLength(12)]],
    expmonth:["",[Validators.required,,Validators.maxLength(2)]],
    expyear:["",[Validators.required,Validators.minLength(2),Validators.maxLength(4)]],
    cvv:["",[Validators.required,Validators.minLength(3),Validators.maxLength(4)]],


  })



  ngOnInit() {

  }
  get confirmpassword(){
    return this.loginform1.get('confirmpassword');
  }
  adduser(){
    var body={
      name:this.loginform1.controls['username'].value,
      phone:this.loginform1.controls['phone'].value,
      email:this.loginform1.controls['email'].value,
      date:this.loginform1.controls['date'].value,
      time:this.loginform1.controls['time'].value,
    }
    this.http.get<any>(this.url1).subscribe(res => {
        this.service.addservice1(this.loginform1.value).subscribe(data=>{
          alert('Payment Succsess \n kindly check your email');
          this.loginform1.reset();
          this.router.navigate(['services']);
        })


  });
  this.login.sendemail("http://localhost:1999/sendEmail",body).subscribe(data=>{
    console.log(data);
  })
  }
}
