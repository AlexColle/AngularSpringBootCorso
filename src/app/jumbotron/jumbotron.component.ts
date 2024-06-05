import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  
  @Input() Titolo: String ="";
  @Input() SottoTitolo: String="";
  @Input() Show: boolean = true

  constructor() { }

  ngOnInit(): void {
    console.log(this.Titolo);
  }

}
