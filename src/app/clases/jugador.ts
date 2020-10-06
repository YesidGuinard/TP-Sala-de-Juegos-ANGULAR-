export class Jugador {
  id: number;
  name: string;
  mail: string;
  createdAt: string;
  score: number;

  constructor(name: string, mail: string, score: number) {
    this.id = Math.floor(Math.random() * 10000) + 1;
    this.name = name;
    this.mail = mail;
    this.createdAt = new Date().toLocaleDateString();
    this.score = score;
  }
}
