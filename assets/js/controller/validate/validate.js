function camposObrigatorios()
{
    if(document.getElementById("inputEmail").value === "")
    {
        document.getElementById("inputEmail").focus();
        mostrarErro("Email Obrigatório");
        return false;
    }

    if(document.getElementById("inputPassword").value === "")
    {
        document.getElementById("inputPassword").focus();
        mostrarErro("Senha Obrigatória");
        return false;
    }

    return true;
}

function camposObrigatoriosCadastro() {

    if (document.getElementById('nomeCadastro').value === '') {
        document.getElementById('nomeCadastro').focus();
        mostrarErroCadastro("nome obrigatório");
        return false;
    }

    if (document.getElementById('emailCadastro').value === '') {
        document.getElementById('emailCadastro').focus();
        mostrarErroCadastro("email obrigatório");
        return false;
    }

    if (document.getElementById('senhaCadastro').value === '') {
        document.getElementById('senhaCadastro').focus();
        mostrarErroCadastro("senha obrigatório");
        return false;
    }

    return true;
}

function verificaUsuarioExistente() {
    let userList = getCache('users')['data'];

    let verificaUsuario = userList.filter(
        item => item.email === document.getElementById('emailCadastro').value
    );

    return verificaUsuario.length !== 0;
}