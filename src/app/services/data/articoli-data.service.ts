import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMsg, Articoli } from 'src/app/articoli/articoli.component';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  server = "localhost";
  port = "5051";

  constructor(private httpClient:HttpClient) { }

  /*getBasicAuthHeader() {

    let UserId = "Alex";
    let Password = "123_Stella";

    let retVal = "Basic " + window.btoa(UserId + ":" + Password);
    return retVal;
  }*/

  getArticoliByDescription(descrizione: String) {

    /*let headers = new HttpHeaders({Authorization: this.getBasicAuthHeader()})*/

    return this.httpClient.get<Articoli[]>(`http://${this.server}:${this.port}/api/articoli/cerca/descrizione/${descrizione}`);
  }

  getArticoliByCodArt(codArt: String) : Observable<Articoli> {
    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/api/articoli/cerca/codice/${codArt}`);
  }

  getArticoliByEan(barcode: String) {
    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/api/articoli/cerca/ean/${barcode}`);
  }

  delArticoloByCodArt(codArt: String) {
    return this.httpClient.delete<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/elimina/${codArt}`);
  }

  updArticolo(articolo: Articoli) {
    return this.httpClient.put<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/modifica`, articolo);
  }

  insArticolo(articolo: Articoli) {
    return this.httpClient.post<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/inserisci`, articolo)
  }
  
}