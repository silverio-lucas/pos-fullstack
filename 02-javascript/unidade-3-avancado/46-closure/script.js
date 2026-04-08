// function criarContador() {
//   let n = 0;
//   return function () {
//     console.log(n++);
//   };
// }

// let contador1 = criarContador();
// contador1(); // 0
// contador1(); // 1
// contador1(); // 2

// Outro exemplo de closure:

function digaOla(idioma) {
  return function (nome) {
    switch (idioma) {
      case "es":
        console.log(`Hola, ${nome}`);
        break;
      case "en":
        console.log(`Hello, ${nome}`);
        break;
      case "fr":
        console.log(`Bonjour, ${nome}`);
        break;
      default:
        console.log(`Oi, ${nome}`);
    }
  };
}

let ola = digaOla("fr");
ola("João"); // Hello, João
ola("Maria"); // Hello, Maria

// Um contador mais sofisticado usando closure:

function criarContador() {
  let n = 0;
  function altera(v) {
    n += v;
  }
  return {
    incrementa: function () {
      altera(1);
    },
    decrementa: function () {
      altera(-1);
    },
    valor: function () {
      return n;
    },
  };
}

let contador1 = criarContador();
let contador2 = criarContador();
contador1.incrementa();
console.log(contador1.valor()); // 1
contador1.incrementa();
console.log(contador1.valor()); // 2
contador2.incrementa();
console.log(contador2.valor()); // 1

contador1.incrementa();
contador1.incrementa();

console.log(contador1.valor()); // 3

// Cuidado!

function criarFuncoes() {
  let funces = [];
  let i = 0;
  while (i < 3) {
    funces.push(function () {
      console.log(i);
    });
    i++;
  }
  return funces;
}

let fn = criarFuncoes();
fn[0](); // 0
fn[1](); // 1;
fn[2](); // 2
