import { Component, OnInit , HostListener, Renderer2 } from '@angular/core';
import { LoginService } from './login.service';
import { BserviceService } from './bservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginButton:boolean=true;
  logoutButton:boolean=false;
returl:any;
userName:any;
showHeader = false;
adminButton:boolean=false;
isScrolled: boolean = false;

  constructor(public service:LoginService,private renderer: Renderer2,private router:Router,public activeroute:ActivatedRoute,) {
  activeroute.queryParamMap.subscribe(data=>{
    this.returl=data.get("retUrl")
        })
        if(sessionStorage.getItem('email')){
          this.loginButton=false;
          this.logoutButton=true;
        }
        else if(sessionStorage.getItem('admin')){
          this.loginButton=false;
          this.logoutButton=true;
          this.adminButton=true;
        }
        else{
          this.loginButton=true;
          this.logoutButton=false;
        }
this.userName=sessionStorage.getItem('userName');
      }
  ngOnInit() {
    this.scrollHeader();
  }

  title = 'fixlon';

  logoutuser(){

this.service.userloggedout();
if(confirm("Are you logout")){
  sessionStorage.removeItem('email')
  sessionStorage.removeItem('admin')
  sessionStorage.removeItem('userName')
  window.location.reload();
}
this.router.navigate([this.returl || '/']);
  }


//toggle button
  toggleMenu(): void {
    const navMenu = document.getElementById('nav');
    if (navMenu) {
      navMenu.classList.toggle('show-menu');
    }
  }

  linkAction(): void {
    const navMenu = document.getElementById('nav');
    if (navMenu) {
      navMenu.classList.remove('show-menu');
    }
  }

  //scroll header
  scrollHeader(): void {
    const header = document.getElementById('header');
    if (header) {
      if (window.scrollY >= 100) {
        this.renderer.addClass(header, 'scroll-header');
      } else {
        this.renderer.removeClass(header, 'scroll-header');
      }
    }
  }

  // Angular HostListener to handle scroll events
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollHeader(); // Call the method to apply styles on scrolling
  }
}

