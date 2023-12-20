import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BserviceService {
  private apiUrl = environment.apiUrl;
constructor(private client:HttpClient) {
  console.log(environment.apiUrl);
 }

mservice(){
  return this.client.get(environment.services)
}

sservice(){
  return this.client.get(environment.gallery)
}
galleryvideo(){
return this.client.get(environment.Video);

}
review(){
  return this.client.get(environment.review);
}

stylist(){
  return  this.client.get(environment.stylist)
}
userService(){
  return this.client.get(environment.user);
}
updateService(){
  
}
payment(){
  return this.client.get(environment.payment);
}
package(){
  return this.client.get(environment.package);
}

timeservice(){
  return this.client.get(environment.bookings);
}
}
