// let numero = 5;
// let fn = fnMetade(numero);
// fn.then((resp) => console.log(`A metade de ${numero} é ${resp}`)).catch(
//   (erro) => console.log(erro.message),
// );

// async function fnMetade(n) {
//   if (n % 2 == 0) return n / 2;
//   else throw new Error(`O número ${n} não é par`);
// }

async function carga(n) {
  let resp1 = await fetch("https://jsonplaceholder.typicode.com/users/" + n);
  let obj = await resp1.json();
  carregaImagem(obj.name.email);
  let avatar = await resp2.blob();
}

function carregaImagem(name) {
  fetch("https://robohash.org/" + name)
    .then((resp) => resp.blob())
    .then((img) => {
      const imgElement = document.querySelector("#img");
      imgElement.src = URL.createObjectURL(img);
    })
    .catch((erro) => console.log(erro));
}

output.innerHTML = `
  <p>
  <input type="number" id="num" value="1">
  <button id="btn">Carregar</button>
  </p>
  <p>
    <img id="img">
  </p> 
`;

btn.onclick = () => carga(num.value);

carga(2);
