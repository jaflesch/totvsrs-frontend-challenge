window.onload = () => {
  loadPage('signUp')
}

function loadPage(pageName) {
  const xhr = new XMLHttpRequest()

  const contentContainer = document.getElementById('contentContainer')

  xhr.onload = function () {
    if (this.status === 200) {
      contentContainer.innerHTML = xhr.responseText
      switch (pageName) {
        case 'signUp':
          setupSignUpForm()
          break
        case 'signIn':
          setupSignInForm()
          break
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
function setupSignUpForm() {
  console.log('Visitando página de Registro')

  const signUpForm = {
    form: document.getElementById('signUpForm'),
    userName: document.getElementById('userNameInput'),
    userEmail: document.getElementById('userEmailInput'),
    userPassword: document.getElementById('userPasswordInput')
  }

  signUpForm.form.addEventListener('submit', event => {
    event.preventDefault()
    handleCreateUser(signUpForm)
  })

  document.getElementById('logInPageLink').addEventListener('click', event => {
    event.preventDefault()
    loadPage('signIn')
  })
}

function setupSignInForm() {
  console.log('Visitando página de SignIn')
  const signInForm = {
    form: document.getElementById('signInForm'),
    userEmail: document.getElementById('userEmailInput'),
    userPassword: document.getElementById('userPasswordInput')
  }

  signInForm.form.addEventListener('submit', event => {
    event.preventDefault()
    handleLoginUser(signInForm)
  })

  document.getElementById('signUpPageLink').addEventListener('click', event => {
    event.preventDefault()
    loadPage('signUp')
  })
}

function handleCreateUser({ userName, userEmail, userPassword }) {
  let users = []
  users = JSON.parse(sessionStorage.getItem('users'))

  if (!users) {
    const user = {
      id: 1,
      userName: userName.value,
      userEmail: userEmail.value,
      userPassword: userPassword.value
    }

    users = new Array(user)

    sessionStorage.setItem('users', JSON.stringify(users))
  } else {
    if (users.find(user => user.userEmail === userEmail.value)) {
      alert('Esse email já está registrado')
    } else {
      const user = {
        id: users.length + 1,
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value
      }
      users.push(user)
      sessionStorage.setItem('users', JSON.stringify(users))
    }
  }
}

function handleLoginUser({ userEmail, userPassword }) {}
