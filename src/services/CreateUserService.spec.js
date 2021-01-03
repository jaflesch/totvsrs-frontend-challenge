import CreateUserService from './CreateUserService.js';
describe('CreateUser', () => {
    it('should be able to create a new user', async () => {
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name: "andre",
            email: "andre.moura3@gmail.com",
            password: "teste123"
        })
        
        expect(user).toHaveProperty('id');
    });
    
    it('should not be able to create a user with a existing email', async () => {
        const createUserService = new CreateUserService();

       await createUserService.execute({
            name: "andre",
            email: "andre.moura2@gmail.com",
            password: "teste123"
        })
     
        expect(createUserService.execute({
            name: "andre",
            email: "andre.moura2@gmail.com",
            password: "teste123"
        })).rejects.toBeInstanceOf(Error)
    });
    
});
