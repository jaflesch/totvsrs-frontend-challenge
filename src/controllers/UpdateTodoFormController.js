import updateTodoView from '../Views/updateTodo.html';
import UpdateTodoService from '../services/UpdateTodoService';
import TodoViewController from '../controllers/TodoViewController';
import DeleteTodoService from '../services/DeleteTodoService';
class UpdateTodoFormController {


create(todoId) 
{
    this._createUpdateFormBody(todoId);
    console.log(todoId)
}

_createUpdateFormBody(todoId) 
{
    const element = document.createElement('div');
    element.id = 'modalContainer'
    element.innerHTML = updateTodoView;
    modal.appendChild(element);
    this._loadTodoData(todoId)
    this._handleCancelForm();

    return rootContainer;
}

async _loadTodoData(todoId) {
    const updateTodo = new UpdateTodoService();
    const todo = await updateTodo.findTodo(todoId);
    todoTitle.value = todo.title;
    todoDescription.value = todo.description;
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

            const title = todoTitle.value;
            const description = todoDescription.value;
            const status = parseInt(document.querySelector('input:checked').value);
            const todo = await updateTodoService.execute({id, title, description, status})
            modal.style.display = "none"
            modalContainer.remove();
            await todoViewController.loadTodos(todo.userId);
            return todo;
        })

}

_handleCancelForm() {
    cancelTodo.addEventListener('click', () => {
        modalContainer.remove();
        modal.style.display = "none"
    })
}

_handleDeleteForm(todoData) {
    deleteTodo.addEventListener('click', async () => {
        const todoViewController = new TodoViewController();
        const deleteTodo = new DeleteTodoService();
        const confirmDelete = confirm('Deseja excluir essa tarefa?')
        if(confirmDelete === true) {
            await deleteTodo.execute(todoData)
            modalContainer.remove();
            modal.style.display = "none"
            return todoViewController.loadTodos(todoData.userId)
        }
        
    })
}

}

export default UpdateTodoFormController;