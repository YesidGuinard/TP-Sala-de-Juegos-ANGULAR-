import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IState} from './interface';
import {rootReducer} from './reducer';


@NgModule({
  imports: [NgReduxModule],
  exports: [NgReduxModule]
})
export class ReduxConfigModule {
  constructor(private ngRedux: NgRedux<IState>) {
    this.ngRedux.configureStore(rootReducer, {}, [], []);
  }
}
