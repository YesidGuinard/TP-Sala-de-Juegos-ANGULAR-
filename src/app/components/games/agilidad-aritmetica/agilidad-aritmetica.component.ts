import {Component, OnInit} from '@angular/core';

import {JuegoAgilidad} from '../../../clases/juego-agilidad';
import {Resultados} from '../../../clases/resultados';
import {GameService} from '../../../services/game.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  nuevoJuego: JuegoAgilidad;

  Tiempo: number;
  repetidor: any;
  respuesta: number;
  jugando: boolean;
  finalizado: boolean;
  resultado: string;

  constructor(private game: GameService, private auth: AuthService) {
    this.jugando = false;
    this.Tiempo = 5;

  }

  ngOnInit() {
  }

  NuevoJuego() {
    this.finalizado = false;
    this.nuevoJuego = new JuegoAgilidad();
    this.jugando = true;
    this.repetidor = setInterval(() => {
      this.Tiempo--;

      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.jugando = false;
        this.Tiempo = 5;
      }
    }, 1000);

  }

  verificar() {

    clearInterval(this.repetidor);
    if (this.nuevoJuego.getSiGano(this.respuesta)) {
      this.resultado = 'Ganaste';
      this.game.addResult(new Resultados(this.auth.user.email, 'Agilidad', 100, this.resultado));
    } else {
      this.resultado = 'Perdiste';
      this.game.addResult(new Resultados(this.auth.user.email, 'Agilidad', 0, this.resultado));
    }
    this.finalizado = true;
    this.jugando = false;
    this.respuesta = 0;
    this.Tiempo = 5;
  }

}
