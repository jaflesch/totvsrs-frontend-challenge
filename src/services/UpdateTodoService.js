import TodoRepository from "../repositories/TodoRepository";

class UpdateTodoService {

    async execute(todoData) {
        const todoRepository = new TodoRepository()
        return await todoRepository.updateTodo(todoData)
        
    }
    
    async findTodo(todoId) {
        const todoRepository = new TodoRepository()       
        const todo = await todoRepository.findTodoById(todoId);
        return todo;
    }
}

export default UpdateTodoService;