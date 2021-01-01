import SignInViewController from '../controllers/SignInViewController'
import SignUpViewController from "../controllers/SignUpViewController";
import TodoViewController from "../controllers/TodoViewController";
import TodoFormController from '../controllers/TodoFormController';

const signInView = new SignInViewController();
const signUpView = new SignUpViewController();
const todoView = new TodoViewController();
const todoForm = new TodoFormController();

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
        case "#todoHome": {
            todoView.create();
            
            
            return todoView;
        }
        case "#createTodoHome": {
            todoForm.create();
            await todoForm.handleCreateTodoForm()
            return todoForm
        }
    }
}

export { router }