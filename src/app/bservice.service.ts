import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class BserviceService {
  private apiUrl = environment.apiUrl;
constructor(private client:HttpClient) { }

mservice(){
  return this.client.get(`${this.apiUrl}/services`)
}
manicureservice(){
  return this.client.get(`${this.apiUrl}/manicure`)
}
sservice(){
  return this.client.get(`${this.apiUrl}/gallery`)
}
galleryvideo(){
return this.client.get(`${this.apiUrl}/video`);

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
  return  this.client.get(`${this.apiUrl}/stylist`)
}
userService(){
  return this.client.get(`${this.apiUrl}/usersprofile`);
}
updateService(id:string,value:any){
 return this.client.put(`${this.apiUrl}/services/`+id,value).subscribe();
 }


updateServiceData(serviceType: string, id: number, updatedData: any): Observable<any> {
  return this.client.put(`${this.apiUrl}/services/`+serviceType, updatedData);
}

payment(){
  return this.client.get(`${this.apiUrl}/payment`)
}
package(){
  return this.client.get(`${this.apiUrl}/package`)
}

}
