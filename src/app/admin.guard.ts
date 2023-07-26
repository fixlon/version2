import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {
  constructor( private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('admin')) {
      // User is an admin, allow access to the route
      return true;
    } else {
      // User is not an admin, show the alert and redirect to the home page
      alert('You are not an admin');
      this.router.navigate(['home']);
      return false;
    }
  }

}
