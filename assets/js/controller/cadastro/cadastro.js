function userRegisterFocus() {
    setTimeout(() => {
        document.getElementById('nomeCadastro').focus();
    }, 700);
}

function cadastraUsuario() {

    if (camposObrigatoriosCadastro()) {
        return;
    }

    if (verificaUsuarioExistente()) {
        return;
    }

    let userList = getCache('users')['data'];
    let proxIdUsuario = userList.length === 0 ? 1 : userList[userList.length - 1].id + 1;

    let cadastro = {
        id: proxIdUsuario,
        nome: document.getElementById('nomeCadastro').value,
        email: document.getElementById('emailCadastro').value,
        senha: document.getElementById('senhaCadastro').value
    };

    userList.push(cadastro);

    removeCache('users');
    setCache('users', userList);

    esconderTelaLogin();

}