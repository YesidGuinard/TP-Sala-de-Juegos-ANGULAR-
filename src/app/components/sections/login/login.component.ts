import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
    Validators.minLength(4),
  ]);

  usuario = '';
  clave = '';
  invalidCredentials = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {

    if (this.emailFormControl.valid && this.passFormControl.valid) {
      console.log('form submitted');
      Swal.fire(
        'Error!',
        'Credenciales Invalidas!',
        'warning'
      );

    } else {
      console.log('fields wrong');
    }
  }


  userYesidCompleteData() {
    this.emailFormControl.setValue('yesid@utn.edu.ar');
    this.passFormControl.setValue('12345');
  }

  userDarioCompleteData() {
    this.emailFormControl.setValue('dario@ba.edu.ar');
    this.passFormControl.setValue('67890');
  }



}
