export class JuegoAgilidad {
  operadores: string[];
  numeroUno: number;
  numeroDos: number;
  operadorIndex: number;
  operador: string;
  resultadoEsperado: number;
  gano: boolean;


  constructor() {
    this.operadores = ['+', '-', '*'];
    this.numeroUno = this.getnumberRnd(9);
    this.numeroDos = this.getnumberRnd(9);
    this.operadorIndex = this.getnumberRnd(2);
    this.operador = this.operadores[this.operadorIndex];
    this.resultadoEsperado = this.getResultadoEsperado();
    this.gano = false;
    console.log(this);
  }


  getnumberRnd(max: number): number {
    return Math.floor(Math.random() * max) + 0;
  }

  getResultadoEsperado(): number {
    let resultadoOP = 0;
    switch (this.operadorIndex) {
      case 0:
        resultadoOP = this.numeroUno + this.numeroDos;
        break;
      case 1:
        resultadoOP = this.numeroUno - this.numeroDos;
        break;
      case 3:
        resultadoOP = this.numeroUno * this.numeroDos;
        break;
      default:
        resultadoOP = 0;
    }
    return resultadoOP;
  }

  getSiGano(respuestaJugador: number): boolean {
    return this.resultadoEsperado === respuestaJugador;
  }
}
