import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId = ''
  password = ''
  autenticato = true
  consentito = false
  errorMsg = 'Spiacente, la userid o la password sono errati!'
  //validMsg = 'userid e password inseriti correttamente!'

  constructor(private route : Router,private BasicAuth : AuthappService) { }

  ngOnInit() {
  }

  gestAut() {

    if (this.BasicAuth.autentica(this.userId, this.password)){
      this.autenticato = true;
      this.route.navigate(['welcome', this.userId])
    }else{
      this.autenticato = false;
    }

  }

}
