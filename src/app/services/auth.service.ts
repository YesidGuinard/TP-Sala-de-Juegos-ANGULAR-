import {Injectable} from '@angular/core';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        //     JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        //   JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  async login(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async logout() {
    localStorage.removeItem('user');
    return await this.afAuth.signOut();
  }

  addUser(email: any, name: String) {
    const date = new Date();
    const user = {
      createdAt: date.toLocaleDateString(),
      id: Math.floor(Math.random() * 10000) + 1 ,
      // name: email.split('@')[0],
      name: name,
      score: 0,
      mail: email
    };
    const id = this.afs.createId();
    return this.afs.collection('/users').doc(id).set(user);
  }

  getUsers() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/users').valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }


  getResults() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/results').valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  addResult(game: any, points: any, win: any) {
    const date = new Date();
    const result = {
      createdAt: date.toLocaleDateString(),
      game: game,
      idUser: this.user.email,
      points: points,
      win: win
    };
    const id = this.afs.createId();
    return this.afs.collection('/results').doc(id).set(result);
  }
// aqui se debe intentar recuperar el score del user para acumularle nuevo score

}
