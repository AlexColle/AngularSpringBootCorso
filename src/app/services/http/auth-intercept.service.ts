import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AuthappService } from '../authapp.service';
import { Observable } from 'rxjs';
import { AuthJWTService } from '../authappJWTservice';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptService implements HttpInterceptor {

  constructor(private BasicAuth: AuthJWTService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable <any> | any {

    /*let UserId = "Admin";
    let Password = "VerySecretPwd";

    let AuthHeader = "Basic " + window.btoa(UserId + ":" + Password);
    */

    let AuthToken = this.BasicAuth.getAuthToken();
    let User = this.BasicAuth.loggedUser();

    if (AuthToken && User) {
      req = req.clone({setHeaders :{Authorization: AuthToken}});
    }

    

    return next.handle(req);
      
  }
}
