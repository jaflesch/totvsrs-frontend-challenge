import DeleteTodoService from './DeleteTodoService'
import CreateTodoService from "./CreateTodoService";

describe('DeleteTodo', () => {
    it('should be able to delete Todo', async () => {
        const deleteTodo = new DeleteTodoService();
        const createTodo = new CreateTodoService();

        const todo = await createTodo.execute({
            userId: 120100,
            title: 'Teste', 
            description: 'Test Coverage',
            status: 0,
        });

        const removeTodo = await deleteTodo.execute(todo);

        expect(removeTodo).toEqual([])
    });
    
});
