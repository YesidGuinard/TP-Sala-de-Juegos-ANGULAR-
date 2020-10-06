import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-secuencia',
  templateUrl: './secuencia.component.html',
  styleUrls: ['./secuencia.component.css']
})
export class SecuenciaComponent implements OnInit {
  playing: any;
  gameState: any;
  winner: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  makeHumanMove(i: number) {

  }

  toggleGame(b: boolean) {

  }
}
