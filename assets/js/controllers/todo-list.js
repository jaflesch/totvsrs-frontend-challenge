var userData = {};
var todoItemObject = {};

function registerTodoItem() {

    if (requiredFieldsRegisterTodoItem({ updateItem: false })) {
        return;
    }

    let lsDataTodoList = getItemCache('lsDataTodoList')['data'];
    let nextIdTodoItem = 0;

    if (lsDataTodoList.length !== 0)
        nextIdTodoItem = Math.max.apply(null, lsDataTodoList.map(item => item.id));

    let objTodoItem = {
        id: nextIdTodoItem + 1,
        userId: userData.id,

        titulo: document.getElementById('titleTodoItem').value,
        descricao: document.getElementById('descriptionTodoItem').value,
        data: document.getElementById('dateTodoItem').value,
        status: parseInt(document.getElementById('statusTodoItem').value)
    };

    lsDataTodoList.push(objTodoItem);

    removeItemCache('lsDataTodoList');
    setItemCache('lsDataTodoList', lsDataTodoList);

    resetTodoList();
    resetRegisterTodoItem();

    renderTodoListItensByUserId(userData.id);
}

function updateTodoItem() {

    if (requiredFieldsRegisterTodoItem({ updateItem: true })) {
        return;
    }

    let lsDataTodoList = getItemCache('lsDataTodoList')['data'];

    let indexUpdate = lsDataTodoList.findIndex(
        item => item.id === todoItemObject.id
    );

    lsDataTodoList[indexUpdate].data = document.getElementById('updateDateTodoItem').value;
    lsDataTodoList[indexUpdate].descricao = document.getElementById('updateDescriptionTodoItem').value;
    lsDataTodoList[indexUpdate].status = parseInt(document.getElementById('updateStatusTodoItem').value);
    lsDataTodoList[indexUpdate].titulo = document.getElementById('updateTitleTodoItem').value;

    removeItemCache('lsDataTodoList');
    setItemCache('lsDataTodoList', lsDataTodoList);
    resetTodoList();

    renderTodoListItensByUserId(userData.id);

}

function deleteTodoItem() {

    let lsDataTodoList = getItemCache('lsDataTodoList')['data'];

    let indexDelete = lsDataTodoList.findIndex(
        item => item.id === todoItemObject.id
    );

    lsDataTodoList.splice(indexDelete, 1);

    removeItemCache('lsDataTodoList');
    setItemCache('lsDataTodoList', lsDataTodoList);
    resetTodoList();
    renderTodoListItensByUserId(userData.id);
    document.getElementById('closeModalUpdateTodoItem').click();
    document.getElementById('closeModalConfirm').click();
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
            setValuesTodoItemForUpdate(todoItem);
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

function setValuesTodoItemForUpdate(todoItem) {
    todoItemObject = todoItem;
    document.getElementById('buttonAuxUpdateModal').click();

    document.getElementById('updateTitleTodoItem').value = todoItem.titulo;
    document.getElementById('updateDescriptionTodoItem').value = todoItem.descricao;
    document.getElementById('updateDateTodoItem').value = todoItem.data;
    document.getElementById('updateStatusTodoItem').value = todoItem.status;
}

function renderInfoUser(filterUserLogin) {
    userData = filterUserLogin;

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

function showModalConfirm() {
    document.getElementById('buttonAuxModalConfirm').click();
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

function requiredFieldsRegisterTodoItem(objectValues) {

    if (document.getElementById(objectValues.updateItem === false ? 'titleTodoItem' : 'updateTitleTodoItem').value === '') {
        document.getElementById(objectValues.updateItem === false ? 'titleTodoItem' : 'updateTitleTodoItem').focus();
        return true;
    }

    if (document.getElementById(objectValues.updateItem === false ? 'descriptionTodoItem' : 'updateDescriptionTodoItem').value === '') {
        document.getElementById(objectValues.updateItem === false ? 'descriptionTodoItem' : 'updateDescriptionTodoItem').focus();
        return true;
    }

    if (document.getElementById(objectValues.updateItem === false ? 'dateTodoItem' : 'updateDateTodoItem').value === '') {
        document.getElementById(objectValues.updateItem === false ? 'dateTodoItem' : 'updateDateTodoItem').focus();
        return true;
    }

    if (document.getElementById(objectValues.updateItem === false ? 'statusTodoItem' : 'updateStatusTodoItem').value === '') {
        document.getElementById(objectValues.updateItem === false ? 'statusTodoItem' : 'updateStatusTodoItem').focus();
        return true;
    }

}