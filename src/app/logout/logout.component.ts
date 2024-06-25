import { Component, OnInit } from '@angular/core';
//import { AuthappService } from '../services/authapp.service';
import { AuthJWTService } from '../services/authappJWTservice';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private BasicAuth: AuthJWTService) { }

  ngOnInit() {
    this.BasicAuth.clearAll();
  }

}
