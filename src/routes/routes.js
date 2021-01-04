import SignInViewController from '../controllers/SignInViewController'
import SignUpViewController from "../controllers/SignUpViewController";
import TodoViewController from "../controllers/TodoViewController";
import CreateTodoFormController from '../controllers/CreateTodoFormController';
import UpdateTodoFormController from '../controllers/UpdateTodoFormController';

const signInView = new SignInViewController();
const signUpView = new SignUpViewController();
const todoView = new TodoViewController();
const createTodoForm = new CreateTodoFormController();
const updateTodoForm = new UpdateTodoFormController();
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

    }
}

export { router }