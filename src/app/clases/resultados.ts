export class Resultados {
  idUser: string;
  juego: string;
  playedAt: string;
  score: number;
  resultado: string;


  constructor(idUser: string, juego: string, score: number, resultado: string) {
    this.idUser = idUser;
    this.juego = juego;
    let date = new Date();
    this.playedAt = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    this.score = score;
    this.resultado = resultado;
  }
}
