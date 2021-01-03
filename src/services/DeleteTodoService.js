import TodoRepository from '../repositories/TodoRepository';

class DeleteTodoService {

    execute(todoData) {
        const todoRepository = new TodoRepository();
        return todoRepository.deleteTodo(todoData);
    }

}

export default DeleteTodoService;