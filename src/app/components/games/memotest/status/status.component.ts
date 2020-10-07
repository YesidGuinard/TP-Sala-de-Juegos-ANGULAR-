import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {GameActions} from '../store/action';
import {STATUS} from '../store/interface';
import { stop } from '../helper/event';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  @select() status$: Observable<number>;
  @select() elapsedMs$: Observable<number>;

  status: any;

  constructor(private actions: GameActions) {
    this.status = STATUS;
  }

  reset(e: Event) {
    stop(e);
    this.actions.reset();
  }
}
