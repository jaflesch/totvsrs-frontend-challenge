const mudarView = (e) => {

    const appElement = document.querySelector('#appContainer');
    let view = e.target.dataset.view

    switch(view){
        case "ViewLogin":
            case "ViewLogin":  
                appElement.innerHTML = ViewLogin();
                controllerLogin.bindListeners();
                break;
            case "ViewRegistrar":
                appElement.innerHTML = viewRegistrar();
                controllerRegistrar.bindListeners();
                break;
            case "ViewPrincipal":
                appElement.innerHTML = ViewPrincipal();
                controllerInicial.bindListeners();
                break;
            case "ViewTodo":
                appElement.innerHTML = ViewTodo();
                break;
        default:
            break;
    }
}

//Carrega a tela de TODOS na DOM
const renderTodos = () => {
    let appElement = document.querySelector('#appContainer');
    appElement.innerHTML = ViewTodo();
}

//Renderiza o botão sair no Header caso o usuário consiga logar
const renderBotaoSair = () => {
    let btnLogout = document.querySelector('.btn-logout');

    if(!btnLogout){
        let headerContainer = document.querySelector('.headerContainer');
        let   botao = BotaoSair();
        headerContainer.innerHTML += botao;
    }

    //Redefine para achar na DOM após atualizada
    btnLogout = document.querySelector('.btn-logout');

    btnLogout.addEventListener('click', (e) =>{
        e.preventDefault();
        userModel.logout();
        mudarView(e);
        removeBotaoSair();
    });
}

//Remove o botão sair do Header
const removeBotaoSair = () => {
    let btnLogout = document.querySelector('.btn-logout');

    if(btnLogout){
        btnLogout.remove();   
    }
}