import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let UserId = "Admin";
    let Password = "VerySecretPwd";

    let AuthHeader = "Basic " + window.btoa(UserId + ":" + Password);

    req = req.clone({setHeaders :{Authorization: AuthHeader}});

    return next.handle(req);
      
  }
}
