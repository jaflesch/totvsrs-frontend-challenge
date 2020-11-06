function userNameRegisterFocus() {
    setTimeout(() => {
        document.getElementById('userNameRegister').focus();
    }, 700);
}

function registerUser() {

    let lsUsersList = getItemCache('lsUsersList')['data'];

    let obj = {
        id: lsUsersList.length === 0 ? 1 : lsUsersList[lsUsersList.length -1].id + 1,
        nome: document.getElementById('userNameRegister').value,
        email: document.getElementById('userEmailRegister').value,
        senha: document.getElementById('userPasswordRegister').value
    };

    lsUsersList.push(obj);

    removeItemCache('lsUsersList');
    setItemCache('lsUsersList', lsUsersList);

    showTodoListTemplate();
    hideLoginTemplate();
}