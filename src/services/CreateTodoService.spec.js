import CreateTodoService from "./CreateTodoService";


describe('CreateTodo', () => {
    it('should be able to create todo', async () => {
        const createTodo = new CreateTodoService();

        const todo = await createTodo.execute({
            userId: 120100,
            title: 'Teste', 
            description: 'Test Coverage',
            status: 0,
        })

        expect(todo).toHaveProperty('id');
    });
    
});