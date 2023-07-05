import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubService {
  serviceName:any;
  serviceImage:any;
  serviceLink:any;
  id:any;
constructor(private client:HttpClient) { }


}
