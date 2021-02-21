# TodoApp

[![TOTVS RS](https://i.imgur.com/PXpCoIl.png)](https://br.linkedin.com/company/totvsrs)
> TOTVS - A maior empresa de tecnologia do Brasil

## 📋 Sobre


Projeto desenvolvido para candidatura à vaga de Desenvolvedor Front-end na TOTVSRS.

Para servir os arquivos HTML e CSS foi optado por utilizar um pequeno servidor Express, responsável somente por servir os arquivos estáticos.

Como não é permitido o reload de página, foi utilizada uma estratégia de carregar os arquivos HTML de cada view utilizando uma requisição AJAX, a marcação HTML é então inserida no container no arquivo index.html.

Para o gerenciamento de operações relacionadas ao armazenamento dos todos e autenticação e criação de usuário foi criar uma classe **Store**, que possui diversos métodos pertinentes a lógica de negócio da aplicação.

Para manipulação de elementos da interface foi criada uma classe chamada **UI**, responsável também pelo carregamento de marcações HTML, recarregamento de Todos em tela, entre outros.

A classe **EventSetter** é responsável pelos event listeners na DOM.

Não foi utilizado nenhum pré processador CSS ou demais bibliotecas Javascript (além do Express), utilizando 100% VanillaJS.



---

## 🧰 Tecnologias utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Express](https://expressjs.com/)
- [NodeJS (v12.20.2)](https://nodejs.org/)

---

## 📁 Como rodar o projeto

```bash
  # Clonar a branch do repositório git
  $ git clone --branch guilherme_doval https://github.com/Dovalization/totvsrs-frontend-challenge.git

  # Entrar na pasta do projeto
  $ cd totvsrs-frontend-challenge

  # Instalar dependências
  $ npm install

  # Iniciar servidor local
  $ npm start

```
