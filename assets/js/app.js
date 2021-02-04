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

function goToCreateLogin() {
    document.getElementById("startPage").hidden = true;
    //mostrar elemento de login criado
}