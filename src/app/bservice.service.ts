import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BserviceService {
  private apiUrl = environment.apiUrl;
  private serviceurl= environment.services;
  private packageurl= environment.package;
  private paymenturl= environment.payment;
  private stylisturl= environment.stylist;
  private userurl= environment.user;
  private videourl= environment.Video;
  private galleryurl = environment.gallery;

constructor(private client:HttpClient) { }

mservice(){
  return this.client.get(this.serviceurl)
}
manicureservice(){
  return this.client.get(`${this.apiUrl}/manicure`)
}
sservice(){
  return this.client.get(this.galleryurl)
}
galleryvideo(){
return this.client.get(this.videourl);

}
review(){
  return this.client.get(`${this.apiUrl}/review`)
}
eyebrowservice(){
  return  this.client.get(`${this.apiUrl}/eyebrow`)
}
haircutservice(){
  return this.client.get(`${this.apiUrl}/haircut`)
}
hairstyle(){
  return this.client.get(`${this.apiUrl}/hairstyle`)
}
makeup(){
  return this.client.get(`${this.apiUrl}/makeup`)
}
pedicure(){
  return this.client.get(`${this.apiUrl}/pedicure`)
}
skincleaning(){
  return this.client.get(`${this.apiUrl}/skincleaning`)
}
waxing(){
  return this.client.get(`${this.apiUrl}/waxing`)
}
stylist(){
  return  this.client.get(this.stylisturl)
}
userService(){
  return this.client.get(this.userurl);
}
updateService(id:string,value:any){
 return this.client.put(`${this.apiUrl}/services/`+id,value).subscribe();
 }


updateServiceData(serviceType: string, id: number, updatedData: any) {
  return this.client.put(`${this.apiUrl}/services/`+serviceType, updatedData);
}

payment(){
  return this.client.get(this.paymenturl)
}
package(){
  return this.client.get(this.packageurl)
}

}
