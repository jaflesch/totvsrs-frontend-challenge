function onInitAplication() {
    document.getElementById('userEmail').focus();
}


function showTodoListTemplate() {
    document.getElementById('painel-todo-list').style.display = 'block';
}

function hideLoginTemplate() {
    document.getElementById('painel-login').style.display = 'none';
    document.getElementById('closeModalRegister').click();
}