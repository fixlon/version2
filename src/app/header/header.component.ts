import { Component, HostListener, Renderer2 ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  returl:any;
  loginButton:boolean=true;
  logoutButton:boolean=false;
  userName:any;
  isScrolled: boolean = false;
  adminButton:boolean=false;

  constructor(public activeroute:ActivatedRoute,private router:Router,public service:LoginService,private renderer: Renderer2){
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

  ngOnInit(): void {
    this.scrollHeader();

  }

  //logout user by removing the session storage
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

      //show menu
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
