class TodoModel {

    constructor() {
       this.store = localStorage;
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

    //Salva nova to do usuário
    salvarTodo(titulo,descricao,date,status) {
        let todos = this.getTodos();

        if(!todos){
            todos = [];    
        }

        let id = this.getMaiorID() + 1;
        let userID = this.getUserID();

        let todo = {'id' : id, 'userID' : userID, 'titulo' : titulo, 'descricao' : descricao, 'date' : date, 'status' : status};
        todos.push(todo);

        this.store.setItem('todos',JSON.stringify(todos));
    }


    //Métodos para teste apenas
    //Apaga todos TODOS
    deleteALL() {
        this.store.removeItem('todos');
    }
}   

const todoModel = new TodoModel();

