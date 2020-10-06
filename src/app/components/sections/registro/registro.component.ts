import {Component, NgZone, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {GamersService} from '../../../services/gamers.service';
import {Jugador} from '../../../clases/jugador';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ]);

  islogged: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    public ngZone: NgZone,
    private gamersService: GamersService) {

    auth.afAuth.authState.subscribe(user => {
      if (user) {
        this.islogged = true;
      } else {
        this.islogged = false;
      }
    });
  }

  ngOnInit() {

  }


  onSubmit() {

    if (this.emailFormControl.valid && this.passFormControl.valid && this.nameFormControl.valid) {
      this.auth.register(this.emailFormControl.value, this.passFormControl.value)
        .then((result) => {
          this.ngZone.run(() => {
            setTimeout(() => {
              this.gamersService.addGamer(new Jugador(this.nameFormControl.value, this.emailFormControl.value, 0));
              this.router.navigate(['Juegos']);
            }, 0);

          });
          // this.auth.SetUserData(result.user);
        })
        .catch(() => Swal.fire(
          'Error!',
          'No se puede registrar usuario!',
          'warning'
        ));
    } else {
      Swal.fire(
        'Warning',
        'Ingrese Mail valido y ' +
        'contraseña de minimo 6 caracteres',
        'warning'
      );
    }
  }
}
