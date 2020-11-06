function userNameRegisterFocus() {
    setTimeout(() => {
        document.getElementById('userNameRegister').focus();
    }, 700);
}

function registerUser() {

    if (requiredFieldsRegisterUser()) {
        return;
    }

    let lsUsersList = getItemCache('lsUsersList')['data'];
    let nextIdUser = lsUsersList.length === 0 ? 1 : lsUsersList[lsUsersList.length - 1].id + 1;

    let obj = {
        id: nextIdUser,
        nome: document.getElementById('userNameRegister').value,
        email: document.getElementById('userEmailRegister').value,
        senha: document.getElementById('userPasswordRegister').value
    };

    lsUsersList.push(obj);

    removeItemCache('lsUsersList');
    setItemCache('lsUsersList', lsUsersList);

    document.getElementById('desc-name-user').innerHTML = 'Nome: ' + document.getElementById('userNameRegister').value;
    document.getElementById('desc-email-user').innerHTML = 'Email: ' + document.getElementById('userEmailRegister').value;
    document.getElementById('desc-id-user').innerHTML = 'Id: ' + nextIdUser;

    resetTodoList();
    showTodoListTemplate();
    hideLoginTemplate();
}

function requiredFieldsRegisterUser() {

    if (document.getElementById('userNameRegister').value === '') {
        document.getElementById('userNameRegister').focus();
        return true;
    }

    if (document.getElementById('userEmailRegister').value === '') {
        document.getElementById('userEmailRegister').focus();
        return true;
    }

    if (document.getElementById('userPasswordRegister').value === '') {
        document.getElementById('userPasswordRegister').focus();
        return true;
    }

}

function resetFormUserRegister() {
    document.getElementById('userNameRegister').value = '';
    document.getElementById('userEmailRegister').value = '';
    document.getElementById('userPasswordRegister').value = '';
}