import UserRepository from '../repositories/UserRepository'

class CreateUserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute({name, email, password}) {
    const checkUserExist = await this.userRepository.findUserByEmail(email);
    if(checkUserExist) {
            return new Error('E-mail já utilizado');
            
    }
    
    const user = await this.userRepository.createUser({
            name, email, password
        })
    
    return user;    
    }
}

export default CreateUserService;