import CreateTodoService from "./CreateTodoService";
import UpdateTodoService from "./UpdateTodoService";

describe('UpdateTodo', () => {
    it('should be able to update data from todo', async () => {
        const createTodo = new CreateTodoService();
        const updateTodo = new UpdateTodoService();

        const todo = await createTodo.execute({
            userId: 120100,
            title: 'Teste', 
            description: 'Test Coverage',
            status: 0,
        })
        const id = todo.id;
        const update = await updateTodo.execute({
            id,
            title: 'Update Test',
            description: 'Update Test Coverage',
            status: 2,
        })


        expect(update.title).toBe('Update Test');
        expect(update.description).toBe('Update Test Coverage');
        expect(update.status).toBe(2)
    });
    
    it('should be able to find a todo by todoId', async () => {
        const createTodo = new CreateTodoService();
        const updateTodo = new UpdateTodoService();

        const todo = await createTodo.execute({
            userId: 120100,
            title: 'Teste', 
            description: 'Test Coverage',
            status: 0,
        })

        const findTodo = await updateTodo.findTodo(todo.id);

        expect(findTodo.id).toEqual(todo.id);
    });
    
});