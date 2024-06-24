import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { port, server } from '../app.constants';

export class AuthData {

  constructor(
    public codice: string,
    public messaggio: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor(private httpClient:HttpClient) { }

  /*
  server = "localhost";
  port = "5051";

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
    */

  autenticaService(userId : string, password : string){
    let AuthString = "Basic " + window.btoa(userId + ":" + password)
    let headers = new HttpHeaders({Authorization: AuthString});

    return this.httpClient.get<AuthData>(`http://${server}:${port}/api/articoli/test`, 
      {headers}).pipe(map(data => {sessionStorage.setItem("Utente", userId);
        sessionStorage.setItem("AuthToken", AuthString);
        return data;}));
      

  }
  
  loggedUser(): string |null {
    let utente = typeof sessionStorage !== 'undefined'
    ? sessionStorage.getItem("Utente") : null;

    return utente !== 'null'? utente : "";
  }

  getAuthToken(){
    if (this.loggedUser())
      return sessionStorage.getItem("AuthToken");
    else
    return "";
  }

  isLogged(): boolean {
    return (typeof sessionStorage !== 'undefined' && sessionStorage.getItem("Utente")!== null);
  }

  clearAll(){
    sessionStorage.removeItem("Utente");
  }

}
