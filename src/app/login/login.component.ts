import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouteReuseStrategy } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  show = false;
  password:any;
userEmail:any;
userName:any;
adminEmail:any;
adminName:any;
image:any;
  url:any="http://localhost:3000/usersprofile";
  url1:any="http://localhost:3000/admin";
  loginform1:FormGroup=new FormGroup({})
  returl:any;
  phone: any;
  constructor(private fB:FormBuilder,private activeroute:ActivatedRoute,private http:HttpClient,private router:Router,private loginservice:LoginService) {

  }

  ngOnInit() {
    this.activeroute.queryParamMap.subscribe(data=>{
      this.returl=data.get("retUrl")
          })

  // this.password = 'password';
  this.loginform1 = this.fB.group({
    email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  }

  // show password
  onClick() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  login() {

    this.http.get(this.url1)
      .subscribe((data: any) => {
        const admin = data.find((a: any) => {
          this.adminEmail=a.email;
                this.adminName=a.username;

          return a.email === this.loginform1.value.email && a.password === this.loginform1.value.password;
        });

        if (admin) {
          sessionStorage.setItem('admin',this.adminEmail);
          sessionStorage.setItem('userName',this.adminName)
          alert("Admin login success");
          this.loginservice.adminloggedin();
          // Navigate to the desired route
                this.router.navigate([this.returl || '/']).then(()=>{
                  window.location.reload()
                });
        } else {
          this.http.get(this.url)
            .subscribe((data: any) => {
              const user = data.find((a: any) => {
                this.userEmail=a.email;
                this.userName=a.username;
                this.phone=a.phone;
                return a.email === this.loginform1.value.email && a.password === this.loginform1.value.password;
              });

              if (user) {
                sessionStorage.setItem('email',this.userEmail);
                sessionStorage.setItem('userName',this.userName);
                sessionStorage.setItem('phone',this.phone);
                sessionStorage.setItem('image',this.image);
                alert("Welcome Back "+this.userName);
                this.loginservice.userloggedin(user.email, user.password);
                this.router.navigate([this.returl || '/']).then(()=>{
                  window.location.reload()
                });

                // Navigate to the desired route

              } else {
                alert("Invalid email or password");
              }
            });
        }
      });
  }

}
