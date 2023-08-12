import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivateComponent {
  canExit: () => boolean;
}

export class CanDeactivateGuardService  {
  canDeactivate(
    component: IDeactivateComponent){
    return component.canExit();
  }
}
