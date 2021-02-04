window.onload = function() {
    document.getElementById("startPage").hidden = false;
    document.getElementById("todolist").hidden = true;

}

function validateLogin() {

    //get all the users
    var array = JSON.parse((sessionStorage.getItem("allUsers")));
    if (array == null) {
        array = new Array();
    }
    console.log(array);

    //create the user object
    obj = new Object();
    obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    var emailPos = returnEmailPosition(obj, array);

    if (emailPos == -1) {
        window.alert("Conta não existente");
        return;
    }

    if (obj.password == array[emailPos].password) {
        document.getElementById("startPage").hidden = true;
        document.getElementById("todolist").hidden = false;

        sessionStorage.setItem("activeUser", emailPos);
    } else {
        window.alert("senha incorreta");
    }
}

function createLogin() {

    //get all the users
    var array = JSON.parse((sessionStorage.getItem("allUsers")));
    if (array == null) {
        array = new Array();
    }
    console.log(array);

    //create the new user
    obj = new Object();
    obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    //checks if already exists an account with this email
    if (returnEmailPosition(obj, array) == -1) {
        //insert new user into user's array
        array.push(obj);

        //save user's array
        sessionStorage.setItem("allUsers", JSON.stringify(array));

        document.getElementById("startPage").hidden = true;
    } else {
        window.alert("Email já existe");
    }
}

function returnEmailPosition(obj, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].email == obj.email) {
            return i;
        }
    }
    //dont exist
    return -1;
}