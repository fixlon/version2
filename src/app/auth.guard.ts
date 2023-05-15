import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.isuserloggedin()) {
        // this.router.navigate(["login"]),{queryParams:{retUrl:route.url}}
        this.router.navigate(["login"],{queryParams:{retUrl:route.url}})
        return false;
      } else {
        // Redirect to login page
        return true;
      }
  }

}
