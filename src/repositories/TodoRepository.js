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
        const id = global.crypto.getRandomValues(idValue);
        const dateTime = new Date().toLocaleString([], 
            {hour: '2-digit', minute: '2-digit',
            day: "2-digit", month: "2-digit", year: "numeric"});
        Object.assign(todoData,
            {
            id: id[1],
            date: dateTime
        })

        await this.todo.push(todoData);
        sessionStorage.setItem('todos', JSON.stringify(this.todo));
        return todoData;
    }

    async listTodoByUserId(userId) {
        const todoByUser = await this.todo.filter(todo => todo.userId === userId);
        return todoByUser;
    }

    async findTodoById(todoId) {
        const todo = await this.todo.filter(todo => todo.id === todoId);
        return todo[0];
    }

    async updateTodo(todoData) {
        const findTodo = await this.todo.filter(todo => todo.id === todoData.id);
        const todo = findTodo[0];
        const todoIndex = this.todo.indexOf(todo);
        
        Object.assign(todo,
            {
            title: todoData.title,
            description: todoData.description,
            status: todoData.status
            }
        )
        this.todo[todoIndex] = todo;
        sessionStorage.setItem('todos', JSON.stringify(this.todo));
        
        return todo; 
    }

    async deleteTodo(todoData) {
        
        const findTodo = await this.todo.filter(todo => todo.id === todoData.id);
        const todo = findTodo[0];
        const todoIndex = this.todo.indexOf(todo);
        await this.todo.splice(todoIndex,1);
        if (this.todo.length <= 0){
            sessionStorage.removeItem('todos');
            return this.todo; 
        }
        sessionStorage.setItem('todos', JSON.stringify(this.todo));
        return this.todo; 
    }
}

export default TodoRepository;