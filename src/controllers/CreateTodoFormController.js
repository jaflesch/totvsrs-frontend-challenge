import createTodoFormView from '../Views/createTodo.html';
import CreateTodoService from '../services/CreateTodoService'
import TodoViewController from '../controllers/TodoViewController';


class CreateTodoFormController {
    constructor() {
        this.createTodoService = new CreateTodoService();
        ;
    }

    create() {
        const element = document.createElement('div');
        element.innerHTML = createTodoFormView;
        element.id = 'createTodoContainer';
        modal.appendChild(element);
        this.handleCreateTodoForm();
        return rootContainer;
    }

    async handleCreateTodoForm() {
        const user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
        const todoViewController = new TodoViewController();
        createTodoForm.addEventListener('submit', async event => {
            event.preventDefault();
            
            const userId = user.id;
            const title = todoTitle.value;
            const description = todoDescription.value;
            const status = parseInt(document.querySelector('input:checked').value);

            const todo = await this.createTodoService.execute({userId, title, description, status});
            await todoViewController.loadTodos(userId);
            this._closeModal();
            return todo;
        })
    }

    _closeModal() {
        modal.style.display = "none";
        modal.innerHTML = '';
    }
    
}

export default CreateTodoFormController;