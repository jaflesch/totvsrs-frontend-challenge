function login()
{
    if(camposObrigatorios())
    {
        let usersList = getCache('users')['data'];


        if (filterUserLogin.length !== 0) {

            esconderTelaLogin();


        } else {
            mostrarErro('Usuário ou senha inválidos');
            esconderAlert();
        }

    }



}

function esconderTelaLogin()
{
    document.getElementById("login-painel").style.display = 'none';
    document.getElementById("fecharModalCadastro").click();
    document.getElementById("todoApp").style.display ='block';
}


function onKeyPressLoginForm(event) {
    if (event.keyCode === 13) {
        event.preventDefault();

        if (camposObrigatorios(event)) {
            return;
        }

        login();
    }
}


function resetLogin() {
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPassword').value = '';
}

