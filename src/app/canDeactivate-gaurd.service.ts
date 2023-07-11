import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivateComponent {
  canExit: () => boolean;
}

export class CanDeactivateGuardService implements CanDeactivate<IDeactivateComponent> {
  canDeactivate(
    component: IDeactivateComponent){
    return component.canExit();
  }
}
