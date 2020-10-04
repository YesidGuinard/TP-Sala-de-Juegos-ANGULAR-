import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';



@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  isAuthenticated: boolean;
  title = 'SuperGames';

  constructor(private router: Router, private auth: AuthService) {
    auth.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;

      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['Login']);
    this.auth.logout();
  }
}
