var createAccElements;
var tableID;
var modal;
var openedIdModal;
window.onload = function() {
    //change active page
    document.getElementById("startPage").hidden = false;
    document.getElementById("todolist").hidden = true;

    createAccElements = document.getElementsByClassName("createAccount");
    for (let i = 0; i < createAccElements.length; i++) {
        createAccElements[i].hidden = true;
    }

    //set variable 
    tableID = "table";
    modal = document.getElementById("myModal");
}

//LOGIN PART OF THE CODE
function startCreateLogin() {
    document.getElementById("validateLoginBtn").hidden = true;
    document.getElementById("startCreateLoginBtn").hidden = true;

    for (let i = 0; i < createAccElements.length; i++) {
        createAccElements[i].hidden = false;
    }
}

function cancelLoginCreation() {
    document.getElementById("validateLoginBtn").hidden = false;
    document.getElementById("startCreateLoginBtn").hidden = false;

    for (let i = 0; i < createAccElements.length; i++) {
        createAccElements[i].hidden = true;
    }
}

function confirmLogin() {
    if (document.getElementById("email").checkValidity() == false) {
        window.alert("Email invalido");
        return;
    }
    if (document.getElementById("password").value == "") {
        window.alert("Digite a sua senha");
        return;
    }
    if (document.getElementById("username").value == "") {
        window.alert("Digite o seu nome");
        return;
    }

    var lastId;
    //get all the users
    var array = JSON.parse(sessionStorage.getItem("allUsers"));

    if (array == null) {
        array = new Array();
        lastId = -1; //so the first id is 0(lastId+1)
    } else {
        lastId = array[array.length - 1].id;
    }

    //create the new user
    obj = new Object();
    obj = {
        id: parseInt(lastId) + 1,
        nome: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    //checks if already exists an account with this email
    if (returnEmailPosition(obj, array) == -1) {
        //insert new user into user's array
        array.push(obj);

        //save user's array
        sessionStorage.setItem("allUsers", JSON.stringify(array));

        //change active page
        cancelLoginCreation();
        document.getElementById("startPage").hidden = true;
        document.getElementById("todolist").hidden = false;

        sessionStorage.setItem("activeUser", obj.id);
        loadTasks(obj.id);
    } else {
        window.alert("Email já existe");
    }
}

function validateLogin() {
    if (document.getElementById("email").checkValidity() == false) {
        window.alert("Email invalido");
        return;
    }
    if (document.getElementById("password").value == "") {
        window.alert("Digite a sua senha");
        return;
    }

    //get all the users
    var array = JSON.parse((sessionStorage.getItem("allUsers")));
    if (array == null) {
        array = new Array();
    }

    //create the user object
    obj = new Object();
    obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    var emailPos = returnEmailPosition(obj, array);
    //check if exists an account with this email
    if (emailPos == -1) {
        window.alert("Conta não existente");
        return;
    }

    //check if the password is correct
    if (obj.password == array[emailPos].password) {
        //change active page
        document.getElementById("startPage").hidden = true;
        document.getElementById("todolist").hidden = false;

        sessionStorage.setItem("activeUser", array[emailPos].id);
        loadTasks(array[emailPos].id);
    } else {
        window.alert("Senha incorreta");
    }
}

function returnEmailPosition(obj, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].email == obj.email) {
            return i;
        }
    }
    //this email doesn't exist
    return -1;
}


//TODO LIST PART OF THE CODE
function addItem() {
    //get the table's body
    var tbody = document.querySelector("#" + tableID + " tbody");

    var newRow = createNewRow(tbody);

    //get all the new row's td
    var tds = newRow.getElementsByTagName("td");

    var lastId;
    //get the list
    var array = JSON.parse((sessionStorage.getItem("todolist")));
    if (array == null) {
        array = new Array();
        lastId = -1; //so the first id is 0(lastId+1)
    } else {
        lastId = array[array.length - 1].id;
    }

    //change the text
    tds[0].innerHTML = parseInt(lastId) + 1;
    tds[1].innerHTML = "new";
    tds[1].setAttribute("class", "titleClickable");
    tds[1].setAttribute("onclick", "openModal('" + tds[0].innerHTML + "')");
    tds[2].innerHTML = getDataFormatted();
    tds[3].innerHTML = 0;

    saveNewItem(tds, array);
}

function createNewRow(tbody) {
    // Insert a row at the end of the table
    let newRow = tbody.insertRow(-1);

    // Insert a cell in the row at indexes 0,1,2,3 (insert a new line)
    newRow.insertCell(0);
    newRow.insertCell(1);
    newRow.insertCell(2);
    newRow.insertCell(3);

    return newRow;
}

function saveNewItem(tds, array) {
    //create the new item
    obj = new Object();
    obj = {
        id: tds[0].innerHTML,
        userId: sessionStorage.getItem("activeUser"),
        titulo: tds[1].innerHTML,
        descricao: "sem descrição",
        data: tds[2].innerHTML,
        status: tds[3].innerHTML
    };

    array.push(obj);

    //save user's array
    sessionStorage.setItem("todolist", JSON.stringify(array));
}

