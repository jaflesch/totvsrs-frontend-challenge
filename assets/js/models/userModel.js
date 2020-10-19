class UserModel {

    constructor() {
       this.store = localStorage;
    }   

    //Salva usuário no localstorage
    salvaUser(nome, email , password) {

        let usuariosDB = this.getUsers();
        let arrayUsuarios = [];
        let newID = 1;

        if(usuariosDB){
            arrayUsuarios = JSON.parse(usuariosDB);
            newID = parseInt(arrayUsuarios.length) + 1;
        }

        let usuario  = {'id' : newID, 'nome': nome, 'email' : email, 'senha' : password};
        arrayUsuarios.push(usuario);

        //Salva no localstorage
        this.store.setItem('usuarios', JSON.stringify(arrayUsuarios));

        //Salva como usuário logado
        this.setLogado(newID, nome);
        return this.getLogado();
    }

    //Salva os dados do usuário logado
    setLogado(id,nome) {
        this.store.setItem('logado', JSON.stringify({'id' : id, 'nome' : nome}));
    }

    //Retorna o usuário se estiver logado
    getLogado() {
        return this.store.getItem('logado');
    }

    //Retorna os usuários salvos
    getUsers() {
        return this.store.getItem('usuarios');
    }
    //Faz loggout removendo a key:value de logado
    logout (){
        this.store.removeItem('logado');
    }
}   

const userModel = new UserModel();