// JavaScript Document

myStorage = window.localStorage;

// FUNÇÃO CADASTRO USUÁRIO //

function cadastrarUsuario() {
  
    var emailCadastrado = document.getElementById('emailCadastrado').value;
    var senhaCadastrada = document.getElementById('senhaCadastrada').value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/

    if (regexEmail.test(emailCadastrado) == false) {
        alert('E-mail Inválido');
        window.location.reload()

    }
    else if (senhaCadastrada == "") {
        alert('Senha Inválida');
        window.location.reload()
    } else {
		localStorage.setItem('email', emailCadastrado);
        localStorage.setItem('senha', senhaCadastrada);
        console.log(localStorage);
        alert("Cadastro realizado, faça seu login utlizando email e senha cadastrados")
    }
}

// FUNÇÃO LOGIN USUÁRIO //

function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('pwd').value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/

    if (regexEmail.test(email) == false || email != localStorage.getItem('email')) {
        alert('E-mail Inválido');
        window.location.reload()
    }
    if (senha != localStorage.getItem('senha')) {
        alert('Senha Inválida')
        window.location.reload();
    }
    else {
		event.preventDefault();
		window.location.href='cadastro.html'
	}
}

// FUNÇÃO PARA CRIAR TAREFAS //

function criarTarefas() {
	event.preventDefault();
	
	const listaTarefa = document.querySelector('[data-task-list]');
	const idTarefa = document.getElementById('id-tarefa').value;
	const descricaoTarefa = document.getElementById('descricao-tarefa').value;
	const dataHoraTarefa = document.getElementById('data-hora').value;
	const statusTarefa = document.getElementById('status').value;
	
	
	const linhaTarefa = document.createElement('li')
	
	const conteudoTarefa = `<p class="task-description">${idTarefa} - ${descricaoTarefa} - ${dataHoraTarefa} - ${statusTarefa}</p>`
	
	linhaTarefa.innerHTML = conteudoTarefa
	listaTarefa.appendChild(linhaTarefa)

}	


	
	