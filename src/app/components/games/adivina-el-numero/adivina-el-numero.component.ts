import {Component, OnInit} from '@angular/core';
import {JuegoAdivina} from '../../../clases/juego-adivina';
import {Resultados} from '../../../clases/resultados';
import {GameService} from '../../../services/game.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  respuesta: number;
  jugando: boolean;
  finalizado: boolean;
  resultado: string;
  nuevoJuego: JuegoAdivina;
  contador: number;


  constructor(private game: GameService, private auth: AuthService) {
  }

  NuevoJuego() {
    this.contador = 10;
    this.finalizado = false;
    this.nuevoJuego = new JuegoAdivina();
    this.jugando = true;
    this.resultado = null;
  }


  verificar() {

    if (this.contador > 0) {

      if (this.nuevoJuego.verificar(this.respuesta)) {
        this.resultado = 'Ganaste';
        this.jugando = false;
        this.game.addResult(new Resultados(this.auth.user.email, 'Adivina', this.contador * 10, this.resultado));
      } else {
        this.jugando = true;
        this.resultado = this.nuevoJuego.retornarAyuda(this.respuesta);
      }

    } else {
      this.resultado = 'Perdiste';
      this.game.addResult(new Resultados(this.auth.user.email, 'Adivina', 0, this.resultado));
      this.finalizado = true;
      this.jugando = false;
    }
    this.contador--;
  }


  ngOnInit() {
  }

  limpiar() {
    this.resultado = null;
  }
}
