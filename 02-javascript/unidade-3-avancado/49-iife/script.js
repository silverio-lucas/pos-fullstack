// +(function (nome) {
//   console.log(`Olá, ${nome}!`);
// })("Ana");

let $ = (function () {
  let contadores = [];

  function Contador(i) {
    if (contadores[i] === undefined) contadores[i] = 0;
    this.incrementa = function () {
      contadores[i]++;
    };
    this.decrementa = function () {
      contadores[i]--;
    };
    this.valor = function () {
      return contadores[i];
    };
  }

  return function (i) {
    return new Contador(i);
  };
})();

let c = $(3);
c.incrementa();
console.log(c.valor()); // 1
c.incrementa();
console.log(c.valor()); // 2
c.decrementa();
console.log(c.valor()); // 1
c.incrementa();
console.log(c.valor()); // 2

let c2 = $(0);
c2.incrementa();
console.log(c2.valor()); // 1
c2.incrementa();
console.log(c2.valor()); // 2
