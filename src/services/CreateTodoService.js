import TodoRepository from '../repositories/TodoRepository';

class CreateTodoService {
    constructor() {
        this.todoRepository = new TodoRepository();
        this.user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
    }

    async execute({ title, description, status }) {
        const userId = this.user.id
        const todo = this.todoRepository.createTodo(
            {
                userId,
                title, 
                description,
                status,
            }
        )
        return todo;
    }
}

export default CreateTodoService;