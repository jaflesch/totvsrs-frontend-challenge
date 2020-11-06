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
        renderTodoListItensByUserId(filterUserLogin[0].id);

    } else {

        changeTextAlert('Usuário ou senha inválidos');
        showAlert();

    }
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