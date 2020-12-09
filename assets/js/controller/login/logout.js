function logout()
{
    document.getElementById("todoApp").style.display = 'none';
    document.getElementById("login-painel").style.display = 'block';
    resetLogin();
    limparModalCadastro();
    // removeCache("users");
}

function limparModalCadastro()
{
    document.getElementById("nomeCadastro").value = '';
    document.getElementById("emailCadastro").value = '';
    document.getElementById("senhaCadastro").value = '';
}