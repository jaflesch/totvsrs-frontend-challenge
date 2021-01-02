import updateTodoView from '../Views/updateTodo.html';
import UpdateTodoService from '../services/UpdateTodoService';
import TodoViewController from '../controllers/TodoViewController';
class UpdateTodoFormController {


create(todoId) 
{
    this._createUpdateFormBody(todoId);
}

_createUpdateFormBody(todoId) 
{
    const element = document.createElement('div');
    element.id = 'modalContainer'
    element.innerHTML = updateTodoView;
    rootContainer.appendChild(element);
    this._loadTodoData(todoId)
    this._handleCancelForm();
    return rootContainer;
}

async _loadTodoData(todoId) {
    const updateTodo = new UpdateTodoService();
    const todo = await updateTodo.findTodo(todoId);
    this._handleUpdateForm(todo);
    return todo;
}

_handleUpdateForm(todoData) 
{
        return updateTodo.addEventListener('submit', async event => {
            const updateTodoService = new UpdateTodoService();
            const todoViewController = new TodoViewController();
            event.preventDefault();
            const id = todoData.id;

            const title = todoTitle.value;
            const description = todoDescription.value;
            const status = parseInt(document.querySelector('input:checked').value);
            const todo = await updateTodoService.execute({id, title, description, status})
            await todoViewController.loadTodos(todo.userId);
            return todo;
        })

}

_handleCancelForm() {
    cancel.addEventListener('click', () => {
        modalContainer.remove();
    })
}



}

export default UpdateTodoFormController;