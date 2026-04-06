// let obj1 = { nome: "João", idade: 30 };
// let clone1 = { ...obj1 };

// obj1.nome = "Maria";
// console.log(clone1.nome);
// console.log(obj1.nome);

// let mat = { matricula: "12345", curso: "Web" };
// let aluno = { ...obj1, ...mat };
// console.log(aluno);

// let funcionario = { ...obj1, salario: 5000 };
// console.log(funcionario);

// function soma() {
//   let valores = [...arguments];
//   return valores.reduce(function (total, i) {
//     return total + i;
//   });
// }

// console.log(soma(1, 2, 3, 4, 5));

// let nomeCompleto = "José Couves";
// console.log(nomeCompleto);

// let pessoa = {};
// [pessoa.prenome, pessoa.sobrenome] = nomeCompleto.split(" ");
// console.log(pessoa);

// let pessoa = {
//   nome: "João",
//   idade: 30,
// };

// for (let [chave, valor] of Object.entries(pessoa))
//   console.log(`${chave}: ${valor}`);

// let numeros = [1, 2, 3, 4, 5];
// let [primeiro, segundo, ...resto] = numeros;
// console.log(primeiro);
// console.log(segundo);
// console.log(resto);

let pessoa = {
  nome: "João",
  idade: 30,
  salario: 5000,
};

function ola({ nome }) {
  console.log(`Olá, ${nome}!`);
}
ola(pessoa);

let { nome, idade, salario } = pessoa;
console.log(nome);
console.log(idade);
console.log(salario);
