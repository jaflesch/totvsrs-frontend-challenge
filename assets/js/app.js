let lsUsersList = [
    {
        id: 1,
        nome: 'user1',
        email: 'user1',
        senha: 'user1'
    },
    {
        id: 2,
        nome: 'user2',
        email: 'user2',
        senha: 'user2'
    },
    {
        id: 3,
        nome: 'user3',
        email: 'user3',
        senha: 'user3'
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
    },
    {
        id: 4,
        userId: 1,
        titulo: 'teste4',
        descricao: 'teste4 desc',
        data: Date(),
        status: 0
    },
    {
        id: 5,
        userId: 1,
        titulo: 'teste5',
        descricao: 'teste5 desc',
        data: Date(),
        status: 0
    },
    {
        id: 2,
        userId: 2,
        titulo: 'teste2',
        descricao: 'teste2 desc',
        data: Date(),
        status: 1
    },
    {
        id: 3,
        userId: 3,
        titulo: 'teste3',
        descricao: 'teste3 desc',
        data: Date(),
        status: 2
    }
];

// let lsUsersList = [];
// let lsDataTodoList = [];

function onInitAplication() {
    document.getElementById('userEmail').focus();
    setItemCache('lsUsersList', lsUsersList);
    setItemCache('lsDataTodoList', lsDataTodoList);
}

function showTodoListTemplate() {
    document.getElementById('painel-todo-list').style.display = 'block';
}

function hideLoginTemplate() {
    document.getElementById('painel-login').style.display = 'none';
    document.getElementById('closeModalRegister').click();
}