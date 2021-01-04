import TodoRepository from '../repositories/TodoRepository';

class ListTodoService {
    async execute(userId) {
        this.todoRepository = new TodoRepository();
        const todo = await this.todoRepository.listTodoByUserId(userId);
        todo.forEach(todos => {
            switch (todos.status) {
                case 0:
                    todos.status = "Backlog"
                    break;
                case 1:
                    todos.status = "Em andamento"
                    break;
                case 2:
                    todos.status = "Finalizado"
                    break;
            }
        });
        return todo;
    }
}
export default ListTodoService;