import updateTodoView from '../Views/updateTodo.html';
import UpdateTodoService from '../services/UpdateTodoService';

class UpdateTodoFormController {


create(todoData) 
{

    this._createUpdateFormBody();

}

_createUpdateFormBody() 
{
    const element = document.createElement('div');
    element.innerHTML = updateTodoView;
    rootContainer.appendChild(element);

    return rootContainer;
}

handleUpdateForm() 
{
    updateTodo.addEventListener('submit', event => {
        const updateTodoService = new UpdateTodoService();
        
        event.preventDefault();
        const title = todoTitle.value;
        const description = todoDescription.value;
        const status = parseInt(document.querySelector('input:checked').value);

        updateTodoService.execute({})
    })
}

}

export default UpdateTodoFormController;