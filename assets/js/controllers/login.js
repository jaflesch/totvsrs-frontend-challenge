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
        resetTodoList();
        renderInfoUser(filterUserLogin[0]);
        renderTodoListItensByUserId(filterUserLogin[0].id);

    } else {
        showErrorAlert('Usuário ou senha inválidos');
    }
}

function logout() {
    resetInfoUser();
    hideTodoListTemplate();
    showLoginTemplate();
    resetFormLogin();
    resetFormUserRegister();
    resetTodoList();
    document.getElementById('userEmail').focus();

}

function resetFormLogin() {
    document.getElementById('userPassword').value = '';
    document.getElementById('userEmail').value = '';
}

function requiredFields() {

    if (document.getElementById('userEmail').value === '') {
        document.getElementById('userEmail').focus();
        showErrorAlert('Campo email é obrigatório');
        return true;
    }

    if (document.getElementById('userPassword').value === '') {
        document.getElementById('userPassword').focus();
        showErrorAlert('Campo senha é obrigatório');
        return true;
    }

}

function onKeyPressLoginForm(e) {
    if (e.keyCode === 13) {
        e.preventDefault();

        if (requiredFields()) {
            return;
        }

        login();
    }
}