function getDataFormatted() {
    var today = new Date();
    var hh = String(today.getHours()).padStart(2, '0');
    var min = String(today.getMinutes()).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return hh + ":" + min + " " + dd + '/' + mm + '/' + yyyy;
}

function loadTasks(activeUser) {
    //get all tasks from all the users
    var array = JSON.parse((sessionStorage.getItem("todolist")));
    if (array == null) {
        return;
    }

    //get the table's body
    var tbody = document.querySelector("#" + tableID + " tbody");

    //find each task that is from current user
    for (let i = 0; i < array.length; i++) {
        if (array[i].userId == activeUser) {
            //create the row for this task
            var newRow = createNewRow(tbody);

            //get all the new row's td
            var tds = newRow.getElementsByTagName("td");

            //change the text 
            tds[0].innerHTML = array[i].id;
            tds[1].innerHTML = array[i].titulo;
            tds[1].setAttribute("class", "titleClickable");
            tds[1].setAttribute("onclick", "openModal('" + tds[0].innerHTML + "')");
            tds[2].innerHTML = array[i].data;
            tds[3].innerHTML = array[i].status;
        }
    }
}

function openModal(itemId) {
    openedIdModal = itemId;
    modal.style.display = "block";

    //get all tasks from all the users
    var array = JSON.parse((sessionStorage.getItem("todolist")));

    //find the task that the user has opened
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == openedIdModal) {
            document.getElementById("tituloModal").value = array[i].titulo;
            document.getElementById("statusModal").value = array[i].status;
            document.getElementById("descricaoModal").value = array[i].descricao;
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeModal() {
    modal.style.display = "none";
}

function saveModal() {
    //check if status is valid
    var s = document.getElementById("statusModal").value;
    if (s == "") {
        window.alert("Por favor digite o status");
        return;
    }
    s = parseInt(s);
    if (s < 0 || s > 2) {
        window.alert("Status invalido \n0: backlog; 1: em andamento; 2: finalizado");
        return;
    }
    //check if the title is valid
    if (document.getElementById("tituloModal").value == "") {
        window.alert("Por favor digite o titulo");
        return;
    }

    updateTable();
    updateSessionStorage();
}

function updateTable() {
    //get the table's body
    var tbody = document.querySelector("#" + tableID + " tbody");

    //loop the id's from each row of the table
    for (let i = 0; i < tbody.children.length; i++) {
        //check if the id in the cell is equal to the saved one from "openedIdModal"
        if (tbody.children[i].children[0].innerHTML == openedIdModal) {
            //get the row to update
            var row = tbody.children[i];

            //update the row's text
            row.children[1].innerHTML = document.getElementById("tituloModal").value;
            row.children[3].innerHTML = document.getElementById("statusModal").value;

            return;
        }
    }
}

function updateSessionStorage() {
    //get all tasks from all the users
    var array = JSON.parse((sessionStorage.getItem("todolist")));

    //find the task that the user has opened
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == openedIdModal) {
            //update the object in the array
            array[i].titulo = document.getElementById("tituloModal").value;
            array[i].status = document.getElementById("statusModal").value;
            array[i].descricao = document.getElementById("descricaoModal").value;

            //save in the array
            sessionStorage.setItem("todolist", JSON.stringify(array));

            return;
        }
    }
}

function deleteModal() {
    // uma mensagem de confirmação deve aparecer
    var confirmation = confirm("Tem certeza que deseja excluir essa tarefa?");

    if (confirmation) {
        deleteFromTable();

        deleteFromSessionStorage();

        closeModal();
    }
}

function deleteFromTable() {
    //get the table's body
    var tbody = document.querySelector("#" + tableID + " tbody");

    //loop the id's from each row of the table
    for (let i = 0; i < tbody.children.length; i++) {
        //check if the id in the cell is equal to the saved one from "openedIdModal"
        if (tbody.children[i].children[0].innerHTML == openedIdModal) {
            tbody.remo
            tbody.children[i].remove();
            return;
        }
    }
}

function deleteFromSessionStorage() {
    //get all tasks from all the users
    var array = JSON.parse((sessionStorage.getItem("todolist")));

    //find the task that the user has opened
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == openedIdModal) {
            //remove from array starting from position "i", remove only 1 item
            array.splice(i, 1);

            //save in the array
            sessionStorage.setItem("todolist", JSON.stringify(array));

            return;
        }
    }
}

function logout() {
    //change active page
    document.getElementById("startPage").hidden = false;
    document.getElementById("todolist").hidden = true;

    document.getElementById("usernameLb").hidden = true;
    document.getElementById("username").hidden = true;
    document.getElementById("confirmLoginBtn").hidden = true;
    document.getElementById("cancelLoginCreationBtn").hidden = true;

    //remove active user id
    sessionStorage.setItem("activeUser", -1);

    //reset the table
    var tbody = document.querySelector("#" + tableID + " tbody");
    while (tbody.childElementCount > 0) {
        tbody.removeChild(tbody.childNodes[0]);
    }

    //reset the inputs
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";
}