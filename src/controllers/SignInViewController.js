import view from '../Views/signIn.html';
import AuthenticateUserService from '../services/AuthenticateUserService';
class SignInViewController {

    create() {
        if(sessionStorage.getItem('authenticatedUser'))
        {
            window.location.hash = '#todoHome'
        }
        const element = document.createElement('div');
        const rootContainer = document.getElementById('rootContainer')
        element.innerHTML = view;
        element.id = "signInContainer"
        rootContainer.appendChild(element);
        return rootContainer;
    }

    handleForm() {
        const signInForm = document.getElementById('signInForm')
        signInForm.addEventListener('submit', async event => {
            event.preventDefault();
            const authenticateUserService = new AuthenticateUserService();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const authenticate = await authenticateUserService.execute({email, password})
            if(authenticate) {
                window.location.hash = "#todoHome";
            }
        })
        
    }

}

export default SignInViewController;