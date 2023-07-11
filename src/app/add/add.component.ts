import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BserviceService } from '../bservice.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  url1:any="http://localhost:3000/services";
  returl:any;
  mservicelist: any;


  products:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private service:BserviceService,private http:HttpClient,private router:Router,private activeroute:ActivatedRoute, private forms:FormsModule) {
    activeroute.queryParamMap.subscribe(data=>{
      this.returl=data.get("retUrl")
          })

  }

  // loginform=this.fb.group({
  //   service:[""],
  //   image:[""],
  //   link:[""],
  // })

  ngOnInit() {
    // this.fetchService();
    this.service.mservice().subscribe((data=>{
      this.mservicelist=data;
    }));
    this.products=this.fb.group({
     Name:["",[Validators.required,Validators.minLength(6)]],
     image:["",[Validators.required,Validators.minLength(6)]],
     link:["",[Validators.required,Validators.minLength(6)]]
    })
  }

  onServiceCreate(products){
    console.log(products);
    this.http.post(this.url1,products).subscribe((res)=>{
      console.log(res);
      alert('New Service Created')
      window.location.reload();
    })

  }




onDeleteService(id:any){
  this.http.delete(this.url1+"/"+id).subscribe();
  // alert(confirm("Are you sure want to delete"));
  window.location.reload();
}

}
