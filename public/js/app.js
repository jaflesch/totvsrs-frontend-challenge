// Math.random().toString().substr(2, 8);

window.onload = () => {
  loadPage('signIn')
  const todos = [
    {
      id: 42347210,
      userId: 1,
      title: 'Teste 01',
      description: 'Lorem ipsum dolor sit amet, consectetur adip',
      date: new Date(),
      status: 1
    },
    {
      id: 42347210,
      userId: 2,
      title: 'Teste 02',
      description: 'Lorem ipsum dolor sit amet, consectetur adip',
      date: new Date(),
      status: 1
    },
    {
      id: 42347210,
      userId: 1,
      title: 'Teste 03',
      description: 'Lorem ipsum dolor sit amet, consectetur adip',
      date: new Date(),
      status: 1
    },
    {
      id: 42347210,
      userId: 1,
      title: 'Teste 03',
      description: 'Lorem ipsum dolor sit amet, consectetur adip',
      date: new Date(),
      status: 0
    }
  ]

  sessionStorage.setItem('todos', JSON.stringify(todos))
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
          setupDashboard()
      }
    } else {
      console.warn('Error loading page content')
    }
  }
  xhr.open('GET', `/${pageName}.html`)
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

function setupDashboard() {
  console.log('Visitando dashboard')

  const authenticatedUser = JSON.parse(
    sessionStorage.getItem('authenticatedUser')
  )

  const tableRef = document
    .getElementById('todosTable')
    .getElementsByTagName('tbody')[0]

  const addTodoButton = document.getElementById('addTodoButton')
  addTodoButton.addEventListener('click', handleCreateTodoModal)

  loadTodos(authenticatedUser, tableRef)
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

    const authenticatedUser = user
    sessionStorage.setItem(
      'authenticatedUser',
      JSON.stringify(authenticatedUser)
    )
    loadPage('dashboard')
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
      const authenticatedUser = user
      sessionStorage.setItem(
        'authenticatedUser',
        JSON.stringify(authenticatedUser)
      )
      loadPage('dashboard')
    }
  }
}

function handleLoginUser({ userEmail, userPassword }) {
  let users = []
  users = JSON.parse(sessionStorage.getItem('users'))
  const foundUser = users.find(user => user.userEmail === userEmail.value)

  if (foundUser) {
    if (foundUser.userPassword === userPassword.value) {
      const authenticatedUser = foundUser
      sessionStorage.setItem(
        'authenticatedUser',
        JSON.stringify(authenticatedUser)
      )
      alert('Login')
      loadPage('dashboard')
    } else {
      alert('A senha informada está incorreta')
    }
  } else {
    alert('Não foi encontrado um usuário com o e-mail fornecido')
  }
}

function handleCreateTodo({ todoTitle, todoStatuses }) {}

function loadTodos(authenticatedUser, table) {
  let todos = []
  todos = JSON.parse(sessionStorage.getItem('todos'))
  let userTodos = []
  table.innerHTML = ''

  if (todos) {
    userTodos = todos.filter(todo => todo.userId === authenticatedUser.id)
    for (let i = 0; i < userTodos.length; i++) {
      let parsedStatus
      switch (userTodos[i].status) {
        case 0:
          parsedStatus = 'Backlog'
          break
        case 1:
          parsedStatus = 'Em andamento'
          break
        case 2:
          parsedStatus = 'Finalizado'
          break
      }

      const todoRow = `<tr>
                        <td>${userTodos[i].id}</td>
                        <td><a href="" id="${userTodos[i].id}">${userTodos[i].title}</a></td>
                        <td>${userTodos[i].date}</td>
                        <td>${parsedStatus}</td>
                      </tr>`
      table.innerHTML += todoRow
    }
    const todosTitleArray = document.querySelectorAll('td a')
    for (let i = 0; i < todosTitleArray.length; i++) {
      todosTitleArray[i].addEventListener('click', e => {
        e.preventDefault()
        console.log(e.currentTarget.id)
      })
    }
  }

  console.log(userTodos)
}

function handleCreateTodoModal() {
  const todoModal = document.getElementById('createTodoModalContainer')
  const closeModalButton = document.getElementById('cancelCreateButton')
  todoModal.classList.add('active')

  const createTodoForm = {
    form: document.getElementById('createTodoForm'),
    todoTitle: document.querySelector('#createTodoForm #todoTitle'),
    todoStatuses: document.getElementsByName('createTodoStatus')
  }

  createTodoForm.form.addEventListener('submit', event => {
    event.preventDefault()
    handleCreateTodo(createTodoForm)
  })

  closeModalButton.addEventListener('click', function () {
    todoModal.classList.remove('active')
  })
}
