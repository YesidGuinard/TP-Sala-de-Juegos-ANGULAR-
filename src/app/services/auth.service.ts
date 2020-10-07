import {Injectable} from '@angular/core';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  userMail: any;

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
         this.userMail = JSON.parse(localStorage.getItem('user'));
        this.userMail = this.userMail['email'];
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


// aqui se debe intentar recuperar el score del user para acumularle nuevo score

}
