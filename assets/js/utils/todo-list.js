function renderTodoListItensByUserId(id) {
    let lsDataTodoList = getItemCache('lsDataTodoList')['data'];

    let filterDataTodoListUser = lsDataTodoList.filter(
        item => item.userId === id
    );

    document.getElementById('render-todo-list').innerHTML = filterDataTodoListUser.map(dataTodoList =>
        `<tr class="tr-item-todo-list">
          <th>${dataTodoList.id}</th>
          <th>${dataTodoList.titulo}</th>
          <th>${dataTodoList.data}</th>
          <th>${returnDescriptionStatus(dataTodoList.status)} </th>
        </tr>`
    ).join('');

}

function renderInfoUser(filterUserLogin) {
    document.getElementById('desc-name-user').innerHTML = 'Nome: ' + filterUserLogin[0].nome;
    document.getElementById('desc-email-user').innerHTML = 'Email: ' + filterUserLogin[0].email;
}

function resetInfoUser() {
    document.getElementById('desc-name-user').innerHTML = '';
    document.getElementById('desc-email-user').innerHTML = '';
}


function returnDescriptionStatus(status) {

    if (status === 0) {
        return 'backlog';
    }
    else if (status === 1) {
        return 'em andamento';
    }
    else if (status === 2) {
        return 'finalizado';
    }

}