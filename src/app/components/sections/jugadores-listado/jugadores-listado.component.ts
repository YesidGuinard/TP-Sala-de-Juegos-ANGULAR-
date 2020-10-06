import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Jugador} from '../../../clases/jugador';


@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'score', 'f_alta'];
  jugadores: Jugador[] = [];
  jugadoresService: Jugador[] = [];

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.TraerTodos();
  }

  TraerTodos() {
    this.auth.getUsers()
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
