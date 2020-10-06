import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Jugador} from '../../../clases/jugador';
import {GamersService} from '../../../services/gamers.service';


@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'score', 'f_alta'];
  jugadores: Jugador[] = [];
  jugadoresService: Jugador[] = [];

  constructor(private gamer: GamersService) {

  }

  ngOnInit() {
    this.TraerTodos();
  }

  TraerTodos() {
    this.gamer.getGamers()
      .then(result => {
        this.jugadoresService = result;
        this.jugadores = this.jugadoresService;
      });
  }

  TraerGanadores() {
    this.jugadores = this.jugadoresService.filter((p) => p.score > 0);
  }

  TraerPerdedores() {
    this.jugadores = this.jugadoresService.filter((p) => p.score <= 0);
  }

}
