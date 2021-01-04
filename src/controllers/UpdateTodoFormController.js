import updateTodoView from '../Views/updateTodo.html';
import UpdateTodoService from '../services/UpdateTodoService';
import TodoViewController from '../controllers/TodoViewController';
import DeleteTodoService from '../services/DeleteTodoService';
class UpdateTodoFormController {
    constructor() {
        this.modal = document.getElementById('modal')
    }

    create(todoId) 
    {
        this._createUpdateFormBody(todoId);
    }

    _createUpdateFormBody(todoId) 
    {
        const element = document.createElement('div');
        element.id = 'modalContainer'
        element.innerHTML = updateTodoView;
        this.modal.appendChild(element);
        this._loadTodoData(todoId)
        this._handleCancelForm();

        return rootContainer;
    }

    async _loadTodoData(todoId) {
        const updateTodo = new UpdateTodoService();
        const todo = await updateTodo.findTodo(todoId);
        document.getElementById('todoTitle').value = todo.title;
        document.getElementById('todoDescription').value = todo.description;
        switch (todo.status) {
            case 0:
                backlog.checked = true;
                break;
        
            case 1:
                inProgress.checked = true;
                break;

            case 2:
                done.checked = true;
                break;            
        }


        this._handleUpdateForm(todo);
        this._handleDeleteForm(todo);
        return todo;
    }

    _handleUpdateForm(todoData) 
    {
            return updateTodo.addEventListener('submit', async event => {
                const updateTodoService = new UpdateTodoService();
                const todoViewController = new TodoViewController();
                event.preventDefault();
                const id = todoData.id;
                const title = document.getElementById('todoTitle').value;
                const description = document.getElementById('todoDescription').value;
                const status = parseInt(document.querySelector('input:checked').value);
                const todo = await updateTodoService.execute({id, title, description, status})
                this.modal.style.display = "none"
                document.getElementById('modalContainer').remove();
                await todoViewController.loadTodos(todo.userId);
                return todo;
            })

    }

    _handleCancelForm() {
        cancelTodo.addEventListener('click', () => {
            document.getElementById('modalContainer').remove();
            this.modal.style.display = "none"
        })
    }

    _handleDeleteForm(todoData) {
        deleteTodo.addEventListener('click', async () => {
            const todoViewController = new TodoViewController();
            const deleteTodo = new DeleteTodoService();
            const confirmDelete = confirm('Deseja excluir essa tarefa?')
            if(confirmDelete === true) {
                await deleteTodo.execute(todoData)
                document.getElementById('modalContainer').remove();
                this.modal.style.display = "none"
                return todoViewController.loadTodos(todoData.userId)
            }

        })
    }

    }

export default UpdateTodoFormController;