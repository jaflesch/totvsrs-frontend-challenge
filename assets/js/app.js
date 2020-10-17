// Definições no carregamento da janela
$(window).load(function () {
    buscaPagina('autenticacao.html');

    // Reseta campos
    reseta();

    // Bloqueia retorno de submit dos forms
    $("form").submit(function () {
        return false;
    });

    return;
});

// Ativa troca de página
$('.buscaPagina').on('click', function (e) {
    e.preventDefault();
    link = $(this).attr('href');
    buscaPagina(link);
});

// Busca página
function buscaPagina(link) {
    $.ajax(
        {
            type: 'get',
            url: link,
            dataType: 'html',
            success: function (data) {
                $.getScript("assets/js/app.js");
                $.getScript("assets/js/autenticacao.js");
                $.getScript("assets/js/validador.js");
                $(".conteudo").html(data);
            }
        });
}

// Reseta campos
function reseta() {
    $("#inputNome").val('');
    $("#inputEmail").val('');
    $("#inputSenha").val('');
    $("#inputSenhaConfirma").val('');
}

// Exibe modal
function modal() {
    $(".modal").modal({ show: true });
    //$(".modal-title").empty().append('<i class="fa fa-user fa-fw" aria-hidden="true" title="Dados Pessoais"></i>&nbsp;Dados Pessoais');
    //$(".modal-body").empty().append('<iframe src="../../../dashboard/dados-pessoais.php" scrolling="yes"></iframe>');
}