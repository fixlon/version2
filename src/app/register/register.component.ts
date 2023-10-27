import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouteReuseStrategy } from '@angular/router';
import { Confirmvalidator } from '../confirm.validator';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { IDeactivateComponent } from '../canDeactivate-gaurd.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, IDeactivateComponent{
  returl:any;
  name;
  email;
  phone;
  password;
  submit:boolean=true;
  private userurl=environment.user;

  constructor(private fb:FormBuilder,private service:UserService,private http:HttpClient,private router:Router,private activeroute:ActivatedRoute,public login:LoginService) {
    this.activeroute.queryParamMap.subscribe(data=>{
      this.returl=data.get("retUrl")
          })
  }


  loginform1=this.fb.group({
    username:["",[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
email:["",[Validators.required,Validators.pattern("^(?!.*@gmail\\.gmail\\.)(?!.*\\.[^.]{1,4}\\.$)(?:[a-z0-9._%+-]+@(?:[a-z0-9-]+\\.)+(?:com|in|outlook\\.com|yahoo\\.com))$")]],
    phone:["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password:["",[Validators.required,Validators.pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    )]],
    confirmpassword:["",[Validators.required,Validators.minLength(6)]],


  },{validator:Confirmvalidator('password','confirmpassword')})



  ngOnInit() {

  }

  get confirmpassword(){
    return this.loginform1.get('confirmpassword');
  }
  adduser(){
    var body={
      name:this.loginform1.controls['username'].value,
      phone:this.loginform1.controls['phone'].value,
      email:this.loginform1.controls['email'].value
    }
    this.http.get<any>(this.userurl).subscribe(res => {
      const user = res.find((result: any) => {
        return result.email === this.loginform1.value.email;
      });

      if (user) {
        alert("Email Already Exists");
      }

      else {
        this.service.adduser(this.loginform1.value).subscribe(data=>{
          alert("Heartly Welcome "+body.name+"\nThank you for choosing us")
          this.router.navigate(['login']);
        })
        this.login.sendemail("http://localhost:1999/sendEmail",body).subscribe(data=>{
        console.log(data);
      })
        }
  });
  this.submit = false;
  }

  canExit() {
    if ((this.name || this.email || this.phone || this.password) && this.submit) {
      return confirm('You have unsaved changes. Do you really want to discard these changes?');
    }
    return true;
  }


}
