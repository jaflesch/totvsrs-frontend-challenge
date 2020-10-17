$(document).ready(function () {

    // Recupera os dados armazenados
    tbUsuarios = localStorage.getItem("tbUsuarios");
    tbTarefas = localStorage.getItem("tbTarefas");

    // Converte string para objeto
    tbUsuarios = JSON.parse(tbUsuarios);
    tbTarefas = JSON.parse(tbTarefas);

    // Caso não haja conteúdo, iniciamos vetores vazios
    if (tbUsuarios == null)
        tbUsuarios = [];
    if (tbTarefas == null)
        tbTarefas = [];
});

// Aciona autenticação
$("#btnLogar").on('click', function (e) {
    e.preventDefault();

    // validar campos
    if (($("#inputEmail").val() != '') &&
        ($("#inputSenha").val() != '')) {

        // seta valores
        funcao = 'autenticar';
        email = $("#inputEmail").val();
        senha = $("#inputSenha").val();

        // verifica se usuário existe
        aux = buscaUsuario(email, senha, funcao);

        // busca página
        if (aux == '1') {
            link = $(this).attr('href');
            buscaPagina(link);
        }
        else {
            mensagem(2);
        }
    }
    else {
        mensagem(1);
    }
});

// Aciona cadastro
$("#btnCadastrar").on('click', function (e) {
    e.preventDefault();

    // validar campos
    if (($("#inputNome").val() != '') &&
        ($("#inputEmail").val() != '') &&
        ($("#inputSenha").val() != '') &&
        ($("#inputSenhaConfirma").val() !== '')) {

        // seta valores
        funcao = 'cadastrar';
        nome = $("#inputNome").val();
        email = $("#inputEmail").val();
        senha = $("#inputSenha").val();

        // verifica se usuário existe
        aux = buscaUsuario(email, senha, funcao);

        // adiciona usuário e busca página
        if (aux == '1') {
            mensagem(3);
        }
        else {
            adicionarUsuario();
            link = $(this).attr('href');
            buscaPagina(link);
        }
    }
    else {
        mensagem(1);
    }
});

// Adiciona usuário
function adicionarUsuario() {

    // seta valores
    nome = $("#inputNome").val();
    email = $("#inputEmail").val();
    senha = $("#inputSenha").val();
    senhaconfirma = $("#inputSenhaConfirma").val();

    // adiciona registro no local storage
    usuario = JSON.stringify({
        id: '100',
        nome: $("#inputNome").val(),
        email: $("#inputEmail").val(),
        senha: $("#inputSenha").val()
    });
    tbUsuarios.push(usuario);
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    mensagem(4);
    return true;
}

// Busca usuário
function buscaUsuario(email, senha, funcao) {
    aux = 0;
    for (var i = 0; i < tbUsuarios.length; i++) {
        usuario = JSON.parse(tbUsuarios[i]);

        if (funcao == 'autenticar') {
            if ((email == usuario.email) && (senha == usuario.senha)) {
                aux++;
            }
        }
        else {
            if (email == usuario.email) {
                aux++;
            }
        }
    }
    return aux;
}

// Exibe mensagem para o usuário
function mensagem(status) {
    switch (status) {
        case 1:
            Swal.fire(
                {
                    icon: 'warning',
                    title: "Preencha todos os campos",
                    text: "Tente novamente",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            break;
        case 2:
            Swal.fire(
                {
                    icon: 'error',
                    title: "Login e/ou senha inválidos",
                    text: "Tente novamente",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            break;
        case 3:
            Swal.fire(
                {
                    icon: 'error',
                    title: "E-mail já cadastrado",
                    text: "Tente novamente ou efetue login",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            $("#inputEmail").val('');
            break;
        case 4:
            Swal.fire(
                {
                    icon: 'success',
                    title: "Seu cadastro foi efetuado com sucesso",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            break;
        case 5:
            Swal.fire(
                {
                    icon: 'warning',
                    title: "Não é um e-mail válido",
                    text: "Tente novamente",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            $("#inputEmail").val('');
            break;
        case 6:
            Swal.fire(
                {
                    icon: 'warning',
                    title: "As senhas não combinam",
                    text: "Tente novamente",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            $("#inputSenhaConfirma").val('');
            $("#inputSenha").val('');
            break;
    }
}