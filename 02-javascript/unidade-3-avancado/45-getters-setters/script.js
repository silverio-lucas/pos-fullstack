// getters, setters

let funcionario = {
  nome: "Wanderson",
  sobrenome: "Silva",
  cargo: "Desenvolvedor",
  salario: 5000,
  nascimento: new Date("1990-01-01"),
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
  set nomeCompleto(nc) {
    [this.nome, this.sobrenome] = nc.split(" ");
  },
  set novoSalario(v) {
    if (v < this.salario) {
      throw new Error("O novo salário deve ser maior que o atual.");
    } else {
      this.salario = v;
    }
  },
  get idade() {
    let ano = new Date().getFullYear();
    return ano - this.nascimento.getFullYear();
  },
};

funcionario.nomeCompleto = "Maria Fernanda";

funcionario.novoSalario = 6000;
console.log(funcionario.idade);
