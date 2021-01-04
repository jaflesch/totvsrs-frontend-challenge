import todoHomeView from '../Views/todo.html';
import UpdateTodoFormController from '../controllers/UpdateTodoFormController'
import CreateTodoFormController from '../controllers/CreateTodoFormController';
import ListTodoService from '../services/ListTodoService'
import AuthenticateUserService from '../services/AuthenticateUserService'
import svgIcon from '../assets/images/logoutIcon.svg';
class TodoViewController {
    constructor() {
        this.listTodoService = new ListTodoService();
        this.createTodoFormController = new CreateTodoFormController();
        this.rootContainer = document.getElementById('rootContainer');
        this.modal = document.getElementById('modal');
        
    }
    async create() {
        const user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
        if(user){
            const element = document.createElement('div');
            element.innerHTML = todoHomeView;
            element.id = 'todoHome';
            this.rootContainer.appendChild(element);

            await this.loadTodos(user.id)
            this._handleEndSession();
            this._handleOpenCreateTodoModal();
            return this.rootContainer;
        } 
            window.location.hash = "#"
        
    }
    async loadTodos(user) {
        const todo = await this.listTodoService.execute(user);
        const todosCard = await this._todosMount(todo);
        return todosCard;
    }
    async _todosMount(todo) {
        const updateTodoForm = new UpdateTodoFormController();
        const todosContainer = document.getElementById('todosContainer')
        todosContainer.innerHTML = ''
        this._mountTodoTable();
        const todoCard = todo.forEach(element => {
            const container = document.createElement('tr');
            const id = document.createElement('td');
            const title = document.createElement('td');
            const status = document.createElement('td');
            const date = document.createElement('td');
            container.setAttribute('id', element.id);
            container.setAttribute('class', 'todoCard');
            title.innerText = element.title;
            title.setAttribute('class', 'openUpdateTodoButton');
            title.addEventListener('click', () => {
                updateTodoForm.create(element.id)
                this.modal.style.display = "flex";
            })
            
            id.innerText = element.id;
            status.innerText = element.status;
            date.innerText = element.date;

            container.append(id, title, status, date);
            todosContainer.appendChild(container);
            });
        return todoCard;
    }
    _mountTodoTable() {
        const container = document.createElement('tr');
        const id = document.createElement('th');
        const title = document.createElement('th');
        const status = document.createElement('th');
        const date = document.createElement('th');

        id.innerHTML = 'ID';
        title.innerHTML = 'Titulo';
        status.innerHTML = 'Status';
        date.innerHTML = 'Data';

        container.append(id, title, status, date);
        return todosContainer.appendChild(container);
        
    }
    _handleEndSession() {
        const authenticateUserService = new AuthenticateUserService()
        const buttonEndSession = document.createElement('button');
        const endSessionIcon = document.createElement('img');
        const applicationHeader = document.getElementById('applicationHeader');

        endSessionIcon.src = svgIcon;
        buttonEndSession.id = 'endSession';
        buttonEndSession.appendChild(endSessionIcon);
        applicationHeader.appendChild(buttonEndSession);
        endSession.addEventListener('click', element => {
            authenticateUserService.remove();
            window.location.hash = "#";
            applicationHeader.removeChild(buttonEndSession);
            return element;
        })
    }
    _handleOpenCreateTodoModal() {
        openCreateTodoModal.addEventListener('click', () => {
            this.modal.style.display = "flex";
            this.createTodoFormController.create();
        })
    }
}

export default TodoViewController;