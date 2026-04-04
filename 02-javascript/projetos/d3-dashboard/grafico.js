// Escala
let fnTemp = d3.scaleLinear().domain([-20, 50]).range([0, 200]);

console.log(fnTemp(20)); // 114.28571428571428
console.log(fnTemp(30)); // 142.85714285714286

// Mínimos e Máximos
let dados = [156, 273, 120, 115, 44, 260, 133];
let minimo = d3.min(dados);
let maximo = d3.max(dados);
let faixa = d3.extent(dados);

let fnX_exemplo = d3
  .scaleLinear()
  .domain([0, d3.max(dados)])
  .range([0, 600]);

// Barras ajustadas
let svg = d3.select("#grafico");
let largura = parseInt(svg.style("width"));
let altura = parseInt(svg.style("height"));
let fnX = d3
  .scaleLinear()
  .domain([0, d3.max(dados)])
  .range([0, largura]);
let fnY = d3.scaleLinear().domain([0, dados.length]).range([0, altura]);
svg
  .selectAll(".barra")
  .data(dados)
  .enter()
  .append("rect")
  .classed("barra", true)
  .attr("x", 0)
  .attr("y", (d, i) => fnY(i))
  .attr("width", (d) => fnX(d))
  .attr("height", fnY(1) * 0.9);

//   Rótulos
svg
  .selectAll(".rotulo")
  .data(dados)
  .enter()
  .append("text")
  .classed("rotulo", true)
  .text((d) => d)
  .attr("x", (d) => fnX(d))
  .attr("dx", -5)
  .attr("y", (d, i) => fnY(i))
  .attr("dy", (d) => (fnY(1) * 0.9 * 2) / 3);

function grafico(parametros) {
  let svgGrafico = d3
    .select(parametros.seletor)
    .attr("width", parametros.largura)
    .attr("height", parametros.altura);

  let larguraPlotagem = parametros.largura - 40;
  let alturaPlotagem = parametros.altura - 40;
  let plotagem = svgGrafico
    .append("g")
    .attr("width", larguraPlotagem)
    .attr("height", alturaPlotagem)
    .attr("transform", "translate(20,20)");

  let fnX_func = d3
    .scaleLinear()
    .domain([0, d3.max(parametros.dados)])
    .range([0, larguraPlotagem]);
  let fnY_func = d3
    .scaleLinear()
    .domain([0, parametros.dados.length])
    .range([0, alturaPlotagem]);
}
