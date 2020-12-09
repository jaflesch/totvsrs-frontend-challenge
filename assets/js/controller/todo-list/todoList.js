let userData = {};



function usuarioLogado(userLogin)
{
    userData = userLogin;

    document.getElementById('descricao-nome').innerHTML = userData.nome;
    document.getElementById('descricao-email').innerHTML =  userData.email;
    document.getElementById('descricao-id-usuario').innerHTML =  userData.id;
}
