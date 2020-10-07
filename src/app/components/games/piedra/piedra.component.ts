import {Component, OnInit} from '@angular/core';
import {GameService} from '../../../services/game.service';
import {AuthService} from '../../../services/auth.service';
import {Resultados} from '../../../clases/resultados';

@Component({
  selector: 'app-piedra',
  templateUrl: './piedra.component.html',
  styleUrls: ['./piedra.component.css']
})
export class PiedraComponent implements OnInit {
  scores = [0, 0];
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];
  playerSelected = -1;
  loading = false;
  isResultShow = false;

  theResult = 0;
  enemySelected = -1;

  respuesta: string;
  jugando: boolean;
  finalizado: boolean;
  resultado: string;

  constructor(private game: GameService, private auth: AuthService) {

  }

  ngOnInit(): void {
  }

  pick(weapon: number): void {
    this.finalizado = false;
    // this.nuevoJuego = new JuegoAnagrama();
    this.jugando = true;

    if (this.loading) {
      return;
    }
    this.loading = true;
    this.playerSelected = weapon;

    setTimeout(() => {
      this.loading = false;
      const randomNum = Math.floor(Math.random() * 3);
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    }, 400);
  }

  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
    this.finalizado = true;
    if (playerPick === enemyPick) {
      this.theResult = 2;
      this.resultado = 'Empate';
      this.resultado = 'Ganaste';
      this.game.addResult(new Resultados(this.auth.user.email, 'PPT', 10, this.resultado));
    } else if ((playerPick - enemyPick + 3) % 3 === 1) {
      this.resultado = 'Ganaste';
      this.theResult = 0;
      this.scores[0] = this.scores[0] + 1;
      this.game.addResult(new Resultados(this.auth.user.email, 'PPT', 30, this.resultado));

    } else {
      this.resultado = 'Perdiste';
      this.theResult = 1;
      this.scores[1] = this.scores[1] + 1;
      this.game.addResult(new Resultados(this.auth.user.email, 'PPT', 0, this.resultado));

    }
  }
}
