import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
displayLoading:boolean=false;
title: string = 'fixlon';
  constructor() {}

  ngOnInit(): void {
  }
}

