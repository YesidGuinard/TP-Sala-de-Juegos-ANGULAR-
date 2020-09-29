import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  isAuthenticated: boolean;
  title = 'SuperGames';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    // this.authService.logout('/');
  }
}
