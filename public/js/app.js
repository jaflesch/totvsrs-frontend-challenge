// Math.random().toString().substr(2, 8);

// window.onload = () => {
//   loadPage('signIn')
// }

// function loadPage(pageName) {
//   const xhr = new XMLHttpRequest()

//   const contentContainer = document.getElementById('contentContainer')

//   xhr.onload = function () {
//     if (this.status === 200) {
//       contentContainer.innerHTML = xhr.responseText
//       switch (pageName) {
//         case 'signUp':
//           setupSignUpForm()
//           break
//         case 'signIn':
//           setupSignInForm()
//           break
//         case 'dashboard':
//           setupDashboard()
//       }
//     } else {
//       console.warn('Error loading page content')
//     }
//   }
//   xhr.open('GET', `/${pageName}.html`)
//   xhr.send()
// }

function setupSignUpForm() {
  console.log('Visitando página de Registro')

  const signUpForm = {
    form: document.getElementById('signUpForm'),
    userName: document.getElementById('userNameInput'),
    userEmail: document.getElementById('userEmailInput'),
    userPassword: document.getElementById('userPasswordInput')
  }

  // signUpForm.form.addEventListener('submit', event => {
  //   event.preventDefault()
  //   handleCreateUser(signUpForm)
  // })

  // document.getElementById('logInPageLink').addEventListener('click', event => {
  //   event.preventDefault()
  //   loadPage('signIn')
  // })
}

function setupSignInForm() {
  console.log('Visitando página de SignIn')
  // const signInForm = {
  //   form: document.getElementById('signInForm'),
  //   userEmail: document.getElementById('userEmailInput'),
  //   userPassword: document.getElementById('userPasswordInput')
  // }

  // signInForm.form.addEventListener('submit', event => {
  //   event.preventDefault()
  //   handleLoginUser(signInForm)
  // })

  // document.getElementById('signUpPageLink').addEventListener('click', event => {
  //   event.preventDefault()
  //   loadPage('signUp')
  // })
}

function setupDashboard() {
  console.log('Visitando dashboard')

  const authenticatedUser = JSON.parse(
    sessionStorage.getItem('authenticatedUser')
  )

  const tableRef = document
    .getElementById('todosTable')
    .getElementsByTagName('tbody')[0]

  const createTodoModal = document.getElementById('createTodoModalContainer')
  const closeCreateTodoModalButton = document.getElementById(
    'cancelCreateButton'
  )

  const updateTodoModal = document.getElementById('updateTodoModalContainer')
  const closeUpdateTodoModalButton = document.getElementById(
    'cancelUpdateButton'
  )

  // const

  const { userTodos, allTodos } = loadTodos(authenticatedUser, tableRef)

  let todosTitleArray = document.querySelectorAll('td a')
  for (let i = 0; i < todosTitleArray.length; i++) {
    todosTitleArray[i].addEventListener('click', e => {
      e.preventDefault()
      updateTodoModal.classList.add('active')
      const editingTodo = allTodos.find(todo => todo.id == e.currentTarget.id)
      handleUpdateTodo(updateTodoForm, allTodos, editingTodo)
    })
  }
  const createTodoForm = {
    form: document.getElementById('createTodoForm'),
    todoTitle: document.querySelector('#createTodoForm #todoTitle'),
    todoDescription: document.querySelector('#createTodoForm #todoDescription'),
    todoStatuses: document.getElementsByName('createTodoStatus')
  }

  const updateTodoForm = {
    form: document.getElementById('updateTodoForm'),
    todoTitle: document.querySelector('#updateTodoForm #todoTitle'),
    todoDescription: document.querySelector('#updateTodoForm #todoDescription'),
    todoStatuses: document.getElementsByName('updateTodoStatus')
  }

  const addTodoButton = document.getElementById('addTodoButton')
  addTodoButton.addEventListener('click', function openModal() {
    createTodoModal.classList.add('active')
  })

  createTodoForm.form.addEventListener('submit', event => {
    event.preventDefault()
    handleCreateTodo(createTodoForm, authenticatedUser, allTodos)
    createTodoModal.classList.remove('active')
    createTodoForm.todoTitle.value = ''
    createTodoForm.todoDescription.value = ''
    for (let i = 0; i < createTodoForm.todoStatuses.length; i++) {
      createTodoForm.todoStatuses[i].checked = false
    }
    loadTodos(authenticatedUser, tableRef)
    todosTitleArray = document.querySelectorAll('td a')
    for (let i = 0; i < todosTitleArray.length; i++) {
      todosTitleArray[i].addEventListener('click', e => {
        e.preventDefault()
        const editingTodo = allTodos.find(todo => todo.id == e.currentTarget.id)
        handleUpdateTodo(updateTodoForm, allTodos, editingTodo)
      })
    }
  })

  closeCreateTodoModalButton.addEventListener('click', function () {
    createTodoModal.classList.remove('active')
    createTodoForm.todoTitle.value = ''
    createTodoForm.todoDescription.value = ''
    for (let i = 0; i < createTodoForm.todoStatuses.length; i++) {
      createTodoForm.todoStatuses[i].checked = false
    }
  })

  closeUpdateTodoModalButton.addEventListener('click', function () {
    updateTodoModal.classList.remove('active')
    updateTodoForm.todoTitle.value = ''
    updateTodoForm.todoDescription.value = ''
    for (let i = 0; i < updateTodoForm.todoStatuses.length; i++) {
      updateTodoForm.todoStatuses[i].checked = false
    }
  })
  // loadTodos(authenticatedUser, tableRef)
  console.log(allTodos)
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

function handleCreateTodo(
  { todoTitle, todoDescription, todoStatuses },
  authenticatedUser,
  allTodos
) {
  let todoStatusParsed
  for (let i = 0; i < todoStatuses.length; i++) {
    if (todoStatuses[i].checked) {
      todoStatusParsed = parseInt(todoStatuses[i].value)
    }
  }

  const createdTodo = {
    id: parseInt(Math.random().toString().substr(2, 8)),
    userId: authenticatedUser.id,
    title: todoTitle.value,
    description: todoDescription.value,
    date: new Date(),
    status: todoStatusParsed
  }

  allTodos.push(createdTodo)

  sessionStorage.setItem('todos', JSON.stringify(allTodos))
  console.log(allTodos)
}

function loadTodos(authenticatedUser, table) {
  let todos = JSON.parse(sessionStorage.getItem('todos'))
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
    // const todosTitleArray = document.querySelectorAll('td a')
    // for (let i = 0; i < todosTitleArray.length; i++) {
    //   todosTitleArray[i].addEventListener('click', e => {
    //     e.preventDefault()
    //     console.log(todos.find(todo => todo.id == e.currentTarget.id))
    //   })
    // }
  } else {
    todos = []
  }

  return {
    userTodos,
    allTodos: todos
  }
}

