function userNameRegisterFocus() {
    setTimeout(() => {
        document.getElementById('userNameRegister').focus();
    }, 700);
}

function registerUser() {
    let obj = {
        id: 1,
        nome: document.getElementById('userNameRegister').value,
        email: document.getElementById('userEmailRegister').value,
        senha: document.getElementById('userPasswordRegister').value
    };
    console.log(JSON.stringify(obj, null, 4));

    showTodoListTemplate();
    hideLoginTemplate();
}