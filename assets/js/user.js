/**
 * Encerra a sessão do usuário, voltando a tela inicial e formatando o header.
 */
function exitSession(){
  sessionStorage.clear();
  window.location.href = "#login";
  document.getElementById("name_user").innerHTML = "";
  document.getElementById("exit_session").style.visibility = "hidden";
}

/*
  carregamento com padrão dos campos de navegação e localização 
*/
function onloadpat(){
  document.getElementById("exit_session").style.visibility = "hidden";
  window.location.href = '#login'
}
 
/**
 * Coloca o nome do usuário no header
 * @param {*} email 
 */
function setUser(email){
  const name = JSON.parse(localStorage.getItem(email)).name;

  document.getElementById("name_user").innerHTML= `Seja bem vindo ${name}`;
}

/**
 * 
 * @param {*} email
 * @param {*} password 
 * 
 * Validação do email e da senha por comparação do LocalStorage
 */
function login(email, password){
    if(JSON.parse(localStorage.getItem(email)).password === password){
      alert("Localizado!");
      setUser(email);
      sessionStorage.setItem(email, email);
      document.getElementById("exit_session").style.visibility = "visible";
      window.location.href = "#todolist"
    }else{
      alert("Não localizado!");
    }
}

/**
 * Efetua o cadastro do usuário
 * @param {*} name 
 * @param {*} email 
 * @param {*} password 
 */

function cadastro(name, email, password){
    if(localStorage.getItem(email) === email){
      alert("Email já cadastrado!")
    }else{
      const id = localStorage.length + 1;
    
      const register = {
        id,
        name,
        email,
        password,
        active: true
      }

      localStorage.setItem(email, JSON.stringify(register));

      alert("Cadastro feito com sucesso!");

      sessionStorage.setItem(email, email);

      document.getElementById("name_user").innerHTML= `Seja bem vindo ${name}`;

      window.location.href = "#todolist"
    }
  }