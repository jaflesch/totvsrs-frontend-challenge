var userData = {};

function registerTodoItem() {

    if (requiredFieldsRegisterTodoItem()) {
        return;
    }

    let lsDataTodoList = getItemCache('lsDataTodoList')['data'];

    let filterDataTodoListUser = lsDataTodoList.filter(
        item => item.userId === userData.id
    );

    let nextIdTodoItem = filterDataTodoListUser.length === 0 ? 1 : filterDataTodoListUser[filterDataTodoListUser.length - 1].id + 1;

    let objTodoItem = {
        id: nextIdTodoItem,
        userId: userData.id,

        titulo: document.getElementById('titleTodoItem').value,
        descricao: document.getElementById('descriptionTodoItem').value,
        data: document.getElementById('dateTodoItem').value,
        status: parseInt(document.getElementById('statusTodoItem').value)
    };

    lsDataTodoList.push(objTodoItem);

    removeItemCache('lsDataTodoList');
    setItemCache('lsDataTodoList', lsDataTodoList);

    renderTodoListItensByUserId(userData.id);

    setTimeout(() => {
        resetRegisterTodoItem();
    }, 100);
}

function renderTodoListItensByUserId(id) {
    let lsDataTodoList = getItemCache('lsDataTodoList')['data'];

    let filterDataTodoListUser = lsDataTodoList.filter(
        item => item.userId === id
    );

    let tbody = document.createElement("tbody");

    for (var i = 0; i < filterDataTodoListUser.length; i++) {
        
        let item = document.createElement("tr");
        item.classList.add("tr-item-todo-list");

        let todoItem = filterDataTodoListUser[i];
        item.addEventListener('click', () => {
            console.log(todoItem);
        });

        item.innerHTML = `  <th>${filterDataTodoListUser[i].id}</th>
                            <th>${filterDataTodoListUser[i].titulo}</th>
                            <th>${filterDataTodoListUser[i].data}</th>
                            <th>${returnDescriptionStatus(filterDataTodoListUser[i].status)} </th>
                         `;

        tbody.append(item);
    }

    document.getElementById('table-todo-list').appendChild(tbody);
}

function renderInfoUser(filterUserLogin) {
    userData = filterUserLogin[0];

    document.getElementById('desc-name-user').innerHTML = 'Nome: ' + userData.nome;
    document.getElementById('desc-email-user').innerHTML = 'Email: ' + userData.email;
    document.getElementById('desc-id-user').innerHTML = 'Id: ' + userData.id;
}

function resetInfoUser() {
    document.getElementById('desc-name-user').innerHTML = '';
    document.getElementById('desc-email-user').innerHTML = '';
    document.getElementById('desc-id-user').innerHTML = '';
}

function resetTodoList() {
    try {
        let tbl = document.getElementById("table-todo-list");
        tbl.removeChild(tbl.getElementsByTagName("tbody")[0]);
    } catch (error) { }
}

function resetRegisterTodoItem() {
    document.getElementById('titleTodoItem').value = '';
    document.getElementById('descriptionTodoItem').value = '';
    document.getElementById('dateTodoItem').value = '';
    document.getElementById('statusTodoItem').value = 0;
    document.getElementById('closeModalRegisterTodoItem').click();
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

function requiredFieldsRegisterTodoItem() {

    if (document.getElementById('titleTodoItem').value === '') {
        document.getElementById('titleTodoItem').focus();
        return true;
    }

    if (document.getElementById('descriptionTodoItem').value === '') {
        document.getElementById('descriptionTodoItem').focus();
        return true;
    }

    if (document.getElementById('dateTodoItem').value === '') {
        document.getElementById('dateTodoItem').focus();
        return true;
    }

    if (document.getElementById('statusTodoItem').value === '') {
        document.getElementById('statusTodoItem').focus();
        return true;
    }

}