const PI = 3.14;

export class Circulo {
  constructor(r) {
    this.raio = r;
  }

  perimetro() {
    return 2 * PI * this.raio;
  }

  area() {
    // return PI * this.raio ** 2;
    return PI * Math.pow(this.raio, 2);
  }
}
