import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(
    private authSvc: AuthService,
    private route: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {

    if (this.emailFormControl.valid && this.passFormControl.valid) {
      console.log('form submitted');
      this.authSvc.login(this.emailFormControl.value, this.passFormControl.value)
        .then(() => this.route.navigate(['/Listado']))
        .catch(() => Swal.fire(
          'Error!',
          'Credenciales Invalidas!',
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

  userYesidCompleteData() {
    this.emailFormControl.setValue('yesid@utn.edu.ar');
    this.passFormControl.setValue('123456');
  }

  userDarioCompleteData() {
    this.emailFormControl.setValue('dario@ba.edu.ar');
    this.passFormControl.setValue('567890');
  }


}
