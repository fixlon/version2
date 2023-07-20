import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BserviceService } from '../bservice.service';
import { ViewEncapsulation } from '@angular/compiler';
@Component({
  selector: 'app-add ',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  url1:any="http://localhost:3000/services";
  returl:any;
  mservicelist: any;
  editMode:boolean=false;
  currentServiceId:any;
  allservice:BserviceService[]=[];
  products:[];
  selectedService;
  serviceForm: FormGroup;

@ViewChild('serviceForm') form:NgForm;


  constructor(private fb:FormBuilder,private service:BserviceService,private http:HttpClient,private router:Router,private activeroute:ActivatedRoute,) {
    activeroute.queryParamMap.subscribe(data=>{
      this.returl=data.get("retUrl")
          })

  }

  ngOnInit() {
    this.service.mservice().subscribe((data=>{
      this.mservicelist=data;
    }));
this.serviceForm = this.fb.group({
      Name: ['', Validators.required],
      image: ['', Validators.required],
      link: ['', Validators.required],
    });

  }

  onServiceCreate(products:{Name:any,image:any,link:any}){
if(!this.editMode){
  this.http.post(this.url1,products).subscribe((res)=>{
    console.log(res);
    alert('New Service Created')
    window.location.reload();
  })
}
else{
  this.service.updateService(this.currentServiceId,products);
  alert('Service updated')
  console.log(products);
  window.location.reload();
}

  }



onDeleteService(id:any){
  this.http.delete(this.url1+"/"+id).subscribe();
  // alert(confirm("Are you sure want to delete"));
  window.location.reload();
}
onEditService(id:any){
  this.currentServiceId=id;
  let currentService=this.mservicelist.find((p)=>{return p.id===id; });
// console.log(this.form);

this.form.setValue({
  Name:currentService.Name,
  image:currentService.image,
  link:currentService.link
});
this.editMode=true;
}


}
