function userRegisterFocus() {
    setTimeout(() => {
        document.getElementById('nomeCadastro').focus();
    }, 700);
}

function cadastraUsuario() {

    if (!camposObrigatoriosCadastro()) {
        return false;
    }

    if (!verificaUsuarioExistente()) {
        document.getElementById('emailCadastro').focus();
        return false;
    }

    let userList = getCache('users')['data'];
    let proxIdUsuario = userList.length === 0 ? 1 : userList[userList.length - 1].id + 1;

    let obj = {
        id: proxIdUsuario,
        nome: document.getElementById('nomeCadastro').value,
        email: document.getElementById('emailCadastro').value,
        senha: document.getElementById('senhaCadastro').value
    };

    userList.push(obj);

    removeCache('users');
    setCache('users', userList);

    document.getElementById('desc-name-user').innerHTML = 'Nome: ' + document.getElementById('nomeCadastro').value;
    document.getElementById('desc-email-user').innerHTML = 'Email: ' + document.getElementById('emailCadastro').value;
    document.getElementById('desc-id-user').innerHTML = 'Id: ' + proxIdUsuario;

    showTodoListTemplate();
    hideLoginTemplate();
    resetTodoList();
    renderInfoUser(obj);
    renderTodoListItensByUserId(obj.id);
}