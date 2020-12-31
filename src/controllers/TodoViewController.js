import createTodoFormView from '../Views/createTodo.html';
import todoHomeView from '../Views/todo.html';

import CreateTodoService from '../services/CreateTodoService'
class TodoViewController {
    constructor() {
        this.createTodoService = new CreateTodoService();
    }

    create() {
        const element = document.createElement('div');
        element.innerHTML = todoHomeView;
        rootContainer.appendChild(element);
        //this.createTodoService.execute();
        return rootContainer;
    }

    createTodo() {
        const element = document.createElement('div');
        element.innerHTML = createTodoFormView;
        rootContainer.appendChild(element);
        return rootContainer;
    }

    handleCreateTodoForm() {
        createTodoForm.addEventListener('submit', async event => {
            event.preventDefault();
            const title = todoTitle.value;
            const description = todoDescription.value;
            const status = document.querySelector('input:checked').value
            await this.createTodoService.execute({title, description, status});
        })
    }
}

export default TodoViewController;