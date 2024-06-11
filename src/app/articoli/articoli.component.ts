import { Component, OnInit } from '@angular/core';
import { ArticoliDataService } from '../services/data/articoli-data.service';
import { ActivatedRoute } from '@angular/router';

export class Articoli {

  constructor(
    public codArt: String,
    public descrizione: String,
    public um: String,
    public pzCart: number,
    public pesoNetto: number,
    public prezzo: number,
    public idStatoArt: number,
    public isactive: boolean,
    public dataCreaz: Date
  ) { }
}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  NumArt = 0;
  pagina: number = 1;
  righe: number = 10;

  articoli : Articoli[] = [];

  /*articoli = [
    new Articoli('014600301','BARILLA FARINA 1 KG','PZ',24,1,1.09,true,new Date()),
    new Articoli('013500121','BARILLA PASTA GR.500 N.70 1/2 PENNE','PZ',30,0.5,1.3,true,new Date()),
    new Articoli('007686402','BURGER DI CECI 300 GR','PZ',8,0.3,6.46,true,new Date()),
    new Articoli('057549001','POLPETTE DI CECI 400 GR','PZ',12,0.4,5.97,true,new Date())
  ]*/
  
filter: any;
  route: any;

  constructor(private articoliService : ArticoliDataService) { }

  ngOnInit()  {
    this.filter = this.route.snapshot.params['filter'];
    if (this.filter != undefined) {
      this.getArticoli(this.filter);
    }
  }

  refresh() {
    this.getArticoli(this.filter);
  }

  public getArticoli(filter : String) {
    this.articoliService.getArticoli(filter).subscribe(Response => {
      console.log('Ricerchiamo articoli con filtro: '+ filter);

      this.articoli = Response;
      console.log(this.articoli);

      this.NumArt = this.articoli.length;
      console.log(this.articoli.length)});
    }
  
}
