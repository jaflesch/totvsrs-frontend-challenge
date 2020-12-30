import SignInViewController from '../controllers/signInViewController'
import SignUpViewController from "../controllers/signUpViewController";

const signInView = new SignInViewController();
const signUpView = new SignUpViewController();
const router = async (route) => {

    rootContainer.innerHTML = "";
    switch (route) {
        case "": {
            signInView.create();
            signInView.handleForm();
            return signInView;
        }
        case "#signUp": {
             
            signUpView.create();
            signUpView.handleform();
            return signUpView;
        }
    }
}

export { router }