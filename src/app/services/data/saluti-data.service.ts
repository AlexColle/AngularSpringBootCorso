import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private httpClient: HttpClient) { }

  getSaluti(nome: string) {
    
    return this.httpClient.get(`http://localhost:8080/api/saluti/${nome}`); //ALT+0096 del tastierino per il `
    //console.log("Saluti");
  }
}
