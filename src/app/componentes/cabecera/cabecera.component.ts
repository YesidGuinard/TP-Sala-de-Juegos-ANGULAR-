import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  title = 'SuperGames';
  isAuthenticated: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    // this.authService.logout('/');
  }
}
