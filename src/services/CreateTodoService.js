import TodoRepository from '../repositories/TodoRepository';

class CreateTodoService {
    constructor() {
        this.todoRepository = new TodoRepository();
        
    }

    async execute({ userId ,title, description, status }) {
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