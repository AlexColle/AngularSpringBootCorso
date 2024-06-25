import { Component, OnInit } from '@angular/core';
//import { AuthappService } from '../services/authapp.service';
import { AuthJWTService } from '../services/authappJWTservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected BasicAuth : AuthJWTService) { }

  ngOnInit() {
      
  }

}
