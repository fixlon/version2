import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BserviceService {
  private apiUrl = 'http://localhost:3000';
constructor(private client:HttpClient) { }

mservice(){
  return this.client.get("http://localhost:3000/services")
}
manicureservice(){
  return this.client.get("http://localhost:3000/manicure")
}
sservice(){
  return this.client.get("http://localhost:3000/gallery")
}
galleryvideo(){
return this.client.get("http://localhost:3000/video");

}
review(){
  return this.client.get("http://localhost:3000/review")
}
eyebrowservice(){
  return  this.client.get("http://localhost:3000/eyebrow")
}
haircutservice(){
  return this.client.get("http://localhost:3000/haircut")
}
hairstyle(){
  return this.client.get("http://localhost:3000/hairstyle")
}
makeup(){
  return this.client.get("http://localhost:3000/makeup")
}
pedicure(){
  return this.client.get("http://localhost:3000/pedicure")
}
skincleaning(){
  return this.client.get("http://localhost:3000/skincleaning")
}
waxing(){
  return this.client.get("http://localhost:3000/waxing")
}
stylist(){
  return  this.client.get("http://localhost:3000/stylist")
}
userService(){
  return this.client.get("http://localhost:3000/usersprofile");
}
updateService(id:string,value:any){
 return this.client.put("http://localhost:3000/services/"+id,value).subscribe();
 }


updateServiceData(serviceType: string, id: number, updatedData: any): Observable<any> {
  return this.client.put("http://localhost:3000/services/"+serviceType, updatedData);
}

payment(){
  return this.client.get("http://localhost:3000/payment")
}

}
