import AuthenticateUserService from "./AuthenticateUserService";
import CreateUserService from './CreateUserService';
describe('AuthenticateUser', () => {

    it('should be able to authenticate', async () => {
        const authenticateUser = new AuthenticateUserService();
        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name: 'andre',
            email: 'andre.moura@kinghost.com.br', 
            password: 'teste'
        })
        const response = await authenticateUser.execute({
            email: 'andre.moura@kinghost.com.br', 
            password: 'teste'
        })

        expect(response).toHaveProperty('id')
    });
    
    it('should not be able to authenticate with wrong password', async () => {
        const authenticateUser = new AuthenticateUserService();
        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name: 'andre',
            email: 'andre.moura@kinghost.com.br', 
            password: 'teste'
        })

        expect(authenticateUser.execute({
            email: 'andre.moura@kinghost.com.br', 
            password: 'teste1'
        })).rejects.toBeInstanceOf(Error);
    });
    
    it('should not be able to authenticate with non existing user', async () => {
        const authenticateUser = new AuthenticateUserService();

        expect(authenticateUser.execute({
            email: 'andre.moura1@kinghost.com.br', 
            password: 'teste1'
        })).rejects.toBeInstanceOf(Error);
    });

    it('should be able to logout', async () => {
        const authenticateUser = new AuthenticateUserService();
        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name: 'andre',
            email: 'andre.moura@kinghost.com.br', 
            password: 'teste'
        })

        const login = await authenticateUser.execute({
            email: 'andre.moura@kinghost.com.br', 
            password: 'teste'
        })

        expect(authenticateUser.remove()).toBe(true);
    });
    
});
