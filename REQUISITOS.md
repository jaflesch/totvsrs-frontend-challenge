# Requisitos da aplicação To do List

## Instruções:

1. Abra o arquivo `workflow.png`
2. Este arquivo contém um diagrama em BPMN explicando o fluxo do sistema que será implementado por você
3. O projeto tem duas etapas principais: autenticação de usuário e execução da To do list propriamente
4. Sua aplicação deve trabalhar com a transição de duas telas na mesma página, seguindo conceitos de SPA
5. Nas seções abaixo é descrito o que se espera de cada etapa

## Autenticação:

* Você precisa apresentar um formulário que tenha obrigatoriamente os campos `email`e `senha`. 
* Os usuários criados no cadastro devem ficar salvos na sessão do navegador
* Quando um cadastro é realizado, o usuário automaticamente é autenticado no sistema
* Um usuário autenticado deve poder encerrar sua sessão a qualquer momento
* Todas as ações do To do List devem ser vinculadas ao usuário autenticado
* Quando um usuário se autentica, apenas suas informações devem ser carregadas e apresentadas na tela

## To do list:

* A tela inicial da To do List é uma tabela listando todas as atividades registradas para o usuário
* A tabela inicial é composta pelas colunas `[ID, TITULO, DATA, STATUS]`
* Ao no título de um item da tabela, um modal deve ser aberto
* O modal deve apresentar todas as informações do registro em campos de formulário passíveis de edição
* O modal deve possuir 3 botões no seu rodapé: **Cancelar**, **Salvar**, **Excluir**
* Ao clicar em Cancelar, o modal é simplesmente fechado
* Ao clicar em Salvar, as informações são atualizadas, mas o modal permanece aberto
* Ao clicar em Excluir, uma mensagem de confirmação deve aparecer. Se o usuário confirmar a exclusão, o modal é fechado e a linha, excluída
* O usuário pode fazer quantas operações de CRUD quiser enquanto estiver em sua sessão ativa
* Quando ele clicar em um botão para encerrar a sessão, a tabela deve ser limpa e a aplicação retorna à página de autenticação

## Estrutura de dados:
> user `<id, nome, email, senha>`
* id: *int* <PK>
* nome: *string*
* email: *string*
* senha: *string*

> todolist `<id, userId, titulo, descricao, data, status`
* id: *int* <PK>
* userId: *int* <FK - user>
* titulo: *string*
* descricao: *string*
* data: *datetime* (formato "HH:mm DD/MM/YYYY")
* status: *int* (0: backlog; 1: em andamento; 2: finalizado)