import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BserviceService } from '../bservice.service';
import { UserService } from '../user.service';
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
  allservice:any;
  products:[];
  selectedService;
  serviceForm: FormGroup;
  localurl:any;
  localurl1:any;
  servicedata:any;
  serviceType:any;
  displaydata:any;
  productdata:any;
  filterData:any;
  displayhtml:any;
  value:any;
  deleteProduct:any;

@ViewChild('serviceForm') form:NgForm;


  constructor(private fb:FormBuilder,private service:BserviceService,private http:HttpClient,private activeroute:ActivatedRoute,private user:UserService) {
    this.activeroute.queryParamMap.subscribe(data=>{
      this.returl=data.get("retUrl")
          })

          this.value= sessionStorage.getItem('value1');
          this.allservice=sessionStorage.getItem('value')

          console.log(this.allservice,this.value);
          if(this.allservice=='true' && this.value!='true' ){
            this.service.mservice().subscribe((data=>{
              this.mservicelist=data;
            }));
          }
        else if(this.value=='true'&& this.allservice!='true'){

            this.servicedata=sessionStorage.getItem('service');
            this.http.get("http://localhost:3000/services").subscribe((servicedata2:any)=>{
              // console.log(servicedata2);
              const data=servicedata2.find((value:any)=>{
                // console.log(value);
                this.productdata=value;
                return this.servicedata==value.Name;
              })
              if(data){
                this.displaydata=this.productdata.products;
              }

            })
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


  ngOnInit() {
this.serviceForm = this.fb.group({
      Name: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
    });

  }

  // create services
  onServiceCreate(name:any){
    const imgurl=this.localurl;
    if(!this.editMode){
    var datas={
      email:this.mservicelist.length,
      Name:name.Name,
      image:this.localurl,
  }
  console.log(datas);
  this.user.addservice(datas).subscribe((res)=>{
    console.log(res);
    alert('New Service Created')
    window.location.reload();
  })
}
// update services
else{
  const imgurl=this.localurl;
  console.log(name);
  console.log(this.currentServiceId);
  var data1={
    email:this.currentServiceId,
    Name:name.Name,
    image:this.localurl
}
 console.log(data1);
  this.user.updateService(data1).subscribe((res)=>{
    console.log(res);
  });
  alert('Service updated')
  window.location.reload();
}
  }

  // create products
  onProductCreate(name:any){
    const imgurl=this.localurl;
    if(!this.editMode){
    var datas={
      email:this.displaydata.length+1,
      Name:name.Name,
      price:name.price,
      image:this.localurl,
  }
  this.displaydata.push(datas);
  this.user.addProduct(this.displaydata,this.productdata.email).subscribe((res)=>{
    console.log(res);
    alert('New Service Created')
    window.location.reload();
  })
}
else{
  console.log(this.currentServiceId);
  const imgurl=this.localurl;
  var data1={
    email:this.currentServiceId.email,
    Name:name.Name,
    price:name.price,
    image:this.localurl
}
 console.log(data1);
 console.log(this.productdata.email);
  this.user.updateProduct(data1,this.productdata.email).subscribe((res)=>{
    console.log(res);
  });
}

  }

onDeleteService(id:any){
  this.http.delete(this.url1+"/"+id).subscribe();
  alert(confirm("Are you sure want to delete"));
  window.location.reload();
}

onDeleteProduct(email:any){
  this.deleteProduct=this.displaydata.splice(email-1,1)
  this.user.deleteProduct(this.displaydata,this.productdata.email).subscribe(res=>{
    console.log(res);
  })
  alert(confirm("Are you sure want to delete"));
  window.location.reload();
}

onEditService(Name:any,id: any) {

  let currentService = this.mservicelist.find((product:any) => product.Name === Name);
  this.editMode=true;
  if (currentService) {
    this.form.setValue({
      Name: currentService.Name,
    });
    this.currentServiceId = id;
  } else {
    console.error("Service not found.");
  }
}

onEditProduct(Name:any) {
  var currentService = this.displaydata.find((product:any) => product.Name ===Name );
  this.editMode=true;
  if (currentService) {
    this.form.setValue({
      Name: currentService.Name,
      price: currentService.price,
    });
    this.currentServiceId = currentService;
  } else {
    console.error("Service not found.");
  }
}

updateServices(){

}

}
