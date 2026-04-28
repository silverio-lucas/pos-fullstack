import { v4 } from "uuid";

output.innerHTML = `
    <p>Seu ID é: ${v4()}.</p>
`;

// mock da tradução
const translate = async (text) => {
  const mockDictionary = {
    olá: "hello",
    "bom dia": "good morning",
    "como vai": "how are you",
    tchau: "goodbye",
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockDictionary[text.toLowerCase()] || `[tradução simulada]: ${text}`,
      );
    }, 500); // simula tempo de API
  });
};

output2.innerHTML = `
    <p>
        <input type="text" id="original" />
        <button id="traduzir">Traduzir</button>
    </p>
    <p id="traduzida"></p>
`;

traduzir.onclick = async () => {
  const t = await translate(original.value);
  traduzida.innerText = t;
};
