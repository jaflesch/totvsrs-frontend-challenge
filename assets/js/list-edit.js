$(document).ready(function() {
    let id = $('#todo-id').attr('alt');
    
    let todo = JSON.parse(localStorage.getItem('list'));
    let key = 'todo' + id;

    let usuario = todo[key]['userId'];
    let titulo = todo[key]['titulo'];
    let descricao = todo[key]['descricao'];
    let status = todo[key]['status'];

    $('#todo-id').val(id);
    $('#usuario').val(usuario);
    $('#titulo').val(titulo);
    $('#descricao').val(descricao);

    let statusEnum = [{value: 0, text: 'backlog'}, {value: 1, text: 'em andamento'}, {value: 2, text: 'finalizado'}]
    let selected = false;
    statusEnum.forEach(function(item){
        if(item.value == status)
            selected = true;
        $('#status').append($('<option>', {
            value: item.value,
            text: item.text,
            selected: selected
        }));
        selected = false;
    });
});

$('#btn-editar').click(function(e){
    e.preventDefault();

    $('#titulo-help').addClass('d-none');
    $('#descricao-help').addClass('d-none');
    
    let validation = {hasError: false, fields:[]};
    let todoId = Number($('#todo-id').val());
    let user = localStorage.getItem('user');
    let usuario = JSON.parse(user).id;
    let titulo = $('#titulo');
    let descricao = $('#descricao');
    let data = dateFormatBr(new Date());
    let status = $('#status option:selected');

    if(isUndefinedOrEmpty(titulo.val())){
        validation.hasError = true;
        validation.fields['titulo'] = 'Título obrigatório.';
    }
    
    if(isUndefinedOrEmpty(descricao.val())){
        validation.hasError = true;
        validation.fields['descricao'] = 'Descrição obrigatória.';
    }

    if(validation.hasError){
        if(!isUndefinedOrEmpty(validation.fields['titulo'])){
            $('#titulo-help').html(validation.fields['titulo']);
            $('#titulo-help').removeClass('d-none');
        }

        if(!isUndefinedOrEmpty(validation.fields['descricao'])){
            $('#descricao-help').html(validation.fields['descricao']);
            $('#descricao-help').removeClass('d-none');
        }
    }
    else{
        let todo = {
            id: todoId, 
            userId: usuario, 
            titulo: titulo.val(), 
            descricao: descricao.val(), 
            data: data,
            status: status.val()
        };
        editTodo(todo);    

        localStorage.setItem('page', 'list');
        $('#body-dynamic').loadTemplate('views/list.html');
        $('#alerta-row').removeClass('d-none');
        $('#alert-message').html('Todo alterado com sucesso.')
    }
});

$('#btn-voltar').click(function(e){
    e.preventDefault();
    localStorage.setItem('page', 'list');
    $('#body-dynamic').loadTemplate('views/list.html');
});

function editTodo(todo){
    let list = JSON.parse(localStorage.getItem('list'));
    let key  = 'todo' + todo.id;
    list[key] = todo;
    localStorage.setItem('list', JSON.stringify(list));
}