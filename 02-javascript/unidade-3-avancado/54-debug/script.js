output.innerHTML = `
    <p>
        <input type="text" id="nome"/>
        <button id="btn">Enviar</button>
    </p>
    <p id="resultado"></p>
`;

btn.onclick = () => {
  let hoje = new Date();
  let hora = hoje.getHours();
  let mensagem = "";

  if (hora < 12) mensagem += "Bom dia, ";
  else if (hora < 12) mensagem += "Boa tarde, ";
  else if (hora < 18) mensagem += "Boa tarde, ";
  else mensagem += "Boa noite, ";
  mensagem += getNome();

  resultado.innerHTML = mensagem;
};

function getNome() {
  return nome.value;
}
