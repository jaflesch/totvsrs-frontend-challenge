import view from '../Views/signIn.html';
import AuthenticateUserService from '../services/AuthenticateUserService';
class SignInViewController {

    create() {
        const element = document.createElement('div');
        element.innerHTML = view;
        rootContainer.appendChild(element);
        return rootContainer;
    }

    handleForm() {
        
        signInForm.addEventListener('submit', event => {
            event.preventDefault();
            const authenticateUserService = new AuthenticateUserService();
            const email = loginEmail.value;
            const password = loginPassword.value;

            authenticateUserService.execute({email, password})
        })
        
    }

}

export default SignInViewController;