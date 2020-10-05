import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private auth: AuthService) {
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


}
