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
                controllerTodo.bindListeners();
                controllerTodo.updateTodoDOM();
                break;
        default:
            break;
    }
}

//Carrega a tela de TODOS na DOM
const renderTodos = () => {
    let appElement = document.querySelector('#appContainer');
    appElement.innerHTML = ViewTodo();
    controllerTodo.updateTodoDOM();
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

//Seta o conteúdo do modal
const setModalContent = (conteudo) =>{
    let modalEl = document.querySelector('.modal');
    if(modalEl){
        modalEl.innerHTML = conteudo;
    }
}

//Exibe a modal passando o conteudo com parâmetro
const openModal = () => {
    let modalEl = document.querySelector('.modal');
    let bodyEl  = document.querySelector('body');

    if(!modalEl.style.opacity || !modalEl.style.opacity == 0){
        bodyEl.style.overflow = "hidden";
        modalEl.style.opacity = 1;
        modalEl.style.visibility = "visible";
    }
}

//Fecha o modal
const closeModal = () => {
    let modalEl = document.querySelector('.modal');
    let bodyEl  = document.querySelector('body');

    if(modalEl.style.opacity == 1){
        bodyEl.style.overflow = "scroll";
        modalEl.style.opacity = 0;
        modalEl.style.visibility = "hidden";
    }
}