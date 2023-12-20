import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouteReuseStrategy } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  url:any="http://localhost:3000/usersprofile";
  loginform1:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private service:UserService,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.loginform1=this.fb.group({
      email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  login(){
    //  user login
      this.http.get(this.url)
      .subscribe((data: any)=>{
       const user = data.find((a:any)=>{
        return a.email === this.loginform1.value.email });
       if(user){
        sessionStorage.setItem('email',this.loginform1.value.email);
        this.router.navigate(['change-password']);
       }

      //  user not found
       else{
        alert("user not found");
       }
      })
      }
      // back button
      login1(){
        this.router.navigate(['login']);
      }

    }
