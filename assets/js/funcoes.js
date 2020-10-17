// operacao = "C"; // C= Create, R= Read, U= Update, D=Delete
// indice = -1; // Índice do item selecionado na tabela

// Adicionar tarefa
function adicionarTarefa() {
    var tarefa = JSON.stringify({
        id: $("#inputEmail").val(),
        userid: $("#inputEmail").val(),
        titulo: $("#inputSenha").val(),
        descricao: $("#inputDescricao").val(),
        data: $("#inputSenha").val(),
        status: $("#inputSenha").val()
    });
    tbTarefas.push(tarefa);
    localStorage.setItem("tbTarefas", JSON.stringify(tbTarefas));
    //alert("Registro adicionado.");
    return true;
}

// Editar tarefa
function editarTarefa() {
    tbTarefas[selecao] = JSON.stringify({
        id: $("#inputEmail").val(),
        userid: $("#inputEmail").val(),
        titulo: $("#inputSenha").val(),
        descricao: $("#inputDescricao").val(),
        data: $("#inputSenha").val(),
        status: $("#inputSenha").val()
    });
    localStorage.setItem("tbTarefas", JSON.stringify(tbTarefas));
    //alert("Informações editadas.")
    //operacao = "C"; //Volta ao padrão
    return true;
}

// Excluir tarefa
function excluirTarefa() {
    tbTarefas.splice(selecao, 1);
    localStorage.setItem("tbTarefas", JSON.stringify(tbTarefas));
    //alert("Registro excluído.");
}


// Listar tarefa
function listarTarefa() {
    $("#tbTodolist tbody").append("</tr>");
}
//A função Listar deve ser chamada no corpo da função principal, para que a tabela seja atualizada sempre que a página for recarregada.
