import createTodoFormView from '../Views/createTodo.html';
import CreateTodoService from '../services/CreateTodoService'
import TodoViewController from '../controllers/TodoViewController';


class CreateTodoFormController {
    constructor() {
        this.createTodoService = new CreateTodoService();
        this.modal = document.getElementById('modal');
    }

    create() {
        const element = document.createElement('div');
        element.innerHTML = createTodoFormView;
        element.id = 'createTodoContainer';
        this.modal.appendChild(element);
        this.handleCreateTodoForm();
        return rootContainer;
    }

    async handleCreateTodoForm() {
        const user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
        const todoViewController = new TodoViewController();
        const createTodoForm = document.getElementById('createTodoForm')
        createTodoForm.addEventListener('submit', async event => {
            event.preventDefault();
            const userId = user.id;
            const title = document.getElementById('todoTitle').value;
            const description = document.getElementById('todoDescription').value;
            const status = parseInt(document.querySelector('input:checked').value);
            const todo = await this.createTodoService.execute({userId, title, description, status});
            await todoViewController.loadTodos(userId);
            this._closeModal();
            return todo;
        })
    }

    _closeModal() {
        this.modal.style.display = "none";
        this.modal.innerHTML = '';
    }
    
}

export default CreateTodoFormController;