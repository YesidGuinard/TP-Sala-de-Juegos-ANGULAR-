import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email = new FormControl('', [Validators.email]);
  formRegistro: FormGroup = this.miConstructor.group({
    usuario: this.email
  });

  constructor(private miConstructor: FormBuilder) {
  }

  ngOnInit() {
  }

}