function handleUpdateTodo(
  { todoTitle, todoDescription, todoStatuses },
  allTodos,
  editingTodo
) {
  todoTitle.value = editingTodo.title
  todoDescription.value = editingTodo.description
  for (let i = 0; i < todoStatuses.length; i++) {
    if (todoStatuses[i].value == editingTodo.status) {
      todoStatuses[i].checked = true
    }
  }
  // console.log(allTodos.findIndex(todo => todo.id === editingTodo.id))
  //   const editingTodo = allTodos.find(todo => todo.id == e.currentTarget.id)
}

class UI {
  static loadPage(pageName) {
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

  static displayTodos() {}
}

class Todo {
  constructor(userId, title, description, status) {
    this.id = parseInt(Math.random().toString().substr(2, 8))
    this.userId = userId
    this.title = title
    this.description = description
    this.date = new Date()
    this.status = status
  }
}

class User {
  constructor(name, email) {}
}

class Store {
  static loadTodos() {
    let todos
    if (sessionStorage.getItem('todos') === null) {
      todos = []
    } else {
      todos = JSON.parse(sessionStorage.getItem('todos'))
    }
    return todos
  }

  static loadUserTodos(userId) {}

  static createTodo(todo) {}
  static deleteTodo(todoId) {}
  static updateTodo(todoId) {}
  static createUser() {}
  static logInUser(userEmail, userPassword) {
    let users
    if (sessionStorage.getItem('users') === null) {
      users = []
    } else {
      users = JSON.parse(sessionStorage.getItem('users'))
    }
    const foundUser = users.find(user => user.userEmail === userEmail.value)
    let authenticatedUser
    if (foundUser) {
      if (foundUser.userPassword === userPassword.value) {
        authenticatedUser = foundUser
        sessionStorage.setItem(
          'authenticatedUser',
          JSON.stringify(authenticatedUser)
        )
        alert('Login')
      } else {
        alert('A senha informada está incorreta')
      }
    } else {
      alert('Não foi encontrado um usuário com o e-mail fornecido')
    }

    return authenticatedUser
  }

  static logOutUser() {}
}

// Evento Abrir Modal de Edição

// Evento Deletar Tarefa

// Evento Cancelar Edição

// Evento Submeter Edição

// Evento Abrir Modal de Criação

// Evento Submeter Criação

// Evento Cancelar Criação

// Evento Submeter Criação de usuário
const signUpForm = document
  .getElementById('signUpForm')
  .addEventListener('submit', event => {
    event.preventDefault()
  })

// Evento Submeter LogIn
const signInForm = document
  .getElementById('signInForm')
  .addEventListener('submit', event => {
    event.preventDefault()
    if (Store.logInUser) {
      UI.loadPage('dashboard')
    }
  })

// Evento Navegar para Criação de Usuário
document.getElementById('signUpPageLink').addEventListener('click', event => {
  event.preventDefault()
  UI.loadPage('signUp')
})

// Evento Navegar para LogIn
document.getElementById('logInPageLink').addEventListener('click', event => {
  event.preventDefault()
  UI.loadPage('signIn')
})
