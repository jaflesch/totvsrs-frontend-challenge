$('#btn-adicionar-link').click(function(e){
    e.preventDefault();
    localStorage.setItem('page', 'list-add');
    $('#body-dynamic').loadTemplate('views/list-add.html');
});

$('#btn-alerta-sucesso').click(function(e){
    e.preventDefault();
    $('#alerta-sucesso').remove();
});

$('.btn-cancela-remover').click(function(e){
    e.preventDefault();
    $('#modal').hide();
});

$('#btn-confirma-remover').click(function(e){
    e.preventDefault();
    let id = $(this).data('id');
    let key = 'todo' + id;
    let list = JSON.parse(localStorage.getItem('list'));

    delete list[key];
    localStorage.setItem('list', JSON.stringify(list));
    $('#body-dynamic').loadTemplate('views/list.html');
});

$('#btn-voltar').click(function(e){
    e.preventDefault();
    localStorage.setItem('page', 'list');
    $('#body-dynamic').loadTemplate('views/list.html');
});

$('#btn-adicionar').click(function(e){
    e.preventDefault();

    $('#titulo-help').addClass('d-none');
    $('#descricao-help').addClass('d-none');
    
    let validation = {hasError: false, fields:[]};
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
        let id = getTodoIdNext();
        let todo = {
            id: id, 
            userId: usuario, 
            titulo: titulo.val(), 
            descricao: descricao.val(), 
            data: data,
            status: status.val()
        };
        addTodo(todo);    

        localStorage.setItem('page', 'list');
        $('#body-dynamic').loadTemplate('views/list.html');
        $('#alerta-row').removeClass('d-none');
    }
});

$('#list-dynamic').on('click','a.btn-editar',function(e){
    e.preventDefault();
    let id = $(this).attr('alt');
    $('#body-dynamic').loadTemplate('views/list-edit.html', {id: id});
});

$('#list-dynamic').on('click','a.btn-remover',function(e){
    e.preventDefault();
    let id = $(this).attr('alt');    
    let key = 'todo' + id;

    let list = JSON.parse(localStorage.getItem('list'));
    let titulo = list[key]['titulo'];

    $('#btn-confirma-remover').data('id', id);
    $('#modal-frase').html('Você tem certeza de deseja remover o Todo <strong>'+titulo+'</strong> ?');
    $('#modal').show();

});

let status = [{value: 0, text: 'backlog'}, {value: 1, text: 'em andamento'}, {value: 2, text: 'finalizado'}]
status.forEach(function(item){
    $('#status').append($('<option>', {
        value: item.value,
        text: item.text
    }));
});

let list = getList();
let listArray = listToArray(list);
$("#list-dynamic").loadTemplate($("#list-dynamic-template"), listArray);

function statusCodeToText(code){
    switch(code) {
        case '0':
          return 'backlog';
          break;
        case '1':
            return 'em andamento';
            break;
        default:
            return 'finalizado';
    }
}

function listToArray(list){
    let array = [];
    for (i = 0; i < Object.keys(list).length; i++) {
        let index = Object.keys(list);
        let key = index[i];

        let status = statusCodeToText(list[key]['status']);

        array.push({id: list[key]['id'], titulo: list[key]['titulo'], data: list[key]['data'], status: status});
    }
    return array;
}

function getTodoIdNext(){
    let list = JSON.parse(localStorage.getItem('list'));
    let id = Object.keys(list).length + 1;
    return id;
}

function getList(){
    let list = JSON.parse(localStorage.getItem('list'));
    if(Object.keys(list).length == 0){
        return '';
    }
    else{
        return list;
    }
}

function addTodo(todo){
    let list = JSON.parse(localStorage.getItem('list'));
    let key  = 'todo' + todo.id;
    list[key] = todo;
    localStorage.setItem('list', JSON.stringify(list));
}