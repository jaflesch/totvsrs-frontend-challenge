
window.onload = () => {
   loadPage('signUp')
}

async function loadPage (pageName) {
  xhr = new XMLHttpRequest();

  const contentContainer = document.getElementById('contentContainer')

  xhr.onload = function() {
    if (this.status === 200) {
      contentContainer.innerHTML = xhr.responseText
      switch (pageName) {
        case 'signUp':
        setupSignUpForm()
        break
        case 'signIn':
        setupSignInForm()
        case 'dashboard':
        setupTodos()

      }
    } else {
      console.warn('Error loading page content')
    }
  }
  xhr.open('GET', `../../src/views/${pageName}.html`)
  xhr.send()

}


function setupSignUpForm () {
  const signUpForm = {
    form: document.getElementById('signUpForm'),
    userName : document.getElementById('userNameInput'),
    userEmail : document.getElementById('userEmailInput'),
    userPassword : document.getElementById('userPasswordInput'),
    submit : document.getElementById('submitButton'),
  }

  signUpForm.form.addEventListener('submit', (event) => {
    event.preventDefault()
    handleCreateUser( signUpForm )
  })

  console.log(signUpForm)
}

function handleCreateUser ( signUpForm ) {
  function validateData () {

  }
  const createdUser = {
    userName:  signUpForm.userName.value,
    userEmail: signUpForm.userEmail.value,
    userPassword: signUpForm.userPassword.value,
  }

  console.log(createdUser)
}

