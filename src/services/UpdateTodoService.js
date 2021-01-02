import TodoRepository from "../repositories/TodoRepository";

class UpdateTodoService {

    execute(todoData) {
        const todoRepository = new TodoRepository()
        const todo = todoRepository.updateTodo(todoData)
        return todo;
    }
    
}

export default UpdateTodoService;