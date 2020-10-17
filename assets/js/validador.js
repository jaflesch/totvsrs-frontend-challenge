// Valida e-mail
$("input[type='email']").on('change', function () {
    email = $(this).val();

    if (email != "") {
        filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (filtro.test(email)) {
        }
        else {
            mensagem(5);
        }
    }
});

// Confirma senha
$('#inputSenhaConfirma').on('change', function () {
    if ($("#inputSenhaConfirma").val() != $("#inputSenha").val()) {
        mensagem(6);
    }
});