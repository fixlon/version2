import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouteReuseStrategy } from '@angular/router';
import { Confirmvalidator } from '../confirm.validator';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder,private service:UserService,private http:HttpClient,private router:Router) {}

  loginform1=this.fb.group({
    username:["",[Validators.required,Validators.minLength(3)]],
    email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
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
    this.service.adduser(this.loginform1.value).subscribe(data=>{
      alert("data saved");
      this.loginform1.reset();
      this.router.navigate(['login']);
    })
    // this.http.post<any>("http://localhost:3000/usersprofile",this.loginform1.value)
    // .subscribe(data=>{
    //   alert("data saved");
    //   this.loginform1.reset();
    //   this.router.navigate(['login']);
    // })
  }
}
