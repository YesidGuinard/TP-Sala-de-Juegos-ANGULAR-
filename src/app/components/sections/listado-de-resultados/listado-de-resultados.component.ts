import {Component, OnInit} from '@angular/core';
import {Resultados} from '../../../clases/resultados';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {

  displayedColumns: string[] = ['jugador', 'juego', 'score','resultado', 'playedAt'];
  resultados: Resultados[] = [];
  resultadosService: Resultados[] = [];

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.TraerTodos();
  }

  TraerTodos() {
    this.auth.getResults()
      .then(result => {
        this.resultadosService = result;
        this.filtrarPlayer();
      });
  }

  filtrarPlayer() {

    this.resultados = this.resultadosService.filter((r) => r.idUser === this.auth.user.email);
  }


}
