$(document).ready(function () {

    indice = -1; // seta índice do item selecionado na tabela
    qtde = tbTarefas.length;
    listarTarefa();
});

// Aciona exclusão
$("#btnExcluir").on('click', function () {
    excluirTarefa(indice);
});

// Aciona edição
$("#btnSalvar").on('click', function () {
    editarTarefa(indice);
});

// Aciona adição
$("#btnAdicionar").on('click', function () {
    adicionarTarefa();
});

// Aciona modal
$('.abreModal').on('click', function (e) {
    e.preventDefault();
    id = ($(this).text());


    if (id == "Novo") {
        id = -1;
    }
    modal(id);
});

// Adicionar tarefa
function adicionarTarefa() {
    tarefa = JSON.stringify({
        id: qtde++,
        titulo: $("#inputTitulo").val(),
        descricao: $("#inputDescricao").val(),
        data: $("#inputData").val(),
        status: $("#inputStatus").val()
    });
    tbTarefas.push(tarefa);
    localStorage.setItem("tbTarefas", JSON.stringify(tbTarefas));
    mensagem(7);
}

// Editar tarefa
function editarTarefa(indice) {
    tbTarefas[indice] = JSON.stringify({
        id: indice,
        titulo: $("#inputTitulo").val(),
        descricao: $("#inputDescricao").val(),
        data: $("#inputData").val(),
        status: $("#inputStatus").val()
    });
    localStorage.setItem("tbTarefas", JSON.stringify(tbTarefas));
    mensagem(8);
}

// Excluir tarefa
function excluirTarefa(indice) {
    tbTarefas.splice(indice, 1);
    localStorage.setItem("tbTarefas", JSON.stringify(tbTarefas));
    mensagem(9);
}

// Listar tarefa
function listarTarefa() {
    $("#tbTodolist").html("");
    $("#tbTodolist").html(
        "<thead>" +
        "   <tr>" +
        "   <th>Id</th>" +
        "   <th>Título</th>" +
        "   <th>Descrição</th>" +
        "   <th>Data</th>" +
        "   <th>Status</th>" +
        "   </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var i in tbTarefas) {
        tarefa = JSON.parse(tbTarefas[i]);
        $("#tbTodolist tbody").append("<tr>");
        $("#tbTodolist tbody").append("<td value=" + tarefa.id + "><a class=\"abreModal\">" + tarefa.id + "</a></td > ");
        $("#tbTodolist tbody").append("<td>" + tarefa.titulo + "</td>");
        $("#tbTodolist tbody").append("<td>" + tarefa.descricao + "</td>");
        $("#tbTodolist tbody").append("<td>" + tarefa.data + "</td>");
        $("#tbTodolist tbody").append("<td>" + status(tarefa.status) + "</td>");
        $("#tbTodolist tbody").append("</tr>");
    }
}

// Exibe status da tarefa
function status(status) {
    switch (status) {
        case '0':
            return 'backlog';
            break;
        case '1':
            return 'andamento';
            break;
        case '2':
            return 'finalizado';
            break;
    }
}

// Exibe modal
function modal(id) {
    if (id == -1) {

        // adição
        $(".modal").modal({ show: true });
        $(".modal-title").empty().append("Adicionar nova tarefa");

        $("#groupID").hide();
        $("#btnExcluir").hide();
        $("#btnSalvar").hide();
        $("#btnAdicionar").show();

        $("#inputTitulo").val("");
        $("#inputDescricao").val("");
        $("#inputData").val("");
        $("#inputStatus").val("");

    }
    else {

        // edição

        for (var i in tbTarefas) {
            tarefa = JSON.parse(tbTarefas[i]);
            if (tarefa.id == id) {
                $(".modal").modal({ show: true });
                $(".modal-title").empty().append(tarefa.titulo);

                $("#groupID").show();
                $("#btnExcluir").show();
                $("#btnSalvar").show();
                $("#btnAdicionar").hide();

                $("#inputID").empty().val(tarefa.id);
                $("#inputTitulo").empty().val(tarefa.titulo);
                $("#inputDescricao").empty().val(tarefa.descricao);
                $("#inputData").empty().val(tarefa.data);
                $("#inputStatus").val(tarefa.status);

                indice = i;
            }
        }
    }
}
