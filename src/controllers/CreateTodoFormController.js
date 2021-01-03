import createTodoFormView from '../Views/createTodo.html';
import CreateTodoService from '../services/CreateTodoService'


class TodoFormController {
    constructor() {
        this.createTodoService = new CreateTodoService();
        ;
    }

    create() {
        const element = document.createElement('div');
        element.innerHTML = createTodoFormView;
        element.id = 'createTodoContainer';
        rootContainer.appendChild(element);
        return rootContainer;
    }

    async handleCreateTodoForm() {
        const user = JSON.parse(sessionStorage.getItem('authenticatedUser'))
        createTodoForm.addEventListener('submit', async event => {
            event.preventDefault();
            const userId = user.id;
            const title = todoTitle.value;
            const description = todoDescription.value;
            const status = parseInt(document.querySelector('input:checked').value);

            const todo = await this.createTodoService.execute({userId, title, description, status});
            window.location.hash = '#todoHome'
        
            return todo;
        })
    }

    
}

export default TodoFormController;