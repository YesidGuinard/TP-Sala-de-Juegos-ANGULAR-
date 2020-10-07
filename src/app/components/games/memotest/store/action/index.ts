import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {isEmpty} from '../../helper/object';
import {ICard, IState, STATUS} from '../interface';
import {Resultados} from '../../../../../clases/resultados';
import {GameService} from '../../../../../services/game.service';
import {AuthService} from '../../../../../services/auth.service';

@Injectable()
export class GameActions {
  static RESET = 'RESET';
  static UPDATE_STATUS = 'UPDATE_STATUS';
  static UPDATE_LAST_SELECTED_CARD = 'UPDATE_LAST_SELECTED_CARD';
  static UPDATE_CARD_FLIPPED = 'UPDATE_CARD_FLIPPED';
  static UPDATE_REMAINS = 'UPDATE_REMAINS';
  static UPDATE_ELAPSED = 'UPDATE_ELAPSED';
  static UPDATE_HIGHESTSPEED = 'UPDATE_HIGHESTSPEED';
  private timerId: any;

  constructor(private ngRedux: NgRedux<IState>,private game: GameService, private auth: AuthService) {
  }

  reset(): void {
    this.ngRedux.dispatch({type: GameActions.RESET});
  }

  updateStatus(status: STATUS): void {
    this.ngRedux.dispatch({type: GameActions.UPDATE_STATUS, payload: status});
    if (status === STATUS.PLAYING) {
      this.timerId = setInterval(() => {
        this.ngRedux.dispatch({
          type: GameActions.UPDATE_ELAPSED,
          payload: +this.ngRedux.getState().elapsedMs + 1
        });
      }, 1000);
    } else if (status === STATUS.PASS) {
      this.resultado = 'Ganaste';
      this.game.addResult(new Resultados(this.auth.user.email, 'Memotest', 300, this.resultado));
      clearInterval(this.timerId);
      this.ngRedux.dispatch({
        type: GameActions.UPDATE_HIGHESTSPEED,
        payload: this.ngRedux.getState().elapsedMs
      });
    }
  }

  updateLastSelectedCard(card: ICard): void {
    this.ngRedux.dispatch({
      type: GameActions.UPDATE_LAST_SELECTED_CARD,
      payload: card
    });
  }

  updateCardFlipped(card: ICard): void {
    this.ngRedux.dispatch({
      type: GameActions.UPDATE_CARD_FLIPPED,
      payload: card
    });
  }

  match(): void {
    this.ngRedux.dispatch({
      type: GameActions.UPDATE_REMAINS,
      payload: +this.ngRedux.getState().remains - 1
    });
  }

  flipCard(card: ICard): any {
    const state = this.ngRedux.getState();
    this.updateCardFlipped(card);
    if (state.status === STATUS.READY) {
      this.updateStatus(STATUS.PLAYING);
    }
    if (isEmpty(state.lastSelectedCard)) {
      return this.updateLastSelectedCard(card);
    }
    if (state.lastSelectedCard.name === card.name) {
      this.updateLastSelectedCard(null);
      this.match();
      const remains = +state.remains - 1;
      return remains || this.updateStatus(STATUS.PASS);
    }
    const lastCard = state.lastSelectedCard;
    this.updateLastSelectedCard(null);
    setTimeout(() => {
      this.updateCardFlipped(lastCard);
      this.updateCardFlipped(card);
    }, 1000);
  }
}
