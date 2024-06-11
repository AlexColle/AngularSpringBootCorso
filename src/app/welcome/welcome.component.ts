import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //messaggio = 'Saluti sono il componente welcome'

  saluti = 'Benvenuti nel sito Alphashop'
  titolo2 = 'Seleziona gli articoli da acquistare'

  utente = ''
  messaggio: String | Object = ''

  constructor(private route:ActivatedRoute, private salutiSrv: SalutiDataService) {}

  ngOnInit() {

    this.utente = this.route.snapshot.params['userid']
    //console.log(this.messaggio)
  }

  getSaluti() {
    console.log(this.salutiSrv.getSaluti(this.utente));

    this.salutiSrv.getSaluti(this.utente).subscribe(Response => this.handleResponse(Response), error => this.handleError(error));
  }

  handleResponse(response: Object |String) {
    this.messaggio = response;
    console.log(response)}

    handleError(error: any) {
      this.messaggio = error.error.message;
    }

}
