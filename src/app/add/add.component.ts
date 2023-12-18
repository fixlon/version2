import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BserviceService } from '../bservice.service';
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
  localurl;
@ViewChild('serviceForm') form:NgForm;


  constructor(private fb:FormBuilder,private service:BserviceService,private http:HttpClient,private activeroute:ActivatedRoute,) {
    this.activeroute.queryParamMap.subscribe(data=>{
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

  onServiceCreate(name:any,link:any){
    console.log(name,link);
    const imgurl=this.localurl;
    const Name=name;
    console.log(imgurl)
    const Link=link;
if(!this.editMode){
  this.http.post(this.url1,{Name:Name,image:imgurl,link:Link}).subscribe((res)=>{
    console.log(res);
    alert('New Service Created')
    window.location.reload();
  })
}
else{
  this.service.updateService(this.currentServiceId,{Name:name,image:imgurl,link:link});
  alert('Service updated')
  console.log({Name:name,image:imgurl,link:link});
  window.location.reload();
}

  }

onDeleteService(id:any){
  this.http.delete(this.url1+"/"+id).subscribe();
  // alert(confirm("Are you sure want to delete"));
  window.location.reload();
}
onEditService(id: any) {
  this.currentServiceId = id;
  let currentService = this.mservicelist.find((product) => product.id === id);

  if (currentService) {
    this.form.setValue({
      Name: currentService.Name,
      image: currentService.image,
      link: currentService.link,
    });

    this.editMode = true;
  } else {
    console.error(`Service with ID ${id} not found.`);
  }
}

file(event:any){
if(event.target.files&&event.target.files[0]){
  var reader=new FileReader();
  reader.onload=(event:any)=>{
    this.localurl=event.target.result;
    console.log(this.localurl)
  }
  console.log(reader.readAsDataURL(event.target.files[0]));
}
}


}
