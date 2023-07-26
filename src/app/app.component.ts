import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
displayLoading:boolean=false;
  constructor(private router:Router) {}

  ngOnInit(): void {
  //   this.router.events.subscribe((routerEvent:Event)=>{
  //     if(routerEvent instanceof NavigationStart){
  //       this.displayLoading=true;
  //     }
  //     if(routerEvent instanceof NavigationEnd||NavigationCancel||NavigationError){
  //       this.displayLoading=false
  //     }

  //   })
  }
}

