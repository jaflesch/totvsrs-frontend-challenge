window.onload = function() {
    document.getElementById("startPage").hidden = false;
    document.getElementById("todolist").hidden = true;

}

function validateLogin() {
    window.alert(sessionStorage.getItem("email"));
    var elemento = document.getElementById("email");
    sessionStorage.setItem("email", elemento.value);

    document.getElementById("startPage").hidden = true;
    document.getElementById("todolist").hidden = false;

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
    if (containsEmail(obj, array)) {
        window.alert("Email já existe");
    } else {
        console.log("NAO inclui");

        //insert new user into user's array
        array.push(obj);

        //save user's array
        sessionStorage.setItem("allUsers", JSON.stringify(array));

        document.getElementById("startPage").hidden = true;
    }
}

function containsEmail(obj, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].email == obj.email) {
            return true;
        }
    }
    return false;
}