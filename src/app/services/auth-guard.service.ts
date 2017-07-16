import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Route, Routes
} from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(
        private authService: AuthService,
        private router: Router) {}

    canLoad(route: Route) {
      let url = `${route.path}`;
      return this.checkLogin(url)
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("AuthGuard#CanActivate called");
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        console.log("AuthGuard#CheckLogin called");
        if (this.authService.isLoggedIn) {
            return true;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(["/login"]);
        return false;
    }
}
