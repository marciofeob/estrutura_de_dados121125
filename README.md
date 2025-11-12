#  Estrutura de Dados Lineares — Listas Circulares

Este é um projeto acadêmico desenvolvido para a disciplina de Estrutura de Dados do **Centro Universitário Unifeob**, em São João da Boa Vista.

---

## 📚 Sobre o Projeto

O objetivo deste repositório é demonstrar a implementação prática de duas estruturas de dados lineares em formato circular, utilizando **TypeScript**.

As estruturas implementadas são:

* **`ListaCircularSimples`**: Uma lista encadeada simples onde o último nó (`tail`) aponta de volta para o primeiro (`head`).
* **`ListaCircularDupla`**: Uma lista duplamente encadeada onde o último nó (`tail`) aponta para o primeiro (`head`) e o primeiro (`head`) aponta de volta para o último (`tail`).

O projeto inclui as classes dos Nós (`NodeSimples` e `NodeDuplo`), as classes das Listas e suas respectivas interfaces (`ContratoListaSimples` e `ContratoListaDupla`).

## 💻 Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **tsx:** Um executor de TypeScript para rodar o projeto em tempo real.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para baixar e executar os testes do projeto.

### 1. Clonar o Repositório

```bash
# Clone este repositório
git clone [URL_DO_SEU_REPOSITORIO_AQUI]

# Acesse a pasta do projeto
cd [NOME_DA_PASTA_DO_PROJETO]
```

### 2. Instalar as Dependências

Com o Node.js instalado, execute o comando abaixo no terminal para instalar o `typescript` e o `tsx`:

```bash
npm install
```

### 3. Executar os Testes

Para rodar o projeto em modo de desenvolvimento e ver o resultado dos 5 exemplos de teste (definidos em `src/index.ts`), execute:

```bash
npm run dev
```

### (Opcional) Compilar para Produção

Você também pode compilar o código TypeScript para JavaScript e executá-lo:

```bash
# 1. Compilar o código (gera a pasta /dist)
npm run build

# 2. Executar o código compilado
npm start
```

---

## 📁 Estrutura de Arquivos

A lógica principal do projeto está contida na pasta `src/`:

```
src/
├── list/
│   ├── ContratoListaDupla.ts   (Interface da lista dupla)
│   ├── ContratoListaSimples.ts (Interface da lista simples)
│   ├── ListaCircularDupla.ts   (Classe da lista dupla)
│   ├── ListaCircularSimples.ts (Classe da lista simples)
│   ├── NodeDuplo.ts            (Classe do nó duplo)
│   └── NodeSimples.ts          (Classe do nó simples)
│
└── index.ts                    (Arquivo principal com 5 exemplos de teste)
```
