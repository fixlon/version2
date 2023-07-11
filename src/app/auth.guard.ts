import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!sessionStorage.getItem('email') && !sessionStorage.getItem('admin')) {
      this.router.navigate(["login"], { queryParams: { retUrl: route.url } });
      return false;
    } else {
      // Allow access
      return true;
    }
  }
  // canActivatechild(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //     return this.canActivate(route,state);
  //   }
}
