import view from '../Views/signUp.html';
import CreateUserService from '../services/CreateUserService'
import AuthenticateUserService from '../services/AuthenticateUserService';

class SignUpViewController{


    create() {
        const element = document.createElement('div');
        element.innerHTML = view;
        rootContainer.appendChild(element)
        return rootContainer;
        }

    handleform() {
        const authenticateUserService = new AuthenticateUserService();
        signUpForm.addEventListener('submit', async event => {
            event.preventDefault();
            const createUserService = new CreateUserService();
            const name = registerName.value;
            const email = registerEmail.value;
            const password = registerPassword.value;
            
            await createUserService.execute({name, email, password});
            await authenticateUserService.execute({email, password})
            window.location.hash = '#todoHome';
        })
        

        
    }

}

export default SignUpViewController