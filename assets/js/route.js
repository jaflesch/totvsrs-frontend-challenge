'use strict';

/* 
    Recorrente a atribuir rotas
    - 'name': É o nome da nossa rota, vamos usá-lo para verificar se a rota é a ativa.
    - 'htmlName': É o nome do HTML a ser carregado com a rota.
    - 'defaultRoute': [true] rota padrão do To-Do List [login.html].
*/

//Função para tratamento de erros e contrutor
function Route(name, htmlName, defaultRoute) {
    try {
        if(!name || !htmlName) {
            throw "Erro: 'name' and 'htmlName' são param obrigatórios";
        }
        this.constructor(name, htmlName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

/* 
    Prototype de construção e 'IsActiveRoute' como função 
    fornecida por cada rota para verificar se é a ativa. 
    Ele recebe a localização real da janela.
*/

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    defaultRoute: undefined,
    constructor: function (name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}