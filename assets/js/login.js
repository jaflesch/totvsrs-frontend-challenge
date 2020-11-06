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

    showTodoListTemplate();
    hideLoginTemplate();
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