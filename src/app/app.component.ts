import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
displayLoading:boolean=true;
title: string = 'fixlon';
  constructor() {}

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    window.onload=()=>{
      this.displayLoading=false;
    }
  }
}

