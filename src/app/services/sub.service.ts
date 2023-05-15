import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubService {

constructor(private client:HttpClient) { }

manicureservice(){
  return this.client.get("http://localhost:3000/manicure")
}
}
