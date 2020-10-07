import {Component, OnInit} from '@angular/core';
import {GameService} from '../../../services/game.service';
import {AuthService} from '../../../services/auth.service';
import {Resultados} from '../../../clases/resultados';
import {JuegoAnagrama} from '../../../clases/juego-anagrama';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego: JuegoAnagrama;

  Tiempo: number;
  repetidor: any;
  respuesta: string;
  jugando: boolean;
  finalizado: boolean;
  resultado: string;


  constructor(private game: GameService, private auth: AuthService) {
    this.jugando = false;
    this.Tiempo = 10;

  }

  ngOnInit() {
  }

  NuevoJuego() {
    this.finalizado = false;
    this.nuevoJuego = new JuegoAnagrama();
    this.jugando = true;
    this.repetidor = setInterval(() => {
      this.Tiempo--;

      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.jugando = false;
        this.Tiempo = 10;
      }
    }, 1000);

  }

  verificar() {

    clearInterval(this.repetidor);
    if (this.nuevoJuego.getSiGano(this.respuesta)) {
      this.resultado = 'Ganaste';
      this.game.addResult(new Resultados(this.auth.user.email, 'Anagrama', 100, this.resultado));
    } else {
      this.resultado = 'Perdiste';
      this.game.addResult(new Resultados(this.auth.user.email, 'Anagrama', 0, this.resultado));
    }
    this.finalizado = true;
    this.jugando = false;
    this.respuesta = '';
    this.Tiempo = 10;
  }


}
