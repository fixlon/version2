import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BserviceService {
  private apiUrl = environment.apiUrl;
constructor(private client:HttpClient) { }

mservice(){
  return this.client.get(`${this.apiUrl}/services`)
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

timeservice(){
  return this.client.get(`${this.apiUrl}/bookings`)
}
}
