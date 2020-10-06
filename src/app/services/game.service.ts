import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Resultados} from '../clases/resultados';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private afs: AngularFirestore) {
  }

  getResults() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/results').valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  addResult(resultado: Resultados) {

    const result = {
      idUser: resultado.idUser,
      juego: resultado.juego,
      playedAt: resultado.playedAt,
      score: resultado.score,
      resultado: resultado.resultado
    };

    const id = this.afs.createId();
    return this.afs.collection('/results').doc(id).set(result);
  }


}
