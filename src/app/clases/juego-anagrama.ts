export class JuegoAnagrama {
  static palabrasDic = [
    'TORO',
    'DIFICIL',
    'LUNA',
    'ROPA',
    'ROCA',
    'CASAS',
    'RANA',
    'PROGRAMACION',
    'TINA',
    'POZO',
    'LABORATORIO',
    'JUGO',
    'SOPA',
    'GATO'
  ];

  palabraDesOr: string;
  resultadoEsperado: string;
  gano: boolean;
  return;

  constructor() {
    this.resultadoEsperado = this.obternerPalabraDelDic();
    this.palabraDesOr = this.desordenarPalabra(this.resultadoEsperado);
    this.gano = false;
  }

  getnumberRnd(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  desordenarPalabra(palabra: string): string {

    let resultado = '';
    let zz: number;
    let azar: number;
    for (zz = palabra.length; zz >= 1; zz--) {
      azar = this.getnumberRnd(1, zz);
      resultado = resultado + palabra.substring(azar - 1, azar);
      palabra = palabra.substring(0, azar - 1) + palabra.substring(azar, zz);
    }

    return resultado;
  }


  obternerPalabraDelDic(): string {
    return JuegoAnagrama.palabrasDic[this.getnumberRnd(0, 12)];

  }

  getSiGano(respuestaJugador: string): boolean {
    if (respuestaJugador) {
      this.gano = true;
      return this.resultadoEsperado === respuestaJugador.toUpperCase();
    } else {
      return false;
    }
  }

}
