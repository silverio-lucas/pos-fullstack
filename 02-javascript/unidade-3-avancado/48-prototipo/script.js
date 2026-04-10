// let forma = {
//   x: 10,
//   y: 25,
// };

// let retangulo = Object.create(forma);

// retangulo.largura = 100;
// retangulo.altura = 50;

// forma.cor = "vermelho";

// console.log(forma);
// console.log(retangulo);
// console.log(retangulo.x.cor);

function Forma(x, y) {
  this.x = x;
  this.y = y;
}

let f1 = new Forma(10, 15);

function Retangulo(x, y, l, a) {
  Forma.call(this, x, y);
  this.largura = l;
  this.altura = a;
}

let r1 = new Retangulo(10, 15, 100, 50);
console.log(r1);

// let f1 = new Forma(10, 15);
// console.log(f1);

// let f2 = {
//   x: 10,
//   y: 15,
// };

// console.log(f2);

Forma.prototype.mover = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

// Forma.prototype.cor = "vermelho";

f1.move(15, 15);
// r1.move(15, 15);
console.log(r1);
