import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
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
  // deleteservice(){
  //   this.http.get<any>(this.url1).subscribe(res => {
  //     const admin = res.find((result: any) => {
  //       return result.id === this.loginform.value.id;
  //     });

  //     if (admin) {
  //       this.service.deleteservice(this.loginform.value).subscribe(data=>{
  //         alert("data deleted");
  //         this.loginform.reset();
  //         this.router.navigate([this.returl]);
  //       })

  //     }

  //     else {
  //       alert("No Services found");
  //       }
  // });
  // }
  post1:any;
  deleteservice(){
    this.service.deleteservice(this.post1.id).subscribe();
  }

}
