import ListTodoService from "./ListTodoService";
import CreateTodoService from "./CreateTodoService";

describe('ListTodos', () => {
    it('should filter todos by userId', async () => {
        const createTodo = new CreateTodoService();
        const listTodo = new ListTodoService();

        const todo = await createTodo.execute({
            userId: 120100,
            title: 'Teste', 
            description: 'Test Coverage',
            status: 0,
        })

        const listTodoByUser = await listTodo.execute(120100);

        listTodoByUser.forEach(todo => {
            expect(todo.userId).toEqual(120100);
        });

    });
    
    it('should be able to update status', async () => {
        const createTodo = new CreateTodoService();
        const listTodo = new ListTodoService();

        await createTodo.execute({
            userId: 120100,
            title: 'Teste', 
            description: 'Test Coverage',
            status: 0,
        })

        await createTodo.execute({
            userId: 120100,
            title: 'Teste', 
            description: 'Test Coverage',
            status: 1,
        })

        await createTodo.execute({
            userId: 120100,
            title: 'Teste', 
            description: 'Test Coverage',
            status: 2,
        })

        const listTodoByUser = await listTodo.execute(120100);

        expect(listTodoByUser[1].status).toBe('Backlog');
        expect(listTodoByUser[2].status).toBe('Em andamento');
        expect(listTodoByUser[3].status).toBe('Finalizado');

    });
    
});
