class ControllerInicial {

    constructor() {

        this.appElement = document.querySelector('#appContainer');

        //Adiciona Event Listeners nos botões de navegação do APP
        this.bindListeners();
        this.verificaLogin();
    }
    
    bindListeners(){
        let botoes = document.querySelectorAll('.btn-navigate');
        botoes = [...botoes];

        botoes.map(botao => {
            botao.addEventListener('click', (e)=>{
                e.preventDefault();
                mudarView(e);
            });
        });
    }

    // Verifica se o usuário está logado e atualiza a DOM além de 
    verificaLogin() {

        //Retorna se tiver logado
        let logado = db.getLogado();
        
        if(logado){
            renderTodos();
            renderBotaoSair();
        }
    }
}   


        