class Database {

    constructor(){
        this.store = window.localStorage;
    }

    //Carrega toda lista Todo
    getTodos() {
        let todos = this.store.getItem('todos');

        if(todos){
            todos = JSON.parse(todos);
            todos = [...todos];
            return todos;
        }
    }

    //Retorna o maior ID de um item da TODO
    getMaiorID() {
        let todos       = this.getUserTodos();
        let maior       = 0;

        if(todos){
            todos.map(item =>{
                if(item.id > maior){
                    maior = item.id
                }
            })
        }
        
        return maior;
    } 

    //retorna somente os TODOS do usuário logado
    getUserTodos() {
        let todos       = this.getTodos();
        let userID      = this.getUserID();
        let filtrados   = [];

        if(todos){
            filtrados = todos.filter(todo => todo.userID === userID);
        }

        return filtrados;
    }

   //Retorna o ID do usuário logado
    getUserID() {
        let logado  = this.store.getItem('logado');

        if(logado){
            logado = JSON.parse(logado);
            return logado.id;
        }
    }

    //Excluir uma todo por ID
    excluirTodo(id){
        let todos = this.getUserTodos();

        if(todos && id){
            let novoArray = todos.filter(todo => todo.id !== parseInt(id));
            this.store.setItem('todos',JSON.stringify(novoArray));
        }
    }

    //Salva nova to do usuário
    salvarTodo(todo) {
        let todos = this.getTodos();

        if(!todos){
            todos = [];    
        }

        let id = this.getMaiorID() + 1;
        let userID = this.getUserID();

        todo.id     = id;
        todo.userID = userID;
        todos.push(todo);

        this.store.setItem('todos',JSON.stringify(todos));
    }


    //Métodos para teste apenas

    //Apaga todos TODOS
    deleteALL() {
        this.store.removeItem('todos');
    }

    //Atualiza os dados do item da Todo List
    updateItem(id, todo){
        let todos   = this.getTodos();
        let userID  = this.getUserID();
        
        
        let newArray = todos.map(item => {
 
            if(item.userID === parseInt(userID)){
                if(item.id === parseInt(id)){
                    item.titulo     = todo.titulo;
                    item.descricao  = todo.descricao;
                    item.date       = todo.date;
                    item.status     = todo.status;
                }
            }
            return item;
        })

        this.store.setItem('todos',JSON.stringify(newArray));
    }

    //Salva usuário no localstorage
    salvaUser(usuario) {

        let usuariosDB = this.getUsers();
        let arrayUsuarios = [];
        let newID = 1;

        if(usuariosDB){
            arrayUsuarios = JSON.parse(usuariosDB);
            newID = parseInt(arrayUsuarios.length) + 1;
        }

        usuario.id = newID;
        arrayUsuarios.push(usuario);

        //Salva no localstorage
        this.store.setItem('usuarios', JSON.stringify(arrayUsuarios));

        //Salva como usuário logado
        this.setLogado(usuario);
        return this.getLogado();
    }

    //Salva os dados do usuário logado
    setLogado(usuario) {
        this.store.setItem('logado', JSON.stringify({'id' : usuario.id, 'nome' : usuario.nome}));
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

const db = new Database();

