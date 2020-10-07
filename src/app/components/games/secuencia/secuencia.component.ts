import {Component, OnInit} from '@angular/core';

import {GameService} from '../../../services/game.service';
import {AuthService} from '../../../services/auth.service';
import {Resultados} from '../../../clases/resultados';
import {Secuencia} from '../../../clases/secuencia';

@Component({
  selector: 'app-secuencia',
  templateUrl: './secuencia.component.html',
  styleUrls: ['./secuencia.component.css']
})
export class SecuenciaComponent implements OnInit {
  nuevoJuego: Secuencia;

  Tiempo: number;
  repetidor: any;
  respuesta: number;
  jugando: boolean;
  finalizado: boolean;
  resultado: string;

  serieStr: string = '';
  explicacion: string;

  constructor(private game: GameService, private auth: AuthService) {
    this.jugando = false;
    this.Tiempo = 15;

  }

  ngOnInit() {
  }

  NuevoJuego() {
    this.finalizado = false;
    this.serieStr = '';
    this.nuevoJuego = new Secuencia();
   // console.log('Respuesta esperada: ' + this.nuevoJuego.resultadoEsperado);
    this.serieStr = this.nuevoJuego.serie[0].toString();
    for (let i = 1; i < this.nuevoJuego.serie.length - 1; i++) {
      this.serieStr = this.serieStr + ', ' + this.nuevoJuego.serie[i];
    }

    this.serieStr = this.serieStr + ', __';
    this.jugando = true;
    this.repetidor = setInterval(() => {
      this.Tiempo--;

      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.jugando = false;
        this.Tiempo = 15;
      }
    }, 1000);

  }

  verificar() {

    clearInterval(this.repetidor);
    if (this.nuevoJuego.getSiGano(this.respuesta)) {
      this.resultado = 'Ganaste';
      this.game.addResult(new Resultados(this.auth.user.email, 'Secuencia', 200, this.resultado));
    } else {
      this.resultado = 'Perdiste';
      this.explicacion = '( n * ' + this.nuevoJuego.incremento + ') ' + this.nuevoJuego.operador + ' ' + this.nuevoJuego.offset;
      this.explicacion += ' Donde n es la ultima posicion, n = ' + (this.nuevoJuego.serie.length - 1);
      this.game.addResult(new Resultados(this.auth.user.email, 'Secuencia', 0, this.resultado));
    }
    this.finalizado = true;
    this.jugando = false;
    this.respuesta = 0;
    this.Tiempo = 15;
  }
}
