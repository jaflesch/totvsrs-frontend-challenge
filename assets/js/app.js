//console.log("TOTVS RS")

//$(document).ready(function () {

$(".btn").on('click', function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    chamaPagina(url);
});

// chama página
function chamaPagina(url) {
    $.ajax(
        {
            type: 'get',
            url: url,
            dataType: 'text',
            success: function (url) {
                $(".conteudo").html(url);
            }
        });
}

// modal
function modal() {
    $(".modal").modal({ show: true });
    $(".modal-title").empty().append('<i class="fa fa-user fa-fw" aria-hidden="true" title="Dados Pessoais"></i>&nbsp;Dados Pessoais');
    $(".modal-body").empty().append('<iframe src="../../../dashboard/dados-pessoais.php" scrolling="yes"></iframe>');
}