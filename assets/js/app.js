myStorage = window.localStorage;

//função cadastro -- o cadastro sempre sobrepõe o anterior, após validar o cadastro é possível efetuar o login

function cadastrar() {
    var nome_cad = "";
    var email_cad = "";
    var senha_cad = "";
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/;

    /*salva os valores dos campos */
    nome_cad = document.getElementById("nome_cad").value;
    email_cad = document.getElementById("email_cad").value;
    senha_cad = document.getElementById("senha_cad").value;


    /*verifica se os campos estão no padrão*/
    if (regexEmail.test(email_cad) == false) {
        alert('E-mail Inválido')
        window.location.reload();

    }
    else if (nome_cad == "") {
        alert('Nome inválido')
        window.location.reload();
    }
    else if (senha_cad == "") {
        alert('Senha Inválida')
        window.location.reload();
    } else {
        /*salva os dados no storage*/
        localStorage.setItem('nome', nome_cad)
        localStorage.setItem('email', email_cad)
        localStorage.setItem('senha', senha_cad)
        console.log(localStorage);
        alert("Cadastro Realizado - Prossiga para a tela de login")

    }


}

//funcao login -- só é possivel após efetuar o cadastro, e somente os dados inseridos no cadastro serão aceitos

function login() {
    var email = "";
    var senha = "";
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/;

    /*salva os valores dos campos */
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;

    console.log(localStorage.getItem('email'));

    /* verificar se o email e senha consiste com o dado salvo */
    if (regexEmail.test(email) == false || email != localStorage.getItem('email')) {
        alert('E-mail Inválido')
        window.location.reload();

    }
    if (senha != localStorage.getItem('senha')) {
        alert('Senha Inválida')
        window.location.reload();

    }

    else {

        event.preventDefault();
        //esconde login/cadastro
        document.getElementById("login").hidden = true;
        document.getElementById("cadastro").hidden = true;
        document.getElementsByTagName("body")[0].style.backgroundColor = "#066a75";
        /*
        //verifica se existem dados na tabela
        if(localStorage.getItem('tabela') != ""){
            var divResult = document.getElementById("lista");
            alert("tabela com dados");
            //remove lista sem dados
           document.getElementById("todolist").remove();
           alert("removi");

           //insere tabela com dados
           //divResult.appendChild(localStorage.getItem('tabela'));
           //alert("adicionei");
        }*/

        //exibe to do list + botao para edição
        document.getElementById("todolist").hidden = false;
        document.getElementById("editar").hidden = false;
        document.getElementById("sair").hidden = false;

    }


}

//Funcao adiciona uma nova linha na tabela
function adicionaLinha(idTabela) {


    /*validacoes*/
    if (document.getElementById("id_mod").value == "") {
        alert("preencha o id corretamente");
        document.getElementById("id_mod").focus();
    }
    else if (document.getElementById("titulo_mod").value == "") {
        alert("preencha o título corretamente");
        document.getElementById("titulo_mod").focus();
    }
    else if (document.getElementById("data_mod").value == "") {
        alert("preencha a data corretamente");
        document.getElementById("data_mod").focus();
    }
    else if (document.getElementById("status_mod").value == "") {
            alert("preencha o status corretamente");
            document.getElementById("status_mod").focus();
    } else {

        var tabela = document.getElementById(idTabela);
        var numeroLinhas = tabela.rows.length;
        var linha = tabela.insertRow(numeroLinhas);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var celula3 = linha.insertCell(2);
        var celula4 = linha.insertCell(3);
        var celula5 = linha.insertCell(4);

        celula1.innerHTML = document.getElementById("id_mod").value;
        celula4.innerHTML = document.getElementById("status_mod").value;
        celula2.innerHTML = document.getElementById("titulo_mod").value;
        celula3.innerHTML = document.getElementById("data_mod").value;
        celula5.innerHTML = "<button class='btn btn-danger' onclick='removeLinha(this)'>Remover</button>";
        alert("linha inserida")
    }


    /*var teste = {
        'id_mod' : document.getElementById("id_mod").value,
        'titulo_mod' : document.getElementById("titulo_mod").value,
        'data_mod' : document.getElementById("data_mod").value,
        'status_mod' : document.getElementById("status_mod").value,
    }


    localStorage.setItem("linha", JSON.stringify(teste));*/

    /*var teste2 = {
        'id_mod' : '1',
        'titulo_mod' : 'OLA',
        'data_mod' : 'bbb',
        'status_mod' : 2,
    }

    localStorage.setItem("linha1", JSON.stringify(teste2));*/
    //localStorage.setItem("tabela", JSON.stringify(document.getElementById('todolist')));

    //JSON.parse(localStorage.getItem("todolist"));

}

// funcao remove uma linha da tabela
function removeLinha(linha) {
    //alert("deletando")
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('todolist').deleteRow(i);

    //localStorage.setItem("tabela", JSON.stringify(document.getElementById('todolist')));

    //JSON.parse(localStorage.getItem("todolist"));

}

//recarrega a pagina e automaticamente perde as linhas da tabela
function logout() {
    window.location.reload();
    //localStorage.clear();
}