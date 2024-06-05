import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica(userId : string, password : string): boolean {

    if (userId === 'Alex' && password === '123_Stella') {
      if(typeof sessionStorage !== "undefined"){
      sessionStorage.setItem("Utente", userId)
      }
      return true;
    }else{
      return false;
    }
  }
  
  loggedUser(): string |null {
    let utente = typeof sessionStorage !== 'undefined'
    ? sessionStorage.getItem("Utente") : null;

    return utente !== 'null'? utente : "";
  }

  isLogged(): boolean {
    return (typeof sessionStorage !== 'undefined' && sessionStorage.getItem("Utente")!== null);
  }

  clearAll(){
    sessionStorage.removeItem("Utente");
  }

}
