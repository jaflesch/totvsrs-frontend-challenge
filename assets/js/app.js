'use strict';

// Função de inicialização das rotas
(function () {
    function init() {
        var router = new Router([
            new Route('login', 'login.html', true)
        ]);
    }
    init();
}());