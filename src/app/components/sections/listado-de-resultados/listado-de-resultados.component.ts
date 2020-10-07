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
  resultadosFiltrados: Resultados[] = [];

  constructor(private games: GameService, public auth: AuthService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.TraerTodos();
    }, 50);
  }

  TraerTodos() {
    this.games.getResults()
      .then(result => {
        this.resultadosService = result;
        this.filtrarPlayer();
      });
  }

  filtrarPlayer() {
    this.resultados = this.resultadosService.filter((r) => r.idUser === this.auth.userMail);
    this.filtrar('');
  }


  filtrar(s: string) {
    if (s !== '') {
      this.resultadosFiltrados = this.resultados.filter((r => r.juego === s));
    } else {
      this.resultadosFiltrados = this.resultados;
    }
  }
}
