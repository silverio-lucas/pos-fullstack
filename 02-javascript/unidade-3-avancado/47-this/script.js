// console.log(this); // No contexto global, o valor de "this" é o objeto global (window no navegador)

// let a = 1;
// const b = 2;
// var c = 3;
// this.d = 4; // Adicionando uma propriedade "d" ao objeto global

// console.log(this); // Acessando a propriedade "d" do objeto global

// fn(); // Chamada direta, "this" será o objeto global (window no navegador)

// function fn() {
//   console.log(this); // Dentro de uma função, o valor de "this" depende de como a função é chamada
// }

// fn(); // Chamada direta, "this" será o objeto global (window no navegador)

// let pessoa = {
//   nome: "João",
//   fn: function () {
//     console.log(this); // Dentro de um método, "this" se refere ao objeto que chamou o método (pessoa)
//   },
// };

// pessoa.fn(); // Chamada de método, "this" será o objeto "pessoa"

// let pessoa = {
//   nome: "João",
//   fn: () => console.log(this), // Arrow function, "this" é léxico e se refere ao contexto onde a função foi definida (objeto global)
// };

// fn(); // Chamada direta, "this" será o objeto global (window no navegador)

// function Pessoa(nome) {
//   this.nome = nome; // "this" se refere ao objeto que está sendo criado
//   this.fn = function () {
//     console.log(this); // Dentro de um método, "this" se refere ao objeto que chamou o método (pessoa)
//   };
// }

// let p = new Pessoa("Marcos"); // Criando outro objeto a partir da função Pessoa
// p.fn(); // Chamada de método, "this" será o objeto "p" (Marcos)

class Pessoa {
  constructor(n) {
    this.nome = n; // "this" se refere ao objeto que está sendo criado
  }
  fn() {
    let self = this; // Armazenando o valor de "this" em uma variável "self"
    let f = function () {
      console.log(self); // Acessando "self" dentro da função, que se refere ao valor de "this" do contexto externo
    };
    f(); // Chamada da função interna, "this" dentro de "f" não se refere ao objeto externo, mas "self" sim
  }
}

let p = new Pessoa("Marcos"); // Criando outro objeto a partir da classe Pessoa
p.fn(); // Chamada de método
