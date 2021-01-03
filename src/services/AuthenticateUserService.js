import UserRepository from '../repositories/UserRepository'
class AuthenticateUserService {
    async execute({email, password}) {
        const userRepository = new UserRepository();
        const user = await userRepository.findUserByEmail(email);
        
        if(!user) {
            throw new Error('Email ou senha incorreto');
        }

        if(user.password != password){
            throw new Error('Email ou senha incorreto');
        }

        global.sessionStorage.setItem('authenticatedUser', JSON.stringify(user));
        return user;
    }

    remove() {
        global.sessionStorage.removeItem('authenticatedUser');
        return true;
    }
}

export default AuthenticateUserService;