import createTodoFormView from '../Views/createTodo.html';
import todoHomeView from '../Views/todo.html';
import UpdateTodoFormController from '../controllers/UpdateTodoFormController'

import CreateTodoService from '../services/CreateTodoService'
import ListTodoService from '../services/ListTodoService'
import AuthenticateUserService from '../services/AuthenticateUserService'

class TodoViewController {
    constructor() {
        this.createTodoService = new CreateTodoService();
        this.listTodoService = new ListTodoService();
    }

    async create() {
        const user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
        if(user){
            const element = document.createElement('div');
            element.innerHTML = todoHomeView;
            rootContainer.appendChild(element);
            await this._loadTodos(user)
            this._handleEndSession();
            
            return rootContainer;
        } 
            window.location.hash = "#"
        
    }

    

    async _loadTodos(user) {
        const todo = await this.listTodoService.execute(user.id);
        const todosCard = await this._todosMount(todo);
        this._handleUpdateClick()
        return todosCard;
}

    async _todosMount(todo) {
    
        const todoCard = todo.forEach(element => {
            const container = document.createElement('div');
            const title = document.createElement('button');
            const description = document.createElement('p');
            const status = document.createElement('span');
            const date = document.createElement('span');

            container.setAttribute('id', element.id);
            container.setAttribute('class', 'todoCard');
            title.innerText = element.title;
            title.setAttribute('id', 'updateTodo');
            description.innerText = element.description;
            status.innerText = element.status;
            date.innerText = element.date;
            
            

            container.append(title, description, status, date);
            todosContainer.appendChild(container);

            });
        return todoCard;
    }

    _handleEndSession() {
        const authenticateUserService = new AuthenticateUserService()
        endSession.addEventListener('click', element => {
            authenticateUserService.remove();
            window.location.hash = "#";
            return element;
        })
    }

    _handleUpdateClick() {
        if(document.getElementById('updateTodo')){
        const updateTodoForm = new UpdateTodoFormController();
        const todoCard = document.getElementsByClassName('todoCard');
        const idTodo = todoCard.id;
        console.log()
        const updateTodo = document.getElementById('updateTodo');
        
        updateTodo.addEventListener('click', element => {
            updateTodoForm.create(idTodo);
            
        })
        }
    }
}

export default TodoViewController;