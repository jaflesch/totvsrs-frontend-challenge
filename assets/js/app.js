let lsUsersList = [
    {
        id: 1,
        nome: 'user1',
        email: 'user1',
        senha: 'user1'
    }
];

let lsDataTodoList = [
    {
        id: 1,
        userId: 1,
        titulo: 'teste1',
        descricao: 'teste1 desc',
        data: Date(),
        status: 0
    }
];

function onInitAplication() {
    document.getElementById('userEmail').focus();
    setItemCache('lsUsersList', lsUsersList);
    setItemCache('lsDataTodoList', lsDataTodoList);
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