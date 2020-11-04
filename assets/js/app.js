function onInitAplication() {
    document.getElementById('userEmail').focus();
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


function login() {

    if (requiredFields()) {
        return;
    }

    alert('Realiza login');
}


function requiredFields() {

    if (document.getElementById('userEmail').value === '') {
        document.getElementById('userEmail').focus();
        alert('Campo email é obrigatório');
        return true;
    }
    
    if (document.getElementById('userPassword').value === '') {
        document.getElementById('userPassword').focus();
        alert('Campo senha é obrigatório');
        return true;
    }

}