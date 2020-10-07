export class Secuencia {
  operadores: string[];
  i: number;
  incremento: number;
  offset: number;
  operadorIndex: number;
  operador: string;
  resultadoEsperado: number;
  gano: boolean;
  serie: number[] = [];


  constructor() {
    this.operadores = ['+', '-', '*'];
    this.i = this.getnumberRnd(4, 6);
    this.incremento = this.getnumberRnd(3, 9);
    this.operadorIndex = this.getnumberRnd(0, 2);
    this.offset = this.getnumberRnd(0, 5);
    this.operador = this.operadores[this.operadorIndex];
    this.resultadoEsperado = this.getResultadoEsperado();
    this.gano = false;
    //console.log(this);
  }


  getnumberRnd(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  getResultadoEsperado(): number {
    for (let i = 0; i < this.i; i++) {
      if (this.operadorIndex === 0) {
        this.serie[i] = (this.incremento * i) + this.offset;
      } else {
        this.serie[i] = (this.incremento * i) - this.offset;
      }
    }
    return this.serie[this.i - 1];
  }

  getSiGano(respuestaJugador: number): boolean {
    return this.resultadoEsperado === respuestaJugador;
  }
}
