import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Jugador} from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class GamersService {

  constructor(private afs: AngularFirestore) {
  }

  addGamer(jugador: Jugador) {
    const id = this.afs.createId();
    return this.afs.collection('/users').doc(id).set(jugador);
  }

  getGamers() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/users').valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

/*  async getGamerLogged() {
    let gamerRef = this.afs.collection('/users').doc('/gtCVByEwjSy1ywzI39OT').get();
    console.log(gamerRef);

  }*/
}
