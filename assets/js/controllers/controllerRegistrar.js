class ControllerRegistrar {

    constructor() {
        this.appElement = document.querySelector('#appContainer');
    }

    //Adiciona os event Listeners
    bindListeners() {
        let btnRegistrar  = document.querySelector('.btn-registrar');
        let btnVoltar     = document.querySelector('.btn-voltar');
     
        btnVoltar.addEventListener('click', (e)=> {
            e.preventDefault();
            mudarView(e);
        });

        btnRegistrar.addEventListener('click', (e)=> {
            e.preventDefault();
            this.registrarUser(e);
        });
    }

    //Registra um usuário e autentica o mesmo
    registrarUser(e) {
        
        let errorMsgs = [];
        let usuarios = db.getUsers();
        
        let nome   = document.querySelector('[name="nome"]');
        let email  = document.querySelector('[name="email"]');
        let senha  = document.querySelector('[name="senha"]');
        let senha2 = document.querySelector('[name="senha2"]');

        //Valida se o email não está em uso
        if(usuarios){
            usuarios = JSON.parse(usuarios);
            usuarios.map(usuario => {
                if(usuario.email === email.value){
                    let erro = 'Já existe um usuário com este email!';
                    errorMsgs.push(erro);
                }
            })
        }

        //Valida se foi digitado o email e se é válido
        if(!email.value){
            let erro = 'Campo de Email Vazio!';
            errorMsgs.push(erro);
        }else{
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let result = re.test(email.value);
            
            if(!result){
                let erro = "Email inválido!";
                errorMsgs.push(erro);
            }
        }

        //Valida se as senhas são iguais e tem pelo menos 6 caracteres
        if(senha.value !== senha2.value){
            let erro = 'As senhas são diferentes!';
            errorMsgs.push(erro);
        }else{
            if(senha.value.length < 6 || senha2.value.length < 6){
                let erro = 'As senhas tem menos de 6 caracteres!';
                errorMsgs.push(erro);
            }
        }

        
        if(errorMsgs.length > 0 ){
            let errorString = "";

            errorMsgs.map(err => {
                errorString += err + "\n";
            });

            alert(errorString);

        }else{
            let user = new UserModel(null, nome.value, email = email.value, senha = senha.value)
            let resposta = db.salvaUser(user);

            if(resposta){
                mudarView(e);
                renderBotaoSair();
            }else{
                alert("Erro ao salvar o usuário!");
            }
        }
    }
}   