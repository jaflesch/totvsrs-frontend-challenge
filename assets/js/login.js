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
        renderInfoUser(filterUserLogin);
        renderTodoListItensByUserId(filterUserLogin[0].id);

    } else {

        changeTextAlert('Usuário ou senha inválidos');
        showAlert();

    }
}

function logout() {
    resetInfoUser();
    hideTodoListTemplate();
    showLoginTemplate();
    resetFormLogin();
    document.getElementById('userEmail').focus();
    document.getElementById('userNameRegister').value = '';
    document.getElementById('userEmailRegister').value = '';
    document.getElementById('userPasswordRegister').value = '';

}

function resetFormLogin() {
    document.getElementById('userPassword').value = '';
    document.getElementById('userEmail').value = '';
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