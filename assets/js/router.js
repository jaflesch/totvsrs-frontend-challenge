'use strict';


//Função criada para receber as rotas do app e tratamento de erros

function Router(routes) {
    try {
        if (!routes) {
            throw "Erro: 'routes' param é obrigatória";
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

/* 
    Prototype de construção, onde 'routes' recebe array 
    das rotas. 'rootElem' local onde outro HTML é renderizado[id="app"].
    
    'init' criação um ouvinte para o hashchangeevent de janela. 

    'hasChanged' se a localização da janela mudar, 
    irá carregar o ativo correto Route chamar outra função para carregar o HTML.
    Se a localização da janela estiver vazia, ele irá carregar o padrão Route. 
    Recebe dois parâmetros, instância e rotas.

    'goToRoute' responsável de obter e carregar o HTML correto para a rota ativa. 
    Recebe o nome HTML que deve carregar executando uma solicitação para tê-lo.
*/
Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function (htmlName) {
        (function(scope) { 
            var url = 'assets/views/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};