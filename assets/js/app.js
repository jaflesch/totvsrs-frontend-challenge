//console.log("TOTVS RS")

//$(document).ready(function () {

$(".btn").on('click', function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    chamaPagina(url);
});

//chama página
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