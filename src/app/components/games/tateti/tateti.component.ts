import {Component, OnInit} from '@angular/core';
import Minimax from 'tic-tac-toe-minimax';
import {GameService} from '../../../services/game.service';
import {Resultados} from '../../../clases/resultados';
import {AuthService} from '../../../services/auth.service';

const {GameStep} = Minimax;

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  public gameState: Array<number | string> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  public winner: string;
  public playing = false;
  public computerFirst = false;
  public difficulty = 'Normal';

  constructor(private game: GameService, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  toggleGame(toggle: boolean) {
    if (toggle === this.playing) {
      return;
    }

    this.gameState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.winner = undefined;

    if (toggle && this.computerFirst) {
      this.makeComputerMove();
    }

    this.playing = toggle;
  }

  makeComputerMove() {
    const symbols = {
      huPlayer: 'X',
      aiPlayer: 'O'
    };

    const winnerMapping = {
      huPlayer: 'Ganaste',
      aiPlayer: 'Perdiste',
      draw: 'Empate'
    };

    const result = GameStep(this.gameState, symbols, this.difficulty);
    this.gameState = result.board;

    if (result.winner) {
      this.winner = winnerMapping[result.winner];
      let score = 20;
      if (this.winner === 'Ganaste') {
        score = 100;
      } else if (this.winner === 'Perdiste') {
        score = 0;
      }
      this.game.addResult(new Resultados(this.auth.user.email, 'Tateti', score, this.winner));
      this.playing = false;
    }
  }

  makeHumanMove(field: number) {
    if (!this.playing || typeof this.gameState[field] !== 'number') {
      return;
    }

    this.gameState[field] = 'X';
    this.makeComputerMove();
  }
}
