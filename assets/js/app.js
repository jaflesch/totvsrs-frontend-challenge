let lsUsersList = [
    {
        id: 1,
        nome: 'xav',
        email: 'xav',
        senha: 'xav'
    }
];

let lsDataTodoList = [
    {
        id: 1,
        userId: 1,
        titulo: 'Teste',
        descricao: 'Teste todo-list javascript',
        data: '2020-11-14T04:40',
        status: 1
    }
];

function onInitAplication() {
    document.getElementById('userEmail').focus();
    setItemCache('lsUsersList', lsUsersList);
    setItemCache('lsDataTodoList', lsDataTodoList);
    hideTodoListTemplate();
}

function showTodoListTemplate() {
    document.getElementById('painel-todo-list').style.display = 'block';
}

function hideTodoListTemplate() {
    document.getElementById('painel-todo-list').style.display = 'none';
}

function showLoginTemplate() {
    document.getElementById('painel-login').style.display = 'block';
}

function hideLoginTemplate() {
    document.getElementById('painel-login').style.display = 'none';
    document.getElementById('closeModalRegister').click();
}