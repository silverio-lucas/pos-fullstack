# Banco de Dados (Relacionais e Não Relacionais)

Implementação prática dos conceitos da disciplina, organizada por unidade e tópicos.

---

## Estrutura

````bash
03-database/
├── unidade-01-relacional/
│   ├── 01-introducao/
│   │   ├── 1.1-introducao/
│   │   └── 1.2-modelo-dados/
│   │
│   ├── 02-modelo-relacional/
│   │   ├── 2.1-modelo-relacional/
│   │   ├── 2.2-restricoes/
│   │   ├── 2.3-operacoes/
│   │   ├── 2.4-modelagem-er/
│   │   └── 2.5-normalizacao/
│   │
│   ├── 03-sql/
│   │   ├── 3.1-apex/
│   │   ├── 3.2-intro-sql/
│   │   ├── 3.3-create/
│   │   ├── 3.4-alter-drop/
│   │   ├── 3.5-dml/
│   │   ├── 3.6-select/
│   │   ├── 3.7-expressoes/
│   │   ├── 3.8-where/
│   │   ├── 3.9-operadores/
│   │   ├── 3.10-agregacoes/
│   │   ├── 3.11-group-by/
│   │   ├── 3.12-subqueries/
│   │   ├── 3.13-joins/
│   │   └── 3.14-final/
│   │
│   ├── material/
│   ├── exercicios/
│   └── extra/
│
├── unidade-02-nosql/
├── unidade-03-documentos/
└── unidade-04-grafos/# Banco de Dados (Relacionais e Não Relacionais)Implementação prática dos conceitos da disciplina, organizada por unidade e tópicos.---## Estrutura```bash03-database/├── unidade-01-relacional/│   ├── 01-introducao/│   │   ├── 1.1-introducao/│   │   └── 1.2-modelo-dados/│   ││   ├── 02-modelo-relacional/│   │   ├── 2.1-modelo-relacional/│   │   ├── 2.2-restricoes/│   │   ├── 2.3-operacoes/│   │   ├── 2.4-modelagem-er/│   │   └── 2.5-normalizacao/│   ││   ├── 03-sql/│   │   ├── 3.1-apex/│   │   ├── 3.2-intro-sql/│   │   ├── 3.3-create/│   │   ├── 3.4-alter-drop/│   │   ├── 3.5-dml/│   │   ├── 3.6-select/│   │   ├── 3.7-expressoes/│   │   ├── 3.8-where/│   │   ├── 3.9-operadores/│   │   ├── 3.10-agregacoes/│   │   ├── 3.11-group-by/│   │   ├── 3.12-subqueries/│   │   ├── 3.13-joins/│   │   └── 3.14-final/│   ││   ├── material/│   ├── exercicios/│   └── extra/│├── unidade-02-nosql/├── unidade-03-documentos/└── unidade-04-grafos/

Padrão de Organização


Cada tópico possui sua própria pasta


Cada pasta contém:


README.md → explicação teórica


código (SQL, scripts, exemplos)


assets (quando necessário)





Objetivo


Consolidar fundamentos de banco de dados


Praticar SQL e modelagem


Explorar NoSQL (Redis, MongoDB, grafos)


Criar base sólida para backend



Status


Unidade 01: 🔄 em andamento


Unidade 02: ⏳


Unidade 03: ⏳


Unidade 04: ⏳


---## Ajustes adicionais (você não fez ainda)1. Remover lixo do macOS:```bashecho .DS_Store >> .gitignoregit rm -r --cached .git add .git commit -m "chore: remove DS_Store"


Corrigir pasta antiga com espaço no nome:


rm -rf "03-database/ UNIDADE 1 - BANCO DE DADOS RELACIONAIS"

Resultado


README consistente com a estrutura


Navegação clara no GitHub


Repositório vira portfólio técnico real (não só dump de arquivos)


Se quiser, próximo passo: gerar template automático para cada README interno (estrutura padrão de estudo + exemplos SQL).
````
