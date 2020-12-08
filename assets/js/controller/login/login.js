function login()
{
    if(camposObrigatorios())
    {
        let usersList = getCache('users')['data'];

        let filterUserLogin = usersList.filter(
            item => item.email === document.getElementById('inputEmail').value && item.senha === document.getElementById('inputPassword').value
        );

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

