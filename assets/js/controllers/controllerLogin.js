class ControllerLogin {

    constructor() {
        this.appElement = document.querySelector('#appContainer');
    }

    //Adiciona os event Listeners
    bindListeners() {
        let btnLogin = document.querySelector('.btn-logar');
        let btnVoltar = document.querySelector('.btn-voltar');
     
        btnVoltar.addEventListener('click', (e)=> {
            e.preventDefault();
            mudarView(e);
        });

        btnLogin.addEventListener('click', (e)=> {
            e.preventDefault();
            this.efetuarLogin(e);
        });
    }

    //Remove a classe de erro ao digitar algo nos inputs
    cleanErrors(){
        
    }


    

    //Realize login caso o usuário digite as informações corretas
    efetuarLogin(e) {
        let usuarios = db.getUsers();
        usuarios = JSON.parse(usuarios);

        let email    = document.querySelector('[name="email"]');
        let senha    = document.querySelector('[name="senha"]');
      
        usuarios.map(usuario=> {
            if(usuario.email === email.value && usuario.senha === senha.value){
                let user = new UserModel(usuario.id, usuario.nome);
                db.setLogado(user);
                mudarView(e);
                renderBotaoSair();
            }
        }) 
    }
}   