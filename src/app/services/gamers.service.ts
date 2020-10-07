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
    const result = {
      idUser: jugador.id,
      name: jugador.name,
      mail: jugador.mail,
      createdAt: jugador.createdAt,
      score: jugador.score,
    };
    return this.afs.collection('/users').doc(id).set(result);
  }

  getGamers() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/users').valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }


}
