class ControllerInicial {

    constructor() {
        this.appElement = document.querySelector('#appContainer');
        this.bindListeners();
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
}   
  
const controllerInicial = new ControllerInicial();


        