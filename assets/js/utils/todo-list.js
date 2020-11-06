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