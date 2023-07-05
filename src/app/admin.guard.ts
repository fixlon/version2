import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adminService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.adminService.isadmin) {
        // this.router.navigate(["login"]),{queryParams:{retUrl:route.url}}
        this.router.navigate(["login"],{queryParams:{retUrl:route.url}})
        return false;
      } else {
        // Redirect to login page
        return true;
      }
  }

}
