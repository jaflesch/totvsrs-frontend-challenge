import TodoRepository from '../repositories/TodoRepository';

class CreateTodoService {

    async execute({ userId ,title, description, status }) {
        const todoRepository = new TodoRepository();
        const todo = todoRepository.createTodo(
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