import {Component, OnInit} from '@angular/core';
import {Resultados} from '../../../clases/resultados';
import {AuthService} from '../../../services/auth.service';
import {GameService} from '../../../services/game.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {

  displayedColumns: string[] = ['juego', 'score', 'resultado', 'playedAt'];
  resultados: Resultados[] = [];
  resultadosService: Resultados[] = [];

  constructor(private games: GameService, private auth: AuthService) {
  }

  ngOnInit() {
    this.TraerTodos();
  }

  TraerTodos() {
    this.games.getResults()
      .then(result => {
        this.resultadosService = result;
        this.filtrarPlayer();
      });
  }

  filtrarPlayer() {

    this.resultados = this.resultadosService.filter((r) => r.idUser === this.auth.user.email);
  }


}
