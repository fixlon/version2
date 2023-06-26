import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouteReuseStrategy } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  show = false;
  password:any;

  url:any="http://localhost:3000/usersprofile";
  url1:any="http://localhost:3000/admin";
  loginform1:FormGroup=new FormGroup({})
  returl:any;
  constructor(private fb:FormBuilder,private service:UserService,private activeroute:ActivatedRoute,private http:HttpClient,private router:Router,private loginservice:LoginService) {
    activeroute.queryParamMap.subscribe(data=>{
this.returl=data.get("retUrl")
    })
  }

  ngOnInit() {
    this.password = 'password';

  this.loginform1=this.fb.group({
    email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password:["",[Validators.required,Validators.minLength(6)]],
  })
  }

  // show password
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  // login value
  login(){

    //  adim login
    this.http.get(this.url1)
    .subscribe((data: any)=>{
     const admin = data.find((a:any)=>{
      return a.email === this.loginform1.value.email && a.password===this.loginform1.value.password
     });
     if(admin){
      alert("admin login success");
      this.loginservice.adminloggedin();
      this.loginform1.reset();
      this.router.navigate(['gallery']);
     }

    //  user login
     else{
      this.http.get(this.url)
      .subscribe((data: any)=>{
        var email;
        var password;
       const user = data.find((a:any)=>{
        if(a.email === this.loginform1.value.email){
          email=a.email;
          password=a.password;
        }
       });
       if(email==null||email==""){
        alert("No user found");
       }
       else if(password===this.loginform1.value.password){
        alert("login success");
        this.loginform1.reset();
        this.loginservice.userloggedin(email,password)
        let users = {
          useremail:email
        }
        this.loginservice.sendemail("http://localhost:1999/sendEmail",users).subscribe(data=>{
          console.log(data);
        })
        if(this.returl==null){
          this.router.navigate(['services']);
        }
        else{
          this.router.navigate([this.returl]);
        }
       }
       else{
        alert("password incorrect")
       }
    });}
    })


  }

}
