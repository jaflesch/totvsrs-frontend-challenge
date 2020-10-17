// Exibe mensagem para o usuário
function mensagem(status) {
    switch (status) {
        case 1: // preencha todos os campos do formulário
            Swal.fire(
                {
                    icon: 'warning',
                    title: "Preencha todos os campos",
                    text: "Tente novamente",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            break;
        case 2: // login inválido
            Swal.fire(
                {
                    icon: 'error',
                    title: "Login e/ou senha inválidos",
                    text: "Tente novamente",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            break;
        case 3: // email já existente
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
        case 4: // cadastro efetuado
            Swal.fire(
                {
                    icon: 'success',
                    title: "Seu cadastro foi efetuado com sucesso",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                });
            break;
        case 5: // email inválido
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
        case 6: // senhas não coincidem
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
        case 7: // nova tarefa adicionada
            Swal.fire(
                {
                    icon: 'success',
                    title: "A nova tarefa foi adicionada com sucesso",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                })
                .then(
                    function (isConfirm) {
                        if (isConfirm) {
                            parent.$(".modal").hide();
                            window.location.reload();
                        }
                    });
            break;
        case 8: // tarefa alterada
            Swal.fire(
                {
                    icon: 'success',
                    title: "A tarefa foi alterada com sucesso",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                })
                .then(
                    function (isConfirm) {
                        if (isConfirm) {
                            parent.$(".modal").hide();
                            window.location.reload();
                        }
                    });
            break;
        case 9: // tarefa excluída
            Swal.fire(
                {
                    icon: 'success',
                    title: "A tarefa foi excluída com sucesso",
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                })
                .then(
                    function (isConfirm) {
                        if (isConfirm) {
                            parent.$(".modal").hide();
                            window.location.reload();
                        }
                    });
            break;
    }
}