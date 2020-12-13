'use strict';

// Função de inicialização das rotas
(function () {
    function init() {
        const router = new Router([
            new Route('login', 'login.html', true),
            new Route('register', 'register.html'),
        ]);
    }
    init();
}());