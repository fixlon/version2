import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gadd',
  templateUrl: './gadd.component.html',
  styleUrls: ['./gadd.component.css']
})
export class GaddComponent implements OnInit {


  constructor(private http: HttpClient) {}


  ngOnInit() {
  }

}
