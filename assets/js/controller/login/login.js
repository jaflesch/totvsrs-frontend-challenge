function login()
{
    if(camposObrigatorios())
    {
        return;
    }

    let usersList = getCache('users')['data'];
    let userLogin = usersList.filter(user => user.email === document.getElementById("inputEmail")
        && user.senha === document.getElementById("inputPassword"));


    if (userLogin.length !== 0) {

        esconderTelaLogin();
        usuarioLogado(userLogin[0]);


    } else {
        mostrarErro('Usuário ou senha inválidos');
        esconderAlert();
    }


}

function esconderTelaLogin()
{
    document.getElementById("login-painel").style.display = 'none';
    document.getElementById("fecharModalCadastro").click();
    document.getElementById("todoApp").style.display ='block';
}

function onKeyPressLoginForm(e) {
    if (e.keyCode === 13) {
        e.preventDefault();

        if (camposObrigatorios()) {
            return;
        }
        login();
    }
}


function resetLogin() {
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPassword').value = '';
}

