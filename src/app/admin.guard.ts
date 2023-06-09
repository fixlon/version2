import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {
  constructor(private adminService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!sessionStorage.getItem('admin')) {
        alert('you are not admin')
        this.router.navigate(["home"],{queryParams:{retUrl:route.url}})
        return false;
      } else {
        // Redirect to login page
        return true;
      }
  }

}
