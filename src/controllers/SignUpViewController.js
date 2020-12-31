import view from '../Views/signUp.html';
import CreateUserService from '../services/CreateUserService'

class SignUpViewController{


    create() {
        const element = document.createElement('div');
        element.innerHTML = view;
        rootContainer.appendChild(element)
        return rootContainer;
        }

    handleform() {
        
        signUpForm.addEventListener('submit', event => {
            event.preventDefault();
            const createUserService = new CreateUserService();
            const name = registerName.value;
            const email = registerEmail.value;
            const password = registerPassword.value;
            
            createUserService.execute({name, email, password});
            window.location.hash = '#';
        })
        

        
    }

}

export default SignUpViewController