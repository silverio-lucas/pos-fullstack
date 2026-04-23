function carga(n) {
  fetch("https://jsonplaceholder.typicode.com/users/" + n)
    .then((resp) => resp.json())
    .then((obj) => carregaImagem(obj.name.email))
    .catch((erro) => console.log(erro));
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
