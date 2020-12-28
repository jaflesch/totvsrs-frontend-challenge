# Teste para candidatos à vaga de desenvolvedor Front-end

[![TOTVS RS](https://i.imgur.com/PXpCoIl.png)](https://br.linkedin.com/company/totvsrs)
> TOTVS - A maior empresa de tecnologia do Brasil

## Workflow:
### Formulário de acesso:
1. O formulário de acesso (autenticação) possui 2 campos (email e senha)
2. Estes campos possuem validação que se detectadas não deixam avançar no fluxo do sistema
2.1. O campo de email possui validação de campo *obrigatório* (não pode ser vazio) e *email incorreto* (testado por expressão regular)
2.2. O campo de senha possui validação de campo *obrigatório* (não pode ser vazio)

## Instruções:

1. Faça um *fork* deste repositório;
2. Leia todo este arquivo `README.md` para entender o que será avaliado e a metodologia do teste
3. Leia o arquivo `REQUISITOS.md` para entender os requisitos funcionais deste teste
4. Elabore um layout para seu projeto;
5. Se você utilizar algum pré-processador como SASS ou LESS, use apenas o `css` minificado no site, mas deixe os arquivos fontes no seu repositório;
6. Para a interação dos componentes da página utilize jQuery ou Javascript nativo;
7. Após terminar seu teste submeta um *pull request* e aguarde o feedback de nosso time de desenvolvedores.

* **Importante:** O formulário de cadastro não deve fazer requisições para nenhuma url.
* **Importante:** A url da página não pode ser recarregada em momento algum.

### Você pode:

* Utilizar qualquer linguagem de preprocessador css ou css puro;
* Utilizar um task runner de sua preferência;
* Utilizar bibliotecas css como compass, bourbon, animatecss ou outras. Apenas, ao organizar o projeto, coloque todas as bibliotecas que não forem de sua autoria dentro de uma subpasta `vendor/`

### Esperamos que você:

* Crie um passo a passo de como rodar sua aplicação;
* Crie uma breve descrição da solução utilizada;
* Adote um design resposivo de acordo com os breakpoints definidos pelo design;
* Respeite a estrutura de pastas sugerida no repositório
* Faça commits consistentes de acordo com cada funcionalidade implementada;
* Faça commit também dos arquivos não minificados;
* Siga o fluxograma de execução proposta pelo diagrama do projeto
* Desenvolva um código legível, modularizado e que obedeça às boas práticas de programação
* Trabalhe com manipulação de elementos DOM da página para exibição de várias informações em uma SPA (*Single Page Application*)

* **Importante:** Usamos o mesmo teste para todos os níveis de front: **junior**, **pleno** ou **senior**, mas procuramos adequar nossa exigência na avaliação com cada um desses níveis sem, por exemplo, exigir excelência de quem está começando :-)

### Ganhe pontos extras por:

* Desenvolver HTML semântico;
* Utilizar boas práticas de SEO;
* Componentizar seu css;
* Design elegante, minimalista e com alta usabilidade
* Validações básicas de campos ao realizar eventos de submissão
* Sobrescrever o README do projeto de maneira estruturada e objetiva

### O que não gostaríamos:
* Descobrir que não foi você quem fez seu teste
* Ver *commits* grandes, sem muita explicação nas mensagens em seu repositório
* Encontrar um um commit com as dependências de NPM e do Bower

### Breakpoints:

| Nome do breakpoint | Largura mínima | Descrição                         |
|--------------------|----------------|-----------------------------------|
| phone              | 768px          | Breakpoint para smartphones       |
| tablet             | 991px          | Breakpoint para tablets           |
| desktop            | 1199px         | Breakpoint para desktops comuns   |

### Estrutura de pastas:
```
|- assets/
|---- css/
|---- fonts/
|---- images/
|---- js/ 
|---- scss/ (pasta para organizar assets de SASS ou LESS: não é obrigatório!)
|- index.html
```

## O que avaliaremos de seu teste
* Histórico de commits do git
* As instruções de como rodar o projeto
* Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código
* Alcance dos objetivos propostos
* Adaptação mobile (layout responsivo)
* Componentização e extensibilidade dos componentes Javascript


## Submissão

Para iniciar o teste, faça um *fork* deste repositório, crie uma **branch com o seu nome** e depois envie-nos o pull request.

Boa sorte!
