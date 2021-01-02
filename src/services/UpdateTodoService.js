import TodoRepository from "../repositories/TodoRepository";

class UpdateTodoService {

    async execute(todoData) {
        const todoRepository = new TodoRepository()

        const todo = await todoRepository.updateTodo(todoData)
        return todo;
    }
    
    async findTodo(todoId) {
        const todoRepository = new TodoRepository()
        
        const todo = await todoRepository.findTodoById(todoId);
        return todo;
    }
}

export default UpdateTodoService;