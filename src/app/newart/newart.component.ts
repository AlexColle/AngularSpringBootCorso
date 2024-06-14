import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articoli, ApiMsg, FamAss, Iva } from '../articoli/articoli.component';
import { ArticoliDataService } from '../services/data/articoli-data.service';

@Component({
  selector: 'app-newart',
  templateUrl: './newart.component.html',
  styleUrls: ['./newart.component.css']
})
export class NewartComponent implements OnInit {

  codArt: string = '';
  articolo!: Articoli;
  Conferma: string = '';
  Errore: string = '';
  IsModifica: boolean = false;
  

  apiMsg!: ApiMsg;

  Iva = [
    {id: 22,
    descrizione: "Iva 22%",
    aliquota: 22},
    {id: 10,
      descrizione: "Iva 10%",
      aliquota: 10},
    {id: 4,
    descrizione: "Iva 4%",
    aliquota: 4},
    {id: 0,
      descrizione: "Iva Esente",
      aliquota: 0}
  ]

  FamAssort = [
    {
      id: -1,
      descrizione: "NON DISPONIBILE"
    },
    {
      id: 1,
      descrizione: "DROGHERIA ALIMENTARE"
    },
    {
      id: 10,
      descrizione: "DROGHERIA CHIMICA"
    },
    {
      id: 15,
      descrizione: "BANCO TAGLIO"
    },
    {
      id: 16,
      descrizione: "GASTRONOMIA"
    },
    {
      id: 17,
      descrizione: "PASTICCERIA"
    },
    {
      id: 20,
      descrizione: "LIBERO SERVIZIO"
    },
    {
      id: 25,
      descrizione: "PANE"
    },
    {
      id: 40,
      descrizione: "SURGELATI"
    },
    {
      id: 50,
      descrizione: "ORTOFRUTTA"
    },
    {
      id: 60,
      descrizione: "MACELLERIA"
    },
    {
      id: 70,
      descrizione: "PESCHERIA"
    },
    {
      id: 90,
      descrizione: "EXTRA ALIMENTARI"
    },

  ];

  constructor(private route: ActivatedRoute, private articoliService: ArticoliDataService, private router: Router,) { }

  ngOnInit() {

    this.codArt = this.route.snapshot.params['codArt'];

    this.articolo = new Articoli("","","",0,0,0,"1 ",new Date(), new FamAss(1,""), new Iva(22,"",22));

    if (this.codArt != "-1") {

      this.IsModifica = true;
    
      this.articoliService.getArticoliByCodArt(this.codArt).subscribe(
        response => {

          this.articolo = response;
          console.log(this.articolo); 
        },
        error => {
          console.log(error.error.messaggio);
        }
      );
    }
    else
      this.IsModifica = false;
  }

  abort() {

    this.router.navigate(['articoli', this.codArt]);

  }

  salva() {

    this.Conferma = '';
    this.Errore = '';

    if (this.codArt === "-1") {
      this.articoliService.insArticolo(this.articolo).subscribe(

        response => { 

          this.apiMsg = response;
          this.Conferma = this.apiMsg.message;
          
          console.log(this.Conferma);
          this.router.navigate(['newArt', this.articolo.codArt]);

        },
        error => {

          this.Errore =  error.error.messaggio;
          console.log(this.Errore);

        }
      )

    }
    else {

      this.articoliService.updArticolo(this.articolo).subscribe(

        response => { 

          this.apiMsg = response;
          this.Conferma = this.apiMsg.message;
          
          console.log(this.Conferma);

        
        },
        error => {

          this.Errore =  error.error.messaggio;
          console.log(this.Errore);

        }
      )
    }
  }

}
