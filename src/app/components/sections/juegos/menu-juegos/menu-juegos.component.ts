import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {

  constructor(    private router: Router,
                  public ngZone: NgZone) { }

  ngOnInit(): void {
  }

  goToGame(url) {
    this.router.navigateByUrl(url);
  }
}
