function onKeyPressLoginForm(e) {
    if (e.keyCode === 13) {
        e.preventDefault();

        if (requiredFields()) {
            return;
        }

        login();
    }
}


function login() {

    if (requiredFields()) {
        return;
    }

    let lsUsersList = getItemCache('lsUsersList')['data'];

    let filterUserLogin = lsUsersList.filter(
        item => item.email === document.getElementById('userEmail').value && item.senha === document.getElementById('userPassword').value
    );

    if (filterUserLogin.length !== 0) {

        showTodoListTemplate();
        hideLoginTemplate();
        returnTodoListUser(filterUserLogin[0].id);

    } else {

        changeTextAlert('Usuário ou senha inválidos');
        showAlert();

    }
}

function returnTodoListUser(id) {
    let lsDataTodoList = getItemCache('lsDataTodoList')['data'];

    let filterDataTodoListUser = lsDataTodoList.filter(
        item => item.userId === id
    );

    document.getElementById('render-todo-list').innerHTML = filterDataTodoListUser.map(dataTodoList =>
        `<tr>
          <th>${dataTodoList.id}</th>
          <th>${dataTodoList.titulo}</th>
          <th>${dataTodoList.data}</th>
          <th>${returnDescriptionStatus(dataTodoList.status)} </th>
        </tr>`
    ).join('');

}

function requiredFields() {

    if (document.getElementById('userEmail').value === '') {
        document.getElementById('userEmail').focus();
        changeTextAlert('Campo email é obrigatório');
        showAlert();
        return true;
    }

    if (document.getElementById('userPassword').value === '') {
        document.getElementById('userPassword').focus();
        changeTextAlert('Campo senha é obrigatório');
        showAlert();
        return true;
    }

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