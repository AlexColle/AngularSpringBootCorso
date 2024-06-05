import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  autenticato = true
  consentito = false
  errorMsg = 'Spiacente, la userid o la password sono errati!'
  //validMsg = 'userid e password inseriti correttamente!'

  constructor(private route : Router) { }

  ngOnInit() {
  }

  gestAut() {

    if (this.userid === 'Alex' && this.password === '123_Stella') {
      this.autenticato = true;
      this.route.navigate(['welcome', this.userid])
      this.consentito = true;
    }
    else{
      this.autenticato = false;
      this.consentito = false;
    }
    
  }

}
