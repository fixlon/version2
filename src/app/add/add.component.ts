import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  url1:any="http://localhost:3000/services";
  returl:any;

  constructor(private fb:FormBuilder,private service:UserService,private http:HttpClient,private router:Router,private activeroute:ActivatedRoute) {
    activeroute.queryParamMap.subscribe(data=>{
      this.returl=data.get("retUrl")
          })
  }

  loginform=this.fb.group({
    id:[""],
    service:[""],
    image:[""],
    link:[""],
  })

  ngOnInit() {
  }
  addservice(){
    this.http.get<any>(this.url1).subscribe(res => {
      const admin = res.find((result: any) => {
        return result.id === this.loginform.value.id;
      });

      if (admin) {
        alert("id Already Exists");
      }

      else {
        this.service.addservice(this.loginform.value).subscribe(data=>{
          alert("data saved");
          this.loginform.reset();
          this.router.navigate([this.returl]);
        })
        }
  });
  }
}
