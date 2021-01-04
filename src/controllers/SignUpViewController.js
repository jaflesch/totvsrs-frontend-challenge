import view from '../Views/signUp.html';
import CreateUserService from '../services/CreateUserService'
import AuthenticateUserService from '../services/AuthenticateUserService';

class SignUpViewController{


    create() {
        const element = document.createElement('div');
        const rootContainer = document.getElementById('rootContainer')
        element.innerHTML = view;
        element.id = 'signUpContainer'
        rootContainer.appendChild(element)
        return rootContainer;
        }

    handleform() {
        const authenticateUserService = new AuthenticateUserService();
        const signUpForm = document.getElementById('signUpForm');
        signUpForm.addEventListener('submit', async event => {
            event.preventDefault();
            const createUserService = new CreateUserService();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            await createUserService.execute({name, email, password});
            await authenticateUserService.execute({email, password})
            window.location.hash = '#todoHome';
        })
        
    }

    
}

export default SignUpViewController