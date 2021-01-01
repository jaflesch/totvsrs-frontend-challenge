class TodoRepository {
    constructor() {
        this.todo = []
        if(sessionStorage.getItem('todos'))
        {
            this.todo = JSON.parse(sessionStorage.getItem('todos'))
        }
    }

    async createTodo(todoData) {
        
        const idValue = new Uint32Array(10);
        const id = window.crypto.getRandomValues(idValue);
        const dateTime = new Date().toLocaleString([], 
            {hour: '2-digit', minute: '2-digit',
            day: "2-digit", month: "2-digit", year: "numeric"});
        Object.assign(todoData,
            {
            id: id[1],
            date: dateTime
        })

        await this.todo.push(todoData);

        await sessionStorage.setItem('todos', JSON.stringify(this.todo));
        return sessionStorage;
    }

    async listTodoByUserId(userId) {

        const todoByUser = this.todo.filter(todo => todo.userId === userId);
        
        return todoByUser;
    }
}

export default TodoRepository;