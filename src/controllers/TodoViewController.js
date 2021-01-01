import createTodoFormView from '../Views/createTodo.html';
import todoHomeView from '../Views/todo.html';

import CreateTodoService from '../services/CreateTodoService'
import ListTodoService from '../services/ListTodoService'
import AuthenticateUserService from '../services/AuthenticateUserService'

class TodoViewController {
    constructor() {
        this.createTodoService = new CreateTodoService();
        this.listTodoService = new ListTodoService();
    }

    create() {
        const user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
        if(user){
            const element = document.createElement('div');
            element.innerHTML = todoHomeView;
            rootContainer.appendChild(element);
            this._loadTodos(user);
            this._handleEndSession();
            return rootContainer;
        } else {
            window.location.hash = "#"
        }
        
    }

    

    async _loadTodos(user) {
        const todo = await this.listTodoService.execute(user.id);
        const todosCard = await this._todosMount(todo)
        return todosCard;
}

    async _todosMount(todo) {
    
    const todoCard = todo.forEach(element => {
        const container = document.createElement('div');
        const title = document.createElement('a');
        const description = document.createElement('p');
        const status = document.createElement('span');
        const date = document.createElement('span');

        container.setAttribute('id', element.id);
        title.innerText = element.title;
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

    
}

export default TodoViewController;