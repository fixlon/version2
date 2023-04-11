import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouteReuseStrategy } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

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
  constructor(private fb:FormBuilder,private service:UserService,private http:HttpClient,private router:Router) {}

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
      this.loginform1.reset();
      this.router.navigate(['gallery']);
     }

    //  user login
     else{
      this.http.get(this.url)
      .subscribe((data: any)=>{
       const user = data.find((a:any)=>{
        return a.email === this.loginform1.value.email && a.password===this.loginform1.value.password
       });
       if(user){
        alert("login success");
        this.loginform1.reset();
        this.router.navigate(['services']);
       }
      //  user password incorrect
       else{
        this.http.get(this.url)
      .subscribe((data: any)=>{
       const user = data.find((a:any)=>{
        return a.email === this.loginform1.value.email && a.password!==this.loginform1.value.password
       });
       if(user){
        alert("Password is incorrect");
       }
      //  user not found
       else{
        alert("user not found");
       }
      })

      }});}
    })


  }

  // isAuthenticate: boolean = false;

  // login(email: string, password: string): Observable<boolean> {
  //   if (email === 'admin@gmail.com' && password === 'admin') {
  //     this.isAuthenticate = true;
  //     return of(true);
  //   }
  //   return of(false);
  // }

}
