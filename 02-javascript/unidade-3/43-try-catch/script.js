output.innerHTML = "";

let a;
let x = -10;
try {
  if (x < 0) throw new TypeError("Valor não pode ser negativo");
  output.innerHTML = `<p>A = ${a}</p>`;
  a = x;
} catch (erro) {
  output.innerHTML = `<p>${erro.message}`;
  console.log(erro.name);
  console.log(erro.message);
  console.log(erro.stack);
} finally {
  console.log("Fim");
}
