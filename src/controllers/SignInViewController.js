import view from '../Views/signIn.html';
import AuthenticateUserService from '../services/AuthenticateUserService';
class SignInViewController {

    create() {
        if(sessionStorage.getItem('authenticatedUser'))
        {
            window.location.hash = '#todoHome'
        }
        const element = document.createElement('div');
        element.innerHTML = view;
        rootContainer.appendChild(element);
        return rootContainer;
    }

    handleForm() {

        signInForm.addEventListener('submit', async event => {
            event.preventDefault();
            const authenticateUserService = new AuthenticateUserService();
            const email = loginEmail.value;
            const password = loginPassword.value;

            const authenticate = await authenticateUserService.execute({email, password})
            if(authenticate) {
                window.location.hash = "#todoHome";
            }
        })
        
    }

}

export default SignInViewController;