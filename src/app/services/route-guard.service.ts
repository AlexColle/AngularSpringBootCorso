import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
//import { AuthappService } from './authapp.service';
import { AuthJWTService } from './authappJWTservice';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService { 
  constructor(private BasicAuth: AuthJWTService, private route: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.BasicAuth.isLogged()) {
    this.route.navigate(["login"]);
    return false;
  }else{
    return true;
    }
  }
}
